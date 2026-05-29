import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitLead } from "@/hooks/useQueries";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PreOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PreOrderDialog({ open, onOpenChange }: PreOrderDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const submitLead = useSubmitLead();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitLead.mutateAsync(formData);
      toast.success("Pre-order submitted successfully!", {
        description: "We'll contact you soon with next steps.",
      });
      setFormData({ name: "", email: "", phone: "", address: "" });
      onOpenChange(false);
    } catch {
      toast.error("Failed to submit pre-order", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Reserve Your AI Bin
          </DialogTitle>
          <DialogDescription>
            Fill in your details to pre-order the AI Waste Alchemist Bin at the
            special launch price of ₹2,999.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Delivery Address *</Label>
            <Textarea
              id="address"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-eco-accent hover:bg-eco-accent/90 text-eco-dark font-bold"
            disabled={submitLead.isPending}
          >
            {submitLead.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Complete Pre-Order"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our terms and privacy policy. No payment
            required now.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
