import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function ContactHero() {
  return (
    <div
      className="elementor-element elementor-element-ed9e4d7 e-con-full e-flex e-con e-parent"
      style={{
        backgroundImage:
          "url('https://kidbawp.codebasket.net/wp-content/uploads/2023/03/breadcrumb-bg.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="elementor-element elementor-element-7fcd6c2 e-flex e-con-boxed e-con e-child">
        <div className="e-con-inner">
          {/* Title */}
          <div className="elementor-element elementor-element-8f4d59b elementor-widget elementor-widget-tp_page_title">
            <div className="elementor-widget-container">
              <h2 className="cb-page-title text-white text-4xl font-bold uppercase">
                contact
              </h2>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="elementor-element elementor-element-5600d3d elementor-widget elementor-widget-tp-addons-breadcrumb">
            <div className="elementor-widget-container">
              <ul className="cb-addons-breadcrumbs flex items-center gap-2 text-white text-sm">
                <li className="cb-addons-breadcrumbs-item cb-addons-breadcrumbs-start">
                  <a href="/" rel="home">
                    <span className="cb-addons-breadcrumbs-text">Home</span>
                  </a>
                </li>

                <li className="cb-addons-breadcrumbs-separator">
                  <span className="cb-addons-breadcrumbs-separator-icon">
                    <FaAngleRight size={12} />
                  </span>
                </li>

                <li className="cb-addons-breadcrumbs-item cb-addons-breadcrumbs-end">
                  <span className="cb-addons-breadcrumbs-text">contact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Internal CSS to mimic Elementor spacing */}
      <style>{`
        .e-con {
          padding: 120px 0;
        }
        .cb-page-title {
          letter-spacing: 1px;
        }
        .cb-addons-breadcrumbs a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
