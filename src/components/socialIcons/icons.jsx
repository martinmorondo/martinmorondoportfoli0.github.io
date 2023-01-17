import React from "react";
import "./icons.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialProfiles } from "../../contentOption";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialProfiles.twitter && (
          <li>
            <a href={socialProfiles.twitter} target="_blank">
              <FaTwitter />
            </a>
          </li>
        )}
        {socialProfiles.github && (
          <li>
            <a href={socialProfiles.github} target="_blank">
              <FaGithub />
            </a>
          </li>
        )}
        {socialProfiles.facebook && (
          <li>
            <a href={socialProfiles.facebook} target="_blank">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialProfiles.linkedin && (
          <li>
            <a href={socialProfiles.linkedin} target="_blank">
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};