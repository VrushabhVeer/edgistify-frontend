import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-gray-300">Your shop for all your needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">edgistify@gmail.com</p>
            <p className="text-gray-300">+91 9078563086</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-gray-300 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/cart" className="text-gray-300 hover:text-white">
                  Cart
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-300 hover:text-white">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex items-center gap-3">
              <img
                className="w-7"
                src={facebook}
                alt="facebook"
                loading="lazy"
              />
              <img
                className="w-7"
                src={instagram}
                alt="instagram"
                loading="lazy"
              />
              <img className="w-7" src={twitter} alt="twitter" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2025 Edgistify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
