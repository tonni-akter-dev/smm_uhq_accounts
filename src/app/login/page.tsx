import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/UHQ SMM.svg';
import google from '../../../public/google.png';
import loginfb from '../../../public/loginfb.png';
import apple from '../../../public/apple.png';
import login_bottom_shadow from '../../../public/login_bottom_shadow.png';
import login_layer from '../../../public/login_layer.png';
import login_layer1 from '../../../public/login_layer1.png';
import login_top_shadow from '../../../public/login_top_shadow.png';

const Login = () => {
  return (
    <div className='overflow-hidden login' style={{
      backdropFilter: ' blur(23px)'
    }}>
      <div className="bg-transparent! py-[100px] login-wrapper relative overflow-hidden z-50">
        <div className="login-container">
          <div className="logo2">
            <Image src={Logo} alt="Logo" width={150} height={50} />
          </div>
          <h1>Login</h1>
          <p>Welcome back! Please log in to access your account.</p>

          <form >
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"

                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"

                required
              />
            </div>

            <div className="forgot-password">
              <Link href="/recovery">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>

          <Link href="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>

          <div className="or-section">
            <hr /><span>Or Continue with</span><hr />
          </div>

          <div className="social-icons mt-[30px]">
            <Link href="#">
              <Image src={google} alt="Google Login" width={30} height={30} />
            </Link>
            <Link href="#">
              <Image src={loginfb} alt="Facebook Login" width={30} height={30} />
            </Link>
            <Link href="#">
              <Image src={apple} alt="Apple Login" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>

      <Image src={login_bottom_shadow} alt="ellipse24" className="absolute top-0 right-[-20%]" width={500} height={500} />
      <Image className="absolute -bottom-10 right-[-15%] opacity-[0.3]" src={login_layer} alt="Login Layer" width={500} height={500} />

      {/* top right shadow */}
      <Image src={login_top_shadow} alt="ellipse24" className="absolute top-0 left-[-20%]" width={500} height={500} />
      <Image className="absolute top-0 left-[0%] opacity-[0.3]" src={login_layer1} alt="Login Layer 1" width={500} height={500} />
    </div>
  );
};

export default Login;