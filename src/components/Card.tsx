import React from 'react';
import { FaUser, FaStar, FaEye } from 'react-icons/fa';

interface Props {
  header: string;
  subheader?: string;
  avatar: string;
  href: string;
  name: string;
  stars: number;
  followers: number;
}

const Card = ({ header, subheader, avatar, href, name, stars, followers }: Props) => {
  return (
    <div className="card-container">
      <h4 className="card-container__header center-text">{header}</h4>
      <img className="card-container__avatar" src={avatar} alt={`Avatar for ${name}`} />
      {subheader && <h4 className="center-text">{subheader}</h4>}
      <h2 className="center-text">
        <a className="card-container__link" href={href} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h2>
      <ul className="card-container__list">
        <li>
          <FaUser color="rgb(255, 191, 116)" size={22} />
          <a href={`https://github.com/${name}`}>{name}</a>
        </li>
        <li>
          <FaStar color="rgb(255, 215, 0)" size={22} />
          {stars.toLocaleString()} Stars
        </li>
        <li>
          <FaEye color="" size={22} />
          {followers.toLocaleString()} Watchers
        </li>
      </ul>
    </div>
  );
};

export default Card;
