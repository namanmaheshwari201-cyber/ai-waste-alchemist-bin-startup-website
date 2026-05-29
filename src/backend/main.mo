import Map "mo:core/Map";

actor {
  // Type to store user contact info from "Pre-Order Now" CTA
  type ContactInfo = {
    name : Text;
    email : Text;
    phone : Text;
    address : Text;
  };

  // Type to store app feedback and interest from users
  type Feedback = {
    name : Text;
    message : Text;
    timestamp : Int;
  };

  // User ID counter for unique IDs
  var nextUserId = 1;

  // Persistent storage for leads and feedback
  let leads = Map.empty<Int, ContactInfo>();
  let feedbacks = Map.empty<Int, Feedback>();

  // Persistent statistics
  var totalFinesSaved : Nat = 0;
  var totalWasteRecycled : Nat = 0;
  var totalIncomeGenerated : Nat = 0;
  var totalUsers : Nat = 0;

  // Add lead from "Pre-Order Now" form
  public shared ({ caller }) func submitLead(name : Text, email : Text, phone : Text, address : Text) : async Bool {
    let contact : ContactInfo = {
      name;
      email;
      phone;
      address;
    };
    leads.add(nextUserId, contact);
    nextUserId += 1;
    updateStats(5000, 2000, 400);
    true;
  };

  // Add user feedback from contact form
  public shared ({ caller }) func submitFeedback(name : Text, message : Text, timestamp : Int) : async Bool {
    let fb : Feedback = {
      name;
      message;
      timestamp;
    };
    feedbacks.add(nextUserId, fb);
    nextUserId += 1;
    true;
  };

  // Get total stats for counters section
  public query ({ caller }) func getStats() : async {
    finesSaved : Nat;
    wasteRecycled : Nat;
    incomeGenerated : Nat;
    users : Nat;
  } {
    {
      finesSaved = totalFinesSaved;
      wasteRecycled = totalWasteRecycled;
      incomeGenerated = totalIncomeGenerated;
      users = totalUsers;
    };
  };

  // Get all leads (for admin/marketing)
  public query ({ caller }) func getAllLeads() : async [ContactInfo] {
    leads.values().toArray();
  };

  // Get all feedback (for admin/marketing)
  public query ({ caller }) func getAllFeedback() : async [Feedback] {
    feedbacks.values().toArray();
  };

  // Increment statistics (internal use)
  func updateStats(fines : Nat, waste : Nat, income : Nat) {
    totalFinesSaved += fines;
    totalWasteRecycled += waste;
    totalIncomeGenerated += income;
    totalUsers += 1;
  };
};
