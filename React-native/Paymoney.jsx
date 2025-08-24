import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import { WebView } from "react-native-webview";
import CookieManager from "@react-native-cookies/cookies";

const Paymoney = () => {
  const [uuid, setUserId] = useState("b1194163-fcaa-4e21-b42e-af4a558424a0");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("DEBIT");
  const [sourceWalletId, setSourceWalletId] = useState("70068efb-3ac8-4a0b-9615-914ccd5d0e36");
  const [targetWalletId, setTargetWalletId] = useState("XYZ");
  const [requestType, setRequestType] = useState("TRANSFER_MONEY");
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const backendUrl = "https://4add640142d0.ngrok-free.app";

  const getPaymentUrl = async () => {
    try {
      setLoading(true);

      // 🔹 Hit backend API
      const res = await fetch(`${backendUrl}/api/sunduk-service/wallet`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // cookies ke liye zaroori
        body: JSON.stringify({
          uuid,
          amount,
          transactionType,
          sourceWalletId,
          targetWalletId,
          requestType,
        }),
      });

      // 🔹 Step 1: Cookie try karo
      const cookies = await CookieManager.get(backendUrl);
      console.log("All cookies =>", cookies);

      if (cookies?.stripe_checkout_url?.value) {
        console.log(
          "Checkout URL from Cookie =>",
          cookies.stripe_checkout_url.value
        );
        setPaymentUrl(cookies.stripe_checkout_url.value);
        return;
      }

      // 🔹 Step 2: Agar cookie nahi mili to JSON response me dekho
      const data = await res.json();
      if (data.checkoutUrl) {
        console.log("Checkout URL from JSON =>", data.checkoutUrl);
        setPaymentUrl(data.checkoutUrl);
      } else {
        Alert.alert("Error", "Checkout URL not found in cookie or response");
      }
    } catch (error) {
      console.error("Error in getPaymentUrl:", error);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  //  Agar URL mil gaya to WebView me open karo
  if (paymentUrl) {
    return (
      <WebView
        source={{ uri: paymentUrl }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator size="large" style={styles.loader} />
        )}
      />
    );
  }

  return (
    
    <View style={styles.container}>
      <Text>User ID:</Text>
      <TextInput
        style={styles.input}
        value={uuid}
        onChangeText={setUserId}
        placeholder="Enter User ID"
      />

      <Text>Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter Amount"
        keyboardType="numeric"
      />

      <Text>Transaction Type (CREDIT / DEBIT):</Text>
      <TextInput
        style={styles.input}
        value={transactionType}
        onChangeText={setTransactionType}
        placeholder="CREDIT or DEBIT"
      />

      <Text>Source Wallet ID:</Text>
      <TextInput
        style={styles.input}
        value={sourceWalletId}
        onChangeText={setSourceWalletId}
        placeholder="Enter Source Wallet ID"
      />

      <Text>Target Wallet ID:</Text>
      <TextInput
        style={styles.input}
        value={targetWalletId}
        onChangeText={setTargetWalletId}
        placeholder="Enter Target Wallet ID"
      />

      <Text>Request Type:</Text>
      <TextInput
        style={styles.input}
        value={requestType}
        onChangeText={setRequestType}
        placeholder="TRANSFER_MONEY"
      />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Pay money" onPress={getPaymentUrl} />
      )}
    </View>
  );
};

export default Paymoney;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    color: "black",
  },
  loader: { flex: 1, justifyContent:"center"},
});



// sundukpay login details

// aur sundukpay me ek wallet hoga to jo bhi amount daalenge vo isme aayega aur isme bohot saare pots bana sakte he savings ke exp hajj, umrah,vacation etc aur pots me amount wallet se dalenge

// transaction in sundukpay

// internal transaction
// isme jese pots to pots transfer karna ya pots to wallet ya wallet to pots pese transfer karna apne aap ko to isko internal transaction bolte he

// external transaction 
// isme jese ek sundukpay account se kisi dusre sundukpay account pe fund transfer karne ko external transaction bolte he

// how its works
// sabse phele user login karega fir uski user id banegi jo pure account ki ek hi hogi aur main wallet ki aur saare pots ki alag alag id hogi aur ye id payment karne me kaam aaygi to jo bhi payment karega to uski id ko sourceId bolenge aur jisme karenge vo targetId bolenge


