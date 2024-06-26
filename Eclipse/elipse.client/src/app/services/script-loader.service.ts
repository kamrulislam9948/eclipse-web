import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  private scriptUrls: string[] = [
    "assets/vendor/jquery/jquery-3.2.1.min.js",
    "assets/vendor/animsition/js/animsition.min.js",
    "assets/vendor/bootstrap/js/popper.js",
    "assets/vendor/bootstrap/js/bootstrap.min.js",
    "assets/vendor/select2/select2.min.js",
    "assets/vendor/daterangepicker/moment.min.js",
    "assets/vendor/daterangepicker/daterangepicker.js",
    "assets/vendor/slick/slick.min.js",
    "assets/js/slick-custom.js",
    "assets/vendor/parallax100/parallax100.js",
    "assets/vendor/MagnificPopup/jquery.magnific-popup.min.js",
    "assets/vendor/isotope/isotope.pkgd.min.js",
    "assets/vendor/sweetalert/sweetalert.min.js",
    "assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js",
    "assets/js/main.js"
  ];

  constructor() { }

  loadScripts(): Promise<void[]> {
    const promises = this.scriptUrls.map(url => this.loadScript(url));
    return Promise.all(promises);
  }

  private loadScript(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => {
        resolve();
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.body.appendChild(script);
    });
  }
}
