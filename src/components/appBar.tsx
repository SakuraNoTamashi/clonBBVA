import React from "react";

interface DashboardAppBarProps {
  handle: () => void; // Especifica el tipo de la función handle
}

const DashboardAppBar: React.FC<DashboardAppBarProps> = ({ handle }) => {
  return (
    <section
      className="fixed bg-gray-100 w-[86vw] h-[15vh] top-0 right-[2px] z-99 flex  justify-end items-center gap-8"
      style={{ paddingRight: "10%", zIndex: "99" }}
    >
      <div className="allSizes">
        <svg
          viewBox="0 0 260 260"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          aria-hidden="true"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <path d="M130 10a120 120 0 1 0 120 120A120 120 0 0 0 130 10Zm0 190a15 15 0 1 1 15-15 15 15 0 0 1-15 15Zm22.5-70.4c-13.5 7.9-13.4 11.2-13.4 27.8h-19.6a121 121 0 0 1-.6-12.1c0-12.7 7-20.1 15.7-25.4 8.2-5.2 11.9-8.9 11.9-17.1 0-6.7-5-11.4-13.9-11.4-9.8 0-19.7 6.9-25.5 14.6L92.7 90.8c9-11.4 22.8-20.8 42.4-20.8 22.5 0 34.9 12.9 34.9 30.6 0 15.6-7.9 23.2-17.5 29Z"></path>
        </svg>
      </div>
      <div className="allSizes">
        <svg
          viewBox="0 0 260 260"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          aria-hidden="true"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <path d="M200 20.14c-.2-11.19-12-10.29-20-10l-10 10h-10v-10h-10l-10 10h-10v-10h-10l-10 10h-10v-10H90l-10 10H70v-10H60l-10 10H40v-10c-7.8-.3-20-1.1-20 10v219.73c.1 11.09 12 10.29 20 10l10-10h10v10h10l10-10h10v10h10l10-10v-40L200 110ZM120 120H50v-20h90Zm30-39.95H50v-20h120Z"></path>
          <path d="M236.48 146.48c-7.4-6.79-18.9-24.07-30-13L130 209.91v30h30l76.5-76.41a12 12 0 0 0-.02-17.02Zm-46.5 93.39h49.99V219.9h-29.99l-20 19.97z"></path>
        </svg>
      </div>
      <div className="allSizes">
        <svg
          viewBox="0 0 260 260"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          aria-hidden="true"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <path d="M160 10H46a6 6 0 0 0-6 6v227a7 7 0 0 0 6 7h168a7 7 0 0 0 6-6V70ZM60 70h100l-20 20H60Zm0 40h60l-20 20H60Zm71 115-38-38 14-14 22 22 53-62 15 13Z"></path>
        </svg>
      </div>
      <div className="allSizes">
        <svg
          viewBox="0 0 260 260"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          aria-hidden="true"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <path d="M244.59 40H15.5a5.55 5.55 0 0 0-5.5 5.5v169a5.55 5.55 0 0 0 5.5 5.5h229a5.55 5.55 0 0 0 5.51-5.5v-169a5.34 5.34 0 0 0-5.42-5.5ZM130 150 30 89.9V66l100 60.3L230 66v23.9L130 150"></path>
        </svg>
      </div>
      <div className="allSizes">
        <svg
          viewBox="0 0 260 260"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          aria-hidden="true"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <path d="M161.4 132.55a70 70 0 0 1-62.8 0A90.08 90.08 0 0 0 30 220v20h200v-20a90.08 90.08 0 0 0-68.6-87.45Zm-1.4 77.54h-30v-20h50Z"></path>
          <ellipse cx="130" cy="70.02" rx="50" ry="50.02"></ellipse>
        </svg>
      </div>

      <div
        slot="invoker"
        role="button"
        className="right-col__list-item--clickable"
        id="bbva-btge-menu-perfil"
        onClick={() => handle()}
      >
        <svg
          className="fill"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
        >
          <rect width="10" height="5" y="5"></rect>
        </svg>
        <div
          className="content"
          role="img"
          aria-label="Perfil"
          aria-hidden="false"
        >
          <slot name="content">
            {" "}
            <span className="text">5 </span>{" "}
          </slot>
        </div>
      </div>
    </section>
  );
};
export default DashboardAppBar;