// payment URL:-

// The payment URL is necessary because your app itself cannot directly handle secure payment processing (like card details, 3D Secure, UPI, etc). That’s why payment gateways (like Stripe, Razorpay, PayPal, Paytm, etc.) generate a checkout session and give you back a special URL.


// Why Payment URL is needed

// 1 PCI Compliance (security laws)
// Apps/servers are not allowed to directly collect and store card details unless they are PCI DSS certified.
// So instead of your app collecting card info, the payment gateway’s hosted page handles it securely.Matlab App card info collect karne ke bajay payment gateway handle karega

// 2 Dynamic session per transaction
// When you hit your backend with:
// {
//   "uuid": "...",
//   "amount": "500",
//   "transactionType": "DEBIT"
// }

// Your backend tells the payment provider:
// “Hey, create a payment session for ₹500 for this user.”
// Payment provider returns → a unique URL (e.g., Stripe Checkout session).
// That URL is one-time use → it links to that specific transaction only.

// 3 Redirection to WebView / Browser

// Your React Native app opens that URL in a WebView or InAppBrowser.
// The user sees the secure payment page from Stripe/PayPal/Bank.
// User enters card/UPI details safely (your app never sees the card number).

// 4 After payment → redirect back to your app

// Once payment succeeds, the payment gateway redirects the user to your backend or a deep link in your app (islamicbank://payment-success?...).
// That’s how you confirm whether the transaction was successful.


// Without Payment URL?

// If you don’t use a payment URL:
// You’d have to build your own payment UI, handle card details, encryption, bank OTP flows.
// That makes you responsible for PCI DSS compliance → very complex and legally risky.
// Almost no app does this directly — everyone uses hosted payment pages.

// So in short:
// The payment URL is like a door to the official, secure payment page.
// Your backend asks the payment gateway for that door.
// Your app just redirects the user there → gateway handles all sensitive data → returns success/failure.


// Paymoney component how its works:-

// 1 User fills the form
// You already set some default values (uuid, sourceWalletId, etc.).
// User enters an amount.
// Other fields can also be edited.

// 2 User taps Pay money button → getPaymentUrl() runs
// Loading state (setLoading(true)) starts showing an ActivityIndicator.
// A POST request goes to your backend:
// POST https://4add640142d0.ngrok-free.app/api/sunduk-service/wallet
// Body:
// {
//   uuid,
//   amount,
//   transactionType,
//   sourceWalletId,
//   targetWalletId,
//   requestType
// }
// Header includes Content-Type: application/json.
// credentials: "include" ensures cookies from backend are stored.

//3  Backend processes the request
// Create a new payment transaction.
// Call a payment gateway (Stripe, Razorpay, PayPal, etc.).
// Receive a checkout session URL from gateway.
// Send it back to your app either in cookies or JSON.

// 4 Client tries to get the payment URL
// First, your code checks CookieManager.get(backendUrl).
// If cookie contains stripe_checkout_url, use it.
// If not found in cookies, then parse JSON:
// const data = await res.json();
// if (data.checkoutUrl) {
//   setPaymentUrl(data.checkoutUrl);
// }
// If nothing found → show alert: Checkout URL not found.

// 5 If a payment URL is found → setPaymentUrl() updates state
// Your component re-renders.
// Instead of showing the form, now it renders a WebView pointing to that checkoutUrl.

// 6 WebView opens
// The payment gateway’s secure page is shown (like Stripe Checkout / Razorpay checkout).
// User enters card/UPI/whatever details.
// The payment is completed securely in that WebView.

// 7 What happens after payment success/failure?
// Usually, payment gateways redirect to a success URL or failure URL.
// Your backend should configure these redirect URLs.
// WebView will also load that redirect URL → you can catch it using onNavigationStateChange or onShouldStartLoadWithRequest in WebView.
// That’s where you can confirm → Payment Successful, then update wallet balance in your backend.

// 🔹 Summary in plain words
// Form → API call → backend → payment gateway → unique checkout URL → WebView opens → user pays → gateway redirects → you verify → wallet credited.








