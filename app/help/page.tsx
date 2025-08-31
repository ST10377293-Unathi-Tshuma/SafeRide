"use client";

import { withErrorBoundary } from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SafeRide</span>
            </Link>
            <Button variant="outline" asChild>
              <Link href="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Help & Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Contact support or view FAQs.</p>
            <Button asChild className="mt-4">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default withErrorBoundary(HelpPage);