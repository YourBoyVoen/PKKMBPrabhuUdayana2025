import { Link } from 'react-router-dom';
import { InstagramIcon, WhatsAppIcon} from "../icon/icon"; // Assuming you have these icons in a separate file

export default function Footer() {
  return (
    <footer className="mt-20 bg-white shadow-sm">
      <div className="w-11/12 max-w-7xl mx-auto py-10 px-4 flex flex-col gap-8">
        
        {/* Logo & Title */}
        <div className="flex items-center gap-4 justify-center sm:justify-start">
          <img src="/assets/images/logofix.PNG" alt="Logo PKKMB" className="w-16 sm:w-24" />
          <h4 className="text-xl sm:text-3xl font-bold font-sans text-black">
            PKKMB Prabhu Udayana
          </h4>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-8">
          {/* Instagram */}
          <div>
            <h5 className="text-xl font-semibold font-sans text-black mb-3">Instagram</h5>
            <ul className="space-y-2 text-black font-sans">
              <li className="flex items-center gap-2 hover:text-blue-500 transition">
                <InstagramIcon />
                <Link to="https://www.instagram.com/prabhu_udayana?utm_source=ig_web_button_share_sheet&igsh=YmxvbzVnbzNkcHgw">@prabhu_udayana</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-500 transition">
                <InstagramIcon />
                <Link to="https://www.instagram.com/bem_udayana?utm_source=ig_web_button_share_sheet&igsh=N3R4ZTZ1NDM2NXJ5">@bem_udayana</Link>
              </li>
            </ul>
          </div>

          {/* Contact Person */}
          <div>
            <h5 className="text-xl font-semibold font-sans text-black mb-3">Contact Person</h5>
            <ul className="space-y-2 text-black font-sans">
              <li className="flex items-center gap-2 hover:text-blue-500 transition">
                <WhatsAppIcon />
                <a href="#"> 089555356442 (Indra)</a>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-500 transition">
                <WhatsAppIcon />
                <a href="#"> 085934539161 (Otniel)</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-4 font-sans text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} PKKMB Prabhu Udayana. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
