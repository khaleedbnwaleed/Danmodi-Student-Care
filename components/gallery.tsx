"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowLeft, Search, Filter, Calendar, MapPin, Camera, Play, Eye, Share2, Download } from "lucide-react"
import Link from "next/link"

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "2024 Scholarship Award Ceremony",
    description: "Governor presenting scholarship awards to 500 new beneficiaries at the State House, Dutse",
    category: "events",
    date: "2024-01-15",
    location: "Government House, Dutse",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["ceremony", "awards", "governor", "beneficiaries"],
    views: 1250,
    featured: true,
  },
  {
    id: 2,
    type: "image",
    title: "Medical Students at ABU Zaria",
    description: "Danmodi scholarship beneficiaries studying Medicine at Ahmadu Bello University",
    category: "students",
    date: "2024-02-10",
    location: "ABU Zaria, Kaduna",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["medicine", "ABU", "students", "education"],
    views: 890,
    featured: true,
  },
  {
    id: 3,
    type: "video",
    title: "Success Story: Dr. Aisha Mohammed",
    description: "From rural Dutse to becoming a qualified doctor - Aisha's inspiring journey",
    category: "success-stories",
    date: "2024-01-20",
    location: "Dutse General Hospital",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["success", "doctor", "inspiration", "rural"],
    views: 2100,
    featured: true,
    duration: "5:30",
  },
  {
    id: 4,
    type: "image",
    title: "Engineering Students Field Trip",
    description: "Civil Engineering students visiting construction sites as part of practical learning",
    category: "students",
    date: "2024-02-05",
    location: "Kano State",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["engineering", "fieldtrip", "practical", "learning"],
    views: 650,
    featured: false,
  },
  {
    id: 5,
    type: "image",
    title: "Agriculture Program Launch",
    description: "Launch of special agriculture scholarship program for sustainable farming",
    category: "events",
    date: "2024-01-30",
    location: "Hadejia LGA",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["agriculture", "launch", "farming", "sustainability"],
    views: 780,
    featured: false,
  },
  {
    id: 6,
    type: "image",
    title: "Women in Health Initiative",
    description: "Special quota program supporting women pursuing health-related studies",
    category: "programs",
    date: "2024-02-12",
    location: "Jigawa State University",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["women", "health", "nursing", "empowerment"],
    views: 920,
    featured: false,
  },
  {
    id: 7,
    type: "video",
    title: "LGA Outreach Program",
    description: "Reaching out to rural communities across all 27 LGAs to identify potential beneficiaries",
    category: "outreach",
    date: "2024-01-25",
    location: "Various LGAs",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["outreach", "rural", "community", "identification"],
    views: 1100,
    featured: false,
    duration: "8:15",
  },
  {
    id: 8,
    type: "image",
    title: "Graduation Ceremony 2023",
    description: "Celebrating 200+ graduates who completed their studies with Danmodi support",
    category: "events",
    date: "2023-12-15",
    location: "Dutse Township Stadium",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["graduation", "celebration", "achievement", "success"],
    views: 1800,
    featured: true,
  },
  {
    id: 9,
    type: "image",
    title: "Special Needs Support Program",
    description: "Supporting students with disabilities through specialized equipment and assistance",
    category: "programs",
    date: "2024-02-08",
    location: "Dutse",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["disability", "support", "inclusion", "equipment"],
    views: 560,
    featured: false,
  },
  {
    id: 10,
    type: "image",
    title: "Computer Science Lab Opening",
    description: "New computer laboratory equipped for IT and Computer Science students",
    category: "facilities",
    date: "2024-01-18",
    location: "Federal University Dutse",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["technology", "computer", "lab", "IT"],
    views: 720,
    featured: false,
  },
  {
    id: 11,
    type: "video",
    title: "Parent Testimonials",
    description: "Parents sharing how the scholarship program has transformed their families",
    category: "testimonials",
    date: "2024-02-01",
    location: "Various Locations",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["parents", "testimonial", "family", "gratitude"],
    views: 1350,
    featured: false,
    duration: "12:45",
  },
  {
    id: 12,
    type: "image",
    title: "Mentorship Program Session",
    description: "Senior students mentoring junior beneficiaries in academic and career guidance",
    category: "programs",
    date: "2024-02-14",
    location: "Dutse",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["mentorship", "guidance", "career", "academic"],
    views: 480,
    featured: false,
  },
]

