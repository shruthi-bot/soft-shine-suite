import { useState } from "react";
import { useForm } from "react-hook-form";
import { Save, User, Briefcase, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface ProfileFormData {
  // Employee Details
  employeeName: string;
  mobile: string;
  gender: string;
  dateOfBirth: string;
  communicationAddress: string;
  area: string;
  landMark: string;
  
  // Project Details
  cUserId: string;
  primarySkill: string;
  rsaCardNo: string;
  rsaCardExpiryDate: string;
  projectExperience: string;
  secondarySkills: string;
  clientEmailId: string;
  availTransport: string;
  
  // Company Details
  tcsEmployeeId: string;
  tcsJoiningDate: string;
  designation: string;
  grade: string;
  tcsEmailId: string;
  tcsCardNo: string;
  itExperienceBeforeJoining: string;
  sapExperience: string;
}

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("employee");
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<ProfileFormData>({
    defaultValues: {
      employeeName: "John Doe",
      mobile: "+91 9876543210",
      gender: "Male",
      dateOfBirth: "1990-05-15",
      communicationAddress: "123 Tech Street, Bangalore",
      area: "Koramangala",
      landMark: "Near Metro Station",
      cUserId: "JOHN001",
      primarySkill: "React Development",
      rsaCardNo: "RSA123456",
      rsaCardExpiryDate: "2025-12-31",
      projectExperience: "3 years",
      secondarySkills: "Node.js, TypeScript, AWS",
      clientEmailId: "john.client@company.com",
      availTransport: "Yes",
      tcsEmployeeId: "TCS001234",
      tcsJoiningDate: "2021-07-01",
      designation: "Systems Engineer",
      grade: "A",
      tcsEmailId: "john.doe@tcs.com",
      tcsCardNo: "TCS001234",
      itExperienceBeforeJoining: "12",
      sapExperience: "18"
    }
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile updated:", data);
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form to default values
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleSubmit(onSubmit)} className="bg-gradient-primary hover-lift">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={handleEdit} className="bg-gradient-primary hover-lift">
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="employee" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            Employee Details
          </TabsTrigger>
          <TabsTrigger value="project" className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4" />
            Project Details
          </TabsTrigger>
          <TabsTrigger value="company" className="flex items-center">
            <Building className="mr-2 h-4 w-4" />
            Company Details
          </TabsTrigger>
        </TabsList>

        <TabsContent value="employee">
          <Card className="bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Employee Information
              </CardTitle>
              <CardDescription>
                Personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="employeeName">Employee Name *</Label>
                <Input
                  id="employeeName"
                  {...register("employeeName", { required: "Employee name is required" })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.employeeName && (
                  <p className="text-sm text-destructive">{errors.employeeName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile *</Label>
                <Input
                  id="mobile"
                  {...register("mobile", { required: "Mobile number is required" })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.mobile && (
                  <p className="text-sm text-destructive">{errors.mobile.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select disabled={!isEditing}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  {...register("dateOfBirth", { required: "Date of birth is required" })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.dateOfBirth && (
                  <p className="text-sm text-destructive">{errors.dateOfBirth.message}</p>
                )}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="communicationAddress">Communication Address *</Label>
                <Textarea
                  id="communicationAddress"
                  {...register("communicationAddress", { required: "Address is required" })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.communicationAddress && (
                  <p className="text-sm text-destructive">{errors.communicationAddress.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Area *</Label>
                <Input
                  id="area"
                  {...register("area", { required: "Area is required" })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.area && (
                  <p className="text-sm text-destructive">{errors.area.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="landMark">Landmark</Label>
                <Input
                  id="landMark"
                  {...register("landMark")}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="project">
          <Card className="bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                Project Information
              </CardTitle>
              <CardDescription>
                Current project and skill details
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="cUserId">C User ID *</Label>
                <Input
                  id="cUserId"
                  {...register("cUserId", { required: "C User ID is required" })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.cUserId && (
                  <p className="text-sm text-destructive">{errors.cUserId.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="primarySkill">Primary Skill *</Label>
                <Input
                  id="primarySkill"
                  {...register("primarySkill", { required: "Primary skill is required" })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.primarySkill && (
                  <p className="text-sm text-destructive">{errors.primarySkill.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="rsaCardNo">RSA Card No</Label>
                <Input
                  id="rsaCardNo"
                  {...register("rsaCardNo")}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rsaCardExpiryDate">RSA Card Expiry Date</Label>
                <Input
                  id="rsaCardExpiryDate"
                  type="date"
                  {...register("rsaCardExpiryDate")}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectExperience">Project Experience</Label>
                <Input
                  id="projectExperience"
                  {...register("projectExperience")}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availTransport">Available Transport</Label>
                <Select disabled={!isEditing}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select transport availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="secondarySkills">Secondary Skills/Tools</Label>
                <Textarea
                  id="secondarySkills"
                  {...register("secondarySkills")}
                  disabled={!isEditing}
                  className="transition-smooth"
                  placeholder="List your secondary skills and tools..."
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="clientEmailId">Client Email ID *</Label>
                <Input
                  id="clientEmailId"
                  type="email"
                  {...register("clientEmailId", { 
                    required: "Client email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.clientEmailId && (
                  <p className="text-sm text-destructive">{errors.clientEmailId.message}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="company">
          <Card className="bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2 h-5 w-5" />
                Company Information
              </CardTitle>
              <CardDescription>
                TCS employment and organizational details
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="tcsEmployeeId">TCS Employee ID *</Label>
                <Input
                  id="tcsEmployeeId"
                  {...register("tcsEmployeeId", { required: "TCS Employee ID is required" })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.tcsEmployeeId && (
                  <p className="text-sm text-destructive">{errors.tcsEmployeeId.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="tcsJoiningDate">TCS Joining Date *</Label>
                <Input
                  id="tcsJoiningDate"
                  type="date"
                  {...register("tcsJoiningDate", { required: "TCS joining date is required" })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.tcsJoiningDate && (
                  <p className="text-sm text-destructive">{errors.tcsJoiningDate.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="designation">Designation *</Label>
                <Input
                  id="designation"
                  {...register("designation", { required: "Designation is required" })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.designation && (
                  <p className="text-sm text-destructive">{errors.designation.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade">Grade *</Label>
                <Select disabled={!isEditing}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">Grade A</SelectItem>
                    <SelectItem value="B">Grade B</SelectItem>
                    <SelectItem value="C">Grade C</SelectItem>
                    <SelectItem value="D">Grade D</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tcsEmailId">TCS Email ID *</Label>
                <Input
                  id="tcsEmailId"
                  type="email"
                  {...register("tcsEmailId", { 
                    required: "TCS email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
                {errors.tcsEmailId && (
                  <p className="text-sm text-destructive">{errors.tcsEmailId.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="tcsCardNo">TCS Card No</Label>
                <Input
                  id="tcsCardNo"
                  {...register("tcsCardNo")}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="itExperienceBeforeJoining">IT Experience Before Joining TCS (months)</Label>
                <Input
                  id="itExperienceBeforeJoining"
                  type="number"
                  {...register("itExperienceBeforeJoining")}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sapExperience">SAP Experience as on Roll Date (months)</Label>
                <Input
                  id="sapExperience"
                  type="number"
                  {...register("sapExperience")}
                  disabled={!isEditing}
                  className="transition-smooth"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileForm;