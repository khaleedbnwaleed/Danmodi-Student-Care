"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  MapPin,
  Heart,
  BookOpen,
  Award,
  Phone,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  UserPlus,
} from "lucide-react"
import Link from "next/link"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img
                src="/placeholder.svg?height=48&width=48&text=Logo"
                alt="Danmodi Students Care Logo"
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-green-700">Danmodi Students Care</h1>
                <p className="text-sm text-gray-600">Jigawa State Government Initiative</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">
                  About
                </a>
                <a href="#programs" className="text-gray-600 hover:text-green-600 transition-colors">
                  Programs
                </a>
                <Link href="/gallery" className="text-gray-600 hover:text-green-600 transition-colors">
                  Gallery
                </Link>
                <a href="#impact" className="text-gray-600 hover:text-green-600 transition-colors">
                  Impact
                </a>
                <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contact
                </a>
              </nav>
              <Link href="/signup">
                <Button className="bg-green-600 hover:bg-green-700">
                  Apply Now
                  <UserPlus className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline">
                  Portal Login
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                Jigawa State Government Initiative
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Empowering <span className="text-green-600">Rural Students</span> Through Education
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Supporting underprivileged and rural students across all 27 Local Government Areas of Jigawa State with
                scholarships, admission support, and academic mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Start Your Application
                    <GraduationCap className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Learn More
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p>
                  📝 <strong>Note:</strong> You need to create an account to apply for scholarships and track your
                  application status.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=700"
                alt="Danmodi Students Care graduation ceremony"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">2,847</div>
                    <div className="text-xs text-gray-600">Total Beneficiaries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">27/27</div>
                    <div className="text-xs text-gray-600">LGAs Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">₦2.8B</div>
                    <div className="text-xs text-gray-600">Funds Disbursed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">89%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply</h2>
            <p className="text-xl text-gray-600">Simple steps to start your scholarship journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Create Account</h3>
              <p className="text-gray-600">
                Sign up with your personal information and select your account type (New Applicant or Current
                Beneficiary).
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Complete Application</h3>
              <p className="text-gray-600">
                Fill out the comprehensive scholarship application form with your academic, personal, and family
                information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Track Progress</h3>
              <p className="text-gray-600">
                Monitor your application status, receive updates, and access your personalized dashboard once approved.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/signup">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started - Create Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-green-600 hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Danmodi Students Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An educational support initiative launched by the Jigawa State Government, operating under the Office of
              the Senior Special Assistant on Student Affairs to the Governor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Students studying"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 -mt-8 relative z-10 border-4 border-white">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To support rural and underprivileged students in gaining access to tertiary education and succeeding
                  academically through comprehensive scholarship programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Jigawa State coverage"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 -mt-8 relative z-10 border-4 border-white">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Our Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete coverage across all 27 Local Government Areas of Jigawa State, ensuring no deserving student
                  is left behind regardless of their location.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Successful graduates"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 -mt-8 relative z-10 border-4 border-white">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Thousands of Jigawa youths have benefited from our programs, with many going on to successful careers
                  in medicine, engineering, agriculture, and other fields.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive support systems designed to ensure student success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">Scholarship Scheme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Full tuition and living expenses for undergraduate and postgraduate students across all fields.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    Undergraduate Programs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    Master's Degrees
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    PhD Programs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Admission Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Helping indigent students secure admission into universities and higher institutions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                    Application Guidance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                    Document Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                    Interview Preparation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">Special Quotas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Reserved slots for vulnerable groups and priority fields of study.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                    Students with Disabilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                    Women in Health
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                    Extremely Poor Backgrounds
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-lg">Academic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Mentorship, monitoring, and additional resources to ensure student success.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-orange-500 mr-2" />
                    Academic Mentorship
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-orange-500 mr-2" />
                    Performance Monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-orange-500 mr-2" />
                    Study Tools & Laptops
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Priority Fields */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="University campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Priority Fields</h2>
            <p className="text-xl text-gray-600">
              Special focus on high-cost fields to relieve financial burdens on families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Medical students"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-red-900 mb-2">Medicine</h3>
                <p className="text-red-700">
                  Supporting future doctors and healthcare professionals with comprehensive medical education funding.
                </p>
              </div>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Engineering students"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Engineering</h3>
                <p className="text-blue-700">
                  Developing technical expertise for infrastructure development and technological advancement.
                </p>
              </div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Agriculture students"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">Agriculture</h3>
                <p className="text-green-700">
                  Enhancing food security and agricultural innovation through specialized education programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-green-100">Transforming lives and communities across Jigawa State</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2,847</div>
              <div className="text-green-100">Students Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,234</div>
              <div className="text-green-100">Active Scholarships</div>
            </div>
            <div className="text-4xl font-bold mb-2 text-center">
              <div className="text-4xl font-bold mb-2">₦2.8B</div>
              <div className="text-green-100">Investment Made</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Aisha Mohammed"
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <blockquote className="text-xl italic mb-4">
              "This program has transformed my life and given me hope for a better future. I am now studying medicine at
              Ahmadu Bello University, thanks to Danmodi Students Care."
            </blockquote>
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <cite className="text-green-100">- Aisha Mohammed, Medical Student</cite>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to apply or need more information? We're here to help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Office of the Senior Special Assistant
                  <br />
                  on Student Affairs
                  <br />
                  Dutse, Jigawa State, Nigeria
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle>Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Official Website:</p>
                <a href="https://danmodistudentscare.com.ng" className="text-blue-600 hover:underline">
                  danmodistudentscare.com.ng
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Follow us on social media for updates
                  <br />
                  on applications and announcements
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/signup">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Your Application Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/placeholder.svg?height=40&width=40&text=Logo"
                  alt="Danmodi Students Care Logo"
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <h3 className="font-bold">Danmodi Students Care</h3>
                  <p className="text-sm text-gray-400">Jigawa State Government</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering rural and underprivileged students through education across all 27 LGAs of Jigawa State.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Scholarship Scheme
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Admission Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Special Quotas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Academic Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Priority Fields</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Medicine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Engineering
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Agriculture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Other Fields
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/signup" className="hover:text-white transition-colors">
                    Create Account
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-white transition-colors">
                    Portal Login
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Application Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Danmodi Students Care - Jigawa State Government. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
