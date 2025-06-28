import React from "react";
import {
  BadgeDollarSign,
  Clock,
  ShieldCheck,
  Mail,
  Phone,
  ArrowLeft,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen mt-5 bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <Link
          href={`/`}
          className="mb-6 text-zinc-600 flex justify-center item-center hover:text-zinc-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BadgeDollarSign className="h-10 w-10 text-zinc-900 mr-3" />
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Code Biruni Refund Policy
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Our commitment to transparency and customer satisfaction
          </p>
        </div>

        <Card className="mb-8 border-zinc-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <ShieldCheck className="h-6 w-6 mr-2 text-zinc-700" />
              Refund Policy Overview
            </CardTitle>
            <CardDescription className="text-zinc-600">
              Last updated: June 1, 2024
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-zinc-700">
              At Code Biruni, we strive to deliver exceptional digital solutions
              that meet your business needs. However, we understand that
              sometimes circumstances may require refunds. Please review our
              policy carefully.
            </p>

            <div className="grid gap-6 mt-8">
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-zinc-600" />
                  Digital Products Refund Timeline
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-zinc-200">
                    <thead className="bg-zinc-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                          Service Type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                          Refund Period
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                          Conditions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-zinc-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-zinc-700">
                          Custom Software Development
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-zinc-700">
                          14 days
                        </td>
                        <td className="px-4 py-4 text-sm text-zinc-700">
                          Before project development begins
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-zinc-700">
                          Website Development
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-zinc-700">
                          7 days
                        </td>
                        <td className="px-4 py-4 text-sm text-zinc-700">
                          Before design approval
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-zinc-700">
                          Digital Products
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-zinc-700">
                          30 days
                        </td>
                        <td className="px-4 py-4 text-sm text-zinc-700">
                          Unused license keys
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Separator className="my-6 bg-zinc-200" />

              <div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-3">
                  Eligibility Conditions
                </h3>
                <ul className="space-y-3 text-zinc-700 list-disc pl-6">
                  <li>
                    Refund requests must be made within the specified period
                    from the date of purchase
                  </li>
                  <li>
                    Services not yet rendered or products not yet delivered
                    qualify for full refunds
                  </li>
                  <li>
                    Partially completed work may be eligible for partial refunds
                    at our discretion
                  </li>
                  <li>
                    Custom work that has already been completed is generally
                    non-refundable
                  </li>
                  <li>
                    Subscription services can be canceled anytime but are
                    non-refundable for the current billing period
                  </li>
                </ul>
              </div>

              <Separator className="my-6 bg-zinc-200" />

              <div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-3">
                  Non-Refundable Items
                </h3>
                <ul className="space-y-3 text-zinc-700 list-disc pl-6">
                  <li>Consultation fees after the consultation has occurred</li>
                  <li>Custom development work that has been completed</li>
                  <li>
                    Digital products that have been downloaded or accessed
                  </li>
                  <li>Services where resources have already been allocated</li>
                  <li>Third-party costs (domains, hosting, licenses, etc.)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200">
          <CardHeader>
            <CardTitle className="text-2xl text-zinc-800">
              Refund Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-zinc-100 text-zinc-800 mr-3">
                    1
                  </div>
                  <h4 className="font-medium text-zinc-800">
                    Request Submission
                  </h4>
                </div>
                <p className="text-zinc-600 text-sm">
                  Submit your refund request via email to support@codebiruny.com
                  with your order details.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-zinc-100 text-zinc-800 mr-3">
                    2
                  </div>
                  <h4 className="font-medium text-zinc-800">Review Process</h4>
                </div>
                <p className="text-zinc-600 text-sm">
                  Our team will review your request within 3-5 business days and
                  may contact you for additional information.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-zinc-100 text-zinc-800 mr-3">
                    3
                  </div>
                  <h4 className="font-medium text-zinc-800">Refund Issuance</h4>
                </div>
                <p className="text-zinc-600 text-sm">
                  Approved refunds will be processed within 10 business days to
                  your original payment method.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-zinc-50 rounded-b-lg">
            <div className="w-full">
              <h3 className="text-lg font-semibold text-zinc-800 mb-3 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-zinc-600" />
                Need Help?
              </h3>
              <p className="text-zinc-600 mb-4">
                Contact our support team for any questions about our refund
                policy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="text-zinc-700 border-zinc-300"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
                <Button
                  variant="outline"
                  className="text-zinc-700 border-zinc-300"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-12 text-center text-sm text-zinc-500">
          <p>
            Code Biruni reserves the right to modify this refund policy at any
            time. Changes will be posted on this page.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Code Biruni. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
