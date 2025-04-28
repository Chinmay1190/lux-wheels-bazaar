
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  Building2, 
  User, 
  Phone,
  MapPin,
  IndianRupee,
  Check,
  Shield,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/data';
import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert";
import { toast } from "@/components/ui/use-toast";

// Mock payment options
const paymentMethods = [
  { id: 'card', name: 'Credit / Debit Card', icon: <CreditCard className="h-5 w-5" /> },
  { id: 'netbanking', name: 'Net Banking', icon: <Building2 className="h-5 w-5" /> }
];

const Checkout = () => {
  const { cartItems, getOrderSummary, clearCart } = useCart();
  const navigate = useNavigate();
  
  const orderSummary = getOrderSummary();
  
  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    state: '',
  });
  
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // If cart is empty, redirect to cart
  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }
  
  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };
  
  // Format card expiry
  const formatExpiry = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2');
  };
  
  // Handle card number change
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(formatCardNumber(value));
  };
  
  // Handle card expiry change
  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\//g, '').slice(0, 4);
    setCardExpiry(formatExpiry(value));
  };
  
  // Handle CVV change
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCardCvv(value);
  };
  
  // Place order
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Perform basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || 
        !formData.address || !formData.city || !formData.postalCode || !formData.state) {
      toast({
        title: "Please fill all required fields",
        description: "All fields in the shipping form are required.",
        variant: "destructive"
      });
      return;
    }
    
    if (paymentMethod === 'card') {
      if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
        toast({
          title: "Please fill all payment details",
          description: "All payment fields are required.",
          variant: "destructive"
        });
        return;
      }
    }
    
    // Process order
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="md:col-span-2">
          <form onSubmit={handlePlaceOrder}>
            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  <h2 className="text-xl font-bold">Contact Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Shipping Information */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  <h2 className="text-xl font-bold">Shipping Information</h2>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code *</Label>
                      <Input 
                        id="postalCode" 
                        name="postalCode" 
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input 
                        id="state" 
                        name="state" 
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Payment Method */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-5 w-5 mr-2 text-primary" />
                  <h2 className="text-xl font-bold">Payment Method</h2>
                </div>
                <RadioGroup 
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-2 mb-6"
                >
                  {paymentMethods.map(method => (
                    <div 
                      key={method.id} 
                      className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50"
                    >
                      <RadioGroupItem value={method.id} id={method.id} />
                      <Label htmlFor={method.id} className="flex items-center cursor-pointer w-full">
                        <span className="mr-3">{method.icon}</span>
                        {method.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                {paymentMethod === 'card' && (
                  <div className="space-y-4 border rounded-md p-4 bg-muted/25">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input 
                        id="cardNumber" 
                        placeholder="1234 5678 9012 3456" 
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card *</Label>
                      <Input 
                        id="cardName" 
                        placeholder="John Doe" 
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardExpiry">Expiry Date *</Label>
                        <Input 
                          id="cardExpiry" 
                          placeholder="MM/YY" 
                          value={cardExpiry}
                          onChange={handleCardExpiryChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardCvv">Security Code *</Label>
                        <Input 
                          id="cardCvv" 
                          placeholder="123" 
                          type="password" 
                          maxLength={3}
                          value={cardCvv}
                          onChange={handleCvvChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentMethod === 'netbanking' && (
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      You will be redirected to your bank's website to complete the payment after order confirmation.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
            
            {/* Place Order Button (Mobile) */}
            <div className="md:hidden mb-8">
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </Button>
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <div className="flex items-start">
                      <div 
                        className="w-12 h-12 rounded overflow-hidden bg-muted mr-3 flex-shrink-0"
                        style={{ position: 'relative' }}
                      >
                        <img 
                          src={item.product.images[0] || '/placeholder.svg'} 
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                        <div 
                          className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center -mt-1 -mr-1"
                        >
                          {item.quantity}
                        </div>
                      </div>
                      <span className="text-sm truncate max-w-[180px]">{item.product.name}</span>
                    </div>
                    <span className="text-sm font-medium">
                      {formatCurrency(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              {/* Cost breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(orderSummary.subtotal)}</span>
                </div>
                
                {orderSummary.discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="text-green-600 dark:text-green-400">
                      -{formatCurrency(orderSummary.discount)}
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (18%)</span>
                  <span>{formatCurrency(orderSummary.tax)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {orderSummary.shipping > 0 
                      ? formatCurrency(orderSummary.shipping) 
                      : "Free"}
                  </span>
                </div>
                
                <Separator className="my-3" />
                
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    <span>{formatCurrency(orderSummary.total)}</span>
                  </div>
                </div>
              </div>
              
              {/* Security note */}
              <div className="mt-6 text-sm text-muted-foreground flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>Your payment information is secure and encrypted.</span>
              </div>
              
              {/* Place Order Button (Desktop) */}
              <div className="mt-6 hidden md:block">
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  form="checkout-form"
                  disabled={isProcessing}
                  onClick={handlePlaceOrder}
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
