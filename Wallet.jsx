import React, { useContext, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from './ContextApi';
import BackgroundGraphic from '../assets/Background.png';
import walletcircleimg from '../assets/walletcircleimg.png';
import card from '../assets/Walletimages/Card.png';
import LinearGradient from 'react-native-linear-gradient';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import CookieManager from '@react-native-cookies/cookies';

const { width } = Dimensions.get('window');
const BACKEND_URL = 'https://4add640142d0.ngrok-free.app/api/sunduk-service';

const Wallet = () => {
  const { isQuickLogin, setisQuickLogin, setUserData } = useContext(AppContext);
  const navigation = useNavigation();

  // 🔹 Google Login Flow
  const googleLogin = async () => {
    const loginUrl = `${BACKEND_URL}/oauth2/authorization/google`;
    const redirectUrl = 'islamicbank://login-success';

    try {
      // InAppBrowser.openAuth(...) → uses a secure system-controlled browser inside your app.
      // InAppBrowser.isAvailable() is checking whether your device (Android / iOS) supports the "in-app browser" feature before trying to open it.
      // What it checks under the hood?
      // On iOS → it checks if SFSafariViewController or ASWebAuthenticationSession is available.These are special system browsers that allow secure OAuth login.
      // On Android → it checks if Chrome Custom Tabs are available.If Chrome is installed → true.If Chrome is not installed → it tries the default browser, but if not supported → false.
      // Why this is important
      // If you try to run InAppBrowser.openAuth(...) on a device where it’s not supported, your app would crash.
      // That’s why isAvailable() acts like a safety check.

      if (await InAppBrowser.isAvailable()) {      
        const result = await InAppBrowser.openAuth(loginUrl, redirectUrl, {      // App opens an InAppBrowser and navigates to your backend’s Google login endpoint.Google handles authentication → user picks account → Google sends response back to your backend.
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          showTitle: true,
          enableUrlBarHiding: true,
          enableDefaultShare: false,
        });

        if (result.type === 'success' && result.url) {
          handleDeepLink({ url: result.url });
        }
      } else {
        Linking.openURL(loginUrl);      // if inappbrowesr is not available so deep link will not work instead this work .aur ye kya karega ki ye app ke andar browser ko nahi kholega balki external broser use karega fir redirect hoga aur ye safe nahi he 
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Failed', 'Something went wrong during Google login.');
    }
  };

  // 🔹 Deep Link Handler
  const handleDeepLink = async ({ url }) => {
    console.log('Deep Link Received:', url);

    try {
      const queryString = url.split('?')[1];
      const params = new URLSearchParams(queryString);
      const jsessionid = params.get('sessionId') || params.get('JSESSIONID');
      const email = decodeURIComponent(params.get('email') || '');
      const fullName = decodeURIComponent(params.get('fullName') || '');

      if (!jsessionid) {
        throw new Error('No session ID received');
      }

      if (email && fullName) {
        setUserData({ email, fullName });
      }

      // 🔹 Set Cookie Globally
      await CookieManager.set('https://4add640142d0.ngrok-free.app', {
        name: 'JSESSIONID',
        value: jsessionid,
        domain: '4add640142d0.ngrok-free.app',
        path: '/',
        version: '1',
        secure: true,
        httpOnly: true,
        expires: '2025-12-31T23:59:59.00Z',
      });

      console.log('✅ Session cookie set successfully');
      navigation.navigate('Landingpage');
    } catch (error) {
      console.error('Error handling deep link:', error);
      Alert.alert('Error', 'Failed to complete login process');
    }
  };

  // 🔹 Add Deep Link Listener
  useEffect(() => {
    const listener = Linking.addEventListener('url', handleDeepLink);     // ye tab chalega joi phone me browser se ya email se etc deeplink pe click karega aur app aleady open he (warm start) to ye chal jayga   
                                                                          // When we write this Linking.addEventListener('url', handleDeepLink) So what happen.When a deep link arrives (islamicbank://login-success?...) like this so That event object looks like this:{url: "islamicbank://login-success?sessionId=123&email=test@gmail.com"}
    
    Linking.getInitialURL().then((url) => {                      // ye tab chalega jab koi phone me browser se ya email se etc deeplink click karega aur app completely band hoga (Cold Start) to ye chalega oterwise ye nahi chalega
      if (url) {
        handleDeepLink({ url });                                   
      }
    });

    return () => {
      listener.remove();       // If the user navigates away or closes the screen.listener.remove() runs → so app stops listening.
    }                          //Cold Start → isme phele app close hota he fir user deep link pe click karata he fir app kulta he fir getiniatialurl chalta he isko cold start bolte he
                               //Warm Start → isme app phele se hi open rehta to user jab deep link pe click karta he listener event ko catch kar leta he aur handledeeplink navigate kaeta he
  }, []);                      

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isQuickLogin ? 'rgba(0, 0, 0, 0.1)' : '#fff' },
      ]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={BackgroundGraphic}
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        <TouchableOpacity onPress={() => setisQuickLogin(false)}>
          <Image
            source={walletcircleimg}
            style={styles.walletCircle}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setisQuickLogin(false)}>
          <Image
            source={card}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>Your Digital Islamic Wallet</Text>
          <Text style={styles.subHeading}>
            Seamless, secure, and smart payments made easy
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={googleLogin}
            style={{ marginBottom: 15 }}
          >
            <LinearGradient
              colors={['#D4A852', '#AD7C20']}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.linearButton}
            >
              <Text style={styles.buttonText}>Login with Google</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Loginscreen')}
            style={{ marginBottom: 15 }}
          >
            <LinearGradient
              colors={['#D4A852', '#AD7C20']}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.linearButton}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setisQuickLogin(true)}
            style={styles.quickLoginButton}
          >
            <Text style={styles.buttonText}>Quick Login</Text>
            <Text
              style={{
                color: '#fff',
                marginLeft: 8,
                fontSize: width * 0.05,
              }}
            >
              {'→'}
            </Text>
          </TouchableOpacity>
        </View>

        {isQuickLogin && <QuickLogin />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: {
    paddingBottom: 50,
    alignItems: 'center',
  },
  backgroundImage: {
    width: width * 1.8,
    height: width * 1.8,
    position: 'absolute',
    top: 0,
    left: -width,
  },
  walletCircle: {
    position: 'absolute',
    top: -(width * 2) / 2,
    width: width * 1.95,
    height: width * 1.95,
    alignSelf: 'center',
  },
  cardImage: {
    width: width * 0.5,
    aspectRatio: 0.8,
    top: -width * 0.3,
    alignSelf: 'center',
  },
  textContainer: {
    width: width * 0.9,
    marginTop: 0,
  },
  heading: {
    fontSize: width * 0.09,
    fontWeight: '800',
    color: '#000',
  },
  subHeading: {
    fontSize: width * 0.045,
    color: '#6B7280',
    marginTop: 8,
  },
  buttonContainer: {
    width: width * 0.9,
    marginTop: 35,
  },
  linearButton: {
    height: width * 0.14,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickLoginButton: {
    backgroundColor: 'black',
    height: width * 0.14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default Wallet;



// How complete flow works in details:-

// 1. User clicks "Login with Google" in your app
// You open the URL:
// https://your-backend.com/oauth2/authorization/google
// This goes to your Spring Security backend.


// 2. Backend → Google Login Page

// Backend redirects user to Google’s OAuth page.
// User selects account, Google authenticates.

// 3. Google → Backend Redirect

// After login, Google sends result back to your backend (e.g., code/token).
// Backend creates a session (JSESSIONID) for that user.

// 4. Backend → Your App (Deep Link Redirect)

// Your backend explicitly says:
// Okay, login is successful, now open this custom app link (islamicbank://...) and pass session data in query params.
// Now backend redirects user to your app using the deep link you configured:
// islamicbank://login-success?sessionId=abc123&email=test@gmail.com&fullName=Muneeb     // backend is link pe redirect kar raha he aur sath me user ki information bhi bhej raha he jo google Outh2 se mili he login ke baad aur hame deep link ki madad se user ki information mil rahi he

// 5. OS (operating system) intercepts the deep link

// Since you registered islamicbank:// scheme in your AndroidManifest (Android) or Info.plist (iOS),And owner of islamicbank:// is our app
// the operating system knows → this link belongs to your app.
// OS launches your app and passes the link to it.


// Login click → Browser khulta hai.

// Login complete → Deep link fire hota hai.

// Deep link → Cold Start hua to getInitialURL() run karega, Warm Start hua to listener run karega.

