"use client";
import React from "react";
import BuildingDisplay from "../BuildingDisplay";

export default function CEPMap() {
  const [targetBuilding, setTargetBuilding] = React.useState<string | null>(
    null,
  );

  return (
    <svg
      width="708.583"
      height="572.565"
      viewBox="0 0 708.583 572.565"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto max-h-full w-auto max-w-full self-start justify-self-start"
    >
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="a">
          <path d="M0 0h792v612H0Z" transform="translate(-347.351 -552.144)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="b">
          <path d="M0 0h792v612H0Z" transform="translate(-411.562 -471.504)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="c">
          <path d="M0 0h792v612H0Z" transform="translate(-294.465 -535.873)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="d">
          <path d="M0 0h792v612H0Z" transform="translate(-610.851 -458.76)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="e">
          <path d="M0 0h792v612H0Z" transform="translate(-624.632 -333.537)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="f">
          <path d="M0 0h792v612H0Z" transform="translate(-443.2 -459.212)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="g">
          <path d="M0 0h792v612H0Z" transform="translate(-378.683 -457.956)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="h">
          <path d="M0 0h792v612H0Z" transform="translate(-596.078 -205.735)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="i">
          <path d="M0 0h792v612H0Z" transform="translate(-297.895 -578.062)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="j">
          <path d="M0 0h792v612H0Z" transform="translate(-295.828 -565.007)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="k">
          <path d="M0 0h792v612H0Z" transform="translate(-286.524 -532.32)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="l">
          <path d="M0 0h792v612H0Z" transform="translate(-396.935 -495.409)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="m">
          <path d="M0 0h792v612H0Z" transform="translate(-405.63 -517.2)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="n">
          <path d="M0 0h792v612H0Z" transform="translate(-403.563 -504.144)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="o">
          <path d="M0 0h792v612H0Z" transform="translate(-581.772 -401.8)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="p">
          <path d="M0 0h792v612H0Z" transform="translate(-579.705 -388.744)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="q">
          <path d="M0 0h792v612H0Z" transform="translate(-641.43 -410.4)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="r">
          <path d="M0 0h792v612H0Z" transform="translate(-639.363 -397.344)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="s">
          <path d="M0 0h792v612H0Z" transform="translate(-464.43 -401.8)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="t">
          <path d="M0 0h792v612H0Z" transform="translate(-462.363 -388.744)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="u">
          <path d="M0 0h792v612H0Z" transform="translate(-637.23 -379.8)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="v">
          <path d="M0 0h792v612H0Z" transform="translate(-564.127 -291.6)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="w">
          <path d="M0 0h792v612H0Z" transform="translate(-562.06 -278.544)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="x">
          <path d="M0 0h792v612H0Z" transform="translate(-678.549 -315.621)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="y">
          <path d="M0 0h792v612H0Z" transform="translate(-676.482 -302.565)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="z">
          <path d="M0 0h792v612H0Z" transform="translate(-732.002 -445.246)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="A">
          <path d="M0 0h792v612H0Z" transform="translate(-729.935 -432.19)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="B">
          <path d="M0 0h792v612H0Z" transform="translate(-732.002 -495.6)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="C">
          <path d="M0 0h792v612H0Z" transform="translate(-729.935 -482.544)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="D">
          <path d="M0 0h792v612H0Z" transform="translate(-286.736 -410.69)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="E">
          <path d="M0 0h792v612H0Z" transform="translate(-283.635 -418.9)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="F">
          <path d="M0 0h792v612H0Z" transform="translate(-286.838 -366.739)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="G">
          <path d="M0 0h792v612H0Z" transform="translate(-283.737 -374.95)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="H">
          <path d="M0 0h792v612H0Z" transform="translate(-303.6 -497.19)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="I">
          <path d="M0 0h792v612H0Z" transform="translate(-303.6 -513.19)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="J">
          <path d="M0 0h792v612H0Z" transform="translate(-552.096 -419.56)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="K">
          <path d="M0 0h792v612H0Z" transform="translate(-552.096 -433.437)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="L">
          <path d="M0 0h792v612H0Z" transform="translate(-286.838 -344.332)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="M">
          <path d="M0 0h792v612H0Z" transform="translate(-286.838 -360.332)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="N">
          <path d="M0 0h792v612H0Z" transform="translate(-599.205 -332.906)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="O">
          <path d="M0 0h792v612H0Z" transform="translate(-595.956 -341.347)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="P">
          <path d="M0 0h792v612H0Z" transform="translate(-324.387 -537.59)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="Q">
          <path d="M0 0h792v612H0Z" transform="translate(-321.139 -546.032)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="R">
          <path d="M0 0h792v612H0Z" transform="translate(-508.316 -447.246)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="S">
          <path d="M0 0h792v612H0Z" transform="translate(-505.068 -455.687)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="T">
          <path d="M0 0h792v612H0Z" transform="translate(-358.29 -528.27)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="U">
          <path d="M0 0h792v612H0Z" transform="translate(-355.042 -536.711)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="V">
          <path d="M0 0h792v612H0Z" transform="translate(-532.8 -459.653)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="W">
          <path d="M0 0h792v612H0Z" transform="translate(-534.922 -463.513)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="X">
          <path d="M0 0h792v612H0Z" transform="translate(-541.214 -463.5)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="Y">
          <path d="M0 0h792v612H0Z" transform="translate(-548.922 -463.513)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="Z">
          <path d="M0 0h792v612H0Z" transform="translate(-551.071 -463.5)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aa">
          <path d="M0 0h792v612H0Z" transform="translate(-442.074 -320.992)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ab">
          <path d="M0 0h792v612H0Z" transform="translate(-442 -326.737)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ac">
          <path d="M0 0h792v612H0Z" transform="translate(-439.357 -330.405)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ad">
          <path d="M0 0h792v612H0Z" transform="translate(-439.357 -336.157)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ae">
          <path d="M0 0h792v612H0Z" transform="translate(-439.357 -343.279)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="af">
          <path d="M0 0h792v612H0Z" transform="translate(-439.357 -346.403)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ag">
          <path d="M0 0h792v612H0Z" transform="translate(-390.343 -256.194)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ah">
          <path d="M0 0h792v612H0Z" transform="translate(-399.504 -256.204)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ai">
          <path d="M0 0h792v612H0Z" transform="translate(-401.28 -256.194)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aj">
          <path d="M0 0h792v612H0Z" transform="translate(-407.666 -256.204)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ak">
          <path d="M0 0h792v612H0Z" transform="translate(-409.441 -256.194)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="al">
          <path d="M0 0h792v612H0Z" transform="translate(-415.828 -256.204)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="am">
          <path d="M0 0h792v612H0Z" transform="translate(-419.423 -256.194)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="an">
          <path d="M0 0h792v612H0Z" transform="translate(-422.545 -256.194)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ao">
          <path d="M0 0h792v612H0Z" transform="translate(-614.93 -418.18)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ap">
          <path d="M0 0h792v612H0Z" transform="translate(-612.147 -419.95)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aq">
          <path d="M0 0h792v612H0Z" transform="translate(-612.147 -425.928)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ar">
          <path d="M0 0h792v612H0Z" transform="translate(-614.944 -432.11)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="as">
          <path d="M0 0h792v612H0Z" transform="translate(-612.138 -440.97)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="at">
          <path d="M0 0h792v612H0Z" transform="translate(-612.147 -442.534)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="au">
          <path d="M0 0h792v612H0Z" transform="translate(-376.458 -469.29)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="av">
          <path d="M0 0h792v612H0Z" transform="translate(-375.12 -472.59)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aw">
          <path d="M0 0h792v612H0Z" transform="translate(-373.063 -478.116)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ax">
          <path d="M0 0h792v612H0Z" transform="translate(-373.063 -484.8)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ay">
          <path d="M0 0h792v612H0Z" transform="translate(-373.063 -488.703)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="az">
          <path d="M0 0h792v612H0Z" transform="translate(-627.927 -228.85)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aA">
          <path d="M0 0h792v612H0Z" transform="translate(-638.176 -229.957)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aB">
          <path d="M0 0h792v612H0Z" transform="translate(-640.162 -230.159)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aC">
          <path d="M0 0h792v612H0Z" transform="translate(-647.307 -230.934)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aD">
          <path d="M0 0h792v612H0Z" transform="translate(-649.293 -231.134)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aE">
          <path d="M0 0h792v612H0Z" transform="translate(-656.438 -231.91)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aF">
          <path d="M0 0h792v612H0Z" transform="translate(-660.46 -232.328)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aG">
          <path d="M0 0h792v612H0Z" transform="translate(-663.955 -232.702)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aH">
          <path d="M0 0h792v612H0Z" transform="translate(-300.968 -586.428)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aI">
          <path d="M0 0h792v612H0Z" transform="translate(-312.777 -583.033)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aJ">
          <path d="M0 0h792v612H0Z" transform="translate(-316.077 -584.371)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aK">
          <path d="M0 0h792v612H0Z" transform="translate(-321.602 -586.428)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aL">
          <path d="M0 0h792v612H0Z" transform="translate(-327.652 -586.366)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aM">
          <path d="M0 0h792v612H0Z" transform="translate(-331.555 -586.366)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aN">
          <path d="M0 0h792v612H0Z" transform="translate(-719.975 -406.765)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aO">
          <path d="M0 0h792v612H0Z" transform="translate(-717.17 -408.308)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aP">
          <path d="M0 0h792v612H0Z" transform="translate(-717.17 -413.594)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aQ">
          <path d="M0 0h792v612H0Z" transform="translate(-719.647 -417.056)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aR">
          <path d="M0 0h792v612H0Z" transform="translate(-719.975 -423.07)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aS">
          <path d="M0 0h792v612H0Z" transform="translate(-717.178 -423.684)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aT">
          <path d="M0 0h792v612H0Z" transform="translate(-719.647 -428.99)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aU">
          <path d="M0 0h792v612H0Z" transform="translate(-719.975 -434.007)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aV">
          <path d="M0 0h792v612H0Z" transform="translate(-717.178 -437.067)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aW">
          <path d="M0 0h792v612H0Z" transform="translate(-751.91 -547.111)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aX">
          <path d="M0 0h792v612H0Z" transform="translate(-748.766 -580.271)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aY">
          <path d="M0 0h792v612H0Z" transform="translate(-501.748 -407.349)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aZ">
          <path d="M0 0h792v612H0Z" transform="translate(-501.75 -411.343)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ba">
          <path d="M0 0h792v612H0Z" transform="translate(-498.159 -415.35)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bb">
          <path d="M0 0h792v612H0Z" transform="translate(-501.75 -423.349)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bc">
          <path d="M0 0h792v612H0Z" transform="translate(-286.837 -321.151)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bd">
          <path d="M0 0h792v612H0Z" transform="translate(-286.838 -325.145)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="be">
          <path d="M0 0h792v612H0Z" transform="translate(-283.248 -329.152)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bf">
          <path d="M0 0h792v612H0Z" transform="translate(-286.838 -337.15)" />
        </clipPath>
      </defs>
      <path d="M0 572.565h708.583V0H0Z" fill="#95c48b" />
      <path
        d="M295.36 214.332v20.003h-1.915v.19h-.048l-.046 10.53h26.081l-.096-3.445h3.493v-6.508h13.447v1.721h6.653v11.248h.142v8.47h45.704v-6.795h4.929v8.901h.528v13.11h26.703v-22.011h3.445v.333l41.3.097-.096-15.697h-2.536v-.192h-38.81l.046.527h-2.967l.095-27.564h2.968l-.096 7.225h61.83V198.54h-61.83v5.695h-6.27v-7.37h-71.975v10.386h-3.063v-1.628h-.24v8.613l-1.53.048v-2.87h-4.978v2.87h-13.445v-8.661h-3.351v-1.962h-26.081v10.575h.046v.144z"
        fill="#71c32d"
        stroke="#000"
        strokeWidth="2"
      />
      <BuildingDisplay
        campus="CEP"
        building="A"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="M295.36 214.332v20.003h-1.915v.19h-.048l-.046 10.53h26.081l-.096-3.445h3.493v-6.508h13.447v1.721h6.653v11.248h.142v8.47h45.704v-6.795h4.929v8.901h.528v13.11h26.703v-22.011h3.445v.333l41.3.097-.096-15.697h-2.536v-.192h-38.81l.046.527h-2.967l.095-27.564h2.968l-.096 7.225h61.83V198.54h-61.83v5.695h-6.27v-7.37h-71.975v10.386h-3.063v-1.628h-.24v8.613l-1.53.048v-2.87h-4.978v2.87h-13.445v-8.661h-3.351v-1.962h-26.081v10.575h.046v.144z"
      />
      <path
        d="m425.194 376.462 55.99-.813.287 21.774-55.944.862Z"
        fill="#74c32c"
        stroke="#000"
        strokeWidth="2"
        // Building V
      />
      <path
        d="M589.53 233.132v27.71h-6.317v4.306h6.223v44.888h24.072v-76.808z"
        fill="#71c32d"
        stroke="#000"
        strokeWidth="2"
        // Building W
      />
      <path
        d="M136.58 70.238v39.312h5.967l-7.494 7.494v31.247h-6.544v9.796H75.323v3.808h-6.702v-13.907h4.414V86.22h1.08v-5.87h-1.172V70.12h19.851l6.427-6.428 1.484 1.484v4.859z"
        fill="#74c32c"
        stroke="#000000"
        strokeWidth="2"
      />
      <BuildingDisplay
        campus="CEP"
        building="T"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="M136.58 70.238v39.312h5.967l-7.494 7.494v31.247h-6.544v9.796H75.323v3.808h-6.702v-13.907h4.414V86.22h1.08v-5.87h-1.172V70.12h19.851l6.427-6.428 1.484 1.484v4.859z"
      />
      <path
        d="M140.393 107.214v-14.01h20.656v11.676h1.976v6.466h-8.981v-4.132Zm12.753 7.544h8.621v18.86h-8.621v-18.141"
        fill="#74c32c"
        stroke="#000"
        strokeWidth="2"
      />
      <path
        d="m0 0-2.506-2.424s1.482-12.394 11.182-19.399l2.424 1.616S2.425-14.683 0 0"
        transform="matrix(1.33333 0 0 -1.33333 139.135 54.334)"
        clipPath="url(#a)"
        fill="#221d1e"
      />
      <path
        d="M0 0c0-1.773-1.864-3.21-4.164-3.21h-11.933c-2.3 0-4.164 1.437-4.164 3.21v33.555c0 1.773 1.864 3.21 4.164 3.21h11.933c2.3 0 4.164-1.437 4.164-3.21z"
        transform="matrix(1.33333 0 0 -1.33333 224.749 161.854)"
        clipPath="url(#b)"
        fill="#d3d4d4"
      />
      <path
        d="M0 0a9.253 9.253 0 0 0 9.253 9.253h34.678v20.114a9.252 9.252 0 0 1-9.253 9.252H-6.475c-5.111 0-9.254-4.142-9.254-9.252v-70.42c0-5.109 4.143-9.252 9.254-9.252H0Z"
        transform="matrix(1.33333 0 0 -1.33333 68.62 76.028)"
        clipPath="url(#c)"
        fill="#d3d4d4"
      />
      <path
        d="M0 0v-69.358s-6.246-3.801-5.706-1.184l-.394 4.235h-34.744v-16.726l34.708-1.076s-.413 8.708 4.594 4.378c0 0 3.559-6.649 2.694-20.497L0-102.557l.18-23.439 63.098-1.112s6.502.317 6.174-9.834c0 0 .412-2.842-6.712-2.37l.143-30.758s3.832.534 5.599-.253c0 0 2.05-1.714.782-6.353 0 0-.26-5.272-3.585-6.982 0 0-7.672-4.393-10.399-4.613a2.192 2.192 0 0 0-.399.002c-2.266.278 2.439-4.486 2.439-4.486s1.016 1.244 18.413 1.492l26.129.159v4.845h-19.92s-7.228.647-7.886 7.789l.492 7.467s2.48 4.276 8.471 5.275l8.721-.467.755 6.712h-9.763s-6.655-.25-8.255 6.82l-.217 20.027s2.512 6.118 6.39 6.355l31.624 1.804.177 8.782s-1.419-1.026-1.448 11.738l-.131 32.481s.51 4.778 6.209 4.164c0 0 1.904-.926 8.52-6.173l3.393 4.676s-17.306 11.467-17.763 18.932c0 0-2.115 9.379 6.03 9.735 0 0 3.885.364 4.701-5.455L155.7-32.676l.324 19.131s-20.438 8.932-24.946 9.582l1.364-16.151-14.643-13.782s-4.18-2.446-6.354 2.117c0 0-.599 27.089 1.616 31.586l-8.543-.037.395-5.204-.216-106.994s-1.268-6.064-5.957-6.389l-9.871-.681s-4.408.956-6.449 5.16c0 0-1.762 3.874-.774 9.909 0 0 .536 1.764 2.45 1.764h8.184s2.046.35 2.046 2.584v5.743h-1.831l-.215-4.056h-4.991v-1.149h-6.497l.127 1.149-5.186-.107-.107-15.183s-.964-7.045-7.861-7.122l-44.075.077s-8.651-.113-14.532 9.414c0 0-2.624 4.799-2.471 14.105l-.369 6.246s.833 2.506 2.836 3.158l4.88.144.001-19.599 53.73-.251.754 56.746s-.163 3.185-3.625 3.23l-41.133.539.071 4.02s-.381 1.088 1.258 1.149l4.773.179-.108 34.493-4.236.035s-1.257.702-1.076 1.794l.179 4.738-5.276-.036.216-4.414s.18-2.013-2.333-2.01l-3.913-.036-.249-34.743 5.67.072s-1.028-2.943-3.088-2.98l-6.066-.028s-3.304.033-4.054 4.335l.214 34.133V.452z"
        transform="matrix(1.33333 0 0 -1.33333 490.468 178.845)"
        clipPath="url(#d)"
        fill="#d3d4d4"
      />
      <path
        d="M0 0s-3.327.08-2.941-3.694c0 0 2.568-21.161 2.098-26.853 0 0 1.21-5.695-10.604-18.245v3.579h-4.415s10.092 8.182 11.384 11.86c0 0 1.844 6.957-.028 16.999 0 0-.609 16.977-5.652 16.982z"
        transform="matrix(1.33333 0 0 -1.33333 508.843 345.81)"
        clipPath="url(#e)"
        fill="#d3d4d4"
      />
      <path
        d="M410.692 442.84h85.712v-37.857h-85.712zM698.5 179.917H180.697v-9.428H698.5zM202.955 15.953H30.244V6.525h172.71z"
        fill="#d3d4d4"
      />
      <path
        d="m0 0 .43-7.322s.915-17.343.956-20.532c0 0 .424-15.988-1.785-26.098 0 0-2.995-18.981-3.362-24.077 0 0-2.109-37.621-1.509-44.564.599-6.944-.447-23.852-.935-37.703 0 0-.774-27.414-1.686-31.258 0 0 .209-5.621-6.071-8.76 0 0-29.167-3.619-50.554-1.126v-5.822s34.154-1.427 49.908-.122c0 0 6.619.126 6.496-6.246l-.287-14.859s-.616-5.962 3.661-10.409c0 0 5.972-11.155 27.314-11.307 0 0 67.411 5.573 85.101 7.468l99.599 10.177s109.121 11.139 117.525 14.309l-1.126 6.342-25.986-4.556s-6.223 1.36-8.711 4.43c0 0-6.337 7.432-4.317 14.198 0 0-.212 2.811 8.783 2.914l-15.496 12.555s.109-3.05-4.162-3.696l-5.494-.647-.001-4.853s3.52-.314 4.669-1.965c0 0 4.319-3.13 1.328-19.097 0 0-1.363-8.35-11.559-8.219l-52.953-6.01-105.538-10.95-49.169-5.058s-36.571-3.105-46.186.143c0 0-13.14 1.823-11.564 21.485l3.718 87.389 1.598 47.347s-.768 8.54 2.066 8.47l5.349-.144.215-6.854h32.554v13.243H6.389s-2.94-1.061-2.305 5.097l2.305 14.514s-.092 2.726 5.025 2.786l8.327-.18.036 10.122s-3.618 4.662-.431 9.439l-.18 11.019-8.506.144s-4.591-.4-4.271 6.281L7.178.144Z"
        transform="matrix(1.33333 0 0 -1.33333 266.933 178.242)"
        clipPath="url(#f)"
        fill="#d3d4d4"
      />
      <path
        d="M0 0v53.609c0 14.07-18.737 32.699-18.737 44.354v25.01h-8.043V93.359c0-9.006 19.699-29.619 19.699-40.876V0Z"
        transform="matrix(1.33333 0 0 -1.33333 180.911 179.917)"
        clipPath="url(#g)"
        fill="#d3d4d4"
      />
      <path
        d="M151.71 47.797h-32.02V35.791h32.02zm63.91 127.406h-6.26V163.34h6.26z"
        fill="#d3d4d4"
      />
      <path
        d="M0 0s-2.273 17.844 15.911 21.963l.758-4.119S3.03 17.844 3.03-1.375L0-2.746"
        transform="matrix(1.33333 0 0 -1.33333 470.77 516.212)"
        clipPath="url(#h)"
        fill="#d3d4d4"
      />
      <path
        d="M496.687 510.94v7.883H482.61v-2.648h-8.681v-1.972h-61.082v42.363h19.703v-22.659h41.379v-1.97h8.68v-3.634h14.078v11.823h24.63V510.94Z"
        fill="#74c32c"
        stroke="#000"
        strokeWidth="2"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 68.125 28.825)"
        clipPath="url(#i)"
        fill="#1e6633"
      />
      <path d="M75.458 48.322h39.165V32.307H75.458z" fill="#1e6633" />
      <path
        d="M80.292 44.38h4.406v-1.328h-2.766v-6.579h-1.64zm9.261.125c2.375 0 4.032-1.641 4.032-4.063 0-2.39-1.657-4.047-4.032-4.047s-4.03 1.64-4.03 4.047c0 2.406 1.655 4.063 4.03 4.063zm0-1.375c-1.359 0-2.28-.953-2.28-2.688 0-1.719.921-2.672 2.28-2.672 1.375 0 2.282.953 2.282 2.672 0 1.735-.922 2.688-2.282 2.688zm7.114 1.25h1.64v-6.578h2.094l.406-1.329h-6.453v1.329h2.313zm9.39 0h1.61v-7.97h-1.22l-2.75 1.22.548 1.25 1.812-.782zm0 0"
        aria-label="LOT 1"
        fill="#fff"
      />
      <path
        d="M0 0h1.944v3.021h.327c.825 0 1.479.122 2.005.314 1.391.518 1.859 1.639 1.859 2.692 0 1.244-.553 2.132-1.575 2.596-.554.273-1.265.382-2.118.382H0Zm1.944 4.536V7.49h.413c.469 0 .81-.055 1.08-.205.469-.274.683-.739.683-1.258 0-.629-.228-1.094-.725-1.313-.256-.123-.597-.178-1.01-.178Z"
        transform="matrix(1.33333 0 0 -1.33333 65.37 46.233)"
        clipPath="url(#j)"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 58.032 80.765)"
        clipPath="url(#k)"
        fill="#0dadca"
      />
      <path d="M11.68 100.261h39.165V84.247H11.68Z" fill="#0dadca" />
      <path
        d="M16.512 96.322h4.406v-1.328h-2.766v-6.578h-1.64Zm9.261.125c2.375 0 4.032-1.64 4.032-4.062 0-2.39-1.657-4.047-4.032-4.047s-4.03 1.64-4.03 4.047c0 2.406 1.655 4.062 4.03 4.062zm0-1.375c-1.359 0-2.28-.953-2.28-2.687 0-1.719.921-2.672 2.28-2.672 1.375 0 2.282.953 2.282 2.672 0 1.734-.922 2.687-2.282 2.687zm7.114 1.25h1.64v-6.578h2.094l.406-1.328h-6.453v1.328h2.313zm6.984 0h5.75v-1.328h-3.64c.5-1.719 3.53-2.344 3.53-4.531 0-1.25-.843-2.125-2.609-2.125-1.125 0-2.078.344-2.765.656l.422 1.25c.609-.265 1.28-.531 2.078-.531.593 0 1.172.234 1.172.922 0 1.562-3.61 1.781-3.938 5.687zm0 0"
        aria-label="LOT 2"
        fill="#fff"
      />
      <path
        d="M54.563 98.172h6.922v-2.02h-4.428V93.07h3.808v-2.003h-3.808v-2.881h3.808l.639-2.02h-6.941Z"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 205.247 129.98)"
        clipPath="url(#l)"
        fill="#0dadca"
      />
      <path
        d="M201.778 147.388h6.923v-2.02h-4.428v-3.083h3.808v-2.003h-3.808v-2.881h3.808l.638-2.02h-6.941Z"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 216.84 100.925)"
        clipPath="url(#m)"
        fill="#1e6633"
      />
      <path d="M224.172 120.423h39.165v-16.015h-39.165z" fill="#1e6633" />
      <path
        d="M229.004 116.482h4.406v-1.328h-2.765v-6.578h-1.641Zm9.262.125c2.375 0 4.03-1.64 4.03-4.062 0-2.39-1.655-4.047-4.03-4.047s-4.032 1.64-4.032 4.047c0 2.406 1.657 4.062 4.032 4.062zm0-1.375c-1.36 0-2.282-.953-2.282-2.687 0-1.719.922-2.672 2.282-2.672 1.375 0 2.28.953 2.28 2.672 0 1.734-.921 2.687-2.28 2.687zm7.113 1.25h1.64v-6.578h2.094l.407-1.328h-6.454v1.328h2.313Zm7.094-.343c.718.328 1.625.468 2.375.468 2.25 0 3.265-1.078 3.265-2.484 0-.922-.5-1.594-1.422-1.781v-.016c.782-.328 1.188-.922 1.188-1.672 0-1.125-.813-2.156-2.625-2.156-1.031 0-1.953.328-2.578.656l.422 1.25c.609-.312 1.297-.53 1.922-.53.75 0 1.14.374 1.14.952 0 .719-.625 1.031-1.672 1.031h-.875v1.282h1.11c.39 0 .703.03.953.11.469.14.719.437.719.874 0 .719-.5 1.11-1.688 1.11a4.94 4.94 0 0 1-1.797-.376zm0 0"
        aria-label="LOT 3"
        fill="#fff"
      />
      <path
        d="M0 0h1.944v3.021h.327c.825 0 1.479.122 2.005.314 1.391.518 1.859 1.639 1.859 2.692 0 1.244-.553 2.132-1.575 2.596-.554.273-1.265.382-2.118.382H0Zm1.944 4.536V7.49h.413c.469 0 .81-.055 1.08-.205.469-.274.683-.739.683-1.258 0-.629-.228-1.094-.725-1.313-.256-.123-.597-.178-1.01-.178Z"
        transform="matrix(1.33333 0 0 -1.33333 214.085 118.333)"
        clipPath="url(#n)"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 451.696 254.792)"
        clipPath="url(#o)"
        fill="#1e6633"
      />
      <path d="M459.028 274.29h39.165v-16.015h-39.165z" fill="#1e6633" />
      <path
        d="M463.86 270.35h4.406v-1.328H465.5v-6.579h-1.64Zm9.265.125c2.375 0 4.031-1.641 4.031-4.063 0-2.39-1.656-4.047-4.031-4.047s-4.031 1.64-4.031 4.047c0 2.406 1.656 4.063 4.031 4.063zm0-1.375c-1.36 0-2.281-.953-2.281-2.688 0-1.719.922-2.672 2.281-2.672 1.375 0 2.281.953 2.281 2.672 0 1.735-.922 2.688-2.281 2.688zm7.11 1.25h1.64v-6.578h2.094l.406-1.329h-6.453v1.329h2.312zm7.046-.344c.578.297 1.282.469 2.172.469 2.328 0 3.328-1.22 3.328-2.72 0-.812-.422-1.671-1.422-2.093-.406-.172-.937-.25-1.546-.25h-.313v-1.64h3l.328-1.329h-4.906v4.25h1c.672 0 1.14.032 1.469.172.5.188.656.532.656 1 0 .86-.734 1.235-1.688 1.235a3.52 3.52 0 0 1-1.625-.375zm0 0"
        aria-label="LOT 5"
        fill="#fff"
      />
      <path
        d="M0 0h1.944v3.021h.327c.825 0 1.479.122 2.005.314 1.391.518 1.859 1.639 1.859 2.692 0 1.244-.553 2.132-1.575 2.596-.554.273-1.265.382-2.118.382H0Zm1.944 4.536V7.49h.413c.469 0 .81-.055 1.08-.205.469-.274.683-.739.683-1.258 0-.629-.228-1.094-.725-1.313-.256-.123-.598-.178-1.01-.178Z"
        transform="matrix(1.33333 0 0 -1.33333 448.94 272.2)"
        clipPath="url(#p)"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 531.24 243.325)"
        clipPath="url(#q)"
        fill="#1e6633"
      />
      <path d="M538.572 262.823h39.165v-16.015h-39.165z" fill="#1e6633" />
      <path
        d="M543.406 258.88h4.407v-1.327h-2.766v-6.578h-1.64Zm9.262.126c2.375 0 4.031-1.64 4.031-4.063 0-2.39-1.656-4.047-4.031-4.047s-4.031 1.641-4.031 4.047c0 2.407 1.656 4.063 4.031 4.063zm0-1.375c-1.36 0-2.281-.953-2.281-2.688 0-1.718.922-2.672 2.281-2.672 1.375 0 2.281.954 2.281 2.672 0 1.735-.922 2.688-2.281 2.688zm7.113 1.25h1.64v-6.578h2.095l.406-1.328h-6.453v1.328h2.312zm10.344.125c1.625 0 2.828-1.063 2.828-2.781 0-1.563-1.078-2.454-2.406-2.454a3.14 3.14 0 0 0-1.828.563c.203-1.531 1.062-2.125 2.062-2.125.453 0 .922.125 1.36.328l.422-1.25a4.643 4.643 0 0 0-1.875-.39c-2.266 0-3.641 1.906-3.641 4.343 0 2.61 1.39 3.766 3.078 3.766zm.047-1.313c-.703 0-1.344-.64-1.406-2.093.28-.297.859-.516 1.312-.516.688 0 1.156.453 1.156 1.375 0 .766-.375 1.234-1.062 1.234zm0 0"
        aria-label="LOT 6"
        fill="#fff"
      />
      <path
        d="M0 0h1.944v3.021h.327c.825 0 1.479.122 2.005.314 1.391.518 1.859 1.639 1.859 2.692 0 1.244-.553 2.132-1.575 2.596-.554.273-1.265.382-2.118.382H0Zm1.944 4.536V7.49h.413c.469 0 .81-.055 1.08-.205.469-.274.683-.739.683-1.258 0-.629-.228-1.094-.725-1.313-.256-.123-.598-.178-1.01-.178Z"
        transform="matrix(1.33333 0 0 -1.33333 528.485 260.733)"
        clipPath="url(#r)"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 295.24 254.792)"
        clipPath="url(#s)"
        fill="#1e6633"
      />
      <path d="M302.572 274.29h39.165v-16.015h-39.165z" fill="#1e6633" />
      <path
        d="M307.406 270.35h4.407v-1.328h-2.766v-6.579h-1.64Zm9.262.125c2.375 0 4.031-1.641 4.031-4.063 0-2.39-1.656-4.047-4.031-4.047s-4.031 1.64-4.031 4.047c0 2.406 1.656 4.063 4.031 4.063zm0-1.375c-1.36 0-2.281-.953-2.281-2.688 0-1.719.922-2.672 2.281-2.672 1.375 0 2.281.953 2.281 2.672 0 1.735-.922 2.688-2.281 2.688zm7.113 1.25h1.64v-6.578h2.095l.406-1.329h-6.453v1.329h2.312zm7.14-1.891h3.532v1.89h1.594v-1.89h1.187v-1.312h-1.187v-4.766h-1.172l-3.953 5.047zm1.813-1.281 1.797-2.36c-.031.157-.078.86-.078 1.47v.859h-.719c-.28 0-.843.015-1 .03zm0 0"
        aria-label="LOT 4"
        fill="#fff"
      />
      <path
        d="M0 0h1.944v3.021h.327c.825 0 1.479.122 2.005.314 1.391.518 1.859 1.639 1.859 2.692 0 1.244-.553 2.132-1.575 2.596-.554.273-1.265.382-2.118.382H0Zm1.944 4.536V7.49h.413c.469 0 .81-.055 1.08-.205.469-.274.683-.739.683-1.258 0-.629-.228-1.094-.725-1.313-.256-.123-.597-.178-1.01-.178Z"
        transform="matrix(1.33333 0 0 -1.33333 292.485 272.2)"
        clipPath="url(#t)"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 525.64 284.125)"
        clipPath="url(#u)"
        fill="#0dadca"
      />
      <path
        d="M522.17 301.533h6.924v-2.02h-4.428v-3.083h3.808v-2.002h-3.808v-2.882h3.808l.638-2.02h-6.941Z"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 434.323 407.517)"
        clipPath="url(#v)"
        fill="#1e6633"
      />
      <path d="M441.655 427.014h44V411h-44z" fill="#1e6633" />
      <path
        d="M446.486 423.075h4.406v-1.328h-2.766v-6.578h-1.64zm9.265.125c2.375 0 4.032-1.64 4.032-4.063 0-2.39-1.657-4.046-4.032-4.046s-4.03 1.64-4.03 4.046c0 2.407 1.655 4.063 4.03 4.063zm0-1.375c-1.359 0-2.28-.953-2.28-2.688 0-1.718.921-2.671 2.28-2.671 1.375 0 2.282.953 2.282 2.671 0 1.735-.922 2.688-2.282 2.688zm7.114 1.25h1.64v-6.578h2.094l.406-1.328h-6.453v1.328h2.313zm9.386 0h1.61v-7.969h-1.219l-2.75 1.219.547 1.25 1.812-.781zm6.48.125c1.829 0 2.923-1.406 2.923-4.063 0-2.656-1.094-4.046-2.922-4.046s-2.906 1.39-2.906 4.046c0 2.657 1.078 4.063 2.906 4.063zm0-1.375c-.905 0-1.187-.89-1.187-2.688 0-1.78.282-2.671 1.203-2.671.907 0 1.188.89 1.188 2.671 0 1.797-.281 2.688-1.203 2.688zm0 0"
        aria-label="LOT 10"
        fill="#fff"
      />
      <path
        d="M0 0h1.944v3.021h.327c.825 0 1.479.122 2.005.314 1.391.518 1.859 1.639 1.859 2.692 0 1.244-.553 2.132-1.575 2.596-.554.273-1.265.382-2.118.382H0Zm1.944 4.536V7.49h.413c.469 0 .81-.055 1.08-.205.469-.274.683-.739.683-1.258 0-.629-.228-1.094-.725-1.313-.256-.123-.598-.178-1.01-.178Z"
        transform="matrix(1.33333 0 0 -1.33333 431.568 424.925)"
        clipPath="url(#w)"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 580.732 369.697)"
        clipPath="url(#x)"
        fill="#1e6633"
      />
      <path d="M588.064 389.195h39.165V373.18h-39.165z" fill="#1e6633" />
      <path
        d="M592.895 385.252h4.406v-1.328h-2.766v-6.578h-1.64Zm9.265.125c2.375 0 4.031-1.64 4.031-4.063 0-2.39-1.656-4.046-4.03-4.046-2.376 0-4.032 1.64-4.032 4.046 0 2.407 1.656 4.063 4.031 4.063zm0-1.375c-1.36 0-2.281-.953-2.281-2.688 0-1.718.922-2.671 2.281-2.671 1.375 0 2.281.953 2.281 2.671 0 1.735-.921 2.688-2.28 2.688zm7.113 1.25h1.641v-6.578h2.094l.406-1.328h-6.453v1.328h2.312zm10.153.125c2 0 2.984-1.031 2.984-2.375 0-.984-.61-1.563-1.422-1.89v-.016c.547-.297 1.172-.797 1.172-1.766 0-1.031-.89-2.062-2.64-2.062-1.72 0-2.782.937-2.782 2.171 0 .922.547 1.391 1.11 1.735v.015c-.766.344-1.313 1.032-1.313 1.97 0 1.296 1.016 2.218 2.89 2.218zm.094-1.25c-.672 0-1.266-.375-1.266-1.14 0-.579.422-1 .812-1.188.704.219 1.625.484 1.625 1.344 0 .625-.5.984-1.171.984zm.234-3.578c-.656-.188-1.281-.438-1.281-1.172 0-.484.375-.86.937-.86.672 0 1.031.454 1.031.97 0 .515-.312.827-.687 1.062zm0 0"
        aria-label="LOT 8"
        fill="#fff"
      />
      <path
        d="M0 0h1.944v3.021h.327c.825 0 1.479.122 2.005.314 1.391.518 1.859 1.639 1.859 2.692 0 1.244-.553 2.132-1.575 2.596-.554.273-1.265.382-2.118.382H0Zm1.944 4.536V7.49h.413c.469 0 .81-.055 1.08-.205.469-.274.683-.739.683-1.258 0-.629-.228-1.094-.725-1.313-.256-.123-.598-.178-1.01-.178Z"
        transform="matrix(1.33333 0 0 -1.33333 577.976 387.105)"
        clipPath="url(#y)"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 652.002 196.864)"
        clipPath="url(#z)"
        fill="#1e6633"
      />
      <path d="M659.335 216.361H698.5v-16.014h-39.165z" fill="#1e6633" />
      <path
        d="M664.168 212.42h4.406v-1.328h-2.765v-6.578h-1.641Zm9.262.125c2.375 0 4.031-1.64 4.031-4.063 0-2.39-1.656-4.046-4.031-4.046s-4.032 1.64-4.032 4.046c0 2.407 1.657 4.063 4.032 4.063zm0-1.375c-1.36 0-2.282-.953-2.282-2.688 0-1.718.922-2.671 2.282-2.671 1.375 0 2.281.953 2.281 2.671 0 1.735-.922 2.688-2.281 2.688zm7.113 1.25h1.64v-6.578h2.094l.407-1.328h-6.454v1.328h2.313zm9.328.125c2.422 0 3.656-1.594 3.656-4.375 0-2.625-1.28-3.734-3.015-3.734-1.625 0-2.828 1.078-2.828 2.765 0 1.703 1.14 2.453 2.437 2.453.625 0 1.219-.172 1.672-.515h.031c-.187 1.437-.828 2.093-2 2.093-.531 0-1.078-.171-1.515-.39l-.407 1.281a4.54 4.54 0 0 0 1.97.422zm.64-4.188c-.718 0-1.14-.468-1.14-1.296 0-.797.438-1.329 1.11-1.329.828 0 1.359.86 1.374 2.016-.296.313-.812.61-1.343.61zm0 0"
        aria-label="LOT 9"
        fill="#fff"
      />
      <path
        d="M0 0h1.944v3.021h.327c.825 0 1.479.122 2.005.314 1.391.518 1.859 1.639 1.859 2.692 0 1.244-.553 2.132-1.575 2.596-.554.273-1.265.382-2.118.382H0Zm1.944 4.536V7.49h.413c.469 0 .81-.055 1.08-.205.469-.274.683-.739.683-1.258 0-.629-.228-1.094-.725-1.313-.256-.123-.598-.178-1.01-.178Z"
        transform="matrix(1.33333 0 0 -1.33333 649.247 214.272)"
        clipPath="url(#A)"
        fill="#fff"
      />
      <path
        d="M0 0a8.431 8.431 0 0 1-8.43-8.43c0-.361.03-.705.073-1.051.72-6.58 7.814-14.173 7.814-14.173.126-.14.242-.228.361-.294h.007l.235-.073.235.073h.008c.116.066.24.154.366.294 0 0 6.992 7.6 7.697 14.188.036.338.066.682.066 1.036A8.431 8.431 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 652.002 129.725)"
        clipPath="url(#B)"
        fill="#1e6633"
      />
      <path d="M659.335 149.222H698.5v-16.014h-39.165Z" fill="#1e6633" />
      <path
        d="M664.168 145.283h4.406v-1.328h-2.765v-6.578h-1.641Zm9.262.125c2.375 0 4.031-1.64 4.031-4.062 0-2.39-1.656-4.047-4.031-4.047s-4.032 1.64-4.032 4.047c0 2.406 1.657 4.062 4.032 4.062zm0-1.375c-1.36 0-2.282-.953-2.282-2.687 0-1.719.922-2.672 2.282-2.672 1.375 0 2.281.953 2.281 2.672 0 1.734-.922 2.687-2.281 2.687zm7.113 1.25h1.64v-6.578h2.094l.407-1.328h-6.454v1.328h2.313zm7.594 0h1.703c.531-2.719 1.515-5.297 3.406-7.36v-.546h-5.844l.391 1.328h3.25c-1.031 1.297-2.266 3.531-2.906 6.578zm0 0"
        aria-label="LOT 7"
        fill="#fff"
      />
      <path
        d="M0 0h1.944v3.021h.327c.825 0 1.479.122 2.005.314 1.391.518 1.859 1.639 1.859 2.692 0 1.244-.553 2.132-1.575 2.596-.554.273-1.265.382-2.118.382H0Zm1.944 4.536V7.49h.413c.469 0 .81-.055 1.08-.205.469-.274.683-.739.683-1.258 0-.629-.228-1.094-.725-1.313-.256-.123-.598-.178-1.01-.178Z"
        transform="matrix(1.33333 0 0 -1.33333 649.247 147.133)"
        clipPath="url(#C)"
        fill="#fff"
      />
      <path
        d="M0 0a8 8 0 1 1 0 16.001A8 8 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 58.314 242.94)"
        clipPath="url(#D)"
        fill="#206e38"
      />
      <path
        d="M0 0a.395.395 0 0 0-.402.43c.069.948.124 1.483.241 2.434.024.204.2.347.461.347h5.885c.264 0 .438-.16.464-.362.127-1.003.171-1.442.242-2.411C6.911.162 6.724 0 6.513 0Zm1.411 3.841a.269.269 0 1 0 0 .539h3.678a.269.269 0 1 0 0-.539zm4.295-6.037a.591.591 0 1 0 1.183 0 .591.591 0 0 0-1.183 0m-6.118 0a.592.592 0 1 0 1.184-.002.592.592 0 0 0-1.184.002m6.116-1.986v-.71c0-.326.266-.594.592-.594.329 0 .595.268.595.594 0 .184-.008.71-.008.71h.784V.03s-.216 2.134-.305 2.98c-.099.945-.316 1.221-.982 1.534-.951.448-2.017.636-3.142.636-1.124 0-2.189-.188-3.143-.636-.663-.313-.881-.589-.981-1.534-.09-.846-.305-2.98-.305-2.98v-4.212h.785s-.009-.526-.009-.71a.595.595 0 0 1 1.188 0v.71z"
        transform="matrix(1.33333 0 0 -1.33333 54.18 231.993)"
        clipPath="url(#E)"
        fill="#fff"
      />
      <path
        d="M0 0a8 8 0 1 1 0 16.001A8 8 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 58.45 301.54)"
        clipPath="url(#F)"
        fill="#e6431f"
      />
      <path
        d="M0 0a.395.395 0 0 0-.402.43c.069.948.124 1.483.241 2.434.024.204.2.347.461.347h5.885c.264 0 .438-.16.464-.362.127-1.003.171-1.442.242-2.411C6.911.162 6.724 0 6.513 0Zm1.411 3.841a.269.269 0 1 0 0 .539h3.678a.269.269 0 1 0 0-.539zm4.295-6.037a.591.591 0 1 0 1.183 0 .591.591 0 0 0-1.183 0m-6.118 0a.592.592 0 1 0 1.184-.002.592.592 0 0 0-1.184.002m6.116-1.986v-.71c0-.326.266-.594.592-.594.329 0 .595.268.595.594 0 .184-.008.71-.008.71h.784V.03s-.216 2.134-.305 2.98c-.099.945-.316 1.221-.982 1.534-.951.448-2.017.636-3.142.636-1.124 0-2.189-.188-3.143-.636-.663-.313-.881-.589-.981-1.534-.09-.846-.305-2.98-.305-2.98v-4.212h.785s-.009-.526-.009-.71a.595.595 0 0 1 1.188 0v.71z"
        transform="matrix(1.33333 0 0 -1.33333 54.316 290.593)"
        clipPath="url(#G)"
        fill="#fff"
      />
      <path
        d="M0 0a8 8 0 1 1 0 16A8 8 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 80.8 127.606)"
        clipPath="url(#H)"
        fill="#fff"
      />
      <path
        d="M0 0a8 8 0 0 1-8-8.001c0-3.283 1.98-6.1 4.81-7.333l.105 2.017c0 1.607-1.19 1.095-1.19 2.219 0 .627.02 1.942.02 2.926 0 2.626 1.114 5.167 1.39 5.735.275.564.923 1.184.931.587 0-.862.035-10.893.035-10.893l.121-3.051A8.03 8.03 0 0 1 0-16c.336 0 .662.026.987.067l.266 5.127a2.565 2.565 0 0 0-1.56 1.082c-.434.646.333 6.38.333 6.38h.498v-5.381h.495v5.381h.538v-5.381h.495v5.381h.558v-5.381h.495v5.381h.383s.764-5.734.332-6.38a2.575 2.575 0 0 0-1.542-1.079.111.111 0 0 1-.023-.009l.252-4.783A8 8 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 80.8 106.273)"
        clipPath="url(#I)"
        fill="#f7980f"
      />
      <path
        d="M0 0a6.938 6.938 0 1 1 0 13.876A6.938 6.938 0 1 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 412.128 231.111)"
        clipPath="url(#J)"
        fill="#fff"
      />
      <path
        d="M0 0a6.936 6.936 0 0 1-2.766-13.299l.09 1.75c0 1.393-1.032.949-1.032 1.924 0 .544.018 1.684.018 2.538 0 2.277.966 4.481 1.205 4.973.238.49.801 1.027.808.51 0-.748.03-9.448.03-9.448l.105-2.646A6.95 6.95 0 0 1 0-13.876c.291 0 .574.022.856.057l.231 4.447a2.22 2.22 0 0 0-1.353.939C-.643-7.873.022-2.9.022-2.9h.432v-4.667h.43V-2.9h.466v-4.667h.429V-2.9h.485v-4.667h.429V-2.9h.332s.662-4.973.288-5.533a2.238 2.238 0 0 0-1.338-.937c-.01-.002-.02-.007-.02-.007l.219-4.148A6.937 6.937 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 412.128 212.61)"
        clipPath="url(#K)"
        fill="#f7980f"
      />
      <path
        d="M0 0a8 8 0 1 1 0 16A8 8 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 58.451 331.416)"
        clipPath="url(#L)"
        fill="#fff"
      />
      <path
        d="M0 0a8 8 0 0 1-8-8.001c0-3.283 1.98-6.1 4.81-7.333l.105 2.017c0 1.607-1.19 1.095-1.19 2.219 0 .627.02 1.942.02 2.926 0 2.626 1.114 5.167 1.39 5.735.275.564.923 1.184.931.587 0-.862.035-10.893.035-10.893l.121-3.051A8.03 8.03 0 0 1 0-16c.336 0 .662.026.987.067l.266 5.127a2.565 2.565 0 0 0-1.56 1.082c-.434.646.333 6.38.333 6.38h.498v-5.381h.495v5.381h.538v-5.381h.495v5.381h.558v-5.381h.495v5.381h.383s.764-5.734.332-6.38a2.575 2.575 0 0 0-1.542-1.079.111.111 0 0 1-.023-.009l.252-4.783A8 8 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 58.451 310.082)"
        clipPath="url(#M)"
        fill="#f7980f"
      />
      <path
        d="M0 0c4.628 0 8.381 3.682 8.381 8.226 0 4.542-3.753 8.225-8.381 8.225-4.629 0-8.379-3.683-8.379-8.225C-8.379 3.682-4.629 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 474.94 346.651)"
        clipPath="url(#N)"
        fill="#206e38"
      />
      <path
        d="M0 0a.41.41 0 0 0-.421.443c.072.974.13 1.524.252 2.501.026.21.21.358.484.358h6.164c.277 0 .459-.165.486-.373.133-1.031.179-1.482.254-2.479.02-.283-.175-.45-.397-.45Zm1.478 3.949a.278.278 0 0 0-.283.276.28.28 0 0 0 .283.278h3.853a.28.28 0 0 0 .283-.278.278.278 0 0 0-.283-.276zm4.499-6.206c0 .335.279.607.619.607a.614.614 0 0 0 .622-.607.616.616 0 0 0-.622-.61.616.616 0 0 0-.619.61m-6.408 0c0 .335.278.607.621.607.343 0 .62-.272.62-.607a.615.615 0 0 0-.62-.61.616.616 0 0 0-.621.61m6.406-2.042v-.73c0-.336.279-.612.621-.612.344 0 .623.276.623.612 0 .188-.009.73-.009.73h.821v4.33s-.226 2.193-.319 3.064c-.104.971-.331 1.255-1.028 1.577-.997.461-2.114.654-3.292.654-1.177 0-2.294-.193-3.292-.654-.695-.322-.924-.606-1.028-1.577-.094-.871-.32-3.064-.32-3.064v-4.33h.823s-.01-.542-.01-.73c0-.336.279-.612.622-.612.344 0 .623.276.623.612v.73z"
        transform="matrix(1.33333 0 0 -1.33333 470.609 335.396)"
        clipPath="url(#O)"
        fill="#fff"
      />
      <path
        d="M0 0c4.628 0 8.381 3.682 8.381 8.226 0 4.542-3.753 8.225-8.381 8.225-4.629 0-8.379-3.683-8.379-8.225C-8.379 3.682-4.629 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 108.516 73.738)"
        clipPath="url(#P)"
        fill="#206e38"
      />
      <path
        d="M0 0a.41.41 0 0 0-.421.443c.072.974.13 1.524.252 2.501.026.21.21.358.484.358h6.164c.277 0 .459-.165.486-.373.133-1.031.179-1.482.254-2.479.02-.283-.175-.45-.397-.45Zm1.478 3.949a.278.278 0 0 0-.283.276.28.28 0 0 0 .283.278h3.853a.28.28 0 0 0 .283-.278.278.278 0 0 0-.283-.276zm4.499-6.206c0 .335.279.607.619.607a.614.614 0 0 0 .622-.607.616.616 0 0 0-.622-.61.616.616 0 0 0-.619.61m-6.408 0c0 .335.278.607.621.607.343 0 .62-.272.62-.607a.615.615 0 0 0-.62-.61.616.616 0 0 0-.621.61m6.406-2.042v-.73c0-.336.279-.612.621-.612.344 0 .623.276.623.612 0 .188-.009.73-.009.73h.821v4.33s-.226 2.193-.319 3.064c-.104.971-.331 1.255-1.028 1.577-.997.461-2.114.654-3.292.654-1.177 0-2.294-.193-3.292-.654-.695-.322-.924-.606-1.028-1.577-.094-.871-.32-3.064-.32-3.064v-4.33h.823s-.01-.542-.01-.73c0-.336.279-.612.622-.612.344 0 .623.276.623.612v.73z"
        transform="matrix(1.33333 0 0 -1.33333 104.185 62.483)"
        clipPath="url(#Q)"
        fill="#fff"
      />
      <path
        d="M0 0c4.628 0 8.381 3.682 8.381 8.226 0 4.542-3.753 8.225-8.381 8.225-4.629 0-8.379-3.683-8.379-8.225C-8.379 3.682-4.629 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 353.755 194.197)"
        clipPath="url(#R)"
        fill="#e6431f"
      />
      <path
        d="M0 0a.41.41 0 0 0-.421.443c.072.974.13 1.524.252 2.501.026.21.21.358.484.358h6.164c.277 0 .459-.165.486-.373.133-1.031.179-1.482.254-2.479.02-.283-.175-.45-.397-.45Zm1.478 3.949a.278.278 0 0 0-.283.276.28.28 0 0 0 .283.278h3.853a.28.28 0 0 0 .283-.278.278.278 0 0 0-.283-.276zm4.499-6.206c0 .335.279.607.619.607a.614.614 0 0 0 .622-.607.616.616 0 0 0-.622-.61.616.616 0 0 0-.619.61m-6.408 0c0 .335.278.607.621.607.343 0 .62-.272.62-.607a.615.615 0 0 0-.62-.61.616.616 0 0 0-.621.61m6.406-2.042v-.73c0-.336.279-.612.621-.612.344 0 .623.276.623.612 0 .188-.009.73-.009.73h.821v4.33s-.226 2.193-.319 3.064c-.104.971-.331 1.255-1.028 1.577-.997.461-2.114.654-3.292.654-1.177 0-2.294-.193-3.292-.654-.695-.322-.924-.606-1.028-1.577-.094-.871-.32-3.064-.32-3.064v-4.33h.823s-.01-.542-.01-.73c0-.336.279-.612.622-.612.344 0 .623.276.623.612v.73z"
        transform="matrix(1.33333 0 0 -1.33333 349.424 182.942)"
        clipPath="url(#S)"
        fill="#fff"
      />
      <path
        d="M0 0c4.628 0 8.381 3.682 8.381 8.226 0 4.542-3.753 8.225-8.381 8.225-4.629 0-8.379-3.683-8.379-8.225C-8.379 3.682-4.629 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 153.72 86.165)"
        clipPath="url(#T)"
        fill="#e6431f"
      />
      <path
        d="M0 0a.41.41 0 0 0-.421.443c.072.974.13 1.524.252 2.501.026.21.21.358.484.358h6.164c.277 0 .459-.165.486-.373.133-1.031.179-1.482.254-2.479.02-.283-.175-.45-.397-.45Zm1.478 3.949a.278.278 0 0 0-.283.277c0 .154.126.277.283.277h3.853a.279.279 0 0 0 .283-.277.278.278 0 0 0-.283-.277zm4.499-6.206c0 .335.279.607.619.607a.614.614 0 0 0 .622-.607.616.616 0 0 0-.622-.61.616.616 0 0 0-.619.61m-6.408 0c0 .335.278.607.621.607.343 0 .62-.272.62-.607a.615.615 0 0 0-.62-.61.616.616 0 0 0-.621.61m6.406-2.042v-.73c0-.336.279-.612.621-.612.344 0 .623.276.623.612 0 .188-.009.73-.009.73h.821v4.33s-.226 2.193-.319 3.064c-.104.971-.331 1.255-1.028 1.577-.997.461-2.114.654-3.292.654-1.177 0-2.294-.193-3.292-.654-.695-.322-.924-.606-1.028-1.577-.094-.871-.32-3.064-.32-3.064v-4.33h.823s-.01-.542-.01-.73c0-.336.279-.612.622-.612.344 0 .623.276.623.612v.73z"
        transform="matrix(1.33333 0 0 -1.33333 149.39 74.91)"
        clipPath="url(#U)"
        fill="#fff"
      />
      <path
        d="M0 0a3.137 3.137 0 0 0-1.348-.297c-1.425 0-2.253.861-2.253 2.056 0 1.184.941 2.125 2.345 2.125.498 0 .919-.099 1.165-.217v-.514c-.33.155-.688.261-1.151.261-1.068 0-1.698-.719-1.698-1.63 0-.948.638-1.611 1.656-1.611.434 0 .786.112 1.108.267z"
        transform="matrix(1.33333 0 0 -1.33333 386.4 177.655)"
        clipPath="url(#V)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.442l1.797-4.095h-.667l-.456 1.072h-1.79l-.442-1.072h-.653zm.927-2.571L.491-1.505c-.134.347-.203.532-.26.681H.218c-.05-.149-.127-.341-.267-.687l-.435-1.06z"
        transform="matrix(1.33333 0 0 -1.33333 389.23 172.509)"
        clipPath="url(#W)"
        fill="#4f4c4d"
      />
      <path
        d="M393.134 172.525h3.116l-.244.603h-2.04v1.752h2.013v.61h-2.013v1.875h2.321v.604h-3.153Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.604l2.091-2.404c.274-.309.47-.557.624-.762h.015c-.015.223-.015.421-.015.713V0h.625v-4.083h-.548L1.229-1.586c-.26.297-.45.533-.612.737H.604c.013-.192.02-.39.02-.681v-2.553H0Z"
        transform="matrix(1.33333 0 0 -1.33333 397.618 172.525)"
        clipPath="url(#X)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.442l1.797-4.095h-.667l-.456 1.072h-1.79l-.442-1.072h-.653zm.927-2.571L.491-1.505c-.134.347-.203.532-.26.681H.218c-.05-.149-.127-.341-.267-.687l-.435-1.06z"
        transform="matrix(1.33333 0 0 -1.33333 407.896 172.509)"
        clipPath="url(#Y)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.674l1.053-2.404c.148-.334.259-.613.358-.867H2.1c.09.242.196.521.357.88L3.503 0h.674L2.324-4.107h-.477Z"
        transform="matrix(1.33333 0 0 -1.33333 410.761 172.525)"
        clipPath="url(#Z)"
        fill="#4f4c4d"
      />
      <path
        d="M417.24 172.525h3.117l-.244.603h-2.04v1.752h2.013v.61h-2.013v1.875h2.321v.604h-3.153ZM261.81 369.576v-2.5l.483.195v1.639h1.4v-1.602h.49v1.602h1.981v.666Zm0-3.422v-2.493l.483.195v1.632h1.4v-1.61h.49v1.61h1.5v-1.858h.481v2.524Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c.114.191.223.472.223.814 0 .365-.129.702-.481.702-.738 0-.649-1.617-1.63-1.617-.471 0-.858.41-.858 1.123 0 .348.08.657.159.837h.401a1.93 1.93 0 0 1-.183-.82c0-.309.113-.618.436-.618.694 0 .62 1.623 1.641 1.623.555 0 .891-.505.891-1.23C.599.388.486.034.342-.208z"
        transform="matrix(1.33333 0 0 -1.33333 265.431 362.537)"
        clipPath="url(#aa)"
        fill="#4f4c4d"
      />
      <path
        d="M262.293 357.857v1.422h-.484v-3.646l.484.188v1.369h3.872v.667Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0a1.44 1.44 0 0 0-.56-.101h-2.082v.5h2.047c.168 0 .322.022.446.084.287.129.446.41.446.842 0 .438-.159.719-.446.848a1.12 1.12 0 0 1-.461.084h-2.032v.495H-.56c.218 0 .411-.034.569-.113.437-.196.664-.651.664-1.314C.673.646.441.197 0 0"
        transform="matrix(1.33333 0 0 -1.33333 265.332 354.876)"
        clipPath="url(#ab)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.932c0 .786.387 1.14.828 1.14.317 0 .58-.179.699-.477h.01c.084.421.391.713.793.713.535 0 .936-.438.936-1.269V0Zm1.418.876c0 .455-.203.697-.53.697-.303 0-.521-.203-.521-.685V.5h1.051Zm1.482.135c0 .483-.164.786-.566.786-.336 0-.55-.286-.55-.73V.5H2.9Z"
        transform="matrix(1.33333 0 0 -1.33333 261.81 349.986)"
        clipPath="url(#ac)"
        fill="#4f4c4d"
      />
      <path
        d="M261.81 345.903v-2.493l.483.195v1.632h1.4v-1.61h.49v1.61h1.5v-1.856h.481v2.522Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.836c0 .376.06.629.159.82a.8.8 0 0 0 .743.472c.451 0 .734-.281.857-.741h.011c.054.112.232.252.525.449l.971.657v-.584l-.907-.607c-.272-.174-.421-.314-.446-.421V.5h1.353V0Zm1.552.831a.999.999 0 0 1-.104.477.529.529 0 0 1-.501.303.516.516 0 0 1-.451-.236C.422 1.263.363 1.1.363.836V.5h1.189z"
        transform="matrix(1.33333 0 0 -1.33333 261.81 342.316)"
        clipPath="url(#ad)"
        fill="#4f4c4d"
      />
      <path
        d="M262.293 337.373v1.423h-.484v-3.647l.484.188v1.37h3.872v.666Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.837c0 .376.06.629.159.82a.8.8 0 0 0 .743.471c.451 0 .734-.28.857-.741h.011c.054.113.232.253.525.449l.971.657v-.584l-.907-.606c-.272-.174-.421-.315-.446-.421V.5h1.353V0Zm1.552.831a1 1 0 0 1-.104.478.529.529 0 0 1-.501.303.518.518 0 0 1-.451-.236C.422 1.264.363 1.101.363.837V.5h1.189z"
        transform="matrix(1.33333 0 0 -1.33333 261.81 332.82)"
        clipPath="url(#ae)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.971c0 1.32.674 1.982 1.616 1.982.952 0 1.65-.69 1.65-2.016V0Zm2.905.943c0 1.095-.6 1.483-1.299 1.483C.883 2.426.363 1.948.363.932V.5h2.542z"
        transform="matrix(1.33333 0 0 -1.33333 261.81 328.655)"
        clipPath="url(#af)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.758c.36 0 .612-.05.815-.149a.944.944 0 0 0 .555-.897c0-.377-.185-.738-.645-.922a2.147 2.147 0 0 0-.77-.119H.5v-1.179H0Zm.747-1.725c.224 0 .387.034.505.089.242.109.354.313.354.59 0 .258-.112.466-.331.58-.124.064-.287.104-.522.104H.5v-1.363z"
        transform="matrix(1.33333 0 0 -1.33333 196.457 448.933)"
        clipPath="url(#ag)"
        fill="#4f4c4d"
      />
      <path
        d="M200.322 448.933h2.493l-.194.483h-1.632v1.4h1.609v.49h-1.61v1.5h1.858v.482h-2.524Zm4.516.483h-1.422v-.482h3.646l-.188.482h-1.37v3.872h-.666Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.354l1.437-3.276h-.533l-.365.857H-.539l-.354-.857h-.522Zm.741-2.056-.348.852C.286-.927.23-.778.185-.659H.174c-.039-.119-.101-.272-.213-.55l-.348-.847z"
        transform="matrix(1.33333 0 0 -1.33333 208.673 448.92)"
        clipPath="url(#ah)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.561l.702-1.938c.073-.199.158-.436.225-.669h.017c.079.243.151.446.241.664L2.28-.56 2.061 0h.522l.736-1.934c.072-.197.174-.44.241-.673h.011c.068.243.135.446.214.664L4.464 0h.522L3.757-3.286h-.411l-.578 1.487c-.095.243-.174.436-.241.654H2.51c-.067-.218-.14-.396-.242-.654l-.589-1.487h-.41z"
        transform="matrix(1.33333 0 0 -1.33333 211.04 448.933)"
        clipPath="url(#ai)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.354l1.437-3.276h-.533l-.365.857H-.539l-.354-.857h-.522Zm.741-2.056-.348.852C.286-.927.23-.778.185-.659H.174c-.039-.119-.101-.272-.213-.55l-.349-.847z"
        transform="matrix(1.33333 0 0 -1.33333 219.555 448.92)"
        clipPath="url(#aj)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.561l.702-1.938c.073-.199.158-.436.225-.669h.017c.079.243.152.446.242.664L2.28-.56 2.061 0h.522l.735-1.934c.073-.197.175-.44.242-.673h.011c.068.243.135.446.214.664L4.464 0h.522L3.757-3.286h-.41l-.579 1.487c-.095.243-.174.436-.241.654H2.51c-.067-.218-.14-.396-.242-.654l-.589-1.487h-.41z"
        transform="matrix(1.33333 0 0 -1.33333 221.921 448.933)"
        clipPath="url(#ak)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.354l1.437-3.276h-.533l-.365.857H-.539l-.354-.857h-.522Zm.741-2.056-.348.852C.286-.927.23-.778.185-.659H.174a9.76 9.76 0 0 0-.214-.55l-.348-.847z"
        transform="matrix(1.33333 0 0 -1.33333 230.437 448.92)"
        clipPath="url(#al)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.837c.375 0 .629-.06.819-.159a.799.799 0 0 0 .472-.743c0-.451-.281-.734-.741-.858v-.01c.112-.054.252-.232.449-.525l.657-.971h-.584l-.607.907c-.174.272-.314.421-.421.446H.499v-1.353H0Zm.831-1.552c.196 0 .342.035.477.104a.528.528 0 0 1 .304.501.518.518 0 0 1-.236.451c-.113.074-.276.134-.539.134H.499v-1.19z"
        transform="matrix(1.33333 0 0 -1.33333 235.23 448.933)"
        clipPath="url(#am)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.971c1.32 0 1.982-.674 1.982-1.616 0-.952-.69-1.65-2.015-1.65H0Zm.943-2.905c1.095 0 1.483.6 1.483 1.299 0 .723-.478 1.244-1.494 1.244H.499v-2.543z"
        transform="matrix(1.33333 0 0 -1.33333 239.394 448.933)"
        clipPath="url(#an)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c.113-.25.23-.673.23-1.138 0-1.036-.617-1.694-1.482-1.694-.91 0-1.559.709-1.559 1.776 0 .388.081.719.158.934h.373a2.247 2.247 0 0 1-.189-.909c0-.847.487-1.321 1.181-1.321.72 0 1.175.484 1.175 1.26 0 .26-.045.495-.108.643H-1.23V0Z"
        transform="matrix(1.33333 0 0 -1.33333 495.908 232.951)"
        clipPath="url(#ao)"
        fill="#4f4c4d"
      />
      <path d="M492.196 231.86h3.957v-.607h-3.957z" fill="#4f4c4d" />
      <path
        d="M0 0v.49l1.748.765c.243.107.446.189.631.26v.01c-.176.067-.379.143-.64.261L0 2.546v.49l2.987-1.347v-.347Z"
        transform="matrix(1.33333 0 0 -1.33333 492.195 230.593)"
        clipPath="url(#ap)"
        fill="#4f4c4d"
      />
      <path
        d="M492.195 225.882v-2.265l.439.177v1.483h1.273v-1.463h.444v1.463h1.364v-1.687h.439v2.292Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.439l1.748 1.52c.225.2.405.342.554.455v.01c-.162-.01-.306-.01-.518-.01H0v.454h2.969V2.47L1.153.893A12.57 12.57 0 0 0 .617.449v-.01c.14.01.285.015.496.015h1.856V0Z"
        transform="matrix(1.33333 0 0 -1.33333 492.195 222.62)"
        clipPath="url(#aq)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c.158-.337.216-.668.216-.98 0-1.035-.626-1.638-1.496-1.638-.86 0-1.544.684-1.544 1.705 0 .362.072.668.158.847h.373c-.112-.24-.189-.5-.189-.837 0-.775.523-1.235 1.184-1.235.69 0 1.171.465 1.171 1.204a1.8 1.8 0 0 1-.193.807z"
        transform="matrix(1.33333 0 0 -1.33333 495.926 214.379)"
        clipPath="url(#ar)"
        fill="#4f4c4d"
      />
      <path
        d="M492.195 213.56v-.606h1.707v-2.374h-1.707v-.6h3.959v.6h-1.796v2.374h1.796v.606Zm2.38-5.74-2.38 1.498v-.667l1.88-1.136v-.015l-1.88-1.1v-.66l2.392 1.482h1.566v.598Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.321l2.977 1.307v-.485L2.198.811V-.49l.779-.321v-.475Zm1.87.673L1.094.357.599.168v-.01a9.66 9.66 0 0 0 .5-.194l.771-.316Z"
        transform="matrix(1.33333 0 0 -1.33333 492.184 202.565)"
        clipPath="url(#as)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.49l1.748.765c.243.107.446.189.631.26v.011c-.176.066-.379.142-.64.26L0 2.546v.49l2.987-1.347v-.347Z"
        transform="matrix(1.33333 0 0 -1.33333 492.195 200.48)"
        clipPath="url(#at)"
        fill="#4f4c4d"
      />
      <path
        d="M492.195 195.769v-2.265l.439.177v1.483h1.273V193.7h.444v1.463h1.364v-1.688h.439v2.293ZM174.02 173.615v1.777h-.603v-4.556l.603.233v1.712h4.84v.834Zm2.668-4.999-3.27 2.059v-.918l2.585-1.562v-.019l-2.586-1.516v-.908l3.288 2.04h2.155v.824Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c.142.239.279.589.279 1.018 0 .456-.161.877-.601.877-.924 0-.812-2.021-2.038-2.021-.589 0-1.072.512-1.072 1.403 0 .435.099.822.198 1.046h.502a2.404 2.404 0 0 1-.229-1.025c0-.385.142-.772.545-.772.867 0 .774 2.029 2.05 2.029.694 0 1.116-.632 1.116-1.537C.75.484.607.042.427-.26z"
        transform="matrix(1.33333 0 0 -1.33333 177.944 164.806)"
        clipPath="url(#au)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c-1.239 0-2.094.961-2.094 2.281 0 1.334.874 2.274 2.094 2.274 1.27 0 2.088-.982 2.088-2.274C2.088.969 1.264 0 0 0m0 3.896c-.936 0-1.623-.59-1.623-1.615C-1.623 1.306-.978.66 0 .66c.985 0 1.617.646 1.617 1.621 0 .976-.632 1.615-1.617 1.615"
        transform="matrix(1.33333 0 0 -1.33333 176.16 160.406)"
        clipPath="url(#av)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.603l2.404 2.092c.309.274.557.471.762.625v.014c-.224-.014-.422-.014-.713-.014H0v.624h4.083v-.547L1.586 1.228A18.78 18.78 0 0 0 .849.617V.603a8.9 8.9 0 0 0 .681.022h2.553V0Z"
        transform="matrix(1.33333 0 0 -1.33333 173.417 153.038)"
        clipPath="url(#aw)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v1.045c0 .471.074.787.198 1.025.205.414.558.59.929.59.564 0 .917-.351 1.072-.927h.012c.069.141.292.316.657.562l1.215.821v-.73l-1.134-.758c-.341-.217-.527-.393-.558-.526V.625h1.692V0Zm1.939 1.039c0 .245-.043.428-.13.596a.661.661 0 0 1-.626.379.645.645 0 0 1-.563-.295c-.094-.14-.168-.344-.168-.674v-.42h1.487z"
        transform="matrix(1.33333 0 0 -1.33333 173.417 144.126)"
        clipPath="url(#ax)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v1.214c0 1.65.842 2.478 2.02 2.478 1.189 0 2.063-.863 2.063-2.52V0Zm3.63 1.18c0 1.368-.749 1.852-1.623 1.852-.904 0-1.555-.596-1.555-1.866V.625H3.63Z"
        transform="matrix(1.33333 0 0 -1.33333 173.417 138.922)"
        clipPath="url(#ay)"
        fill="#4f4c4d"
      />
      <path
        d="m0 0 .848.091c.403.043.692.018.93-.069.41-.147.679-.466.73-.938.045-.421-.119-.848-.613-1.108-.211-.107-.476-.186-.847-.226l-.239-.026.141-1.32-.559-.06Zm1.042-1.841c.252.028.431.085.556.161.257.15.358.391.325.702-.031.288-.181.508-.44.608-.146.058-.333.082-.597.054l-.284-.03.164-1.524Z"
        transform="matrix(1.33333 0 0 -1.33333 513.235 485.391)"
        clipPath="url(#az)"
        fill="#4f4c4d"
      />
      <path
        d="m517.56 484.928 2.79-.297-.16.563-1.828.196.168 1.566 1.803-.192.058.547-1.802.193.18 1.68 2.078-.222.058.54-2.824.3Zm5.11.002-1.594.169-.057-.54 4.083-.436-.152.563-1.535.164.464 4.333-.745.08Z"
        fill="#4f4c4d"
      />
      <path
        d="m0 0 .396.043 2.002-3.495-.598-.064-.511.916-1.603-.171-.295-1.002-.584-.062Zm1.076-2.213-.492.912-.298.586-.013-.001A10.46 10.46 0 0 0 .1-1.358l-.288-.99z"
        transform="matrix(1.33333 0 0 -1.33333 526.9 483.916)"
        clipPath="url(#aA)"
        fill="#4f4c4d"
      />
      <path
        d="m0 0 .629.067 1.018-2.085c.105-.212.228-.469.331-.721l.019.002c.059.281.117.517.191.771L2.62-.354l-.312.601.585.062 1.055-2.075c.105-.213.247-.473.35-.725l.013.001c.046.28.098.515.159.769L4.999.534l.585.063L4.6-3.229l-.459-.048-.825 1.595c-.137.26-.248.467-.349.703l-.019-.002c-.05-.252-.11-.46-.193-.761l-.482-1.735-.458-.05Z"
        transform="matrix(1.33333 0 0 -1.33333 529.549 483.647)"
        clipPath="url(#aB)"
        fill="#4f4c4d"
      />
      <path
        d="m0 0 .396.042 2.001-3.494-.597-.064-.511.915-1.604-.171-.294-1.001-.584-.063Zm1.076-2.213-.492.912c-.153.298-.233.458-.298.585L.273-.717C.243-.855.192-1.034.1-1.358l-.288-.99z"
        transform="matrix(1.33333 0 0 -1.33333 539.076 482.614)"
        clipPath="url(#aC)"
        fill="#4f4c4d"
      />
      <path
        d="m0 0 .629.067 1.018-2.084c.105-.213.228-.47.331-.722l.019.002c.059.282.117.517.191.772L2.62-.354l-.312.601.585.062 1.055-2.075c.105-.213.247-.473.35-.725l.013.001c.046.281.098.515.159.769L4.998.534l.585.063-.984-3.825-.458-.049-.825 1.595c-.137.261-.248.468-.349.703L2.948-.98c-.05-.253-.11-.461-.193-.761l-.482-1.736-.458-.049Z"
        transform="matrix(1.33333 0 0 -1.33333 541.724 482.346)"
        clipPath="url(#aD)"
        fill="#4f4c4d"
      />
      <path
        d="m0 0 .396.042 2.002-3.494-.598-.064-.511.916-1.603-.172-.294-1.001-.584-.063Zm1.077-2.213-.493.912c-.153.299-.233.458-.297.585H.274c-.03-.139-.081-.318-.173-.642l-.288-.99z"
        transform="matrix(1.33333 0 0 -1.33333 551.25 481.313)"
        clipPath="url(#aE)"
        fill="#4f4c4d"
      />
      <path
        d="m0 0 .937.1c.421.045.711.009.937-.079a.9.9 0 0 0 .617-.776c.054-.504-.227-.854-.728-1.047l.002-.012c.133-.048.31-.231.565-.534l.852-1.009-.653-.07-.788.943c-.228.284-.402.434-.525.448l-.428-.045.162-1.514-.559-.06Zm1.116-1.637c.22.024.379.081.522.174.197.122.309.33.28.597a.587.587 0 0 1-.318.477c-.135.069-.324.116-.62.084l-.377-.04.142-1.331z"
        transform="matrix(1.33333 0 0 -1.33333 556.615 480.754)"
        clipPath="url(#aF)"
        fill="#4f4c4d"
      />
      <path
        d="m0 0 1.088.116C2.565.274 3.388-.4 3.5-1.454c.114-1.066-.576-1.93-2.059-2.089l-1.05-.112zm1.404-3.137c1.226.13 1.588.848 1.505 1.631-.087.81-.684 1.334-1.822 1.212L.602-.345l.305-2.846Z"
        transform="matrix(1.33333 0 0 -1.33333 561.274 480.257)"
        clipPath="url(#aG)"
        fill="#4f4c4d"
      />
      <path
        d="M52.848 8.622h.832v2.437h.02l2.264-2.437h.974l-2.527 2.676 2.695 2.768h-1.03L53.7 11.613h-.02v2.453h-.832Zm5.214 0h3.116l-.243.603h-2.04v1.752h2.012v.61h-2.012v1.875h2.321v.604h-3.154Zm4.485 5.443h.833V8.623h-.833zm3.566-4.84h-1.778v-.603h4.558l-.235.603h-1.712v4.84h-.833Zm3.604-.603h.833v2.345h3.267V8.622h.822v5.444h-.822v-2.47H70.55v2.47h-.833Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.702l.877-2.422c.091-.248.197-.545.281-.837h.021c.098.304.19.558.302.831L2.85-.7l-.274.7h.652l.92-2.416c.091-.248.218-.551.302-.843h.014c.084.304.168.558.267.831L5.58 0h.653L4.696-4.107h-.513l-.722 1.858c-.12.304-.218.545-.302.818h-.022c-.084-.273-.175-.496-.301-.818l-.737-1.858h-.513Z"
        transform="matrix(1.33333 0 0 -1.33333 77.29 8.622)"
        clipPath="url(#aH)"
        fill="#4f4c4d"
      />
      <path
        d="M86.512 14.065h.833V8.623h-.833zm2.405-5.443h.834v4.84h2.254v.604h-3.088Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c.239-.143.59-.279 1.018-.279.456 0 .877.161.877.601 0 .923-2.022.812-2.022 2.038 0 .589.513 1.072 1.404 1.072a2.74 2.74 0 0 0 1.046-.198v-.502a2.408 2.408 0 0 1-1.025.229c-.385 0-.772-.142-.772-.545 0-.867 2.029-.774 2.029-2.05 0-.694-.632-1.116-1.537-1.116-.534 0-.976.143-1.278.323z"
        transform="matrix(1.33333 0 0 -1.33333 93.036 13.149)"
        clipPath="url(#aI)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c0 1.239.961 2.094 2.281 2.094 1.334 0 2.274-.874 2.274-2.094 0-1.27-.982-2.088-2.274-2.088C.969-2.088 0-1.264 0 0m3.896 0c0 .936-.59 1.623-1.615 1.623C1.306 1.623.66.979.66 0c0-.985.646-1.617 1.621-1.617.976 0 1.615.632 1.615 1.617"
        transform="matrix(1.33333 0 0 -1.33333 97.435 11.364)"
        clipPath="url(#aJ)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h.604l2.091-2.404c.274-.309.471-.557.625-.762h.015c-.015.223-.015.421-.015.713V0h.625v-4.083h-.548L1.228-1.586a18.63 18.63 0 0 0-.61.737H.604c.014-.192.021-.39.021-.681v-2.553H0Z"
        transform="matrix(1.33333 0 0 -1.33333 104.803 8.622)"
        clipPath="url(#aK)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h1.045c.471 0 .787-.074 1.025-.198.414-.205.59-.558.59-.93 0-.564-.351-.917-.927-1.071v-.013c.141-.068.316-.291.562-.656l.821-1.215h-.73l-.758 1.134c-.217.341-.393.527-.526.558H.625v-1.692H0Zm1.039-1.939c.245 0 .428.043.596.13a.66.66 0 0 1 .379.626.645.645 0 0 1-.295.563c-.14.094-.344.168-.674.168h-.42v-1.487z"
        transform="matrix(1.33333 0 0 -1.33333 112.869 8.704)"
        clipPath="url(#aL)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0h1.214c1.65 0 2.478-.842 2.478-2.02 0-1.189-.863-2.063-2.52-2.063H0Zm1.18-3.63c1.368 0 1.852.749 1.852 1.623 0 .904-.596 1.555-1.866 1.555H.625V-3.63Z"
        transform="matrix(1.33333 0 0 -1.33333 118.073 8.704)"
        clipPath="url(#aM)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c.158-.337.216-.668.216-.98 0-1.035-.626-1.638-1.496-1.638-.86 0-1.544.684-1.544 1.705 0 .362.072.668.158.847h.373c-.112-.24-.189-.5-.189-.837 0-.775.523-1.235 1.184-1.235.69 0 1.171.465 1.171 1.204a1.8 1.8 0 0 1-.193.807z"
        transform="matrix(1.33333 0 0 -1.33333 635.967 248.172)"
        clipPath="url(#aN)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.321l2.977 1.307v-.485L2.198.811V-.49l.779-.321v-.475Zm1.87.673L1.094.357.599.168v-.01a9.66 9.66 0 0 0 .5-.194l.771-.316Z"
        transform="matrix(1.33333 0 0 -1.33333 632.225 246.114)"
        clipPath="url(#aO)"
        fill="#4f4c4d"
      />
      <path d="M632.237 243.275v-.606h3.52v-1.64h.439v2.246Z" fill="#4f4c4d" />
      <path
        d="M0 0v.321l2.977 1.307v-.485L2.198.811V-.49l.779-.321v-.475Zm1.87.673L1.094.357.599.168v-.01a9.66 9.66 0 0 0 .5-.194l.771-.316Z"
        transform="matrix(1.33333 0 0 -1.33333 632.225 239.067)"
        clipPath="url(#aP)"
        fill="#4f4c4d"
      />
      <path d="M632.237 236.228h3.959v-.605h-3.959z" fill="#4f4c4d" />
      <path
        d="M0 0c.104.174.202.429.202.74 0 .332-.116.638-.436.638-.672 0-.59-1.47-1.482-1.47-.428 0-.779.373-.779 1.021 0 .316.072.597.143.76h.365a1.756 1.756 0 0 1-.166-.745c0-.28.104-.561.396-.561.631 0 .563 1.474 1.491 1.474.505 0 .811-.459.811-1.117C.545.352.441.031.311-.189z"
        transform="matrix(1.33333 0 0 -1.33333 635.529 234.451)"
        clipPath="url(#aQ)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c.158-.337.216-.668.216-.98 0-1.035-.626-1.638-1.496-1.638-.86 0-1.544.684-1.544 1.705 0 .362.072.668.158.847h.373c-.112-.24-.189-.5-.189-.837 0-.776.523-1.235 1.184-1.235.69 0 1.171.465 1.171 1.204a1.8 1.8 0 0 1-.193.807z"
        transform="matrix(1.33333 0 0 -1.33333 635.967 226.433)"
        clipPath="url(#aR)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.76c0 .342.055.572.145.745a.726.726 0 0 0 .675.429c.41 0 .667-.255.779-.674h.01c.049.102.211.23.477.409l.883.597v-.531l-.824-.551c-.248-.158-.383-.286-.406-.383V.454h1.23V0Zm1.41.755a.905.905 0 0 1-.094.434.482.482 0 0 1-.455.275.47.47 0 0 1-.41-.214C.384 1.148.329 1 .329.76V.454H1.41Z"
        transform="matrix(1.33333 0 0 -1.33333 632.237 225.614)"
        clipPath="url(#aS)"
        fill="#4f4c4d"
      />
      <path
        d="M632.237 221.828v-2.265l.439.177v1.483h1.273v-1.463h.444v1.463h1.364v-1.688h.439v2.293Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c.104.173.202.429.202.74 0 .331-.116.637-.436.637-.672 0-.59-1.469-1.482-1.469-.428 0-.779.372-.779 1.021 0 .316.072.596.143.76h.365a1.756 1.756 0 0 1-.166-.745c0-.281.104-.562.396-.562.631 0 .563 1.475 1.491 1.475.505 0 .811-.459.811-1.117C.545.352.441.03.311-.189z"
        transform="matrix(1.33333 0 0 -1.33333 635.529 218.54)"
        clipPath="url(#aT)"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c.158-.337.216-.668.216-.98 0-1.035-.626-1.638-1.496-1.638-.86 0-1.544.684-1.544 1.705 0 .362.072.668.158.847h.373c-.112-.24-.189-.5-.189-.837 0-.776.523-1.235 1.184-1.235.69 0 1.171.465 1.171 1.204a1.8 1.8 0 0 1-.193.807z"
        transform="matrix(1.33333 0 0 -1.33333 635.967 211.85)"
        clipPath="url(#aU)"
        fill="#4f4c4d"
      />
      <path
        d="M632.237 211.03v-2.265l.439.177v1.483h1.273v-1.463h.444v1.463h1.364v-1.687h.439v2.292Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0v.439l1.748 1.52c.225.2.405.342.554.455v.01c-.162-.01-.306-.01-.518-.01H0v.454h2.969V2.47L1.153.893A12.57 12.57 0 0 0 .617.449v-.01c.14.01.285.015.496.015h1.856V0Z"
        transform="matrix(1.33333 0 0 -1.33333 632.237 207.77)"
        clipPath="url(#aV)"
        fill="#4f4c4d"
      />
      <path
        d="M632.676 201.962v1.293h-.44v-3.314l.44.17v1.246h3.52v.605Z"
        fill="#4f4c4d"
      />
      <path
        d="M0 0c7.712 0 13.964 6.252 13.964 13.964 0 7.713-6.252 13.965-13.964 13.965-7.712 0-13.964-6.252-13.964-13.965C-13.964 6.252-7.712 0 0 0Z"
        transform="matrix(1.33333 0 0 -1.33333 678.547 61.044)"
        clipPath="url(#aW)"
        fill="none"
        stroke="#1e6633"
        strokeWidth="2"
      />
      <path d="M674.355 42.424h8.385V23.965h-8.385z" fill="#1e6633" />
      <path
        d="M0 0h1.529v3.349c0 .28 0 .72-.03.94h.02c.22-.29.41-.55.62-.82L4.87 0h1.419v6.589H4.76v-3.05c0-.26 0-.74.02-1.079h-.02c-.19.28-.38.529-.59.799l-2.641 3.33H0Z"
        transform="matrix(1.33333 0 0 -1.33333 674.355 16.83)"
        clipPath="url(#aX)"
        fill="#1e6633"
      />
      <path
        d="M0 0a8 8 0 1 1 0 16.001A8 8 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 344.998 247.394)"
        clipPath="url(#aY)"
        fill="#fff"
      />
      <path
        d="M0 0c2.12 0 3.122 2.163 3.592 4.006H0Z"
        transform="matrix(1.33333 0 0 -1.33333 345 242.068)"
        clipPath="url(#aZ)"
        fill="#e7294b"
      />
      <path
        d="M0 0h3.59v3.97L-.384 2.278A14.54 14.54 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 340.212 236.727)"
        clipPath="url(#ba)"
        fill="#e7294b"
      />
      <path
        d="M0 0a8 8 0 1 1 0-16A8 8 0 0 1 0 0m4.824-5.473c-.012-.301-.361-7.362-4.824-7.362s-4.812 7.061-4.824 7.362l-.012.287L0-3.128l4.837-2.058Z"
        transform="matrix(1.33333 0 0 -1.33333 345 226.06)"
        clipPath="url(#bb)"
        fill="#e7294b"
      />
      <path
        d="M0 0a8 8 0 1 1 0 16.001A8 8 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 58.45 362.324)"
        clipPath="url(#bc)"
        fill="#fff"
      />
      <path
        d="M0 0c2.12 0 3.122 2.163 3.592 4.006H0Z"
        transform="matrix(1.33333 0 0 -1.33333 58.451 356.998)"
        clipPath="url(#bd)"
        fill="#e7294b"
      />
      <path
        d="M0 0h3.59v3.97L-.384 2.278A14.54 14.54 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 53.664 351.657)"
        clipPath="url(#be)"
        fill="#e7294b"
      />
      <path
        d="M0 0a8 8 0 1 1 0-16A8 8 0 0 1 0 0m4.824-5.473c-.012-.301-.361-7.362-4.824-7.362s-4.812 7.061-4.824 7.362l-.012.287L0-3.128l4.837-2.058Z"
        transform="matrix(1.33333 0 0 -1.33333 58.451 340.99)"
        clipPath="url(#bf)"
        fill="#e7294b"
      />
      <path
        d="M78.887 235.791c1.406 0 2.36-.578 2.734-1.656.156-.375.219-.813.219-1.297v-5.078h-.89v4.953c0 .453-.048.828-.157 1.14-.281.75-.906 1.172-1.906 1.172-.985 0-1.61-.421-1.89-1.171-.11-.313-.157-.688-.157-1.11v-4.984h-.89v5.078c0 .469.062.89.187 1.266.375 1.093 1.312 1.687 2.75 1.687zm5.18-.125h.89v-3.687h2.61v-.735h-2.61v-2.734h2.656l.282-.75h-3.829Zm8.097.031h.625l3.156-7.937h-.968l-1.844 4.781c-.281.75-.469 1.281-.625 1.75h-.031c-.172-.5-.36-1.031-.625-1.719l-1.86-4.812h-.969zm13.059-1.172c-.547.282-1.157.5-1.891.5-1.797 0-2.922-1.343-2.922-3.28 0-1.86 1.156-3.282 3-3.282.813 0 1.39.187 1.953.5v-.844c-.406-.234-1.125-.422-1.953-.422-2.344 0-3.937 1.813-3.937 4.11 0 2.328 1.406 3.984 3.78 3.984a4.53 4.53 0 0 0 2.204-.562zm4.968 1.141h.782c-.063-.281-.11-.812-.11-1.937v-1.954c0-1.359-.843-1.921-2.015-1.921-.625 0-1.328.156-1.985.562l.328.625c.407-.234.875-.469 1.563-.469.703 0 1.219.39 1.219 1.25v.36l-1.078.047c-.579.015-1.032.078-1.407.265-.578.266-.968.781-.968 1.547 0 1.078.765 1.75 1.796 1.75.72 0 1.266-.344 1.704-.766zm-.218-2.812v1.437c-.266.281-.782.75-1.5.75-.641 0-1.047-.437-1.047-1.062 0-.36.172-.688.484-.875.25-.125.578-.204 1.078-.204zm2.547 2.812h.89v-4.187c.531-.47 1.094-.844 1.719-.844.812 0 1 .656 1 1.484v3.547h.875v-3.844c0-.11-.016-.218-.016-.343.532-.47 1.125-.844 1.735-.844.797 0 1 .656 1 1.484v3.547h.875v-3.828c0-1.406-.766-1.984-1.688-1.984-.719 0-1.437.359-2.11.968-.265-.656-.796-.968-1.468-.968-.719 0-1.36.359-1.969.875l-.093-.735h-.75zm9.765 2.844h.89v-2.922c.266.11.626.203.985.203 1.656 0 2.875-1.14 2.875-3s-1.078-2.937-2.875-2.937a5.24 5.24 0 0 0-1.875.343zm.89-3.719v-4.047c.313-.094.61-.14.954-.14 1.125 0 2 .671 2 2.171 0 1.36-.703 2.25-1.984 2.25-.375 0-.657-.078-.97-.234zm6.903 1c.735 0 1.375-.344 1.875-.781l.172.656h.797c-.078-.281-.125-.812-.125-1.922v-3.75h-.875v4.203c-.297.407-.938.813-1.594.813-.469 0-.797-.203-.937-.64-.078-.235-.094-.5-.094-.891v-3.485h-.89v3.703c0 .438.046.719.14 1.032.281.812.984 1.062 1.531 1.062zm3.985-.484c.359.234.953.484 1.703.484 1.172 0 2.093-.547 2.093-1.672 0-1.922-2.671-1.484-2.671-2.75 0-.61.546-.797 1.093-.797.547 0 .985.157 1.375.313v-.781a4.114 4.114 0 0 0-1.406-.25c-1.266 0-1.922.687-1.922 1.546 0 1.891 2.656 1.5 2.656 2.735 0 .64-.562.906-1.218.906a2.601 2.601 0 0 1-1.422-.422zM81.37 248.924c-.547.281-1.156.5-1.89.5-1.797 0-2.922-1.344-2.922-3.281 0-1.86 1.156-3.282 3-3.282.812 0 1.39.188 1.953.5v-.843c-.407-.235-1.125-.422-1.953-.422-2.344 0-3.938 1.812-3.938 4.11 0 2.327 1.406 3.983 3.781 3.983a4.53 4.53 0 0 0 2.203-.562zm3.762 1.265c1.594 0 2.625-1.312 2.625-2.968 0-1.672-1.031-2.969-2.61-2.969-1.609 0-2.625 1.297-2.625 2.969 0 1.656 1.032 2.968 2.61 2.968zm0-.765c-1.047 0-1.703-.906-1.703-2.203 0-1.313.656-2.219 1.718-2.219 1.032 0 1.688.906 1.688 2.219 0 1.297-.656 2.203-1.703 2.203zm4.012.64h.89v-4.171c.531-.47 1.094-.86 1.735-.86.812 0 1.015.656 1.015 1.5v3.531h.875v-3.828c0-1.422-.781-1.984-1.672-1.984-.734 0-1.375.344-2 .875l-.093-.734h-.75zm6.207 0h.89v-4.171c.531-.47 1.094-.86 1.735-.86.812 0 1.015.656 1.015 1.5v3.531h.875v-3.828c0-1.422-.781-1.984-1.672-1.984-.734 0-1.375.344-2 .875l-.093-.734h-.75zm8.562.125c.64 0 1.328-.187 1.813-.515l-.282-.625c-.39.219-.875.39-1.39.39-1.22 0-1.875-.906-1.907-2.062h3.688v-.219c0-1.781-.813-2.906-2.25-2.906-1.39 0-2.328 1.187-2.328 2.906 0 1.656.875 3.031 2.656 3.031zm-1.75-3.5c.016-.937.547-1.718 1.422-1.718.89 0 1.312.86 1.328 1.718zm7.469 3.5c.687 0 1.344-.25 1.75-.515l-.281-.625c-.344.187-.766.375-1.36.375-1.156 0-1.89-.797-1.89-2.203 0-1.282.75-2.235 1.953-2.235.562 0 1 .157 1.375.391v-.781a3.074 3.074 0 0 0-1.422-.344c-1.75 0-2.813 1.375-2.813 3.031 0 1.594.938 2.906 2.688 2.906zm4.71 0c.563 0 1.079-.203 1.423-.453l-.313-.625a1.623 1.623 0 0 1-.922.313c-.39 0-.593-.219-.593-.703v-3.61h1.437l.266-.718h-1.703v-1.579l-.875.297v1.282h-.954v.718h.954v3.75c0 .844.468 1.328 1.28 1.328zm4.657 0c1.594 0 2.625-1.312 2.625-2.968 0-1.672-1.031-2.969-2.61-2.969-1.609 0-2.624 1.297-2.624 2.969 0 1.656 1.03 2.968 2.609 2.968zm0-.765c-1.047 0-1.703-.906-1.703-2.203 0-1.313.656-2.219 1.719-2.219 1.03 0 1.687.906 1.687 2.219 0 1.297-.656 2.203-1.703 2.203zm4.012.64h.89v-4.171c.547-.563.953-.813 1.36-.813.203 0 .36.047.5.11l.312-.797c-.14-.094-.39-.141-.61-.141-.5 0-.984.172-1.609.86l-.093-.72h-.75zm6.41-.484c.469.328 1.172.61 2.078.61 1.5 0 2.531-.797 2.531-2.11 0-2.469-3.484-2.281-3.484-4.062 0-.86.719-1.172 1.422-1.172.61 0 1.203.156 1.703.437v-.828c-.36-.172-1-.36-1.719-.36-1.484 0-2.328.891-2.328 2 0 2.376 3.469 2.141 3.469 4.032 0 .937-.735 1.297-1.594 1.297a3.097 3.097 0 0 1-1.703-.531zm6.156.484h.875v-4.171c.547-.47 1.11-.86 1.75-.86.813 0 1.016.656 1.016 1.5v3.531h.89v-3.828c0-1.422-.796-1.984-1.687-1.984-.734 0-1.375.36-1.969.86v-3.548h-.875zm7.852.125c.734 0 1.375-.343 1.875-.78l.172.655h.796c-.078-.28-.125-.812-.125-1.921v-3.75h-.875v4.203c-.296.406-.937.812-1.593.812-.47 0-.797-.203-.938-.64-.078-.235-.094-.5-.094-.891v-3.484h-.89v3.703c0 .437.047.718.14 1.031.282.812.985 1.062 1.532 1.062zm6.156 0c.562 0 1.078-.203 1.422-.453l-.313-.625a1.622 1.622 0 0 1-.922.313c-.39 0-.593-.219-.593-.703v-3.61h1.437l.266-.718h-1.703v-1.579l-.875.297v1.282h-.953v.718h.953v3.75c0 .844.468 1.328 1.28 1.328zm4.453 0c.563 0 1.078-.203 1.422-.453l-.313-.625a1.622 1.622 0 0 1-.921.313c-.391 0-.594-.219-.594-.703v-3.61h1.437l.266-.718h-1.703v-1.579l-.875.297v1.282h-.953v.718h.953v3.75c0 .844.469 1.328 1.281 1.328zm2.535-1.156c0 .688.344 1.11 1.063 1.11.265 0 .562-.063.797-.172l-.188-.703a.942.942 0 0 1-.36.093c-.296 0-.437-.14-.437-.609v-7.188h-.875zm5.196 1.156c.64 0 1.328-.187 1.812-.515l-.281-.625c-.39.219-.875.39-1.39.39-1.22 0-1.876-.906-1.907-2.062h3.687v-.219c0-1.781-.812-2.906-2.25-2.906-1.39 0-2.328 1.187-2.328 2.906 0 1.656.875 3.031 2.657 3.031zm-1.75-3.5c.015-.937.546-1.718 1.421-1.718.891 0 1.313.86 1.329 1.718zm-82.633 17.903c1.812 0 3.125-1.14 3.125-3.125 0-1.844-1.125-2.813-2.547-2.813-.531 0-.906.11-1.281.25v-2.937h-.875v8.265c.328.188.875.36 1.578.36zm.125-.766c-.235 0-.532-.047-.828-.156v-3.97c.203-.078.546-.297 1.171-.297 1.141 0 1.75.86 1.75 2.094 0 1.438-.859 2.328-2.093 2.328zm6.039.766c.734 0 1.375-.344 1.875-.781l.172.656h.797c-.079-.281-.125-.813-.125-1.922v-3.75h-.875v4.203c-.297.406-.938.813-1.594.813-.469 0-.797-.204-.938-.641-.078-.234-.093-.5-.093-.89v-3.485h-.891v3.703c0 .438.047.719.14 1.031.282.813.985 1.063 1.532 1.063zm3.984-.485c.36.235.953.485 1.703.485 1.172 0 2.094-.547 2.094-1.672 0-1.922-2.672-1.484-2.672-2.75 0-.61.547-.797 1.094-.797s.984.156 1.375.313v-.782a4.114 4.114 0 0 0-1.406-.25c-1.266 0-1.922.688-1.922 1.547 0 1.89 2.656 1.5 2.656 2.735 0 .64-.562.906-1.219.906-.64 0-1.093-.219-1.422-.422zm7.258 0c.36.235.953.485 1.703.485 1.172 0 2.094-.547 2.094-1.672 0-1.922-2.672-1.484-2.672-2.75 0-.61.547-.797 1.094-.797s.984.156 1.375.313v-.782a4.114 4.114 0 0 0-1.407-.25c-1.265 0-1.921.688-1.921 1.547 0 1.89 2.656 1.5 2.656 2.735 0 .64-.563.906-1.219.906-.64 0-1.094-.219-1.422-.422zm6.895.485a2.48 2.48 0 0 0 1.421-.453l-.312-.625a1.623 1.623 0 0 1-.922.312c-.39 0-.594-.219-.594-.703v-3.61h1.438l.265-.718h-1.703v-1.578l-.875.297v1.28h-.953v.72h.953v3.75c0 .843.469 1.328 1.282 1.328zm4.656 0c1.594 0 2.625-1.313 2.625-2.969 0-1.672-1.031-2.969-2.61-2.969-1.609 0-2.625 1.297-2.625 2.97 0 1.655 1.032 2.968 2.61 2.968zm0-.766c-1.047 0-1.703-.906-1.703-2.203 0-1.312.656-2.219 1.718-2.219 1.032 0 1.688.907 1.688 2.22 0 1.296-.656 2.202-1.703 2.202zm4.011 3.485h.891v-2.922c.266.11.625.203.984.203 1.657 0 2.875-1.14 2.875-3s-1.078-2.938-2.875-2.938c-.609 0-1.28.11-1.875.344zm.891-3.72v-4.046c.313-.094.61-.14.953-.14 1.125 0 2 .671 2 2.171 0 1.36-.703 2.25-1.984 2.25-.375 0-.656-.078-.969-.234zm-35.234 31.27h.89v-2.922h.516c.703 0 1.219-.109 1.625-.296.922-.422 1.312-1.266 1.312-2.188 0-1-.421-1.734-1.14-2.14-.422-.235-.953-.36-1.719-.36h-1.484Zm.89-3.656v-3.5h.594c.547 0 .922.094 1.188.25.5.297.765.828.765 1.5 0 .719-.281 1.234-.812 1.5-.266.156-.64.25-1.14.25zm6.559 3.781c.734 0 1.375-.343 1.875-.78l.172.655h.797c-.078-.28-.125-.812-.125-1.922v-3.75h-.875v4.204c-.297.406-.938.812-1.594.812-.469 0-.797-.203-.938-.64-.078-.235-.093-.5-.093-.891v-3.485h-.89v3.704c0 .437.046.718.14 1.03.28.813.984 1.063 1.53 1.063zm6.078 0c1.813 0 3.125-1.14 3.125-3.125 0-1.843-1.125-2.812-2.547-2.812-.531 0-.906.11-1.281.25v-2.938h-.875v8.266c.328.187.875.36 1.578.36zm.125-.765c-.234 0-.531-.047-.828-.157v-3.968c.203-.078.547-.297 1.172-.297 1.14 0 1.75.86 1.75 2.094 0 1.437-.86 2.328-2.094 2.328zm4.406-.39c0 .687.344 1.108 1.063 1.108.265 0 .562-.062.797-.171l-.188-.704a.942.942 0 0 1-.36.094c-.296 0-.437-.14-.437-.61v-7.187h-.875zm3.028 1.03h.875v-5.672h-.875zm.437-6.953a.584.584 0 0 0 .594-.594c0-.343-.234-.593-.594-.593a.575.575 0 0 0-.594.593c0 .329.25.594.594.594zm4.574 7.078c.688 0 1.344-.25 1.75-.515l-.28-.625c-.345.187-.766.375-1.36.375-1.156 0-1.89-.797-1.89-2.203 0-1.282.75-2.235 1.952-2.235.563 0 1 .156 1.375.39v-.78a3.074 3.074 0 0 0-1.422-.344c-1.75 0-2.812 1.375-2.812 3.031 0 1.594.937 2.906 2.687 2.906zm7.047 0c1.813 0 3.125-1.14 3.125-3.125 0-1.843-1.125-2.812-2.547-2.812-.53 0-.906.11-1.28.25v-2.938h-.876v8.266c.328.187.875.36 1.578.36zm.125-.765c-.234 0-.531-.047-.828-.157v-3.968c.203-.078.547-.297 1.172-.297 1.14 0 1.75.86 1.75 2.094 0 1.437-.86 2.328-2.094 2.328zm6.035.765c.735 0 1.375-.343 1.875-.78l.172.655h.797c-.078-.28-.125-.812-.125-1.922v-3.75h-.875v4.204c-.297.406-.937.812-1.594.812-.468 0-.796-.203-.937-.64-.078-.235-.094-.5-.094-.891v-3.485h-.89v3.704c0 .437.046.718.14 1.03.281.813.985 1.063 1.531 1.063zm3.985-.484c.36.234.953.484 1.703.484 1.172 0 2.094-.547 2.094-1.672 0-1.921-2.672-1.484-2.672-2.75 0-.609.547-.796 1.094-.796.546 0 .984.156 1.375.312v-.781a4.114 4.114 0 0 0-1.407-.25c-1.265 0-1.922.687-1.922 1.547 0 1.89 2.657 1.5 2.657 2.734 0 .64-.563.906-1.22.906-.64 0-1.093-.218-1.421-.422zm7.262 0c.359.234.953.484 1.703.484 1.172 0 2.093-.547 2.093-1.672 0-1.921-2.671-1.484-2.671-2.75 0-.609.546-.796 1.093-.796.547 0 .985.156 1.375.312v-.781a4.114 4.114 0 0 0-1.406-.25c-1.266 0-1.922.687-1.922 1.547 0 1.89 2.656 1.5 2.656 2.734 0 .64-.562.906-1.218.906a2.593 2.593 0 0 1-1.422-.422zm6.89.484c.563 0 1.078-.203 1.422-.453l-.312-.625a1.622 1.622 0 0 1-.922.313c-.391 0-.594-.219-.594-.703v-3.61h1.437l.266-.719h-1.703v-1.578l-.875.297v1.281h-.953v.72h.953v3.75c0 .843.469 1.327 1.281 1.327zm4.656 0c1.594 0 2.625-1.312 2.625-2.968 0-1.672-1.03-2.97-2.609-2.97-1.61 0-2.625 1.298-2.625 2.97 0 1.656 1.031 2.968 2.61 2.968zm0-.765c-1.046 0-1.703-.907-1.703-2.203 0-1.313.657-2.22 1.719-2.22 1.031 0 1.688.907 1.688 2.22 0 1.296-.657 2.203-1.704 2.203zm4.012 3.484h.89v-2.922c.266.11.626.203.985.203 1.656 0 2.875-1.14 2.875-3 0-1.859-1.078-2.937-2.875-2.937-.61 0-1.281.11-1.875.344zm.89-3.719v-4.047c.313-.093.61-.14.954-.14 1.125 0 2 .672 2 2.172 0 1.36-.703 2.25-1.985 2.25-.375 0-.656-.078-.968-.235zm-67 31.27h.891v-3.688h2.61v-.734h-2.61V318.1h2.657l.28-.75h-3.827Zm7.458.125c1.594 0 2.625-1.313 2.625-2.969 0-1.672-1.031-2.969-2.61-2.969-1.609 0-2.625 1.297-2.625 2.97 0 1.655 1.032 2.968 2.61 2.968zm0-.766c-1.047 0-1.703-.906-1.703-2.203 0-1.312.656-2.219 1.718-2.219 1.032 0 1.688.907 1.688 2.22 0 1.296-.656 2.202-1.703 2.202zm6.336.766c1.593 0 2.625-1.313 2.625-2.969 0-1.672-1.032-2.969-2.61-2.969-1.61 0-2.625 1.297-2.625 2.97 0 1.655 1.032 2.968 2.61 2.968zm0-.766c-1.047 0-1.703-.906-1.703-2.203 0-1.312.656-2.219 1.718-2.219 1.032 0 1.688.907 1.688 2.22 0 1.296-.656 2.202-1.703 2.202zm6.683.766c.719 0 1.407-.172 1.813-.39v-8.235h-.875v2.797a3.919 3.919 0 0 0-.969-.11c-1.625 0-2.922 1.204-2.922 3.047 0 1.907 1.328 2.89 2.953 2.89zm.047-.766c-1.312 0-2.094-.828-2.094-2.156 0-1.453.954-2.266 2.079-2.266.39 0 .609.047.906.141v4.125a2.73 2.73 0 0 1-.89.156zm5.621.282c.36.234.953.484 1.703.484 1.172 0 2.094-.547 2.094-1.672 0-1.922-2.672-1.484-2.672-2.75 0-.61.547-.797 1.094-.797s.984.156 1.375.313v-.782a4.114 4.114 0 0 0-1.406-.25c-1.266 0-1.922.688-1.922 1.547 0 1.89 2.656 1.5 2.656 2.735 0 .64-.562.906-1.219.906a2.6 2.6 0 0 1-1.421-.422zm7.485.484c.64 0 1.328-.188 1.812-.516l-.281-.625c-.39.219-.875.39-1.39.39-1.22 0-1.876-.905-1.907-2.062h3.688v-.218c0-1.782-.813-2.907-2.25-2.907-1.391 0-2.329 1.188-2.329 2.907 0 1.656.875 3.03 2.657 3.03zm-1.75-3.5c.015-.938.547-1.719 1.422-1.719.89 0 1.312.86 1.328 1.719zm5.078 3.375h.89v-4.172c.547-.562.954-.812 1.36-.812.203 0 .36.046.5.109l.312-.797c-.14-.094-.39-.14-.61-.14-.5 0-.983.171-1.608.859l-.094-.719h-.75zm5.906.031h.766l2.172-5.703h-.922l-1.61 4.531h-.015l-1.657-4.531h-.921zm4.066-.031h.875v-5.672h-.875zm.438-6.953a.584.584 0 0 0 .594-.594c0-.344-.235-.594-.594-.594a.575.575 0 0 0-.594.594c0 .328.25.594.594.594zm4.57 7.078c.688 0 1.344-.25 1.75-.516l-.281-.625c-.344.188-.766.375-1.36.375-1.156 0-1.89-.797-1.89-2.203 0-1.281.75-2.234 1.953-2.234.563 0 1 .156 1.375.39v-.78a3.074 3.074 0 0 0-1.422-.345c-1.75 0-2.812 1.375-2.812 3.032 0 1.593.937 2.906 2.687 2.906zm5.086 0c.64 0 1.328-.188 1.813-.516l-.282-.625c-.39.219-.875.39-1.39.39-1.219 0-1.875-.905-1.906-2.062h3.687v-.218c0-1.782-.812-2.907-2.25-2.907-1.39 0-2.328 1.188-2.328 2.907 0 1.656.875 3.03 2.656 3.03zm-1.75-3.5c.016-.938.547-1.719 1.422-1.719.89 0 1.313.86 1.328 1.719zm4.633 3.016c.36.234.953.484 1.703.484 1.172 0 2.094-.547 2.094-1.672 0-1.922-2.672-1.484-2.672-2.75 0-.61.547-.797 1.094-.797s.984.156 1.375.313v-.782a4.114 4.114 0 0 0-1.407-.25c-1.265 0-1.921.688-1.921 1.547 0 1.89 2.656 1.5 2.656 2.735 0 .64-.563.906-1.219.906-.64 0-1.094-.219-1.422-.422zM81.37 354.514c-.547.28-1.156.5-1.89.5-1.797 0-2.922-1.344-2.922-3.282 0-1.859 1.156-3.28 3-3.28.812 0 1.39.187 1.953.5v-.845c-.407-.234-1.125-.421-1.953-.421-2.344 0-3.938 1.812-3.938 4.109 0 2.328 1.406 3.984 3.781 3.984a4.53 4.53 0 0 0 2.203-.562zm4.969 1.14h.781c-.062-.28-.11-.812-.11-1.937v-1.953c0-1.36-.843-1.922-2.015-1.922-.625 0-1.328.156-1.984.562l.328.625c.406-.234.875-.468 1.562-.468.703 0 1.22.39 1.22 1.25v.359l-1.079.047c-.578.015-1.031.078-1.406.265-.578.266-.969.782-.969 1.547 0 1.078.766 1.75 1.797 1.75.719 0 1.265-.343 1.703-.765zm-.219-2.812v1.437c-.266.282-.781.75-1.5.75-.64 0-1.047-.437-1.047-1.062a1 1 0 0 1 .485-.875c.25-.125.578-.203 1.078-.203zm2.55 2.812h.892v-4.187c.53-.469 1.093-.844 1.718-.844.813 0 1 .656 1 1.484v3.547h.875v-3.843c0-.11-.015-.22-.015-.344.53-.469 1.125-.844 1.734-.844.797 0 1 .656 1 1.484v3.547h.875v-3.828c0-1.406-.766-1.984-1.687-1.984-.72 0-1.438.36-2.11.969-.265-.657-.797-.97-1.469-.97-.718 0-1.359.36-1.968.876l-.094-.735h-.75zm9.767 2.844h.89v-2.922c.266.11.625.203.985.203 1.656 0 2.875-1.14 2.875-3s-1.079-2.937-2.875-2.937c-.61 0-1.282.11-1.875.344zm.89-3.719v-4.047c.313-.093.61-.14.953-.14 1.125 0 2 .672 2 2.172 0 1.36-.703 2.25-1.984 2.25-.375 0-.656-.078-.969-.235zm6.902 1c.735 0 1.375-.343 1.875-.78l.172.655h.797c-.078-.28-.125-.812-.125-1.922v-3.75h-.875v4.204c-.297.406-.937.812-1.594.812-.468 0-.796-.203-.937-.64-.078-.235-.094-.5-.094-.891v-3.485h-.89v3.704c0 .437.046.718.14 1.03.281.813.985 1.063 1.531 1.063zm3.985-.484c.36.234.953.484 1.703.484 1.172 0 2.094-.547 2.094-1.672 0-1.921-2.672-1.484-2.672-2.75 0-.609.547-.796 1.094-.796.546 0 .984.156 1.375.312v-.781a4.114 4.114 0 0 0-1.407-.25c-1.265 0-1.922.687-1.922 1.547 0 1.89 2.657 1.5 2.657 2.734 0 .64-.563.906-1.219.906-.64 0-1.094-.218-1.422-.422zm7.59-.125c.468.328 1.172.61 2.078.61 1.5 0 2.531-.798 2.531-2.11 0-2.469-3.484-2.281-3.484-4.063 0-.859.718-1.171 1.422-1.171.609 0 1.203.156 1.703.437v-.828c-.36-.172-1-.36-1.72-.36-1.483 0-2.327.891-2.327 2 0 2.376 3.469 2.141 3.469 4.032 0 .937-.735 1.297-1.594 1.297a3.097 3.097 0 0 1-1.703-.532zm8.523.61c.64 0 1.328-.188 1.813-.516l-.282-.625c-.39.218-.875.39-1.39.39-1.219 0-1.875-.906-1.906-2.062h3.687v-.219c0-1.781-.812-2.906-2.25-2.906-1.39 0-2.328 1.187-2.328 2.906 0 1.656.875 3.031 2.656 3.031zm-1.75-3.5c.016-.938.547-1.72 1.422-1.72.89 0 1.313.86 1.328 1.72zm7.465 3.5c.687 0 1.344-.25 1.75-.516l-.281-.625c-.344.187-.766.375-1.36.375-1.156 0-1.89-.797-1.89-2.203 0-1.282.75-2.235 1.953-2.235.562 0 1 .156 1.375.39v-.78a3.074 3.074 0 0 0-1.422-.344c-1.75 0-2.813 1.375-2.813 3.031 0 1.594.938 2.906 2.688 2.906zm4.414 0c.734 0 1.375-.344 1.875-.782l.172.656h.797c-.078-.28-.125-.812-.125-1.922v-3.75h-.875v4.204c-.297.406-.938.812-1.594.812-.469 0-.797-.203-.937-.64-.079-.235-.094-.5-.094-.891v-3.485h-.89v3.704c0 .437.046.718.14 1.03.281.813.984 1.063 1.531 1.063zm4.477-.126h.89v-4.172c.547-.562.953-.812 1.36-.812.203 0 .359.047.5.11l.312-.798c-.14-.093-.39-.14-.61-.14-.5 0-.984.172-1.609.86l-.093-.72h-.75zm4.12 0h.876v-5.672h-.875zm.438-6.953a.584.584 0 0 0 .594-.594c0-.343-.234-.593-.594-.593a.575.575 0 0 0-.594.593c0 .329.25.594.594.594zm3.883 7.078c.563 0 1.078-.203 1.422-.453l-.313-.625a1.623 1.623 0 0 1-.921.313c-.391 0-.594-.22-.594-.703v-3.61h1.437l.266-.719h-1.703v-1.578l-.875.297v1.281h-.953v.72h.953v3.75c0 .843.469 1.327 1.281 1.327zm1.832 2.532a2.75 2.75 0 0 0 1.016.187c.922 0 1.78-.312 2.515-2.406l2.125-6.11h-.906l-1.531 4.594h-.016l-1.953-4.594h-.937l2.484 5.704c-.438 1.515-1.047 2.062-1.797 2.062-.297 0-.562-.062-.781-.156zM77.59 370.053h.875v-7.969h-.719l-2.328 1.172.312.703 1.86-.922zm3.11-2.578h3v-.782h-3zm7.23 2.703c1.672 0 2.703-.938 2.703-2.219 0-1.188-.797-1.703-1.563-1.984v-.032c.657-.297 1.282-.875 1.282-1.859 0-1.047-.813-2-2.344-2-1.485 0-2.438.86-2.438 2.062 0 .97.625 1.5 1.313 1.797v.032c-.844.28-1.547.984-1.547 2.062 0 1.297.953 2.14 2.594 2.14zm.047-.75c-.907 0-1.72-.469-1.72-1.5 0-.875.75-1.375 1.47-1.594 1 .297 1.984.64 1.984 1.672 0 .953-.86 1.422-1.734 1.422zm.234-3.797c-.875-.25-1.703-.61-1.703-1.563 0-.765.625-1.25 1.469-1.25.906 0 1.453.594 1.453 1.328 0 .813-.625 1.266-1.22 1.485zm3.629 4.203c.328.172.922.344 1.672.344 2.062 0 3-1.125 3-2.516 0-1.094-.594-1.812-1.547-2.14-.39-.126-.86-.172-1.422-.172h-.313v-2.454h3.079l.203-.75h-4.14v3.954h.858c.563 0 1 .015 1.375.156.579.219.97.672.97 1.437 0 1.141-.891 1.72-2.048 1.72a3.612 3.612 0 0 1-1.453-.298zm5.93 0c.328.172.921.344 1.671.344 2.063 0 3-1.125 3-2.516 0-1.094-.593-1.812-1.546-2.14-.391-.126-.86-.172-1.422-.172h-.313v-2.454h3.078l.203-.75h-4.14v3.954h.86c.562 0 1 .015 1.374.156.578.219.969.672.969 1.437 0 1.141-.89 1.72-2.047 1.72-.61 0-1.094-.142-1.453-.298zm6.488-2.36h3v-.78h-3zm4.176 2.579h4.812v-.75h-3.719c.438-2.953 3.72-2.86 3.72-5.282 0-1.078-.72-1.937-2.267-1.937a4.78 4.78 0 0 0-2.28.594l.28.703c.454-.25 1.157-.531 1.922-.531.766 0 1.422.343 1.422 1.234 0 1.953-3.547 1.797-3.89 5.969zm6.214-.266c.5.234 1.204.39 1.938.39 2.047 0 3-1.077 3-2.374 0-1-.578-1.657-1.484-1.828v-.032c.828-.328 1.265-.906 1.265-1.812 0-1.11-.75-2.047-2.297-2.047-.89 0-1.672.281-2.234.594l.281.703c.453-.25 1.125-.531 1.89-.531.985 0 1.438.562 1.438 1.328 0 .812-.5 1.5-2.062 1.5h-.735v.75h.86c.422 0 .765.031 1.031.078.75.172 1.125.625 1.125 1.312 0 1.11-.937 1.594-2.062 1.594-.641 0-1.204-.14-1.704-.36zm8.258.39c2.188 0 3.328-1.702 3.328-4.359 0-2.515-1.078-3.734-2.718-3.734-1.453 0-2.47 1.078-2.47 2.594 0 1.765 1.22 2.437 2.36 2.437.797 0 1.422-.312 1.89-.719h.017c-.11 1.938-.985 3.016-2.391 3.016a3.26 3.26 0 0 1-1.438-.312l-.218.75c.53.234 1.109.328 1.64.328zm.672-3.827c-1.047 0-1.61-.672-1.61-1.75 0-1 .579-1.766 1.532-1.766 1.094 0 1.797 1.031 1.797 2.64-.344.47-1.016.876-1.719.876zm4.39 1.125h3v-.782h-3zm4.528 2.578h1.516c.531-2.766 1.578-5.328 3.375-7.407v-.5h-5.625l.36 1.172h3.327c-1.094 1.407-2.328 3.703-2.953 6.735zm8.39.125c1.579 0 2.75-1.047 2.75-2.735 0-1.562-1.077-2.453-2.406-2.453-.734 0-1.375.25-1.859.578.203-1.625 1.094-2.328 2.156-2.328.453 0 .907.11 1.328.328l.375-1.125a4.197 4.197 0 0 0-1.765-.375c-2.235 0-3.578 1.922-3.578 4.36 0 2.578 1.36 3.75 3 3.75zm.016-1.172c-.78 0-1.453-.766-1.5-2.297.344-.297.938-.547 1.453-.547.735 0 1.25.516 1.25 1.484 0 .844-.421 1.36-1.203 1.36zm3.825.734c.515.266 1.203.438 2.03.438 2.282 0 3.25-1.188 3.25-2.672 0-.89-.468-1.703-1.452-2.094-.407-.156-.907-.25-1.516-.25h-.312v-1.844h3.03l.282-1.172h-4.703v4.157h.969c.64 0 1.11.047 1.453.187.5.188.719.563.719 1.11 0 .921-.766 1.359-1.766 1.359a3.69 3.69 0 0 1-1.594-.344zm6.617-1.625h3.531v1.938h1.406v-1.938h1.188v-1.172h-1.188v-4.859h-1.031l-3.906 5.078zm1.594-1.14 2-2.704c0 .22-.063.907-.063 1.547v1.125h-.937c-.297 0-.813.032-1 .032zm-72.192 16.558c.672.594 1.281 1 1.953 1 .203 0 .422-.031.594-.094l-.203-.703c-.063.016-.172.047-.266.047-.531 0-.937-.312-1.453-.797a6.797 6.797 0 0 0 1.36-2.234l-.766-.188a5.556 5.556 0 0 1-1.172 1.891 29.065 29.065 0 0 1-2.063-2.187c1.094-.547 1.735-1.172 1.735-2.094 0-1.016-.781-1.688-2.016-1.688-1.219 0-2 .75-2 1.657 0 .75.36 1.171.985 1.906-1.172.5-1.75 1.234-1.75 2.328 0 1.172.828 2.203 2.343 2.203 1.016 0 1.938-.406 2.72-1.047zm-2.61.281c-.952 0-1.53-.625-1.53-1.515 0-.688.312-1.235 1.296-1.688a39.24 39.24 0 0 0 2.235 2.407c-.657.53-1.344.796-2 .796zm.11-4.125c-.531-.593-.89-1.062-.89-1.562 0-.453.343-.938 1.109-.938.828 0 1.094.594 1.094.985 0 .625-.5 1.14-1.313 1.515zm14.418 3.625c-.547.282-1.156.5-1.89.5-1.797 0-2.922-1.343-2.922-3.28 0-1.86 1.156-3.282 3-3.282.812 0 1.39.187 1.953.5v-.844c-.407-.234-1.125-.422-1.953-.422-2.344 0-3.938 1.813-3.938 4.11 0 2.328 1.406 3.984 3.781 3.984a4.53 4.53 0 0 0 2.203-.562zm4.969 1.141h.781c-.062-.281-.11-.812-.11-1.937v-1.954c0-1.359-.843-1.921-2.015-1.921-.625 0-1.328.156-1.984.562l.328.625c.406-.234.875-.469 1.562-.469.703 0 1.22.391 1.22 1.25v.36l-1.08.047c-.577.015-1.03.078-1.405.265-.578.266-.97.782-.97 1.547 0 1.078.767 1.75 1.798 1.75.719 0 1.265-.344 1.703-.765zm-.219-2.812v1.437c-.266.281-.781.75-1.5.75-.64 0-1.047-.437-1.047-1.062a1 1 0 0 1 .485-.875c.25-.125.578-.204 1.078-.204zm2.547 2.812h.89v-4.187c.532-.47 1.094-.844 1.72-.844.812 0 1 .656 1 1.484v3.547h.874v-3.844c0-.109-.015-.218-.015-.343.53-.47 1.125-.844 1.734-.844.797 0 1 .656 1 1.484v3.547h.875v-3.828c0-1.406-.766-1.984-1.687-1.984-.72 0-1.438.359-2.11.968-.265-.656-.797-.968-1.469-.968-.718 0-1.359.359-1.968.875l-.094-.735h-.75zm9.77 2.844h.89v-2.922c.266.11.625.203.984.203 1.657 0 2.875-1.14 2.875-3s-1.078-2.937-2.875-2.937c-.609 0-1.28.109-1.875.343zm.89-3.719v-4.047c.313-.094.61-.14.953-.14 1.125 0 2 .671 2 2.171 0 1.36-.703 2.25-1.984 2.25-.375 0-.656-.078-.969-.234zm6.899 1c.734 0 1.375-.344 1.875-.781l.171.656h.797c-.078-.281-.125-.812-.125-1.922v-3.75h-.875v4.203c-.297.407-.937.813-1.593.813-.47 0-.797-.203-.938-.64-.078-.235-.094-.5-.094-.891v-3.485h-.89v3.703c0 .438.047.72.14 1.032.282.812.985 1.062 1.532 1.062zm3.988-.484c.36.234.953.484 1.703.484 1.172 0 2.094-.547 2.094-1.672 0-1.922-2.672-1.484-2.672-2.75 0-.61.547-.797 1.094-.797.546 0 .984.157 1.375.313v-.781a4.114 4.114 0 0 0-1.407-.25c-1.265 0-1.922.687-1.922 1.546 0 1.891 2.657 1.5 2.657 2.735 0 .64-.563.906-1.22.906-.64 0-1.093-.219-1.42-.422zm7.976.36h.891v-3.688h2.61v-.735h-2.61V377.3h2.656l.282-.75h-3.829zm5.313 0h.875v-5.673h-.875zm.437-6.954a.584.584 0 0 0 .594-.594c0-.344-.234-.594-.594-.594a.575.575 0 0 0-.593.594c0 .328.25.594.593.594zm2.2 6.953h.89v-4.172c.547-.562.953-.812 1.36-.812.203 0 .359.047.5.109l.312-.797c-.14-.094-.39-.14-.61-.14-.5 0-.984.171-1.609.859l-.093-.719h-.75zm3.523-.36c.36.235.953.485 1.703.485 1.172 0 2.094-.547 2.094-1.672 0-1.922-2.672-1.484-2.672-2.75 0-.61.547-.797 1.094-.797s.984.157 1.375.313v-.781a4.114 4.114 0 0 0-1.406-.25c-1.266 0-1.922.687-1.922 1.546 0 1.891 2.656 1.5 2.656 2.735 0 .64-.563.906-1.219.906-.64 0-1.094-.219-1.422-.422zm6.89.485c.563 0 1.079-.203 1.423-.453l-.313-.625a1.622 1.622 0 0 1-.922.312c-.39 0-.594-.218-.594-.703v-3.609h1.438l.266-.719h-1.704v-1.578l-.875.297v1.281h-.953v.719h.953v3.75c0 .844.47 1.328 1.282 1.328zm4.583-.125h.937l.781-2.125h3.172l.782 2.125h.953l-3.032-7.937h-.593zm2-2.875.812-2.265c.25-.704.39-1.079.469-1.375h.031c.094.296.235.671.469 1.375l.828 2.265zm5.894 2.875h.875v-5.672h-.875zm.438-6.953a.584.584 0 0 0 .593-.594c0-.343-.234-.593-.593-.593a.575.575 0 0 0-.594.593c0 .328.25.594.594.594zm4.812 7.078c.719 0 1.406-.172 1.813-.39v-8.235h-.875v2.797a3.918 3.918 0 0 0-.969-.11c-1.625 0-2.922 1.204-2.922 3.048 0 1.906 1.328 2.89 2.953 2.89zm.047-.765c-1.312 0-2.094-.829-2.094-2.157 0-1.453.953-2.265 2.078-2.265.391 0 .61.047.907.14v4.125c-.25.094-.594.157-.89.157zM77.59 398.854h.875v-7.97h-.719l-2.328 1.173.312.703 1.86-.922zm3.11-2.579h3v-.78h-3zm7.23 2.704c1.672 0 2.703-.938 2.703-2.22 0-1.187-.797-1.702-1.563-1.984v-.03c.657-.298 1.282-.876 1.282-1.86 0-1.047-.813-2-2.344-2-1.485 0-2.438.86-2.438 2.062 0 .97.625 1.5 1.313 1.797v.031c-.844.282-1.547.985-1.547 2.063 0 1.297.953 2.14 2.594 2.14zm.047-.75c-.907 0-1.72-.47-1.72-1.5 0-.875.75-1.375 1.47-1.594 1 .297 1.984.64 1.984 1.672 0 .953-.86 1.422-1.734 1.422zm.234-3.797c-.875-.25-1.703-.61-1.703-1.563 0-.765.625-1.25 1.469-1.25.906 0 1.453.594 1.453 1.328 0 .813-.625 1.266-1.22 1.485zm3.629 4.203c.328.172.922.344 1.672.344 2.062 0 3-1.125 3-2.516 0-1.094-.594-1.813-1.547-2.14-.39-.126-.86-.173-1.422-.173h-.313v-2.453h3.079l.203-.75h-4.14v3.953h.858c.563 0 1 .016 1.375.157.579.218.97.672.97 1.437 0 1.14-.891 1.719-2.048 1.719-.609 0-1.093-.14-1.453-.297zm5.926 0c.328.172.922.344 1.672.344 2.062 0 3-1.125 3-2.516 0-1.094-.594-1.813-1.547-2.14-.391-.126-.86-.173-1.422-.173h-.313v-2.453h3.078l.204-.75h-4.141v3.953h.86c.562 0 1 .016 1.374.157.578.218.969.672.969 1.437 0 1.14-.89 1.719-2.047 1.719a3.59 3.59 0 0 1-1.453-.297zm6.488-2.36h3v-.78h-3zm4.18 2.579h4.812v-.75h-3.719c.438-2.954 3.72-2.86 3.72-5.282 0-1.078-.72-1.937-2.267-1.937a4.78 4.78 0 0 0-2.28.594l.28.703c.454-.25 1.157-.532 1.922-.532.766 0 1.422.344 1.422 1.235 0 1.953-3.547 1.797-3.89 5.969zm8.8.124c1.672 0 2.704-.937 2.704-2.218 0-1.188-.797-1.703-1.563-1.985v-.03c.656-.298 1.281-.876 1.281-1.86 0-1.047-.812-2-2.343-2-1.485 0-2.438.86-2.438 2.062 0 .969.625 1.5 1.313 1.797v.031c-.844.282-1.547.985-1.547 2.063 0 1.297.953 2.14 2.593 2.14zm.047-.75c-.906 0-1.718-.468-1.718-1.5 0-.875.75-1.375 1.468-1.593 1 .297 1.985.64 1.985 1.672 0 .953-.86 1.421-1.735 1.421zm.235-3.796c-.875-.25-1.703-.61-1.703-1.563 0-.766.625-1.25 1.468-1.25.907 0 1.453.594 1.453 1.328 0 .813-.625 1.266-1.218 1.485zm3.644 4.421h4.813v-.75h-3.72c.438-2.953 3.72-2.859 3.72-5.28 0-1.079-.72-1.938-2.266-1.938a4.78 4.78 0 0 0-2.281.593l.281.704c.453-.25 1.156-.532 1.922-.532s1.422.344 1.422 1.235c0 1.953-3.547 1.797-3.89 5.968zm5.903-2.578h3v-.78h-3zm4.535 2.579h1.515c.532-2.766 1.578-5.329 3.375-7.407v-.5h-5.625l.36 1.172h3.328c-1.094 1.406-2.328 3.703-2.953 6.735zm6.55 0h1.516c.531-2.766 1.578-5.329 3.375-7.407v-.5h-5.625l.36 1.172h3.328c-1.094 1.406-2.329 3.703-2.954 6.735zm6.551 0h1.516c.531-2.766 1.578-5.329 3.375-7.407v-.5h-5.625l.36 1.172h3.327c-1.093 1.406-2.328 3.703-2.953 6.735zm8.438.124c1.765 0 2.843-1.406 2.843-4.062 0-2.64-1.078-4.047-2.843-4.047-1.766 0-2.86 1.406-2.86 4.047 0 2.656 1.094 4.062 2.86 4.062zm0-1.218c-.969 0-1.344-.985-1.344-2.844 0-1.844.375-2.828 1.344-2.828.953 0 1.328.984 1.328 2.828 0 1.86-.375 2.844-1.328 2.844zm-77.125 31.488h.89v-2.922h.516c.703 0 1.219-.11 1.625-.297.922-.422 1.312-1.265 1.312-2.187 0-1-.421-1.735-1.14-2.14-.422-.235-.953-.36-1.719-.36h-1.484Zm.89-3.656v-3.5h.594c.547 0 .922.094 1.188.25.5.297.765.828.765 1.5 0 .719-.281 1.234-.812 1.5-.266.156-.64.25-1.14.25zm8.23 3.656h.782c-.062-.281-.11-.812-.11-1.937v-1.954c0-1.359-.843-1.921-2.015-1.921-.625 0-1.328.156-1.984.562l.328.625c.406-.234.875-.469 1.562-.469.703 0 1.22.39 1.22 1.25v.36l-1.08.047c-.577.015-1.03.078-1.405.265-.578.266-.97.781-.97 1.547 0 1.078.767 1.75 1.798 1.75.719 0 1.265-.344 1.703-.766zm-.218-2.812v1.437c-.266.281-.781.75-1.5.75-.64 0-1.047-.437-1.047-1.062a1 1 0 0 1 .485-.875c.25-.125.578-.204 1.078-.204zm2.547 2.812h.89v-4.172c.547-.562.954-.812 1.36-.812.203 0 .36.047.5.109l.312-.797c-.14-.094-.39-.14-.609-.14-.5 0-.984.171-1.61.859l-.093-.719h-.75zm4.082 0h.875v-2.922h.031l2.422 2.922h1.063l-2.75-3.281 2.484-2.39h-1.063l-2.156 2.077h-.031v-4.906h-.875zm5.488 0h.875v-5.672h-.875zm.438-6.953a.584.584 0 0 0 .594-.594c0-.344-.235-.594-.594-.594a.575.575 0 0 0-.594.594c0 .328.25.594.594.594zm2.199 6.953h.89v-4.172c.532-.469 1.094-.86 1.735-.86.812 0 1.016.657 1.016 1.5v3.532h.875v-3.828c0-1.422-.782-1.984-1.672-1.984-.735 0-1.375.343-2 .875l-.094-.735h-.75zm8.07 2.844c1.703 0 2.735-.703 2.735-1.781 0-2.11-3.735-1.11-3.735-2.235 0-.203.078-.406.297-.656.219.078.469.125.75.125 1.297 0 2.188-.828 2.188-2.047 0-.547-.22-1.094-.641-1.469a.97.97 0 0 1 .547-.156c.11 0 .219.016.328.031l.219-.687a1.58 1.58 0 0 0-1.516.422c-.031.046-.062.046-.125.015a2.462 2.462 0 0 0-1.062-.219c-1.235 0-2.094.875-2.094 2.016 0 .766.344 1.375.875 1.719-.484.453-.594.86-.594 1.125 0 .297.156.562.406.703-.718.344-1.062.89-1.062 1.469 0 1.03.984 1.625 2.484 1.625zm.078-.703c-1.015 0-1.734-.39-1.734-1.078 0-.547.484-.875.781-1.063 1.032.313 2.735.125 2.735 1.156 0 .547-.578.985-1.782.985zm-.03-4.578c-.798 0-1.282-.563-1.282-1.344 0-.797.531-1.297 1.281-1.297.766 0 1.297.547 1.297 1.312 0 .86-.562 1.329-1.297 1.329zm6.417 5.28h.89v-2.921c.266.11.626.203.985.203 1.656 0 2.875-1.14 2.875-3s-1.078-2.937-2.875-2.937a5.24 5.24 0 0 0-1.875.343zm.89-3.718v-4.047c.313-.094.61-.14.954-.14 1.125 0 2 .671 2 2.171 0 1.36-.703 2.25-1.985 2.25-.375 0-.656-.078-.968-.234zm8.575.875h.781c-.062-.281-.11-.812-.11-1.937v-1.954c0-1.359-.843-1.921-2.015-1.921-.625 0-1.328.156-1.984.562l.328.625c.406-.234.875-.469 1.562-.469.704 0 1.22.39 1.22 1.25v.36l-1.079.047c-.578.015-1.031.078-1.406.265-.578.266-.969.781-.969 1.547 0 1.078.766 1.75 1.797 1.75.719 0 1.266-.344 1.703-.766zm-.219-2.812v1.437c-.265.281-.781.75-1.5.75-.64 0-1.047-.437-1.047-1.062a1 1 0 0 1 .485-.875c.25-.125.578-.204 1.078-.204zm1.418 5.468c.297.11.594.188 1.016.188.922 0 1.781-.313 2.515-2.406l2.125-6.11h-.906l-1.531 4.594h-.016l-1.953-4.594h-.937l2.484 5.703c-.437 1.516-1.047 2.063-1.797 2.063a2 2 0 0 1-.781-.156zm6.203-3.015c.36.234.953.484 1.703.484 1.172 0 2.094-.547 2.094-1.672 0-1.922-2.672-1.484-2.672-2.75 0-.61.547-.797 1.094-.797s.984.157 1.375.313v-.781a4.114 4.114 0 0 0-1.406-.25c-1.266 0-1.922.687-1.922 1.546 0 1.891 2.656 1.5 2.656 2.735 0 .64-.562.906-1.219.906a2.6 2.6 0 0 1-1.421-.422zm6.895.484c.562 0 1.078-.203 1.422-.453l-.313-.625a1.622 1.622 0 0 1-.922.312c-.39 0-.593-.218-.593-.703v-3.61h1.437l.266-.718h-1.703v-1.578l-.875.297v1.281h-.954v.719h.954v3.75c0 .844.468 1.328 1.28 1.328zm5.898-.125h.782c-.063-.281-.11-.812-.11-1.937v-1.954c0-1.359-.844-1.921-2.015-1.921-.625 0-1.329.156-1.985.562l.328.625c.407-.234.875-.469 1.563-.469.703 0 1.219.391 1.219 1.25v.36l-1.079.047c-.578.015-1.03.078-1.406.265-.578.266-.969.782-.969 1.547 0 1.078.766 1.75 1.797 1.75.719 0 1.266-.344 1.703-.765zm-.218-2.812v1.437c-.266.281-.782.75-1.5.75-.641 0-1.047-.437-1.047-1.062 0-.36.172-.688.484-.875.25-.125.578-.204 1.078-.204zm4.175 2.937c.563 0 1.078-.203 1.422-.453l-.312-.625a1.622 1.622 0 0 1-.922.312c-.39 0-.594-.218-.594-.703v-3.609h1.438l.265-.719h-1.703v-1.578l-.875.297v1.281h-.953v.719h.953v3.75c0 .844.469 1.328 1.281 1.328zm2.61-.125h.875v-5.672h-.875zm.437-6.953a.584.584 0 0 0 .594-.594c0-.343-.234-.593-.594-.593a.575.575 0 0 0-.594.593c0 .328.25.594.594.594zm4.5 7.078c1.594 0 2.625-1.312 2.625-2.969 0-1.671-1.031-2.968-2.61-2.968-1.609 0-2.624 1.297-2.624 2.968 0 1.657 1.031 2.97 2.61 2.97zm0-.765c-1.047 0-1.703-.907-1.703-2.204 0-1.312.656-2.218 1.719-2.218 1.031 0 1.687.906 1.687 2.218 0 1.297-.656 2.204-1.703 2.204zm4.012.64h.89v-4.172c.532-.468 1.094-.86 1.735-.86.812 0 1.016.657 1.016 1.5v3.532h.875v-3.828c0-1.422-.782-1.984-1.672-1.984-.735 0-1.375.343-2 .875l-.094-.735h-.75zm0 0"
        aria-label="UFV Campus Connector Shuttle bus stop Public bus stop Food services Campus Security 1-855-239-7654 &amp; Campus First Aid 1-855-282-7770 Parking paystation"
        fill="#231f20"
      />
      <path
        d="M371.875 232.127h4.109l1.61-4.188h5.702l1.688 4.188h4.281l-7.281-17.656h-3.188zm6.859-7.438.875-2.406c.453-1.203.703-1.937.828-2.531h.063c.125.562.343 1.312.75 2.5l.812 2.437zm0 0"
        aria-label="A"
        fill="#fff"
      />
      <path
        d="M103.439 118.296h4.078V104h4.562l.985-3.28H98.282V104h5.157zm0 0"
        aria-label="T"
        fill="#fff"
      />
      <path
        d="M596.108 277.749h2.787l2.056-5.704a19.79 19.79 0 0 0 .59-1.914h.078c.128.59.385 1.297.629 1.952l2.081 5.666h2.903l4.908-14.568h-3.405l-2.325 7.85c-.218.744-.347 1.36-.5 2.067h-.065c-.18-.706-.411-1.361-.68-2.106l-2.699-7.81h-3.314l.95 2.594-1.823 5.472a26.123 26.123 0 0 0-.553 1.863h-.064a29.887 29.887 0 0 0-.501-1.863l-2.57-8.067h-3.75zm0 0"
        aria-label="W"
        fill="#fff"
      />
      <BuildingDisplay
        campus="CEP"
        building="W"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="M589.53 233.132v27.71h-6.317v4.306h6.223v44.888h24.072v-76.808z"
      />
      <path
        d="M451.975 395.361h3.122l6.643-16.165h-3.992l-3.065 8.011c-.441 1.112-.798 2.167-1.126 3.08h-.043a68.811 68.811 0 0 0-1.126-3.08l-3.065-8.011h-3.991zm0 0"
        aria-label="V"
        fill="#fff"
      />
      <BuildingDisplay
        campus="CEP"
        building="V"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="m425.194 376.462 55.99-.813.287 21.774-55.944.862Z"
      />
      <path
        d="M436.15 530.296h2.825l1.119-2.885h3.944l1.157 2.885h2.963l-5.023-12.205h-2.217zm4.728-5.141.609-1.648c.314-.844.49-1.354.569-1.766h.039c.098.392.235.902.51 1.746l.589 1.668zm17.694 2.08c-.902.53-1.805.902-3.06.902-2.296 0-3.729-1.57-3.729-3.826 0-2.08 1.138-3.944 3.768-3.944a6.94 6.94 0 0 1 3.237.805v-2.57c-.844-.354-1.962-.57-3.316-.57-4.12 0-6.69 2.826-6.69 6.318 0 3.552 2.177 6.122 6.376 6.122 1.295 0 2.688-.216 4.18-1.02zm2.944 3.06h7.26v-2.256h-4.435v-2.786h3.807v-2.276h-3.807v-2.551h3.807l.667-2.276h-7.3zm0 0"
        aria-label="ACE"
        fill="#fff"
      />
      <BuildingDisplay
        campus="CEP"
        building="ACE"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="M496.687 510.94v7.883H482.61v-2.648h-8.681v-1.972h-61.082v42.363h19.703v-22.659h41.379v-1.97h8.68v-3.634h14.078v11.823h24.63V510.94Z"
      />
      <path
        d="M98.4 78.399h3.2v-3.2h-3.2zm0 4.926h3.2v-3.2h-3.2zm240.983 136.5h3.2v-3.2h-3.2zM53.659 431.61h10.666v-10.667H53.66zM391.51 247.393h3.2v-3.2h-3.2zm0-4.634h3.2v-3.2h-3.2zm24.82-8.449h3.2v-3.2h-3.2z"
        fill="#0dadca"
      />
      <path
        d="M296.377 464.462v-4.498l67.238-4.355.286 4.305 5.695-.38 1.916 28.856-3.783.238-.154-3.462-72.536 4.707.237 3.54-3.59.24-1.865-28.76z"
        fill="#74c32c"
        stroke="#000"
        strokeWidth="2"
      />
      <path
        d="M323.766 481.11h4.078v-6.422h1.172c.406.078.985.718 1.906 2.422l2.125 4h4.64l-2.765-4.985c-.906-1.656-1.718-2.594-2.25-2.906v-.063c1.875-.578 3.36-2.187 3.36-4.453 0-1.937-.828-3.703-2.985-4.578-.937-.375-2.11-.594-3.625-.594h-5.656zm4.078-9.704v-4.593h1.313c.672 0 1.062.11 1.406.265.78.375 1.234 1.157 1.234 2.032 0 .906-.421 1.578-1.062 1.937-.406.22-.86.36-1.61.36zm0 0"
        aria-label="R"
        fill="#ffffff"
      />
      <BuildingDisplay
        campus="CEP"
        building="R"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="M296.377 464.462v-4.498l67.238-4.355.286 4.305 5.695-.38 1.916 28.856-3.783.238-.154-3.462-72.536 4.707.237 3.54-3.59.24-1.865-28.76z"
      />
      <path
        d="m391.138 468.37 1.531 12.731 14.07-1.724.91 7.798 12.538-1.529-.91-7.703 4.116-.478-2.06-16.895-12.776 1.53.542 4z"
        fill="#74c32c"
        stroke="#000"
        strokeWidth="2"
      />
      <path
        d="M409.998 477.89c.995 1.513 2.404 2.76 4.63 2.76.572 0 1.22-.073 1.764-.345l-.563-1.86c-.14.076-.573.17-.93.17-.685 0-1.39-.16-1.812-.62 2.488-.517 4.103-2.535 4.103-5.277 0-3.202-2.225-5.418-5.445-5.418-3.221 0-5.456 2.216-5.456 5.418 0 2.6 1.446 4.535 3.71 5.173zm1.747-1.792c-1.672 0-2.836-1.136-2.836-3.38 0-2.244 1.164-3.38 2.836-3.38 1.66 0 2.835 1.136 2.835 3.38 0 2.244-1.174 3.38-2.835 3.38zm0 0"
        aria-label="Q"
        fill="#ffffff"
      />
      <BuildingDisplay
        campus="CEP"
        building="Q"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="m391.138 468.37 1.531 12.731 14.07-1.724.91 7.798 12.538-1.529-.91-7.703 4.116-.478-2.06-16.895-12.776 1.53.542 4z"
      />
    </svg>
  );
}
