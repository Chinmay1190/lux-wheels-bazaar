
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

const OrderSuccess = () => {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Simulate order date
  const orderDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <Check className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2">Thank You for Your Order!</h1>
        <p className="text-muted-foreground text-center mb-8">
          Your order has been successfully placed.
        </p>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold">Order Confirmation</h2>
                <p className="text-sm text-muted-foreground">
                  We've sent a confirmation email with all details.
                </p>
              </div>
              <span className="text-sm text-muted-foreground">
                {orderDate}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Order Number:</span>
                <span className="font-mono">{orderNumber}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Payment Method:</span>
                <span>Credit/Debit Card</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Estimated Delivery:</span>
                <span>3-5 Business Days</span>
              </div>
            </div>
            
            <div className="mt-6 bg-muted p-4 rounded text-sm">
              <p className="mb-2 font-medium">What happens next?</p>
              <ol className="space-y-2 list-decimal pl-5 text-muted-foreground">
                <li>Our team will verify your order details.</li>
                <li>You'll receive a confirmation call within 24 hours.</li>
                <li>Our delivery team will coordinate the delivery date and time.</li>
                <li>Your vehicle will be delivered to your specified address.</li>
              </ol>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button asChild variant="outline">
              <Link to="/">
                Continue Shopping
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contact">
                Need Help? Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OrderSuccess;
