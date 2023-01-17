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
            <a href={socialProfiles.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialProfiles.github && (
          <li>
            <a href={socialProfiles.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialProfiles.facebook && (
          <li>
            <a href={socialProfiles.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialProfiles.linkedin && (
          <li>
            <a href={socialProfiles.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialProfiles.youtube && (
          <li>
            <a href={socialProfiles.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialProfiles.twitch && (
          <li>
            <a href={socialProfiles.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};