const categories = [
  { value: "all", label: "All Categories", count: galleryItems.length },
  {
    value: "events",
    label: "Events & Ceremonies",
    count: galleryItems.filter((item) => item.category === "events").length,
  },
  {
    value: "students",
    label: "Student Life",
    count: galleryItems.filter((item) => item.category === "students").length,
  },
  {
    value: "success-stories",
    label: "Success Stories",
    count: galleryItems.filter((item) => item.category === "success-stories").length,
  },
  { value: "programs", label: "Programs", count: galleryItems.filter((item) => item.category === "programs").length },
  {
    value: "outreach",
    label: "Community Outreach",
    count: galleryItems.filter((item) => item.category === "outreach").length,
  },
  {
    value: "facilities",
    label: "Facilities",
    count: galleryItems.filter((item) => item.category === "facilities").length,
  },
  {
    value: "testimonials",
    label: "Testimonials",
    count: galleryItems.filter((item) => item.category === "testimonials").length,
  },
]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  const featuredItems = galleryItems.filter((item) => item.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-700">Gallery</h1>
                <p className="text-sm text-gray-600">Danmodi Students Care - Visual Stories</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="ghost" className="text-gray-600 hover:text-green-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Visual Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the impact of Danmodi Students Care through photos, videos, and stories that showcase our commitment
            to empowering rural and underprivileged students across Jigawa State.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">{galleryItems.length}</div>
            <div className="text-sm text-gray-600">Total Items</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600">
              {galleryItems.filter((item) => item.type === "image").length}
            </div>
            <div className="text-sm text-gray-600">Photos</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600">
              {galleryItems.filter((item) => item.type === "video").length}
            </div>
            <div className="text-sm text-gray-600">Videos</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-orange-600">
              {galleryItems.reduce((sum, item) => sum + item.views, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
        </div>

        {/* Featured Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.slice(0, 3).map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative" onClick={() => setSelectedItem(item)}>
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <Play className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  )}
                  <Badge className="absolute top-2 left-2 bg-green-600">Featured</Badge>
                  {item.duration && (
                    <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white">{item.duration}</Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {item.views}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {categories.find((cat) => cat.value === item.category)?.label}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search photos, videos, events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="md:w-64">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center justify-between w-full">
                        <span>{category.label}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative" onClick={() => setSelectedItem(item)}>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white bg-opacity-90 rounded-full p-2">
                      <Play className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                )}
                {item.featured && <Badge className="absolute top-2 left-2 bg-green-600 text-xs">Featured</Badge>}
                {item.duration && (
                  <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs">
                    {item.duration}
                  </Badge>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between text-white text-xs">
                    <span className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {item.views}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium line-clamp-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <Badge variant="outline" className="text-xs">
                    {item.type === "video" ? "Video" : "Photo"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Load More */}
        {filteredItems.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="bg-transparent">
              Load More Items
            </Button>
          </div>
        )}
      </div>

      {/* Modal for viewing items */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span>{selectedItem.title}</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </DialogTitle>
                <DialogDescription>{selectedItem.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-96 object-contain rounded-lg"
                  />
                  {selectedItem.type === "video" && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
                      <div className="bg-white bg-opacity-90 rounded-full p-4">
                        <Play className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>{new Date(selectedItem.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{selectedItem.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-gray-400" />
                    <span>{selectedItem.views} views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Camera className="h-4 w-4 text-gray-400" />
                    <span>{selectedItem.type === "video" ? "Video" : "Photo"}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
