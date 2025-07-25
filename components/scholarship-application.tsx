"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, User, FileText, Upload, CheckCircle, AlertCircle, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

const jigawaLGAs = [
  "Auyo",
  "Babura",
  "Biriniwa",
  "Birnin Kudu",
  "Buji",
  "Dutse",
  "Gagarawa",
  "Garki",
  "Gumel",
  "Guri",
  "Gwaram",
  "Gwiwa",
  "Hadejia",
  "Jahun",
  "Kafin Hausa",
  "Kaugama",
  "Kazaure",
  "Kiri Kasama",
  "Kiyawa",
  "Maigatari",
  "Malam Madori",
  "Miga",
  "Ringim",
  "Roni",
  "Sule Tankarkar",
  "Taura",
  "Yankwashi",
]

const studyFields = [
  "Medicine",
  "Engineering",
  "Agriculture",
  "Education",
  "Law",
  "Pharmacy",
  "Nursing",
  "Computer Science",
  "Business Administration",
  "Economics",
  "Political Science",
  "Mass Communication",
  "Psychology",
  "Sociology",
  "Chemistry",
  "Physics",
  "Mathematics",
  "Biology",
  "English",
  "Arabic",
  "Islamic Studies",
  "Other",
]

export function ScholarshipApplication() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    email: "",
    address: "",
    lga: "",
    ward: "",

    // Academic Information
    educationLevel: "",
    currentInstitution: "",
    courseOfStudy: "",
    yearOfStudy: "",
    cgpa: "",
    previousQualification: "",
    graduationYear: "",

    // Family Information
    fatherName: "",
    fatherOccupation: "",
    fatherIncome: "",
    motherName: "",
    motherOccupation: "",
    motherIncome: "",
    familySize: "",
    guardianName: "",
    guardianPhone: "",

    // Program Selection
    programType: "",
    preferredInstitution: "",
    alternativeInstitution: "",
    studyField: "",

    // Special Circumstances
    hasDisability: false,
    disabilityType: "",
    isWomanInHealth: false,
    isExtremelyPoor: false,

    // Essays
    personalStatement: "",
    whyDeserveScholarship: "",
    careerGoals: "",

    // Documents
    documents: [],
  })

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Application submitted successfully! You will receive a confirmation email shortly.")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-700">Scholarship Application</h1>
                <p className="text-sm text-gray-600">Danmodi Students Care - Jigawa State</p>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between mb-8">
          {[
            { step: 1, title: "Personal Info", icon: User },
            { step: 2, title: "Academic Info", icon: GraduationCap },
            { step: 3, title: "Family Info", icon: User },
            { step: 4, title: "Program Selection", icon: FileText },
            { step: 5, title: "Essays", icon: FileText },
            { step: 6, title: "Documents", icon: Upload },
          ].map(({ step, title, icon: Icon }) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step <= currentStep ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step < currentStep ? <CheckCircle className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
              </div>
              <span className="text-xs text-gray-600 text-center">{title}</span>
            </div>
          ))}
        </div>

        {/* Form Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              {currentStep === 1 && (
                <>
                  <User className="mr-2 h-5 w-5" />
                  Personal Information
                </>
              )}
              {currentStep === 2 && (
                <>
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Academic Information
                </>
              )}
              {currentStep === 3 && (
                <>
                  <User className="mr-2 h-5 w-5" />
                  Family Information
                </>
              )}
              {currentStep === 4 && (
                <>
                  <FileText className="mr-2 h-5 w-5" />
                  Program Selection
                </>
              )}
              {currentStep === 5 && (
                <>
                  <FileText className="mr-2 h-5 w-5" />
                  Personal Essays
                </>
              )}
              {currentStep === 6 && (
                <>
                  <Upload className="mr-2 h-5 w-5" />
                  Supporting Documents
                </>
              )}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Please provide your basic personal information"}
              {currentStep === 2 && "Tell us about your academic background"}
              {currentStep === 3 && "Provide information about your family and financial situation"}
              {currentStep === 4 && "Select your preferred program and field of study"}
              {currentStep === 5 && "Share your story and aspirations"}
              {currentStep === 6 && "Upload required supporting documents"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="middleName">Middle Name</Label>
                    <Input
                      id="middleName"
                      value={formData.middleName}
                      onChange={(e) => handleInputChange("middleName", e.target.value)}
                      placeholder="Enter your middle name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label>Gender *</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => handleInputChange("gender", value)}
                      className="flex space-x-4 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      placeholder="+234 xxx xxx xxxx"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Home Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Enter your complete home address"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="lga">Local Government Area *</Label>
                    <Select value={formData.lga} onValueChange={(value) => handleInputChange("lga", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your LGA" />
                      </SelectTrigger>
                      <SelectContent>
                        {jigawaLGAs.map((lga) => (
                          <SelectItem key={lga} value={lga}>
                            {lga}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="ward">Ward *</Label>
                    <Input
                      id="ward"
                      value={formData.ward}
                      onChange={(e) => handleInputChange("ward", e.target.value)}
                      placeholder="Enter your ward"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Academic Information */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label>Education Level *</Label>
                  <RadioGroup
                    value={formData.educationLevel}
                    onValueChange={(value) => handleInputChange("educationLevel", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="undergraduate" id="undergraduate" />
                      <Label htmlFor="undergraduate">Undergraduate (Bachelor's Degree)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="masters" id="masters" />
                      <Label htmlFor="masters">Master's Degree</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phd" id="phd" />
                      <Label htmlFor="phd">PhD Program</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medical" id="medical" />
                      <Label htmlFor="medical">Medical Program</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currentInstitution">Current/Intended Institution *</Label>
                    <Input
                      id="currentInstitution"
                      value={formData.currentInstitution}
                      onChange={(e) => handleInputChange("currentInstitution", e.target.value)}
                      placeholder="e.g., Ahmadu Bello University"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="courseOfStudy">Course of Study *</Label>
                    <Input
                      id="courseOfStudy"
                      value={formData.courseOfStudy}
                      onChange={(e) => handleInputChange("courseOfStudy", e.target.value)}
                      placeholder="e.g., Medicine and Surgery"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="yearOfStudy">Current Year of Study</Label>
                    <Select
                      value={formData.yearOfStudy}
                      onValueChange={(value) => handleInputChange("yearOfStudy", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Year 1</SelectItem>
                        <SelectItem value="2">Year 2</SelectItem>
                        <SelectItem value="3">Year 3</SelectItem>
                        <SelectItem value="4">Year 4</SelectItem>
                        <SelectItem value="5">Year 5</SelectItem>
                        <SelectItem value="6">Year 6</SelectItem>
                        <SelectItem value="fresh">Fresh Applicant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="cgpa">Current CGPA/GPA</Label>
                    <Input
                      id="cgpa"
                      value={formData.cgpa}
                      onChange={(e) => handleInputChange("cgpa", e.target.value)}
                      placeholder="e.g., 3.5/4.0 or 4.2/5.0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="previousQualification">Previous Qualification *</Label>
                    <Select
                      value={formData.previousQualification}
                      onValueChange={(value) => handleInputChange("previousQualification", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="waec">WAEC/SSCE</SelectItem>
                        <SelectItem value="neco">NECO</SelectItem>
                        <SelectItem value="nabteb">NABTEB</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="nce">NCE</SelectItem>
                        <SelectItem value="hnd">HND</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="graduationYear">Year of Graduation *</Label>
                    <Input
                      id="graduationYear"
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                      placeholder="e.g., 2023"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Family Information */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fatherName">Father's Full Name *</Label>
                    <Input
                      id="fatherName"
                      value={formData.fatherName}
                      onChange={(e) => handleInputChange("fatherName", e.target.value)}
                      placeholder="Enter father's full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fatherOccupation">Father's Occupation *</Label>
                    <Input
                      id="fatherOccupation"
                      value={formData.fatherOccupation}
                      onChange={(e) => handleInputChange("fatherOccupation", e.target.value)}
                      placeholder="e.g., Farmer, Teacher, etc."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="motherName">Mother's Full Name *</Label>
                    <Input
                      id="motherName"
                      value={formData.motherName}
                      onChange={(e) => handleInputChange("motherName", e.target.value)}
                      placeholder="Enter mother's full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="motherOccupation">Mother's Occupation *</Label>
                    <Input
                      id="motherOccupation"
                      value={formData.motherOccupation}
                      onChange={(e) => handleInputChange("motherOccupation", e.target.value)}
                      placeholder="e.g., Housewife, Trader, etc."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="fatherIncome">Father's Monthly Income (₦) *</Label>
                    <Select
                      value={formData.fatherIncome}
                      onValueChange={(value) => handleInputChange("fatherIncome", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-30000">₦0 - ₦30,000</SelectItem>
                        <SelectItem value="30000-50000">₦30,000 - ₦50,000</SelectItem>
                        <SelectItem value="50000-100000">₦50,000 - ₦100,000</SelectItem>
                        <SelectItem value="100000-200000">₦100,000 - ₦200,000</SelectItem>
                        <SelectItem value="200000+">Above ₦200,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="motherIncome">Mother's Monthly Income (₦) *</Label>
                    <Select
                      value={formData.motherIncome}
                      onValueChange={(value) => handleInputChange("motherIncome", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-30000">₦0 - ₦30,000</SelectItem>
                        <SelectItem value="30000-50000">₦30,000 - ₦50,000</SelectItem>
                        <SelectItem value="50000-100000">₦50,000 - ₦100,000</SelectItem>
                        <SelectItem value="100000-200000">₦100,000 - ₦200,000</SelectItem>
                        <SelectItem value="200000+">Above ₦200,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="familySize">Family Size *</Label>
                    <Input
                      id="familySize"
                      type="number"
                      value={formData.familySize}
                      onChange={(e) => handleInputChange("familySize", e.target.value)}
                      placeholder="Number of family members"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guardianName">Guardian's Name (if different from parents)</Label>
                    <Input
                      id="guardianName"
                      value={formData.guardianName}
                      onChange={(e) => handleInputChange("guardianName", e.target.value)}
                      placeholder="Enter guardian's name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guardianPhone">Guardian's Phone Number</Label>
                    <Input
                      id="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={(e) => handleInputChange("guardianPhone", e.target.value)}
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Program Selection */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="studyField">Field of Study *</Label>
                  <Select value={formData.studyField} onValueChange={(value) => handleInputChange("studyField", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your field of study" />
                    </SelectTrigger>
                    <SelectContent>
                      {studyFields.map((field) => (
                        <SelectItem key={field} value={field}>
                          {field}
                          {["Medicine", "Engineering", "Agriculture"].includes(field) && (
                            <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Priority Field</Badge>
                          )}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredInstitution">Preferred Institution *</Label>
                    <Input
                      id="preferredInstitution"
                      value={formData.preferredInstitution}
                      onChange={(e) => handleInputChange("preferredInstitution", e.target.value)}
                      placeholder="e.g., Ahmadu Bello University"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="alternativeInstitution">Alternative Institution</Label>
                    <Input
                      id="alternativeInstitution"
                      value={formData.alternativeInstitution}
                      onChange={(e) => handleInputChange("alternativeInstitution", e.target.value)}
                      placeholder="Second choice institution"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Special Quota Eligibility</h3>
                  <p className="text-sm text-gray-600">Check all that apply to you:</p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasDisability"
                        checked={formData.hasDisability}
                        onCheckedChange={(checked) => handleInputChange("hasDisability", checked)}
                      />
                      <Label htmlFor="hasDisability">I have a disability</Label>
                    </div>

                    {formData.hasDisability && (
                      <div className="ml-6">
                        <Label htmlFor="disabilityType">Type of Disability</Label>
                        <Input
                          id="disabilityType"
                          value={formData.disabilityType}
                          onChange={(e) => handleInputChange("disabilityType", e.target.value)}
                          placeholder="Please specify your disability"
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="isWomanInHealth"
                        checked={formData.isWomanInHealth}
                        onCheckedChange={(checked) => handleInputChange("isWomanInHealth", checked)}
                      />
                      <Label htmlFor="isWomanInHealth">I am a woman pursuing health-related studies</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="isExtremelyPoor"
                        checked={formData.isExtremelyPoor}
                        onCheckedChange={(checked) => handleInputChange("isExtremelyPoor", checked)}
                      />
                      <Label htmlFor="isExtremelyPoor">I come from an extremely poor background</Label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Personal Essays */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="personalStatement">Personal Statement *</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    Tell us about yourself, your background, and what motivates you (500-1000 words)
                  </p>
                  <Textarea
                    id="personalStatement"
                    value={formData.personalStatement}
                    onChange={(e) => handleInputChange("personalStatement", e.target.value)}
                    placeholder="Write your personal statement here..."
                    className="min-h-32"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.personalStatement.length}/1000 characters</p>
                </div>

                <div>
                  <Label htmlFor="whyDeserveScholarship">Why do you deserve this scholarship? *</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    Explain why you should be selected for this scholarship (300-500 words)
                  </p>
                  <Textarea
                    id="whyDeserveScholarship"
                    value={formData.whyDeserveScholarship}
                    onChange={(e) => handleInputChange("whyDeserveScholarship", e.target.value)}
                    placeholder="Explain why you deserve this scholarship..."
                    className="min-h-24"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.whyDeserveScholarship.length}/500 characters</p>
                </div>

                <div>
                  <Label htmlFor="careerGoals">Career Goals and Future Plans *</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    Describe your career aspirations and how you plan to contribute to Jigawa State (300-500 words)
                  </p>
                  <Textarea
                    id="careerGoals"
                    value={formData.careerGoals}
                    onChange={(e) => handleInputChange("careerGoals", e.target.value)}
                    placeholder="Describe your career goals and future plans..."
                    className="min-h-24"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.careerGoals.length}/500 characters</p>
                </div>
              </div>
            )}

            {/* Step 6: Documents */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Required Documents</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Please upload clear, legible copies of all required documents. Accepted formats: PDF, JPG, PNG
                        (Max 5MB each)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Academic Documents</h4>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">O'Level Results (WAEC/NECO/NABTEB) *</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">JAMB Result *</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Current Academic Transcript</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Personal Documents</h4>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Birth Certificate/Age Declaration *</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Local Government Indigene Certificate *</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Passport Photograph *</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Medical Certificate (if applicable)</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-900">Important Note</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        Ensure all documents are clear and legible. Incomplete or unclear documents may result in
                        application rejection. You will receive an email confirmation once your application is
                        successfully submitted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                  Submit Application
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
