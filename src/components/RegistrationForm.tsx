import { useForm } from "react-hook-form";
import { UserPlus, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface RegistrationFormData {
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
}

interface RegistrationFormProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<RegistrationFormData>();

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Registration data:", data);
    toast.success("Employee registered successfully!");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Tabs defaultValue="employee" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="employee" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            Employee Details
          </TabsTrigger>
          <TabsTrigger value="project" className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4" />
            Project Details
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
                Enter personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="reg-employeeName">Employee Name *</Label>
                <Input
                  id="reg-employeeName"
                  {...register("employeeName", { required: "Employee name is required" })}
                  placeholder="Enter full name"
                />
                {errors.employeeName && (
                  <p className="text-sm text-destructive">{errors.employeeName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-mobile">Mobile *</Label>
                <Input
                  id="reg-mobile"
                  {...register("mobile", { required: "Mobile number is required" })}
                  placeholder="+91 XXXXXXXXXX"
                />
                {errors.mobile && (
                  <p className="text-sm text-destructive">{errors.mobile.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-gender">Gender *</Label>
                <Select>
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
                <Label htmlFor="reg-dateOfBirth">Date of Birth *</Label>
                <Input
                  id="reg-dateOfBirth"
                  type="date"
                  {...register("dateOfBirth", { required: "Date of birth is required" })}
                />
                {errors.dateOfBirth && (
                  <p className="text-sm text-destructive">{errors.dateOfBirth.message}</p>
                )}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="reg-communicationAddress">Communication Address *</Label>
                <Textarea
                  id="reg-communicationAddress"
                  {...register("communicationAddress", { required: "Address is required" })}
                  placeholder="Enter complete address"
                />
                {errors.communicationAddress && (
                  <p className="text-sm text-destructive">{errors.communicationAddress.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-area">Area *</Label>
                <Input
                  id="reg-area"
                  {...register("area", { required: "Area is required" })}
                  placeholder="Area/Locality"
                />
                {errors.area && (
                  <p className="text-sm text-destructive">{errors.area.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-landMark">Landmark</Label>
                <Input
                  id="reg-landMark"
                  {...register("landMark")}
                  placeholder="Nearby landmark"
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
                Enter project and skill details
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="reg-cUserId">C User ID *</Label>
                <Input
                  id="reg-cUserId"
                  {...register("cUserId", { required: "C User ID is required" })}
                  placeholder="User ID"
                />
                {errors.cUserId && (
                  <p className="text-sm text-destructive">{errors.cUserId.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-primarySkill">Primary Skill *</Label>
                <Input
                  id="reg-primarySkill"
                  {...register("primarySkill", { required: "Primary skill is required" })}
                  placeholder="e.g., React, Java, Python"
                />
                {errors.primarySkill && (
                  <p className="text-sm text-destructive">{errors.primarySkill.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-rsaCardNo">RSA Card No</Label>
                <Input
                  id="reg-rsaCardNo"
                  {...register("rsaCardNo")}
                  placeholder="RSA Card Number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-rsaCardExpiryDate">RSA Card Expiry Date</Label>
                <Input
                  id="reg-rsaCardExpiryDate"
                  type="date"
                  {...register("rsaCardExpiryDate")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-projectExperience">Project Experience</Label>
                <Input
                  id="reg-projectExperience"
                  {...register("projectExperience")}
                  placeholder="e.g., 2 years"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-availTransport">Available Transport</Label>
                <Select>
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
                <Label htmlFor="reg-secondarySkills">Secondary Skills/Tools</Label>
                <Textarea
                  id="reg-secondarySkills"
                  {...register("secondarySkills")}
                  placeholder="List secondary skills and tools worked on..."
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="reg-clientEmailId">Client Email ID *</Label>
                <Input
                  id="reg-clientEmailId"
                  type="email"
                  {...register("clientEmailId", { 
                    required: "Client email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                  placeholder="client@company.com"
                />
                {errors.clientEmailId && (
                  <p className="text-sm text-destructive">{errors.clientEmailId.message}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" className="bg-gradient-primary hover-lift">
          <UserPlus className="mr-2 h-4 w-4" />
          Register Employee
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;