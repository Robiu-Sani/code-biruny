import React from "react";
import {
  FileText,
  Gavel,
  AlertTriangle,
  Shield,
  ArrowLeft,
  Mail,
  Clock,
  CreditCard,
  Globe,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function TermsServices() {
  return (
    <div className="min-h-screen py-12 px-4 mt-5 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <Link
          href={`/`}
          className="mb-6 text-muted-foreground flex justify-center item-center hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Gavel className="h-10 w-10 text-foreground mr-3" />
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Code Biruni Terms of Service
            </h1>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to Code Biruni (Company, we, our, us). These Terms of
                Service (Terms) govern your access to and use of our website,
                services, and products (Services).
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by
                these Terms. If you disagree with any part of the terms, you may
                not access the Services.
              </p>
              <div className="flex items-start p-4 mt-4 bg-muted rounded-lg">
                <AlertTriangle className="h-5 w-5 mr-3 mt-0.5" />
                <p>
                  <strong>Important:</strong> These Terms contain a binding
                  arbitration clause and class action waiver that impact your
                  rights about how to resolve disputes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Account Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                <li>You must be at least 18 years old to use our Services</li>
                <li>
                  You are responsible for maintaining the security of your
                  account
                </li>
                <li>
                  You are responsible for all activities that occur under your
                  account
                </li>
                <li>You must provide accurate and complete information</li>
                <li>
                  We reserve the right to refuse service to anyone for any
                  reason
                </li>
                <li>Accounts may be terminated for violation of these Terms</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                <li>
                  All fees are quoted in USD and are non-refundable unless
                  otherwise stated
                </li>
                <li>
                  Recurring subscriptions automatically renew until canceled
                </li>
                <li>You must provide current, complete payment information</li>
                <li>Late payments may result in service suspension</li>
                <li>We may change prices with 30 days notice</li>
                <li>Taxes are not included unless specified</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Globe className="h-6 w-6 mr-2" />
              Intellectual Property
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Our Rights</h3>
                <p className="text-muted-foreground">
                  All content, features, and functionality on our Services are
                  and will remain our exclusive property or that of our
                  licensors. Our trademarks and trade dress may not be used
                  without our prior written consent.
                </p>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
                <p className="text-muted-foreground">
                  We claim no intellectual property rights over the material you
                  provide to the Services. Your profile and materials uploaded
                  remain yours. However, by uploading content, you agree to
                  allow others to view and share your content.
                </p>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Copyright Complaints
                </h3>
                <p className="text-muted-foreground">
                  We respect intellectual property rights. If you believe
                  content on our Services violates your copyright, please
                  contact us at legal@codebiruny.com with detailed information
                  about the alleged infringement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2" />
              Prohibited Conduct
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Prohibited Activities
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      Illegal Activities
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      Violating laws, regulations, or third-party rights
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      Security
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      Hacking, phishing, scraping, or circumventing security
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      Spam
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      Sending unsolicited communications or promotions
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      Content
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      Posting harmful, abusive, or offensive material
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">General Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Modifications
                </h3>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. We
                  will provide notice of significant changes through our
                  Services or by email. Your continued use after changes
                  constitutes acceptance.
                </p>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Limitation of Liability
                </h3>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Code Biruni shall not
                  be liable for any indirect, incidental, special, consequential
                  or punitive damages, or any loss of profits or revenues,
                  whether incurred directly or indirectly.
                </p>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Gavel className="h-5 w-5 mr-2" />
                  Governing Law
                </h3>
                <p className="text-muted-foreground">
                  These Terms shall be governed by the laws of [Your
                  Jurisdiction] without regard to its conflict of law
                  provisions. Any disputes shall be resolved through binding
                  arbitration in [Your Jurisdiction].
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/50 rounded-b-lg">
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Contact Us
              </h3>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms, please contact us at:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  legal@codebiruny.com
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  View Privacy Policy
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            By using our Services, you acknowledge that you have read and
            understood these Terms of Service.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Code Biruni. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
