import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/moreAchievements/achievementCard/AchivementCard";
import { moreachievementSection } from "../../portfolio";

export default function Achievement() {
  // function openUrlInNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">
            {moreachievementSection.title}
          </h1>
          <p className="subTitle achievement-subtitle">
            {moreachievementSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {moreachievementSection.achivementsCards.map((card) => {
            return (
              <AchivementCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image
                
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
