"use client";
import React from "react";
import BuildingDisplay from "../BuildingDisplay";

export default function AbbotsfordMap() {
  const [targetBuilding, setTargetBuilding] = React.useState<string | null>(
    null,
  );

  return (
    <svg
      width="997.905"
      height="1160.612"
      viewBox="0 0 997.905 1160.612"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto max-h-full w-auto max-w-full self-start justify-self-start"
    >
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="a">
          <path d="M0 1224h792V0H0Z" transform="translate(-326.875 -679.75)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="b">
          <path d="M0 1224h792V0H0Z" transform="translate(-472.972 -795.823)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="c">
          <path d="M0 1224h792V0H0Z" transform="translate(-472.958 -796.377)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="d">
          <path d="M0 1224h792V0H0Z" transform="translate(-472.963 -796.175)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="e">
          <path d="M0 1224h792V0H0Z" transform="translate(-473.031 -793.443)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="f">
          <path d="M0 1224h792V0H0Z" transform="translate(-640.833 -658)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="g">
          <path d="M0 1224h792V0H0Z" transform="translate(-472.945 -796.875)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="h">
          <path d="M0 1224h792V0H0Z" transform="translate(-640.758 -657.997)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="i">
          <path d="M0 1224h792V0H0Z" transform="translate(-473.04 -793.13)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="j">
          <path d="M0 1224h792V0H0Z" transform="translate(-472.991 -795.02)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="k">
          <path d="M0 1224h792V0H0Z" transform="translate(-473.019 -793.94)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="l">
          <path d="M0 1224h792V0H0Z" transform="translate(-473.063 -792.182)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="m">
          <path d="M0 1224h792V0H0Z" transform="translate(-473.045 -792.889)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="n">
          <path d="M0 1224h792V0H0Z" transform="translate(-472.98 -795.516)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="o">
          <path d="M0 1224h792V0H0Z" transform="translate(-472.947 -796.792)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="p">
          <path d="M0 1224h792V0H0Z" transform="translate(-637.062 -657.866)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="q">
          <path d="M0 1224h792V0H0Z" transform="translate(-637.075 -657.866)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="r">
          <path d="M0 1224h792V0H0Z" transform="translate(-637.448 -657.88)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="s">
          <path d="M0 1224h792V0H0Z" transform="translate(-640.547 -657.99)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="t">
          <path d="M0 1224h792V0H0Z" transform="translate(-589.875 -619.875)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="u">
          <path d="M0 1224h792V0H0Z" transform="translate(-637.716 -657.889)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="v">
          <path d="M0 1224h792V0H0Z" transform="translate(-640.273 -657.98)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="w">
          <path d="M0 1224h792V0H0Z" transform="translate(-640.333 -657.982)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="x">
          <path d="M0 1224h792V0H0Z" transform="translate(-639.725 -657.96)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="y">
          <path d="M0 1224h792V0H0Z" transform="translate(-322.75 -814.375)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="z">
          <path d="M0 1224h792V0H0Z" transform="translate(-393.625 -721.375)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="A">
          <path d="M0 1224h792V0H0Z" transform="translate(-399.813 -591.563)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="B">
          <path d="M0 1224h792V0H0Z" transform="translate(-656.5 -733.375)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="C">
          <path d="M0 1224h792V0H0Z" transform="translate(-602.501 -759)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="D">
          <path d="M0 1224h792V0H0Z" transform="translate(-686.667 -550.167)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="E">
          <path d="M0 1224h792V0H0Z" transform="translate(-615.334 -486.167)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="F">
          <path d="M0 1224h792V0H0Z" transform="translate(-430.001 -399.833)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="G">
          <path d="M0 1224h792V0H0Z" transform="translate(-268.667 -824)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="H">
          <path d="M0 1224h792V0H0Z" transform="translate(-155.833 -929.667)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="I">
          <path d="M0 1224h792V0H0Z" transform="translate(-154 -1095)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="J">
          <path d="M0 1224h792V0H0Z" transform="translate(-386.75 -871.375)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="K">
          <path d="M0 1224h792V0H0Z" transform="translate(-619.75 -758)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="L">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="M">
          <path d="M0 1224h792V0H0Z" transform="translate(-557.063 -738.938)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="N">
          <path d="M0 1224h792V0H0Z" transform="translate(-633.313 -638.625)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="O">
          <path d="M0 1224h792V0H0Z" transform="translate(-499 -625)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="P">
          <path d="M0 1224h792V0H0Z" transform="translate(-532.875 -494.5)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="Q">
          <path d="M0 1224h792V0H0Z" transform="translate(-371.75 -574.125)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="R">
          <path d="M0 1224h792V0H0Z" transform="translate(-373.5 -592.333)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="S">
          <path d="M0 1224h792V0H0Z" transform="translate(-186.833 -652.334)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="T">
          <path d="M0 1224h792V0H0Z" transform="translate(-290.334 -734)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="U">
          <path d="M0 1224h792V0H0Z" transform="translate(-416.667 -821.167)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="V">
          <path d="M0 1224h792V0H0Z" transform="translate(-383.667 -798)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="W">
          <path d="M0 1224h792V0H0Z" transform="translate(-631.75 -427)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="X">
          <path d="M0 1224h792V0H0Z" transform="translate(-556.625 -327.875)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="Y">
          <path d="M0 1224h792V0H0Z" transform="translate(-354.5 -707.125)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="Z">
          <path d="M0 1224h792V0H0Z" transform="translate(-354.414 -708.958)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aa">
          <path d="M0 1224h792V0H0Z" transform="translate(-659 -749)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ab">
          <path d="M0 1224h792V0H0Z" transform="translate(-1 -1125.5)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ac">
          <path d="M0 1224h792V0H0Z" transform="translate(-722 -739.5)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ad">
          <path d="M0 1224h792V0H0Z" transform="translate(-329.5 -843.5)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ae">
          <path d="M0 1224h792V0H0Z" transform="translate(-319 -395.122)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="af">
          <path d="M0 1224h792V0H0Z" transform="translate(-557.063 -738.938)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ag">
          <path d="M0 1224h792V0H0Z" transform="translate(-633.313 -638.625)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ah">
          <path d="M0 1224h792V0H0Z" transform="translate(-499 -625)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ai">
          <path d="M0 1224h792V0H0Z" transform="translate(-532.875 -494.5)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aj">
          <path d="M0 1224h792V0H0Z" transform="translate(-371.75 -574.125)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ak">
          <path d="M0 1224h792V0H0Z" transform="translate(-373.5 -592.333)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="al">
          <path d="M0 1224h792V0H0Z" transform="translate(-186.833 -652.334)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="am">
          <path d="M0 1224h792V0H0Z" transform="translate(-290.334 -734)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="an">
          <path d="M0 1224h792V0H0Z" transform="translate(-416.667 -821.167)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ao">
          <path d="M0 1224h792V0H0Z" transform="translate(-383.667 -798)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ap">
          <path d="M0 1224h792V0H0Z" transform="translate(-631.75 -427)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aq">
          <path d="M0 1224h792V0H0Z" transform="translate(-556.625 -327.875)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ar">
          <path d="M0 1224h792V0H0Z" transform="translate(-354.5 -707.125)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="as">
          <path d="M0 1224h792V0H0Z" transform="translate(-354.414 -708.958)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="at">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="au">
          <path d="M0 1224h792V0H0Z" transform="translate(-558.063 -742.938)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="av">
          <path d="M0 1224h792V0H0Z" transform="translate(-634.313 -642.625)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aw">
          <path d="M0 1224h792V0H0Z" transform="translate(-500 -629)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ax">
          <path d="M0 1224h792V0H0Z" transform="translate(-533.875 -498.5)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ay">
          <path d="M0 1224h792V0H0Z" transform="translate(-372.75 -578.125)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="az">
          <path d="M0 1224h792V0H0Z" transform="translate(-374.5 -596.333)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aA">
          <path d="M0 1224h792V0H0Z" transform="translate(-187.834 -656.334)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aB">
          <path d="M0 1224h792V0H0Z" transform="translate(-291.334 -738)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aC">
          <path d="M0 1224h792V0H0Z" transform="translate(-417.667 -825.167)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aD">
          <path d="M0 1224h792V0H0Z" transform="translate(-629.417 -429.667)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aE">
          <path d="M0 1224h792V0H0Z" transform="translate(-554.292 -330.542)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aF">
          <path d="M0 1224h792V0H0Z" transform="translate(-383.833 -800.667)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aG">
          <path d="M0 1224h792V0H0Z" transform="translate(-84.241 -1085.008)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aH">
          <path d="M0 1224h792V0H0Z" transform="translate(-56.254 -1086.67)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aI">
          <path d="M0 1224h792V0H0Z" transform="translate(-54.254 -1088.6)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aK">
          <path
            d="M105.937 1035.08h11.294v-11.3h-11.294z"
            transform="translate(-111.583 -1035.076)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aJ">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aL">
          <path d="M0 1224h792V0H0Z" transform="translate(-114.28 -1031.926)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aM">
          <path
            d="M0 1224h792V0H0Z"
            transform="translate(-111.583 -1035.076)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aO">
          <path
            d="M95.634 1072.03h16.38v-16.38h-16.38Z"
            transform="translate(-111.624 -1055.653)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aP">
          <path
            d="M95.634 1072.03h16.38v-16.38h-16.38Z"
            transform="translate(-103.103 -1069.07)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aQ">
          <path
            d="M95.634 1072.03h16.38v-16.38h-16.38Z"
            transform="translate(-108.51 -1058.88)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aN">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aR">
          <path d="M0 1224h792V0H0Z" transform="translate(-695.638 -854.114)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aS">
          <path d="M0 1224h792V0H0Z" transform="translate(-687.182 -857.657)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aT">
          <path d="M0 1224h792V0H0Z" transform="translate(-688.997 -859.822)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aU">
          <path d="M0 1224h792V0H0Z" transform="translate(-218.182 -907.409)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aV">
          <path d="M0 1224h792V0H0Z" transform="translate(-209.726 -910.952)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aW">
          <path d="M0 1224h792V0H0Z" transform="translate(-211.541 -913.117)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aX">
          <path d="M0 1224h792V0H0Z" transform="translate(-209.182 -834.409)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aY">
          <path d="M0 1224h792V0H0Z" transform="translate(-200.726 -837.952)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="aZ">
          <path d="M0 1224h792V0H0Z" transform="translate(-202.541 -840.117)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ba">
          <path d="M0 1224h792V0H0Z" transform="translate(-268.583 -585.08)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bb">
          <path d="M0 1224h792V0H0Z" transform="translate(-261.794 -585.02)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bc">
          <path d="M0 1224h792V0H0Z" transform="translate(-261.96 -591.004)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bd">
          <path d="M0 1224h792V0H0Z" transform="translate(-411.427 -859.893)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="be">
          <path d="M0 1224h792V0H0Z" transform="translate(-402.132 -862.605)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bf">
          <path d="M0 1224h792V0H0Z" transform="translate(-405.318 -865.715)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bg">
          <path d="M0 1224h792V0H0Z" transform="translate(-362.956 -850.609)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bh">
          <path d="M0 1224h792V0H0Z" transform="translate(-353.66 -853.321)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bi">
          <path d="M0 1224h792V0H0Z" transform="translate(-356.847 -856.431)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bj">
          <path d="M0 1224h792V0H0Z" transform="translate(-574 -850.375)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bk">
          <path d="M0 1224h792V0H0Z" transform="translate(-564.705 -853.087)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bl">
          <path d="M0 1224h792V0H0Z" transform="translate(-567.892 -856.197)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bm">
          <path d="M0 1224h792V0H0Z" transform="translate(-618.595 -586.88)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bn">
          <path d="M0 1224h792V0H0Z" transform="translate(-609.3 -589.594)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bo">
          <path d="M0 1224h792V0H0Z" transform="translate(-612.486 -592.703)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bp">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bq">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="br">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bs">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bt">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bu">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bv">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bw">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bx">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="by">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bz">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bA">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bB">
          <path d="M0 1224h792V0H0Z" transform="translate(-526.592 -487.166)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bC">
          <path d="M0 1224h792V0H0Z" transform="translate(-522.717 -480.291)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bD">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bE">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bF">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bG">
          <path d="M0 1224h792V0H0Z" transform="translate(-605.99 -792.288)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bH">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bI">
          <path d="M0 1224h792V0H0Z" transform="translate(-385.902 -820.846)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bK">
          <path
            d="M257.653 784.952h21.629v-21.628h-21.629z"
            transform="translate(-271.781 -763.324)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bL">
          <path
            d="M257.653 784.952h21.629v-21.628h-21.629z"
            transform="translate(-270.162 -779.135)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bM">
          <path
            d="M257.653 784.952h21.629v-21.628h-21.629z"
            transform="translate(-270.44 -767.604)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bJ">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bO">
          <path
            d="M304.149 679.141h23.117v-23.117h-23.117z"
            transform="translate(-315.883 -656.024)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bP">
          <path
            d="M304.149 679.141h23.117v-23.117h-23.117z"
            transform="translate(-318.793 -672.007)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bQ">
          <path
            d="M304.149 679.141h23.117v-23.117h-23.117z"
            transform="translate(-315.784 -660.607)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bN">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bS">
          <path
            d="M377.771 851.392h16.48V834.91h-16.48z"
            transform="translate(-392.729 -834.91)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bT">
          <path
            d="M377.771 851.392h16.48V834.91h-16.48z"
            transform="translate(-385.715 -848.103)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bU">
          <path
            d="M377.771 851.392h16.48V834.91h-16.48z"
            transform="translate(-390.044 -838.16)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bR">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bW">
          <path
            d="M539.476 848.272h14.704v-14.704h-14.704Z"
            transform="translate(-554.18 -833.962)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bX">
          <path
            d="M539.476 848.272h14.704v-14.704h-14.704Z"
            transform="translate(-545.942 -845.559)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bY">
          <path
            d="M539.476 848.272h14.704v-14.704h-14.704Z"
            transform="translate(-551.247 -836.702)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bV">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ca">
          <path d="M666.833 822.428h16.195v-16.196h-16.195z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cb">
          <path
            d="M666.833 822.428h16.195v-16.196h-16.195z"
            transform="translate(-674.074 -819.605)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cc">
          <path
            d="M666.833 822.428h16.195v-16.196h-16.195z"
            transform="translate(-679.798 -809.423)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="bZ">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ce">
          <path d="M661.342 769.956h16.195v-16.195h-16.195z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cf">
          <path
            d="M661.342 769.956h16.195v-16.195h-16.195z"
            transform="translate(-668.583 -767.133)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cg">
          <path
            d="M661.342 769.956h16.195v-16.195h-16.195z"
            transform="translate(-674.307 -756.951)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cd">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ci">
          <path
            d="M549.784 537.392h23.266v-23.266h-23.266Z"
            transform="translate(-573.05 -528.924)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cj">
          <path
            d="M549.784 537.392h23.266v-23.266h-23.266Z"
            transform="translate(-556.153 -527.732)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ck">
          <path
            d="M549.784 537.392h23.266v-23.266h-23.266Z"
            transform="translate(-568.447 -527.642)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ch">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cm">
          <path
            d="M607.534 415.503h26.873V388.63h-26.873z"
            transform="translate(-634.407 -403.24)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cn">
          <path
            d="M607.534 415.503h26.873V388.63h-26.873z"
            transform="translate(-615.568 -405.285)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="co">
          <path
            d="M607.534 415.503h26.873V388.63h-26.873z"
            transform="translate(-629.085 -402.742)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cl">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cq">
          <path
            d="M439.841 455.984h19.318v-19.318h-19.318z"
            transform="translate(-459.16 -436.912)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cr">
          <path
            d="M439.841 455.984h19.318v-19.318h-19.318z"
            transform="translate(-448.413 -452.52)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cs">
          <path
            d="M439.841 455.984h19.318v-19.318h-19.318z"
            transform="translate(-455.309 -440.62)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="ct">
          <path d="M0 1224h792V0H0Z" transform="translate(-405.525 -796.834)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cu">
          <path d="M0 1224h792V0H0Z" transform="translate(-394.937 -806.383)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cv">
          <path d="M0 1224h792V0H0Z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cw">
          <path d="M0 1224h792V0H0Z" transform="translate(-641.024 -746.514)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cx">
          <path d="M0 1224h792V0H0Z" transform="translate(-633.9 -753.011)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cy">
          <path d="M0 1224h792V0H0Z" transform="translate(-634.307 -743.855)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cz">
          <path d="M0 1224h792V0H0Z" transform="translate(-422 -439.318)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cA">
          <path d="M0 1224h792V0H0Z" transform="translate(-424.4 -442.541)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cC">
          <path
            d="M467.297 427.495h11.294v-11.296h-11.294z"
            transform="translate(-472.943 -427.495)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cB">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cD">
          <path d="M0 1224h792V0H0Z" transform="translate(-475.64 -424.345)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cE">
          <path d="M0 1224h792V0H0Z" transform="translate(-472.943 -427.495)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cG">
          <path
            d="M163.074 636.735h11.295V625.44h-11.295z"
            transform="translate(-168.72 -636.735)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cF">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cH">
          <path d="M0 1224h792V0H0Z" transform="translate(-171.417 -633.585)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cI">
          <path d="M0 1224h792V0H0Z" transform="translate(-168.72 -636.735)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cK">
          <path
            d="M184.074 765.735h11.295v-11.296h-11.295z"
            transform="translate(-189.72 -765.735)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cJ">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cL">
          <path d="M0 1224h792V0H0Z" transform="translate(-192.417 -762.585)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cM">
          <path d="M0 1224h792V0H0Z" transform="translate(-189.72 -765.735)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cO">
          <path
            d="M332.57 1039.31h11.295v-11.3H332.57Z"
            transform="translate(-338.217 -1039.309)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cN">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cP">
          <path
            d="M0 1224h792V0H0Z"
            transform="translate(-340.913 -1036.158)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cQ">
          <path
            d="M0 1224h792V0H0Z"
            transform="translate(-338.217 -1039.309)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cS">
          <path
            d="M401.57 1039.31h11.295v-11.3H401.57Z"
            transform="translate(-407.217 -1039.309)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cR">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cT">
          <path
            d="M0 1224h792V0H0Z"
            transform="translate(-409.913 -1036.158)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cU">
          <path
            d="M0 1224h792V0H0Z"
            transform="translate(-407.217 -1039.309)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cW">
          <path
            d="M466.232 863.044h11.295v-11.296h-11.295z"
            transform="translate(-471.879 -863.044)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cV">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cX">
          <path d="M0 1224h792V0H0Z" transform="translate(-474.575 -859.894)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cY">
          <path d="M0 1224h792V0H0Z" transform="translate(-471.879 -863.044)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="da">
          <path
            d="M686.426 764.919h11.295v-11.296h-11.295z"
            transform="translate(-692.072 -764.919)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cZ">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="db">
          <path d="M0 1224h792V0H0Z" transform="translate(-694.769 -761.769)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dc">
          <path d="M0 1224h792V0H0Z" transform="translate(-692.072 -764.919)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="de">
          <path
            d="M669.426 684.919h11.295v-11.296h-11.295z"
            transform="translate(-675.072 -684.919)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dd">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="df">
          <path d="M0 1224h792V0H0Z" transform="translate(-677.769 -681.769)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dg">
          <path d="M0 1224h792V0H0Z" transform="translate(-675.072 -684.919)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="di">
          <path
            d="M699.426 683.919h11.295v-11.296h-11.295z"
            transform="translate(-705.072 -683.919)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dh">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dj">
          <path d="M0 1224h792V0H0Z" transform="translate(-707.769 -680.769)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dk">
          <path d="M0 1224h792V0H0Z" transform="translate(-705.072 -683.919)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dm">
          <path
            d="M568.426 514.919h11.295v-11.296h-11.295z"
            transform="translate(-574.072 -514.919)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dl">
          <path
            d="M0 1224h792V0H0Z"
            transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dn">
          <path d="M0 1224h792V0H0Z" transform="translate(-576.769 -511.769)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="do">
          <path d="M0 1224h792V0H0Z" transform="translate(-574.072 -514.919)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dp">
          <path d="M0 1224h792V0H0Z" transform="translate(-136.333 -592.666)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dr">
          <path d="M0 1224h792V0H0Z" transform="translate(-146.667 -593)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dt">
          <path d="M0 1224h792V0H0Z" transform="translate(-745.944 -397.526)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dv">
          <path d="M0 1224h792V0H0Z" transform="translate(2.254 -582.87)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dx">
          <path d="M0 1224h792V0H0Z" transform="translate(-42.366 -558.903)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dz">
          <path d="M0 1224h792V0H0Z" transform="translate(-399.636 -772.898)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dA">
          <path d="M0 1224h792V0H0Z" transform="translate(-633.373 -819.752)" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="dB">
          <path d="M0 1224h792V0H0Z" transform="translate(-557.553 -728.502)" />
        </clipPath>
        <pattern
          patternTransform="translate(26 29)"
          patternUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="72"
          height="72"
          id="dq"
        >
          <path
            d="M71 1h73.439M71 5h73.439M71 9h73.439M71 13h73.439M71 17h73.439M71 21h73.439M71 25h73.439M71 29h73.439M71 33h73.439M71 37h73.439M71 41h73.439M71 45h73.439M71 49h73.439M71 53h73.439M71 57h73.439M71 61h73.439M71 65h73.439M71 69h73.439M-1 1h73.439M-1 5h73.439M-1 9h73.439M-1 13h73.439M-1 17h73.439M-1 21h73.439M-1 25h73.439M-1 29h73.439M-1 33h73.439M-1 37h73.439M-1 41h73.439M-1 45h73.439M-1 49h73.439M-1 53h73.439M-1 57h73.439M-1 61h73.439M-1 65h73.439M-1 69h73.439M1.04 3h73.44M1.04 7h73.44M1.04 11h73.44M1.04 15h73.44M1.04 19h73.44M1.04 23h73.44M1.04 27h73.44M1.04 31h73.44M1.04 35h73.44M1.04 39h73.44M1.04 43h73.44M1.04 47h73.44M1.04 51h73.44M1.04 55h73.44M1.04 59h73.44M1.04 63h73.44M1.04 67h73.44M1.04 71h73.44M-73 1H.439M-73 5H.439M-73 9H.439M-73 13H.439M-73 17H.439M-73 21H.439M-73 25H.439M-73 29H.439M-73 33H.439M-73 37H.439M-73 41H.439M-73 45H.439M-73 49H.439M-73 53H.439M-73 57H.439M-73 61H.439M-73 65H.439M-73 69H.439M-70.96 3H2.48M-70.96 7H2.48M-70.96 11H2.48M-70.96 15H2.48M-70.96 19H2.48M-70.96 23H2.48M-70.96 27H2.48M-70.96 31H2.48M-70.96 35H2.48M-70.96 39H2.48M-70.96 43H2.48M-70.96 47H2.48M-70.96 51H2.48M-70.96 55H2.48M-70.96 59H2.48M-70.96 63H2.48M-70.96 67H2.48M-70.96 71H2.48"
            fill="none"
            stroke="#211d1d"
            stroke-width=".3"
            stroke-dasharray="2,2"
          />
        </pattern>
        <pattern
          patternTransform="translate(26 29)"
          patternUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="72"
          height="72"
          id="ds"
        >
          <path
            d="M71 1h73.439M71 5h73.439M71 9h73.439M71 13h73.439M71 17h73.439M71 21h73.439M71 25h73.439M71 29h73.439M71 33h73.439M71 37h73.439M71 41h73.439M71 45h73.439M71 49h73.439M71 53h73.439M71 57h73.439M71 61h73.439M71 65h73.439M71 69h73.439M-1 1h73.439M-1 5h73.439M-1 9h73.439M-1 13h73.439M-1 17h73.439M-1 21h73.439M-1 25h73.439M-1 29h73.439M-1 33h73.439M-1 37h73.439M-1 41h73.439M-1 45h73.439M-1 49h73.439M-1 53h73.439M-1 57h73.439M-1 61h73.439M-1 65h73.439M-1 69h73.439M1.04 3h73.44M1.04 7h73.44M1.04 11h73.44M1.04 15h73.44M1.04 19h73.44M1.04 23h73.44M1.04 27h73.44M1.04 31h73.44M1.04 35h73.44M1.04 39h73.44M1.04 43h73.44M1.04 47h73.44M1.04 51h73.44M1.04 55h73.44M1.04 59h73.44M1.04 63h73.44M1.04 67h73.44M1.04 71h73.44M-73 1H.439M-73 5H.439M-73 9H.439M-73 13H.439M-73 17H.439M-73 21H.439M-73 25H.439M-73 29H.439M-73 33H.439M-73 37H.439M-73 41H.439M-73 45H.439M-73 49H.439M-73 53H.439M-73 57H.439M-73 61H.439M-73 65H.439M-73 69H.439M-70.96 3H2.48M-70.96 7H2.48M-70.96 11H2.48M-70.96 15H2.48M-70.96 19H2.48M-70.96 23H2.48M-70.96 27H2.48M-70.96 31H2.48M-70.96 35H2.48M-70.96 39H2.48M-70.96 43H2.48M-70.96 47H2.48M-70.96 51H2.48M-70.96 55H2.48M-70.96 59H2.48M-70.96 63H2.48M-70.96 67H2.48M-70.96 71H2.48"
            fill="none"
            stroke="#211d1d"
            stroke-width=".3"
            stroke-dasharray="2,2"
          />
        </pattern>
        <pattern
          patternTransform="translate(26 29)"
          patternUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="72"
          height="72"
          id="du"
        >
          <path
            d="M71 1h73.439M71 5h73.439M71 9h73.439M71 13h73.439M71 17h73.439M71 21h73.439M71 25h73.439M71 29h73.439M71 33h73.439M71 37h73.439M71 41h73.439M71 45h73.439M71 49h73.439M71 53h73.439M71 57h73.439M71 61h73.439M71 65h73.439M71 69h73.439M-1 1h73.439M-1 5h73.439M-1 9h73.439M-1 13h73.439M-1 17h73.439M-1 21h73.439M-1 25h73.439M-1 29h73.439M-1 33h73.439M-1 37h73.439M-1 41h73.439M-1 45h73.439M-1 49h73.439M-1 53h73.439M-1 57h73.439M-1 61h73.439M-1 65h73.439M-1 69h73.439M1.04 3h73.44M1.04 7h73.44M1.04 11h73.44M1.04 15h73.44M1.04 19h73.44M1.04 23h73.44M1.04 27h73.44M1.04 31h73.44M1.04 35h73.44M1.04 39h73.44M1.04 43h73.44M1.04 47h73.44M1.04 51h73.44M1.04 55h73.44M1.04 59h73.44M1.04 63h73.44M1.04 67h73.44M1.04 71h73.44M-73 1H.439M-73 5H.439M-73 9H.439M-73 13H.439M-73 17H.439M-73 21H.439M-73 25H.439M-73 29H.439M-73 33H.439M-73 37H.439M-73 41H.439M-73 45H.439M-73 49H.439M-73 53H.439M-73 57H.439M-73 61H.439M-73 65H.439M-73 69H.439M-70.96 3H2.48M-70.96 7H2.48M-70.96 11H2.48M-70.96 15H2.48M-70.96 19H2.48M-70.96 23H2.48M-70.96 27H2.48M-70.96 31H2.48M-70.96 35H2.48M-70.96 39H2.48M-70.96 43H2.48M-70.96 47H2.48M-70.96 51H2.48M-70.96 55H2.48M-70.96 59H2.48M-70.96 63H2.48M-70.96 67H2.48M-70.96 71H2.48"
            fill="none"
            stroke="#211d1d"
            stroke-width=".3"
            stroke-dasharray="2,2"
          />
        </pattern>
        <pattern
          patternTransform="matrix(-.04 1.74537 -.99974 -.0229 541.545 22280)"
          patternUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="72"
          height="72"
          id="dw"
        >
          <path
            d="M71 1h73.439M71 5h73.439M71 9h73.439M71 13h73.439M71 17h73.439M71 21h73.439M71 25h73.439M71 29h73.439M71 33h73.439M71 37h73.439M71 41h73.439M71 45h73.439M71 49h73.439M71 53h73.439M71 57h73.439M71 61h73.439M71 65h73.439M71 69h73.439M-1 1h73.439M-1 5h73.439M-1 9h73.439M-1 13h73.439M-1 17h73.439M-1 21h73.439M-1 25h73.439M-1 29h73.439M-1 33h73.439M-1 37h73.439M-1 41h73.439M-1 45h73.439M-1 49h73.439M-1 53h73.439M-1 57h73.439M-1 61h73.439M-1 65h73.439M-1 69h73.439M1.04 3h73.44M1.04 7h73.44M1.04 11h73.44M1.04 15h73.44M1.04 19h73.44M1.04 23h73.44M1.04 27h73.44M1.04 31h73.44M1.04 35h73.44M1.04 39h73.44M1.04 43h73.44M1.04 47h73.44M1.04 51h73.44M1.04 55h73.44M1.04 59h73.44M1.04 63h73.44M1.04 67h73.44M1.04 71h73.44M-73 1H.439M-73 5H.439M-73 9H.439M-73 13H.439M-73 17H.439M-73 21H.439M-73 25H.439M-73 29H.439M-73 33H.439M-73 37H.439M-73 41H.439M-73 45H.439M-73 49H.439M-73 53H.439M-73 57H.439M-73 61H.439M-73 65H.439M-73 69H.439M-70.96 3H2.48M-70.96 7H2.48M-70.96 11H2.48M-70.96 15H2.48M-70.96 19H2.48M-70.96 23H2.48M-70.96 27H2.48M-70.96 31H2.48M-70.96 35H2.48M-70.96 39H2.48M-70.96 43H2.48M-70.96 47H2.48M-70.96 51H2.48M-70.96 55H2.48M-70.96 59H2.48M-70.96 63H2.48M-70.96 67H2.48M-70.96 71H2.48"
            fill="none"
            stroke="#211d1d"
            stroke-width=".3"
            stroke-dasharray="2,2"
          />
        </pattern>
        <pattern
          patternTransform="matrix(-.07685 1.74413 -.99904 -.04402 171.121 22265.7)"
          patternUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="72"
          height="72"
          id="dy"
        >
          <path
            d="M71 1h73.439M71 5h73.439M71 9h73.439M71 13h73.439M71 17h73.439M71 21h73.439M71 25h73.439M71 29h73.439M71 33h73.439M71 37h73.439M71 41h73.439M71 45h73.439M71 49h73.439M71 53h73.439M71 57h73.439M71 61h73.439M71 65h73.439M71 69h73.439M-1 1h73.439M-1 5h73.439M-1 9h73.439M-1 13h73.439M-1 17h73.439M-1 21h73.439M-1 25h73.439M-1 29h73.439M-1 33h73.439M-1 37h73.439M-1 41h73.439M-1 45h73.439M-1 49h73.439M-1 53h73.439M-1 57h73.439M-1 61h73.439M-1 65h73.439M-1 69h73.439M1.04 3h73.44M1.04 7h73.44M1.04 11h73.44M1.04 15h73.44M1.04 19h73.44M1.04 23h73.44M1.04 27h73.44M1.04 31h73.44M1.04 35h73.44M1.04 39h73.44M1.04 43h73.44M1.04 47h73.44M1.04 51h73.44M1.04 55h73.44M1.04 59h73.44M1.04 63h73.44M1.04 67h73.44M1.04 71h73.44M-73 1H.439M-73 5H.439M-73 9H.439M-73 13H.439M-73 17H.439M-73 21H.439M-73 25H.439M-73 29H.439M-73 33H.439M-73 37H.439M-73 41H.439M-73 45H.439M-73 49H.439M-73 53H.439M-73 57H.439M-73 61H.439M-73 65H.439M-73 69H.439M-70.96 3H2.48M-70.96 7H2.48M-70.96 11H2.48M-70.96 15H2.48M-70.96 19H2.48M-70.96 23H2.48M-70.96 27H2.48M-70.96 31H2.48M-70.96 35H2.48M-70.96 39H2.48M-70.96 43H2.48M-70.96 47H2.48M-70.96 51H2.48M-70.96 55H2.48M-70.96 59H2.48M-70.96 63H2.48M-70.96 67H2.48M-70.96 71H2.48"
            fill="none"
            stroke="#211d1d"
            stroke-width=".3"
            stroke-dasharray="2,2"
          />
        </pattern>
      </defs>
      <path d="M997.905 1160.612H.049V0h997.856z" fill="#95c48b" />
      <path
        d="m0 0-29.75 28.25.5.625-12.5 12.25s-9 7.25-1.625 17.5l10 20.375 13 25.375s4.875-6.5 13-7.875c0 0 9.25-2.25 12.25-7.875l1 3.875 4 4.375L8.5 98.5 3.75 94s-3.375 3.875-13.375 6.125c0 0-6.125 2.25-10.25 7.625L-14 119.375s4.375 3.375 6.875.25L-5 121.5l-.5.875s-8.125 5.75-13.125-6.625l-31.25-63.5s-2-7.375 5.875-17.25L-.625-4.5l12 11.375 1 1 1 1.125 2.125 2.125-4.75.25z"
        transform="matrix(1.33333 0 0 -1.33333 414.474 647.513)"
        clip-path="url(#a)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.009.352L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.27 492.749)"
        clip-path="url(#b)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.011.416L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.252 492.011)"
        clip-path="url(#c)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.005.202L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.258 492.28)"
        clip-path="url(#d)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.013.497L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.35 495.922)"
        clip-path="url(#e)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.075-.003L0 0"
        transform="matrix(1.33333 0 0 -1.33333 833.085 676.513)"
        clip-path="url(#f)"
        fill="#f1efbf"
      />
      <path
        d="M0 0c-.001.015-.001.014 0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.235 491.347)"
        clip-path="url(#g)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.211-.007L0 0"
        transform="matrix(1.33333 0 0 -1.33333 832.985 676.517)"
        clip-path="url(#h)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.008.314L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.36 496.34)"
        clip-path="url(#i)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.012.497L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.296 493.82)"
        clip-path="url(#j)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.027 1.079L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.333 495.26)"
        clip-path="url(#k)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.018.707L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.391 497.604)"
        clip-path="url(#l)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.006.241L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.368 496.662)"
        clip-path="url(#m)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.008.307L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.28 493.158)"
        clip-path="url(#n)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.002.083L0 0"
        transform="matrix(1.33333 0 0 -1.33333 609.237 491.457)"
        clip-path="url(#o)"
        fill="#f1efbf"
      />
      <path
        d="M0 0c-.154-.005-.172-.006 0 0"
        transform="matrix(1.33333 0 0 -1.33333 828.056 676.692)"
        clip-path="url(#p)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.014-.001L0 0"
        transform="matrix(1.33333 0 0 -1.33333 828.075 676.692)"
        clip-path="url(#q)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.373-.013L0 0"
        transform="matrix(1.33333 0 0 -1.33333 828.572 676.674)"
        clip-path="url(#r)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.214-.007L0 0"
        transform="matrix(1.33333 0 0 -1.33333 832.704 676.527)"
        clip-path="url(#s)"
        fill="#f1efbf"
      />
      <path
        d="M0 0s-2-3.75-3-1c0 0-4.375 15.625-9.125 20.5 0 0-1.5 2.125-.875 2.5 0 0-.125 1.25 3.625-1 0 0 12.375-6.75 28.75-6 0 0-13.25-4.125-19.375-15m-75.875 106.5s-1.438 1.125-.125 2.313c0 0 14.562 6.125 17.5 9l.25-15.188zM-60.5 98s-1.125-3.125-1.063-3.937c0 0-.625-2.375-2.375-.875l-7.875 8.125s-1.187 2.25 1.813 1.75l8.875-2s1.687-.875.625-3.063m-35.708 11.625-27 1.25s-2.084-.25-.584 2.667c0 0 5.334 12.166 5.667 14.333 0 0 .334 3.333 2.667 1.333l19.166-16.583s2.501-1.583.084-3m-35.542 1.125-43.75-1.625 1.375 39.75s6-1 8 6.5c0 0 .875 8.25-5.125 9.875l.375 2s34.75-18.125 50.125-33.125c0 0 3.25-1-1.125-10.75L-125.75 114s-1.875-3.25-6-3.25m15.014 58.521.018-.747c-.005.193-.012.447-.018.747m.022-.916.001-.015-.001.015M100.25 19.375c-17.625 10-30.375 8.25-30.375 8.25-16.375.5-21.625-.875-21.625-.875-.875-.125-18.125-7-18.125-7-27.875-8.25-52.625 12-52.625 12C-33.75 38.5-44.25 52.5-44.25 52.5c-9.25 12-11.917 23.792-11.917 23.792-2.209 5.25-2.958 12.875-2.958 12.875-1.208 3.75 1.375 9.166 1.375 9.166l8.667.917-.459 6.625H-56l-.542 13.917 11 7.083c7.458 5.833 12.417 5.25 12.417 5.25l.416-.042 29.751-2.916 14.541-7.667.792-8 5.208-.542 3.708 4.292.042.708-.375 11.875c2.917-9.25 12.125-14.875 12.125-14.875 5.625-4.208 17.375-5.791 17.375-5.791L50.708 88c.125-1.417-.666-1.375-.666-1.375-10.583-3.5-9.245-14.187-9.245-14.187-.016-4.344 3.234-7.782 3.234-7.782 1.703-3.578-1.5-6.5-1.5-6.5-3.078-1.797-3.953-3.031-3.953-3.031l-.156-.641h-1.469v-4.109h2.672c-.25 1.438 1.875 3.75 1.875 3.75a88.478 88.478 0 0 1 3.875 2.813c4.625 6.312-.062 10.937-.062 10.937-4.75 10 3 14.875 3 14.875 2.625 1.75 2.437.125 2.437.125l.208-44.75c8.77.313 8.667 5.667 8.667 5.667l-.334 14h-1.333l.23-9.417c-.313-3.562-4.313-3.687-4.313-3.687l-.547 65.796c1.016-.156 4.156-.203 4.156-.203l1.266 7.219c-.437 4.938-8 2.625-8 2.625-8 .188-11.75 3.125-11.75 3.125-8.167 3.333-10.208 15.875-10.208 15.875l-2.834-.167-1.166 25 17 17.167c4.167 4 15.833 17.167 15.833 17.167l-5.333 8.166-10.834-13-9.833-9.5-4.5-1.166-4.5-2.5-4.167-2.334-2.166-8.833-2.667-1.833-2.5-4.5 1-27s-35-.667-40.667-.667c-5.667 0-12.166-2.167-12.166-2.167l-11.667-7.333-1.334 45.667h-8.166v-9.667l5.584-5.083 1.082-32.917L-60 120.75c-1.333-.667-4.75-4.125-4.75-4.125-2.667-1.667-11.958-6-11.958-6-7-1.5-16.333 2.5-16.333 2.5l-19.834 17c-4.334 3.167-3.333 6.167-3.333 6.167 2.333 13.166 1.667 32.833 1.667 32.833l1 1-3.233.673-.039 1.509.039-1.509-.767.16.833-2.833-.001.027.001-.027c.5-20-1.667-31.333-1.667-31.333-.5-2.167-1.833-.667-1.833-.667-5.333 6.833-43.167 30-43.167 30-3.5 2.5-3.333 4.833-3.333 4.833l.083 4.167-5.375-.25-.375 1.875-.375 9.625h-10.125l6.25 7.25 4-.125.25 3.75-4.125 4.75-2.25 1.75-11.5-12.25H-193l-.75 27-1 .375-.959 25.75-6.791-.125h-1.125c-2.625 11-11.75 18.25-11.75 18.25-4.875 3.125-6.125 7.75-6.125 7.75l-1.25 1.25-2.375 1.625 1.25 3.375-8.165-.292-.585-4.958c1-6.625 9.375-10.125 9.375-10.125 6.125-2.375 11-10.125 11-10.125l3.125-7.5.625-3.625 8.125-.75.625-23.25-8.625.333v-6.833l9.75-9.25.75-19.625-5.5-4.5-5.582-8.326 22.582-8.987-33.312-37.624 8.437-9.5 5.688-3.938 3.312-6.687c-16.437-4.938-26.687-17.25-26.687-17.25l-5.125 1.75-18.063-18.938 7.5-6.625c-4.125-6.5-3.625-28-3.625-28l2.375-2.375c-2 25.875 11.5 43.5 11.5 43.5 7.625 10.625 16.25 17.25 20.5 20.625s19 7.125 19 7.125l3 1.25 5.5-.5 7.75 5.125c4-1.25 47.875 1.875 47.875 1.875 1.75-.375 1-1.375 1-1.375-.75-1.5-16.375-21.25-16.375-21.25-3.375-5.5-18-19.875-18-19.875-7.625-6-12.125-12-12.125-12l-1.5.5-1.875-3.875-.875-2.375 26.75 24.875c1.75 1.125 25.75 32.5 25.75 32.5 3.5 3.625 6.125 2.875 6.125 2.875C-98 108.75-79 105.125-79 105.125l11.75-11.875L-63.625-27c.75-7.875-2.875-8.25-2.875-8.25L-105.125-40l.375 4.125-3.125.375-.5-1.125-2.75.375-.375-1h-2.625l-.375-1.25-2.625.625-.25-1.5-2.5.125-.375-1.25-3 .5.125-1.25-3.125.375-.25-.75-3.125.25-.125-2.75-3.25.5-.75-2.625 6.5-.625 20.875-4.5 1 9 21.5 2.875 17.25-4.625 3.625-3.5v-14.5h-6.625l-3.625-3.625L-68.5-71h11v-12.75c-.25-1.75 1.875-6.625 1.875-6.625 1.75-3.375 14.25-10 14.25-10l1.625 2.5c-7 3.75-12.375 7.875-12.375 7.875-3.75 4.375-2.25 16.125-2.25 16.125h1.25v1.375h2.625c.125 11.25-9.75 15.75-9.75 15.75l-4.625 147.125C-62.5 89-59.75 80.25-59.75 80.25c4.875-23.875 25.875-42.625 25.875-42.625 8.75-7.75 17.625-16.75 17.625-16.75C-4.5 8.5-4-12.125-4-12.125c-.375-22.125 2.125-35 2.125-35l3 .625C-2.25-37.875-1.25-10.75-1.25-10.75c1.5 19.25 28.625 26.5 28.625 26.5 21.5 10.375 27.375 9.625 27.375 9.625C90.125 27.75 98.125 17.5 98.125 17.5c9.25-9.75 3.75-38.875 3.75-38.875-9.5-3.5-26.125-20.375-26.125-20.375l1-2.375C89-30.125 101.375-24.5 101.375-24.5 99.125-41.875 80.25-72.375 80.25-72.375L61.5-104.75c-6.25-12.5-9.5-10.375-9.5-10.375l-5.75 3.5.125 6.25-3.375 1.75c-4.708-10.75 4.292-13.917 4.292-13.917 7.75-3.5 11.583 3.167 11.583 3.167l29.875 52.5C107.875-30.75 105.875-6.75 105.875-6.75c1.625 19.875-5.625 26.125-5.625 26.125"
        transform="matrix(1.33333 0 0 -1.33333 765.141 727.347)"
        clip-path="url(#t)"
        fill="#f1efbf"
      />
      <path
        d="M0 0"
        transform="matrix(1.33333 0 0 -1.33333 828.929 676.662)"
        clip-path="url(#u)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.549-.02L0 0"
        transform="matrix(1.33333 0 0 -1.33333 832.339 676.54)"
        clip-path="url(#v)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.06-.002L0 0"
        transform="matrix(1.33333 0 0 -1.33333 832.418 676.537)"
        clip-path="url(#w)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-2.009-.072L0 0"
        transform="matrix(1.33333 0 0 -1.33333 831.607 676.566)"
        clip-path="url(#x)"
        fill="#f1efbf"
      />
      <path
        d="M0 0s-4.875 5.75.5 9.75c0 0 1.125 1.875 6.25.125 0 0 20.25-5.375 24.5-5.375 0 0 5.375-3 10.625 3.875 0 0 1.25 2.125 5 1 0 0 9.625 1.75 10.125 10.875 0 0 .75 5.625 2.625.375 0 0 1.25-8.875-10.375-15.125 0 0-8.375-6-20.875-4.375l-18.25 5s-7.5 2.25-8.5.625c0 0-2.5-2.625 1.125-6.375L2.375-1Z"
        transform="matrix(1.33333 0 0 -1.33333 408.974 468.013)"
        clip-path="url(#y)"
        fill="#f1efbf"
      />
      <path
        d="M0 0s12.875-5.625 18.375-16.25c0 0 6.875-12.125 2.5-19.5 0 0-.125-.75-1.875-1.875 0 0-1.25-1.5-1.5-6.25 0 0 .125-4.375-1-5.125l-3-2.75s-.25-.5-2.75-.5c0 0-2.25.5-3.125-1.938L5-61s-.875-1.125 1.812-2.813l1.376-1.375s.687-.125.562-3.687c0 0 1.125-3.375-1.438-5.5l-3-3.438s-2.812-4.062.25-7.75C7.625-89.25 15.313-88.5 15.313-88.5l2.437-2.375s.875-.875.562-5.875c-.312-5 .25-24.25.25-24.25s.875-6.688-6.187-8.375l-34.062-.875s-3.875 1.063-4 4.312c-.125 3.25-.125 10.313-.75 13.813 0 0-1.938 11.25-10.251 16.75l-1.062-.25-.375-1 .312-.5s9.563-6.125 9.626-20.375l.375-9.25s.562-5.062 7.187-5.75L12-131.375s2.313-.187 3.375.813L51.188-141l7.562-7.187 6.438-13.5-.688-1.688-15.625.313V-145h-21.5V-163.312l4.562-4.563H49.75v1.313h14.875l-1.125-5-3.937-21.938-.625-6.875H57.25l-.125-1.812 8.188.375.062-10.75 2.75-.125-.062 10.625-.188.5h-1.187v1.125H61.25s3.938 29.562 5.75 32.687h3v7.375l-3.031 3.031-1.156-.531-4 8.375s-.438 2.375 4.812 1.313l.125 2.437s-4.812-.125-10.437 4.438l-3.563 2.187-33.188 9.625s-1.312.5.5 4.25c0 0 .625.562.625 3.5l-.312 30.187s.25 1.125-2 2.875L16-86.125s-2 1.125-3.187.75c0 0-6.688-1.25-7.563 3.375 0 0-.938 1.187 3.063 5.5 0 0 3 2.062 2.812 5.187l-.187 5.063s.312 1.562-1.75 3.062l-1.876 1.813 2.438 6.812s4.5-.875 6.75 2.875c0 0 3.125 3.063 3.125 5.563L20-40.563s0 .813 1.25 1.75c1.25.938 4.625 4.75 2.75 14.376 0 0-.688 13.624-21.625 26.374z"
        transform="matrix(1.33333 0 0 -1.33333 503.474 592.013)"
        clip-path="url(#z)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-.312 10-2.126 2.188.375.437-1 .813-1.812 3.937 2.938-.813 1.5-2.624 4.125.125.562-.625h8.375l.813-7.251-2.25-4.437L8.625.187l-3.5-.874Z"
        transform="matrix(1.33333 0 0 -1.33333 511.724 765.097)"
        clip-path="url(#A)"
        fill="#f1efbf"
      />
      <path
        d="M0 0s44.625-13.625 68.125-13.875h.75V-18.5S28.25-14.875 12-8.25c0 0 6.375-10 7-14.25 0 0-3.375-.125-4.125-1.125 0 0-2.25 8.75-10.375 17.375L0-4.625Z"
        transform="matrix(1.33333 0 0 -1.33333 853.974 576.013)"
        clip-path="url(#B)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-26.584 11.75-1.166 4.083-9.667 9.084 25.5 2.583.5 2.917 8.5 1L.5 29.167 4.916 25Z"
        transform="matrix(1.33333 0 0 -1.33333 781.976 541.847)"
        clip-path="url(#C)"
        fill="#f1efbf"
      />
      <path
        d="m0 0 18.167-6-11-35.834-30.667-48.5-30.999-31.999-10.667-9.834-2.667 2.334-2.666-7.167-6.5 2.5S-9-8.333 0 0"
        transform="matrix(1.33333 0 0 -1.33333 894.197 820.29)"
        clip-path="url(#D)"
        fill="#f1efbf"
      />
      <path
        d="m0 0 4.167-1.667S6.5 2.334 9.5 3.5L16.334-1S21-.166 8.5-19.833c0 0-24.5-43.166-29.833-51.5 0 0-13-19.333-39-22.667l-94-2.167s-.501-.333-1.667 2l-2.833 5.333s-.999.834.667 1.667l5.333 1.5-.167 4.833s-11.834-1.667-8-13.5c0 0 3.168-5 7.834-4.833l98 3.333S-28.167-91.167-13-62.667L20-6.833S22.5 1.833 14.5 5.5c0 0-7.333 5.333-14.5-5.5"
        transform="matrix(1.33333 0 0 -1.33333 799.086 905.624)"
        clip-path="url(#E)"
        fill="#f1efbf"
      />
      <path
        d="m0 0 5.333-1.166L6-2.333l-1.5-3.5L3.667-7l-67.5-1.166s-3.167-1-4.834-4c0 0-36.834-2-56.667 4.5l-1.499 3.667s.5.5-8.5 5c0 0-11.667 7.333-14.334 10.833 0 0-2.833 4.167-7.5 2.5 0 0-33.333 31.667-39.666 42 0 0-9.334 15.666-10.667 26.333 0 0 3.333 3 2.833 7 0 0-1.334 23.667-1.167 26 0 0 .5 5.333-5.166 7.5 0 0-4.5 29.834-28.333 44.667 0 0-12.001 10.667-33.167 13.5 0 0-7.667.666-7.5 10.666l3.833 86.5 1.167 89.333 1.833 106.5-2.666.5L-277 471l-7.5-281.666s4.833-14.001 13.5-13.334c0 0 46.5-7.166 55.333-54.166l1.667.5 5.333-4 1.333-30.5-4-5.5s.667-31.501 51.667-70.334l6.667-.333s9.5-9.667 22.667-16c0 0 1.166.834 2.833-4.666 0 0 13.001-10.833 60.167-6l5 3.333 67.666 2L9.5-5.499s3.333 9.333-9 10.833z"
        transform="matrix(1.33333 0 0 -1.33333 551.976 1020.736)"
        clip-path="url(#F)"
        fill="#f1efbf"
      />
      <path
        d="M0 0h4.167L5.5-17.167s.333-2.5 2.5-3.666c0 0 11-3.168 16.167-2 0 0 6.333-.5 22 44.5 0 0 8.166 27.166 1.333 48.666L32.5 122l-6.833 21.333-1.667 6-4.833 43.334 4-4.5L28.5 157l4.833-21.833 12.5-36.5 7.334-24.834L58 55.5l-4-21.667-2.5-17.166-6.167-20S38-17.167 37.333-17c-.666.167-10-10.833-10-10.833h-6.666l-13 1.333L1.5-21.833l-2.667 4z"
        transform="matrix(1.33333 0 0 -1.33333 336.864 455.18)"
        clip-path="url(#G)"
        fill="#f1efbf"
      />
      <path
        d="m0 0 110.5-.833 2.333 3.666 32.5 13.5L137.5 45 133 86.333l-5.167 4.834s-2.5 3.833-1.833 9.5l.667 31.166s.166 4.167 3.666 6.167c0 0 5.5 2.5 6.334 16.667L134.5 203l-6 10.167-19.833.833L-1.5 205.167l-7.5-5.834-4.333-21.5.166-95.166-.833-30L-11.333 37l4.166-11.333 7.5-12-2.5-10.834z"
        transform="matrix(1.33333 0 0 -1.33333 186.42 314.291)"
        clip-path="url(#H)"
        fill="#f1efbf"
      />
      <path
        d="m0 0 23.667.333 6.666 6.334 10.334 5 26 .333 9.666-6 9-8.333L108-3l-.333-6.333 5.333-1v-26l-5.667-2.334L107-63.333l5.333-2.334v-51L87-126l-3.333-1.333-11.334-4.334-5.666-2.666-18 .666L48-137l-8-.667L35.667-128 8-137.667v29h-9.333z"
        transform="matrix(1.33333 0 0 -1.33333 183.974 93.847)"
        clip-path="url(#I)"
        fill="#999dad"
        stroke="#d5d3b3"
        strokeMiterlimit="10"
      />
      <path
        d="M0 0s2.5 6.5-.75 14.75c0 0-9 21.25-4.5 30.125l2.5-.25s-3.875-5 .75-20.5c0 0 7.625-15.75 4.25-23.75z"
        transform="matrix(1.33333 0 0 -1.33333 494.308 392.013)"
        clip-path="url(#J)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-5 .5-.75 27 33 32.875s1.125-1 2.875 2.375c0 0 4.5 9.875-.75 18.75l-15.25 17s-5.25 3.25-34.5 3.125l5.5 3.625 30.375-1.5 12.75-6.125 4.125-7.125 6.125-9.75.125-7.125L35 63l-5.375-14.125L12.5 35.625l-9.375-9L1.25 4Z"
        transform="matrix(1.33333 0 0 -1.33333 804.974 543.18)"
        clip-path="url(#K)"
        fill="#f1efbf"
      />
      <path
        d="M435 553.5h3v-97h-3z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#L)"
        fill="#f1efbf"
      />
      <path
        d="m0 0-17.875-.687.479-12.751h-5.166v-6.833h13.499s1.167-16.833 5.5-23l3.001 1s7.5-21 33.166-31.667l-1.167-2.833s11.501-4 24.001-4l.166 7.167 12.834.5-.167 4.5 1.5-.167-.667 27.667h4.667l.167 2.5h2v5.5l-5-.167v1.167l-1.5.167-.167 1.833 2.167.167-.334 7.833-2 .167-.333 3.833-6.667.5s0 7.166-8.833 8.166v4.167h-5.167v-3.333h-3.166v6h1V7.729h-7.167V6.562h-6.5v6.167l-33.833-.833V2.063H0Z"
        transform="matrix(1.33333 0 0 -1.33333 721.391 568.597)"
        clip-path="url(#M)"
        fill="#3e4147"
      />
      <path
        d="M0 0v-18.312h-.75v-2.313H.375v-6.937H13v9.312h5.375v-1.187h6.312v1.875h5.5v-9.313h12.751V-24h6.375v11.062h-6.625V.687H29.75v-2.75h-5.375V-7.75h-6v5.625h-5.5L12.813.062z"
        transform="matrix(1.33333 0 0 -1.33333 823.058 702.347)"
        clip-path="url(#N)"
        fill="#3e4147"
      />
      <path
        d="M0 0v-25.667h-25.833V-37h36.5L10.417.083z"
        transform="matrix(1.33333 0 0 -1.33333 643.974 720.513)"
        clip-path="url(#O)"
        fill="#3e4147"
      />
      <path
        d="m0 0-17.875-30.625-4.25 2.75-.375-4-50-.5-.25 13.625h-11.375l-.25 29.125h12L-72.5 23.75h3.125l-.25 41.625-1.25.25-3.75 8.5 1.75 2.75 23-2.25.125-1.5 20.875 3.25-1.75 5.875 2.125-.125v1l17 2.5L-8.75 83-13 69.625h2.125l-.375-5.75h-2.375l-.25-7.5H-6.5V51h1.375V19.375l7-3.75-7.125-12.25z"
        transform="matrix(1.33333 0 0 -1.33333 689.141 894.513)"
        clip-path="url(#P)"
        fill="#3e4147"
      />
      <path
        d="m0 0 16.875-.25V-1.5H49.75v-3.875h1.75L62.125-11.5 57-20.125h-1.625v-52.5H52.5v-3.625h-2.75v-1.25h-9.375v5.375H2.75v42.875H-.125v8.75H-8.25v8.875h1.875v1.5l5.125 4.75h1.125z"
        transform="matrix(1.33333 0 0 -1.33333 474.308 788.347)"
        clip-path="url(#Q)"
        fill="#3e4147"
      />
      <path
        d="m0 0 22.333.834L22.667 11l-3 3.5 2 2.167L24 14l11 .834-.333 22.666-3.334 3L11 39.834 9.667 42.5l13.666 14.667-.166 4.666-10.834 10L13.5 73l1.167-.167 5.166 5.667 10 .333 2.834 3.334-.334 9.666 6 7.167-6.666 6.167.333 10-4 3.5-9.333-1-7 6.166-6.5-6.5-9.5-.166.833-1.334L-6.333 113H-8l.833-9-6.5-6.667 6.334-5.833-2.667-.333-4.667-12.334 2.167-2.166L-28 59.833l.167-3.833 17-15.833-2.5-2.667 5-11.5 4-.166L-3.667 3Z"
        transform="matrix(1.33333 0 0 -1.33333 476.641 764.07)"
        clip-path="url(#R)"
        fill="#3e4147"
      />
      <path
        d="m0 0 5.167-5.167-8-9.166 5.333-5-8.333-9L22.333-55l25 26 7.167-6.5L77-11.667l-16.833 15.5 5 5.167L72.5 2.667l.667.5L109-30.167l22 23.334L87.5 33.5l6 7-1.167 1-.5 3.333H88.5L87 46l-3.667-3.833-7.333 6.5-10.5-11.334L61 41l1 1.667-.833.833-.5 3.167-3-.167-1.5 1.333L52.333 44l-5.5 5z"
        transform="matrix(1.33333 0 0 -1.33333 227.752 684.069)"
        clip-path="url(#S)"
        fill="#3e4147"
      />
      <path
        d="m0 0 45-42.5 7 7 3-2.5L88-3l-7.833 7.5 26.166 27.833 2-1.833 2.5 2.167 4.668.166-.5 4.334 2.832 2.666-6.5 5.834-.332 1.5-1.334.166-1.334 1.334-.166 9.333-9.834-.333-18.5 17.666-41.333-43.5L41 29.5l-2-1.833-.667.5-3.666-3.5-6.334 5.166z"
        transform="matrix(1.33333 0 0 -1.33333 365.752 575.18)"
        clip-path="url(#T)"
        fill="#3e4147"
      />
      <path
        d="M0 0h-5.833v6.167h6V2.833h4.666V12.5l40.334 1.167v-4H49V1.333l60.333 1.5.167-4.333 3.5-.167.333-8.5h9.5v4.834L175.5-3.667l29.5 31 9.5-8.5 1 .834 2.666.166.334-3.333-1-.833 12.166-12-29.166-31-4.167 4L193.5-26.5l.833-1-2.167-2.667-.5-2.666H189l-2.667-3-2.667 2.333-9-.167v-4.166L123.5-39.5l-.5 8.833-79.5-2.5v5h-4.167v3.5L.667-25.833Z"
        transform="matrix(1.33333 0 0 -1.33333 534.197 458.958)"
        clip-path="url(#U)"
        fill="#3e4147"
      />
      <path
        d="M0 0h5l23.167 23.167H34v-4.5h-2.333L10.833-2.167v-3.5L6-6.333Z"
        transform="matrix(1.33333 0 0 -1.33333 490.197 489.847)"
        clip-path="url(#V)"
        fill="#3e4147"
      />
      <path
        d="m0 0 32.917 41.666L31.875 43l3 4 1.625-1L60 115.5l2.25-.75 1.001 3.249 9-3-1.126-3.374 9.459-3.292-23.333-68-1.876.542-1.75-4.375L56 36.125l-1.625-4.25 1.209-1.209-3.667-4.667-3.042 2.626-1.75-2.375 1.126-.917-31.334-38.667-1.667 1.084-2.625-2.875-7.375 6 2.625 3z"
        transform="matrix(1.33333 0 0 -1.33333 820.974 984.513)"
        clip-path="url(#W)"
        fill="#3e4147"
      />
      <path
        d="m0 0 1.75.125V10.5l11.375-.375L13-.25h-2.25l-.5-9 3.5.125-.25-8.375h-3.125v-7L1-24.25l.125 9.625L0-14.875Z"
        transform="matrix(1.33333 0 0 -1.33333 720.808 1116.68)"
        clip-path="url(#X)"
        fill="#3e4147"
        stroke="#939192"
        strokeMiterlimit="10"
      />
      <path
        d="m0 0 3.375-3 8.375.125.25-4.25-12.5-.25-3 3.125z"
        transform="matrix(1.33333 0 0 -1.33333 451.308 611.013)"
        clip-path="url(#Y)"
        fill="#3e4147"
      />
      <path
        d="m0 0 3.774-3 9.366.125.279-4.25-13.978-.25-3.355 3.125z"
        transform="matrix(1.33333 0 0 -1.33333 451.193 608.57)"
        clip-path="url(#Z)"
        fill="#74c32c"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
      />
      <path
        d="M0 0v12s1.25 2.5 2.25 2.75v-8H1L.5-1Zm66-139.375c-1.875-.625-6.25 0-6.25 0-10.25 2.5-9.875 11.812-9.875 11.812l1.625.125-.125 2.25-1.5-.125 2.25 25.25h7.5v59.25h-8.5c0 2.75-3.125 2.5-3.125 2.5H15.375c-4.75 0-4.042-3.187-4.042-3.187h-8v-42.333h10v-5.334c0-1.333.334-1.333-1-1.333s-4 1-4 1C-1.667-85.5 0-73.833 0-73.833L-.333-12.5h-.003c.513 1.818 2.086 2 2.086 2H5.5V-17h7v-1.25L55-18v5.5c-.25 2.75 1.25 3 1.25 3H63l-.25 30.75c-.25 4-1.25 3.25-1.25 3.25L2 23.75c-2.25 0-2.25 2-2.25 2C-.25 27 1 30 1 30c2 2.25 7.75 6.5 7.75 6.5l2.917.833 56 2.667.333-.031V-138.16c-.903-.914-2-1.215-2-1.215m-25.75 39.75-7.033 2.921L24-92.875c-2.75 1-2.25 4.25-2.25 4.25h8v42.25h-8.5c-1 .25 2 1.75 2 1.75h16.5c1.5 0 2.5-1.75 2.5-1.75h-9.5l.25-49.75 10-.25c.75-3.25-2.75-3.25-2.75-3.25M-21 36c2.25.5 2.25-1.75 2.25-1.75l.5-9 3-10.5L-15 2.5c0-3.5-2.25-2-2.25-2C-29.75 7.25-29.5 16-29.5 16c-3 12.5 8.5 20 8.5 20m53.5-199.167C29.167-176.501 18.166-193.5 18.166-193.5l-28-49.333c-5-7-12.333-2.667-12.333-2.667-6.333 2.666-4 12-4 12l7.333-4 18.667 33.667-6.667 3.667 16.001 28.333-49 27.666-4-6.666c-7.666 4-13-2.667-13-2.667l-12.334-21.667-13.333-3.666-28.667-50.334 6.667-4-35-60-3.667-3-7.5-2.166-.333 8-75-2L-339.667-295v-6.98c-2.99.621-8.379 2.118-9.333 4.979 0 0-5.333 1.333-2 13.333 0 0 4 10 .667 17.333 0 0 1.333 6 8 10L-353-247.669l-.667 16-.666 1.334-.667 2s-12 10-2.667 26c0 0-2.666 8 26.667 10l1.333 34-28 27.333-3.666-3.831s-.334-1.333-2.334 0l-28.333 27-1.667-2 2.667-2.334-3.667-4.333 5.334-17-11-12-11 10-1-1 .666-2-3.333-4.667-2.667 1-18-20-4.832 3.833-2.032-2.135-5.302 5.302 2 2-1.666 2-4.667-3.667s0-1.333-2 .667l-16.333 15.333s-1.333 1.001 0 2.667l2.333 2.333L-477-125l-2.833 2.666L-477.166-96s.334 3 3.667 6.666l44.666 47S-424.5-40-420.166-40c0 0 9.667-.668 14.333.332 0 0 4.668 1.001 6 2.001 0 0 6.666 3.667 15.333-3l35-33s1.667-1.333-1.333-4l-4-4 21-20s3-1.333.333-4l-6-6.333 9.334-8.667L-325.5-117l.667-8 4.667-.334V-129l8.333-.334 1.667-2 8.333 8.334-7.333 6.333 5.666 6-13 13S-318.667-86-313.333-69L-321-62l-11-11s-.333-.335-1.333.332L-375-34.334s-10.999 12-4.666 21.334C-373.333-3.667-358 29.999-358 29.999l9.167 19.834c6 8 11.333 2.667 11.333 2.667l-4.667-6 20-18.667 10.334 9.667 1-.667 11 11.667-3.667 3.333-2.667-4.333-30 18c-1 1.333-3 4-.666 8 2.333 4 6.666 2 6.666 2 24-7.667 26.667-6.667 26.667-6.667 6.333-.334 8.333 3.334 8.333 3.334 2 2.666 4 2.333 4 2.333 1.667-.333 4.667.167 4.667.167 8 4 7.333 11 7.333 11 0 2 1.334 1.333 1.334 1.333l9.333-.333-.333 24.333-8.667.667a37.12 37.12 0 0 1-.451 2.453l.117.047 13 1.333v-4.333h5.334l-.667-8L-138.5 90.5l1 8 3.666-1.333 1-5 13.667-.334.333-7.333 48.001 1.333c-1 24.333 17.666 26.667 17.666 26.667l17.334-.333c9.667.333 13.666-4.667 13.666-4.667l15-16c2.333-3.667 1.667-7.333 1.667-7.333V75.5c.152-2.446-1.028-4.745-2.35-6.525l-28.484-29.808c-3.667-4-5.333-9.334-5.333-9.334L-41.25 13c2.5-13.75 7.5-17.75 7.5-17.75 8.75-6.5 18-4.25 18-4.25 4.75.25 4-4.75 4-4.75l.583-57.583h1.333l.334-14c-.666-6-8.667-5.667-8.667-5.667v12.333h-14.5l.167-4.5-12.833-.5-.167-16.666L1.5-99c35-1.333 35-24 35-24 2-21.334-4-40.167-4-40.167M-26.667-273l-31-53.333.485-.318c-2.686-4.939-16.174-27.243-42.818-31.683l-84.666-3.333h-13.667s-10 3.666-6 12.666l-.036-.001c2.198 4.33 7.369 4.669 7.369 4.669l.333-8L-112-350c31.667 3 43 25 43 25 3.667 5.666 33.333 57.667 33.333 57.667l-7 4.667c6 9.667 13.334 5.333 13.334 5.333C-19.666-263-26.667-273-26.667-273m-204.666-85.334-61.667-1-3.333-4.334S-341-367.334-353-360.334c0 0-26 10.001-36.667 24.667l-35.666 37s-17 21.333-16 54c0 0 2 25.999-14.334 47.333 0 0-19.999 25.668-45.666 26.334 0 0-8.667 1.665-10.667 12.999l6.667 220 .434 30.833h17.066l-3.666-63.333-1.899-30.209 8.732-.624L-482-3l1-2.667L-482.333-25l-12.57.331-8.263-131.498s27.741-1.858 46.173-19.493l-.007-.008 4.667-5.333s2-2.666 0-7.333c0 0 18.666-16 18.666-42 0 0-1.333-56.001 42.667-87.334 0 0 1.333 8 16 8 0 0 5.999 0 10.667 4 0 0 7.332 3.333 16-4h1.666v-36.665h5.666l1-1.334v-7.666L-229-352.666l.666 7.666c8.1-1.668 8.367-6.398 7.861-8.963-.69-2.639-3.214-5.26-10.86-4.371M-423.666-17.667-413.333-25l6 12L-415-8.334-403.666 13-392 7l12 23.333-8 4.333c-1.333 4.333 1.667 4.333 1.667 4.333 2 .667 7.333-.333 7.333-.333 5.667-2 7-7 7-7l-.333-6L-385-1l-2.333-1.334-11-22c-6-7.334-17.667-5-17.667-5l-6.333 2.667c-7.333 4-1.333 9-1.333 9m-7.667 113.666 11.667.667.333-8.667H-423l.334-9-8.667-.666zM-400 71.333l.667-17-15.333-1-.334 17.333zm-87.833 30.833-16.926.639.309 21.922 2.284.439 15.667-.667zM-472-72.625l-3-3.25c-2.125-1.25-2.375 1.25-2.375 1.25l-.375 12.75c-.125 2.75 2.125 2.5 2.125 2.5l12 .375c2 0 2.125-.375 2.125-.375.875-.875 0-1.875 0-1.875l-3-3.125-4.75 4.5-7.5-8zM-432 2l-9-1v-8h-10.666l-.667 16.666 7.667.334.333 8.666h11.667zm-54.333 108.999-.333 6 81.666-1 .334-9-1-.333-.334 6.667zM-512 376.5s2 11 23 10l104 5s16 4 17-17v-117s3-31 6-39l21.575-69.629-.075-.038c10.667-32.333-7.667-73.333-7.667-73.333l-8.128-16.538-.038.037-.5.167-5.667-10s-20.333-3-25.333 5l-2.667 53.333-4 5 .333 68-103.666.667 1.334-42.667h5.666s1 .668 1-2c0 0 .334-1.667-1-1.667l-5-.333-6.333.333-2 2-.113.02.612 43.48s.334 4 7.334 4l101.666-1.333.334 40.667-23-9-.334 6.333-4.333-.333v-2l-14.333-5-20 .333-.334-4.667-8.333-.666-27.333-9.667-1 1.333 27.666 10-3.333 8.667-27.667-9.667s-15-3.333-16.666 13.334zM-353.75 265s3.702 4.095 7.748 3.369L-347 212.5l20-61s4 .666 5 1.333l1-4s.667-1.333 3-.333l3.333.667s1.666.666 2.334-4.334c-9.822-2.934-15.441 3.792-17.54 7.113l.123.054-24.5 76s-4 18.5.5 37m47.583-139.167s7-1.667 6.667-9.667c0 0 2-16.999-2.667-32.333 0 0-4.666-2.334-7.666-2.334l-15.667 6.167s-6.333 5.666-4 12c0 0 4 17 3.333 22 0 0-.333 8.001-1 9.667 0 0-.666 3.999 3.334 1.333 0 0 4.666-2.999 8.333-4.833 0 0 7.333-2 9.333-2M68 382V55.8c-2.453-1.377-4.5-1.467-4.5-1.467l-56-.833c-4.666-.333-3.334 2-3.334 2-.334 3 .5 5.333.5 5.333l.2 1.068.301-.068V63.5h2.5v-7h49v8.333h5l.666 61h-8L54 131.5l-98.667-3.667v-4c-.334-1.667-1.666-1.333-1.666-1.333-24.666-2.333-34.667-19-34.667-19-1.333-1-2.334.667-2.334.667v6.333l-35-1 .334-6.333c-.333-2-1.667-1.667-1.667-1.667-1.333-.333-1.667 1.333-1.667 1.333l.667 10-71.999 7.334-.667-7L-227 116.5l5.334 9-1.667.333-4.333-7.666c-2.333.666-40.667 5-40.667 5l-12-1.334.075-.754c-2.145 4.567-4.575 6.588-4.575 6.588-3.333 4.332-21.334 11.666-21.334 11.666-2.333.667-.666 2-.666 2l2 .667-.474.299c1.383.957 3.137 2.568 4.142 5.034l7.415-.083.5 120.5s1.417.917 8 0l.25-21.583 7.168-79.834 6.082.417s-3.75-26.417 11.5-27.5l-1-7.5 46-7 1.25 9.083s.167 2.834 7.25-2.583l-4 184.5-18 11.5-6 2h-6l1 67.5h-2l-1-60h-35v-7.5l-6.25-.417-.75-49.083h-7.5v49.5h-10v7.5h-35.5v-8.5h-8l-.25-48.417v-.154c-1.162.25-3.108.853-5.75 2.321 0 0-3 3 0 17.5l4 38.5.5 45.5s1.5 9.5 10.5 11.5l153.5 6.5V416l-8.75-.5-450.495-19.02-.19-18.773L-533 384.5s11 3 10-33l-1.783-104.305L-525 245s-1.666-40 4.667-56.333c0 0 2.666-40.334 2.333-52.667l-8-290.667s-.333-15.667-14.333-15l-4.334 7h-62.666l.666-28 38.667-.667 2.667 2.667L-564-190l39 .666 3.333 2-2.333 5s50.333 8.666 69.333-40c0 0 3-11.667 2.667-23 0 0-1.333-30.667 10.667-48 0 0 21.666-32.001 41.666-47.667 0 0 18.667-19.666 33.667-25.666 0 0 18.334-10.334 51.667-8.334l175 3.667L-98-369.667s5.891 1.139 13.885 4.592c2.208-3.357 13.12-20.79 8.615-30.925 0 0-2.25-5.75-9.5-7.75l-3.25.5s-26.75 1-38.5-4.75l2-7.75 22-6.25 11-1.25 1.25 1.5 2-.5 6.75-3s9.25-1.5 9.25-2.5 2.5-8 4.25-14l5.5-1.75 9.25-2 2.5 11.75 7.5 11.75s-15.25 2.5-28.75 11c0 0-1.5 5.25 0 9.25 0 0 9.997 14.31-7.46 38.729 8.451 4.225 18.272 10.887 25.937 21.099l5.023-3.828-4.25-5.5 17.75-15.5 4.75 6.5 3-2 7 7.75-2.75 2.5 4.5 6-21.75 17.25-3.5-6-4 2.084 80 141.333c4 6.334 10 22.666 10 22.666 1.333 5.666 5 10.334 5 10.334 10.474 7.854 17.714 3.473 21 .324V-435h25v817z"
        transform="matrix(1.33333 0 0 -1.33333 857.308 555.18)"
        clip-path="url(#aa)"
        fill="#c9c9ca"
      />
      <path
        d="M15.617.98S446.72 19.976 474.054 25.31l200.23 13.95-196.558.554L15.41 19.99Z"
        transform="matrix(1.33333 0 0 -1.33333 -20.026 53.18)"
        clip-path="url(#ab)"
        fill="#a6e1e5"
      />
      <path
        d="m957.102 468.976-.062 3.515 11 .172c.671.016 1.671.031 2.437.031v.047c-.734.375-1.422.875-2.016 1.297l-6.156 4.11-.015 1.609 5.875 3.922c.5.359 1.593 1.078 2.14 1.359v.047c-.765-.063-1.765-.078-2.562-.094l-10.907-.172-.046 3.547 19.328.313.046-3.235-7.109-4.75a57.073 57.073 0 0 0-2.594-1.625v-.047c.782-.421 1.516-.921 2.532-1.593l7.375-4.938.062-3.203Zm-.777 29.765c-.032 1.906.53 3.64 1.28 4.766l2.407-.969c-.5-.984-.906-1.953-.89-3.25.046-2.375 1.625-3.906 4.468-3.86 2.547.048 4.469 1.594 4.422 4.173-.015 1.359-.406 2.39-1.125 3.359l2.953.047c.469-.735.969-1.969.985-3.703.078-4.141-2.953-7.391-7.266-7.453-4.016-.063-7.172 2.375-7.234 6.89zm.183 7.453-.062 3.516 8.469.14v.094l-8.579 6.688-.078 4.312 10.078-8.047 9.266 7.922.062-4.11-8.125-6.733v-.094l8.235.14.062-3.515zm-.66 22.617c-.031 1.704.328 3.438 1.219 4.907l2.422-1.016c-.547-1-.907-2.11-.89-3.516.046-2.328 1.437-3.828 3.577-3.859l-.14 8.89.812.016c4.61.078 7.469-2.14 7.531-6.046.063-3.954-3.03-6.297-7.203-6.36-3.75-.062-7.25 1.906-7.328 6.985zm8.766-3.468c1.672.015 3.125 1.015 3.11 2.75-.032 1.843-1.61 2.578-3.188 2.625zm-8.61 11.41-.047 3.5 9.704.156c.843 1.031 1.421 2.266 1.406 3.406-.031 1.797-1.406 2.125-3.11 2.094l-8.093-.125-.063 3.531 9.188.14c3.953.063 5.078-2.171 5.11-4.374.03-1.719-.704-3.297-1.829-4.781l1.562-.328.047-3zm-.218 14.578-.188 11.406 2.734.047.094-6.234 11.047 6.531.172-11.125-2.75.656-.078 5.313zm-.227 13.469-.047 3.515 13.875.22.047-3.517zm16.094 2.015c-.016 1.235.906 2.172 2.062 2.204 1.203.015 2.125-.907 2.14-2.141.032-1.219-.89-2.156-2.062-2.172-1.171-.031-2.109.89-2.14 2.11zm-16.598 11.356c-.031 1.703.328 3.437 1.219 4.906l2.422-1.016c-.547-1-.906-2.109-.89-3.515.046-2.328 1.437-3.828 3.577-3.86l-.14 8.891.812.016c4.61.078 7.469-2.14 7.531-6.047.063-3.953-3.03-6.297-7.203-6.36-3.75-.062-7.25 1.907-7.328 6.985zm8.766-3.469c1.672.016 3.125 1.016 3.11 2.75-.032 1.844-1.61 2.578-3.188 2.625zm-8.707 18.484-.063 3.516 7.531.125-.03 1.672c-.11.469-.923 1.156-2.673 2.078l-4.937 2.703-.063 4.047 5.672-3.14c1.781-.985 2.86-1.766 3.188-2.36h.062c.672 2.25 2.344 3.844 4.922 3.875 1.969.031 3.766-.766 4.766-2.797.515-1.031.828-2.312.86-4.125l.093-5.281zm10.343 3.688 6.047.094-.03 1.625c-.016 1.047-.25 1.703-.595 2.156-.515.844-1.421 1.266-2.437 1.25-1.203-.015-2.094-.563-2.547-1.39-.297-.594-.484-1.235-.469-2.141zm-11.015 19.43c-.031 1.687.297 3.718.953 5.109l20.031.313.047-3.516-6.719-.109c.14-.547.203-1.328.203-1.86.079-4.405-2.89-7.655-7.296-7.718-4.563-.078-7.157 3.266-7.22 7.781zm2.906-.016c.047-2.531 1.625-4.234 4.313-4.187 2.843.046 4.453 1.859 4.421 4.296a6.21 6.21 0 0 1-.234 1.657l-8.297-.125c-.156-.469-.219-1.172-.203-1.64zm-3.047 10.313c-.015 1.046.86 1.937 2.016 1.953 1.14.015 1.984-.844 2-1.89.031-1.095-.813-1.985-1.953-2.001-1.157-.016-2.032.844-2.063 1.938zm0 0"
        aria-label="McK enzie R d."
        fill="#fff"
      />
      <path
        d="m0 0-.25 30.75c-.127 2.03-.446 2.834-.731 3.136L-1.248 0Z"
        transform="matrix(1.33333 0 0 -1.33333 941.308 567.847)"
        clip-path="url(#ac)"
        fill="#a6e1e5"
      />
      <path
        d="M0 0c-.25 2.25-.25 2.417 0 5.166 0 0 4 17 3.333 22 0 0-.333 8.001-1 9.667 0 0-.666 3.999 3.334 1.333l1.106 12.722C3.164 52.567.822 55.554-.373 57.446l.123.054-24.5 76s-4 18.5.5 37c0 0 1.1 1.21 2.75 2.198V187.1c-.245.128-.491.256-.75.4 0 0-3 3 0 17.5l4 38.5.5 45.5s1.5 9.5 10.5 11.5l153.5 6.5v14.5l-8.75-.5-450.646-18.717-.19-19.227L-203.5 290s11 3 10-33l-1.783-104.305-.217-2.195s-1.666-40 4.667-56.333c0 0 2.666-40.334 2.333-52.667l-8-290.667s-.333-15.667-14.333-15l-4.334 7-98.02-.747-.294-28.32c28.103.474 78.981.347 78.981.347l39 2.053 3.333 2-2.333 5s50.333 8.666 69.333-40c0 0 3-11.667 2.667-23 0 0-1.333-30.667 10.667-48 0 0 21.666-32.001 41.666-47.667 0 0 18.667-19.666 33.667-25.666 0 0 18.334-10.334 51.667-8.334l175 3.667 41.333 1.667s5.891 1.139 13.885 4.592c1.823.533 4.407 2.033 4.407 2.033-.725 1.141.849-1.168-.002.021 8.451 4.225 18.212 10.975 25.876 21.187l.084-.042 5.708 9.25.042-.04 80 141.333c4 6.334 10 22.666 10 22.666 1.333 5.666 5 10.334 5 10.334 10.474 7.854 17.714 3.473 21 .324V-529.5h25v817h-25V-38.7c-2.453-1.377-4.5-1.467-4.5-1.467l-1.245-.019-.115-14.577 5.527.263.333-.031V-232.66c-.903-.914-2-1.215-2-1.215-1.875-.625-6.25 0-6.25 0-3.935.96.5-.125-.75.188-6.75 1.5-22.25-3.875-23.938-12.875-.812-4.188-2.562-11.105-2.562-11.105C358.667-271.001 347.666-288 347.666-288l-28-49.333c.021.021-1.479-2.792-4.166-3.292l-10.375-17.5c.875-4.937-2.292-9.375-2.292-9.375l-31-53.333.485-.318c-2.686-4.939-16.174-27.243-42.818-31.683l-84.666-3.333h-13.667s-3.209 1.179-5.265 3.836l-20.155.15c-1.668-.727-4.084-1.059-7.58-.653l-61.667-1-3.333-4.334s-44.667-3.666-56.667 3.334c0 0-26 10.001-36.667 24.667l-35.666 37s-17 21.333-16 54c0 0 2 25.999-14.334 47.333 0 0-19.999 25.668-45.666 26.334 0 0-8.667 1.665-10.667 12.999l6.667 220 .434 30.833.024.293.25 9.625-.134.055.309 21.922-.05-.102.5 12.125-.166.082-.113.02.612 43.48s.008.077.036.203l-.4 29.116c-4.058 1.164-8.445 4.439-9.302 13.015L-182.5 282s2 11 23 10l104 5s16 4 17-17V163s3-31 6-39l21.575-69.629-.075-.038C-.333 22-18.667-19-18.667-19l-8.128-16.538-.038.037-.5.167-5.667-10-9.833-23.5L-55.5-95.5l-2.333-1.334-11-22a13.047 13.047 0 0 0-3.812-3.158l2.839-9.938c1.731.692 7.569 2.33 14.806-3.237l5.085 12.902c-2.125 4.245-3.572 9.87-.251 14.765C-43.833-98.167-28.5-64.501-28.5-64.501l9.167 19.834L-7.917-26.75C-8.333-25.667-9-24.474-7.333-21c1 2.083 2.666 2.167 2.5 2.083z"
        transform="matrix(1.33333 0 0 -1.33333 417.974 429.18)"
        clip-path="url(#ad)"
        fill="#a6e1e5"
      />
      <path
        d="M0 0v-1.455l9.772.234z"
        transform="matrix(1.33333 0 0 -1.33333 403.974 1027.017)"
        clip-path="url(#ae)"
        fill="#a6e1e5"
      />
      <path
        d="m0 0-17.875-.687.479-12.751h-5.166v-6.833h13.499s1.167-16.833 5.5-23l3.001 1s7.5-21 33.166-31.667l-1.167-2.833s11.501-4 24.001-4l.166 7.167 12.834.5-.167 4.5 1.5-.167-.667 27.667h4.667l.167 2.5h2v5.5l-5-.167v1.167l-1.5.167-.167 1.833 2.167.167-.334 7.833-2 .167-.333 3.833-6.667.5s0 7.166-8.833 8.166v4.167h-5.167v-3.333h-3.166v6h1V7.729h-7.167V6.562h-6.5v6.167l-33.833-.833V2.063H0Z"
        transform="matrix(1.33333 0 0 -1.33333 721.391 568.597)"
        clip-path="url(#af)"
        fill="#939192"
      />
      <path
        d="M0 0v-18.312h-.75v-2.313H.375v-6.937H13v9.312h5.375v-1.187h6.312v1.875h5.5v-9.313h12.751V-24h6.375v11.062h-6.625V.687H29.75v-2.75h-5.375V-7.75h-6v5.625h-5.5L12.813.062z"
        transform="matrix(1.33333 0 0 -1.33333 823.058 702.347)"
        clip-path="url(#ag)"
        fill="#939192"
      />
      <path
        d="M0 0v-25.667h-25.833V-37h36.5L10.417.083z"
        transform="matrix(1.33333 0 0 -1.33333 643.974 720.513)"
        clip-path="url(#ah)"
        fill="#939192"
      />
      <path
        d="m0 0-17.875-30.625-4.25 2.75-.375-4-50-.5-.25 13.625h-11.375l-.25 29.125h12L-72.5 23.75h3.125l-.25 41.625-1.25.25-3.75 8.5 1.75 2.75 23-2.25.125-1.5 20.875 3.25-1.75 5.875 2.125-.125v1l17 2.5L-8.75 83-13 69.625h2.125l-.375-5.75h-2.375l-.25-7.5H-6.5V51h1.375V19.375l7-3.75-7.125-12.25z"
        transform="matrix(1.33333 0 0 -1.33333 689.141 894.513)"
        clip-path="url(#ai)"
        fill="#939192"
      />
      <path
        d="m0 0 16.875-.25V-1.5H49.75v-3.875h1.75L62.125-11.5 57-20.125h-1.625v-52.5H52.5v-3.625h-2.75v-1.25h-9.375v5.375H2.75v42.875H-.125v8.75H-8.25v8.875h1.875v1.5l5.125 4.75h1.125z"
        transform="matrix(1.33333 0 0 -1.33333 474.308 788.347)"
        clip-path="url(#aj)"
        fill="#939192"
      />
      <path
        d="m0 0 22.333.834L22.667 11l-3 3.5 2 2.167L24 14l11 .834-.333 22.666-3.334 3L11 39.834 9.667 42.5l13.666 14.667-.166 4.666-10.834 10L13.5 73l1.167-.167 5.166 5.667 10 .333 2.834 3.334-.334 9.666 6 7.167-6.666 6.167.333 10-4 3.5-9.333-1-7 6.166-6.5-6.5-9.5-.166.833-1.334L-6.333 113H-8l.833-9-6.5-6.667 6.334-5.833-2.667-.333-4.667-12.334 2.167-2.166L-28 59.833l.167-3.833 17-15.833-2.5-2.667 5-11.5 4-.166L-3.667 3Z"
        transform="matrix(1.33333 0 0 -1.33333 476.641 764.07)"
        clip-path="url(#ak)"
        fill="#939192"
      />
      <path
        d="m0 0 5.167-5.167-8-9.166 5.333-5-8.333-9L22.333-55l25 26 7.167-6.5L77-11.667l-16.833 15.5 5 5.167L72.5 2.667l.667.5L109-30.167l22 23.334L87.5 33.5l6 7-1.167 1-.5 3.333H88.5L87 46l-3.667-3.833-7.333 6.5-10.5-11.334L61 41l1 1.667-.833.833-.5 3.167-3-.167-1.5 1.333L52.333 44l-5.5 5z"
        transform="matrix(1.33333 0 0 -1.33333 227.752 684.069)"
        clip-path="url(#al)"
        fill="#939192"
      />
      <path
        d="m0 0 45-42.5 7 7 3-2.5L88-3l-7.833 7.5 26.166 27.833 2-1.833 2.5 2.167 4.668.166-.5 4.334 2.832 2.666-6.5 5.834-.332 1.5-1.334.166-1.334 1.334-.166 9.333-9.834-.333-18.5 17.666-41.333-43.5L41 29.5l-2-1.833-.667.5-3.666-3.5-6.334 5.166z"
        transform="matrix(1.33333 0 0 -1.33333 365.752 575.18)"
        clip-path="url(#am)"
        fill="#939192"
      />
      <path
        d="M0 0h-5.833v6.167h6V2.833h4.666V12.5l40.334 1.167v-4H49V1.333l60.333 1.5.167-4.333 3.5-.167.333-8.5h9.5v4.834L175.5-3.667l29.5 31 9.5-8.5 1 .834 2.666.166.334-3.333-1-.833 12.166-12-29.166-31-4.167 4L193.5-26.5l.833-1-2.167-2.667-.5-2.666H189l-2.667-3-2.667 2.333-9-.167v-4.166L123.5-39.5l-.5 8.833-79.5-2.5v5h-4.167v3.5L.667-25.833Z"
        transform="matrix(1.33333 0 0 -1.33333 534.197 458.958)"
        clip-path="url(#an)"
        fill="#939192"
      />
      <path
        d="M0 0h5l23.167 23.167H34v-4.5h-2.333L10.833-2.167v-3.5L6-6.333Z"
        transform="matrix(1.33333 0 0 -1.33333 490.197 489.847)"
        clip-path="url(#ao)"
        fill="#939192"
      />
      <path
        d="m0 0 32.917 41.666L31.875 43l3 4 1.625-1L60 115.5l2.25-.75 1.001 3.249 9-3-1.126-3.374 9.459-3.292-23.333-68-1.876.542-1.75-4.375L56 36.125l-1.625-4.25 1.209-1.209-3.667-4.667-3.042 2.626-1.75-2.375 1.126-.917-31.334-38.667-1.667 1.084-2.625-2.875-7.375 6 2.625 3z"
        transform="matrix(1.33333 0 0 -1.33333 820.974 984.513)"
        clip-path="url(#ap)"
        fill="#939192"
      />
      <path
        d="m0 0 1.75.125V10.5l11.375-.375L13-.25h-2.25l-.5-9 3.5.125-.25-8.375h-3.125v-7L1-24.25l.125 9.625L0-14.875Z"
        transform="matrix(1.33333 0 0 -1.33333 720.808 1116.68)"
        clip-path="url(#aq)"
        fill="#939192"
        stroke="#939192"
        strokeMiterlimit="10"
      />
      <path
        d="m0 0 3.375-3 8.375.125.25-4.25-12.5-.25-3 3.125z"
        transform="matrix(1.33333 0 0 -1.33333 451.308 611.013)"
        clip-path="url(#ar)"
        fill="#939192"
      />
      <path
        d="m0 0 3.774-3 9.366.125.279-4.25-13.978-.25-3.355 3.125z"
        transform="matrix(1.33333 0 0 -1.33333 451.193 608.57)"
        clip-path="url(#as)"
        fill="#74c32c"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
      />
      <path
        d="M753 290h-28l.226 875.278h28z"
        transform="matrix(1.3331 0 0 -1.32585 -21.19 1545.037)"
        clip-path="url(#at)"
        fill="#a6e1e5"
      />
      <path
        d="M211.848 169.034h1.406l.938-2.594h3.828l.984 2.594h1.422l-3.844-9.922h-.937Zm2.75-3.687.938-2.578c.296-.844.468-1.297.562-1.657h.031c.125.36.282.797.563 1.64l.922 2.595Zm7.309 3.687h2.78c2.22 0 3.392-1.219 3.392-2.844 0-1.203-.782-2.14-1.907-2.39v-.031c.797-.36 1.266-1.157 1.266-2.125 0-1.329-.938-2.5-3.047-2.5h-2.484Zm1.328-1.11v-3.374h1.515c1.188 0 1.954.64 1.954 1.656 0 1.219-.813 1.719-2.094 1.719zm0-4.484v-3.187h1.047c1.28 0 1.828.656 1.828 1.578 0 .984-.656 1.61-1.86 1.61zm6.855 5.594h2.782c2.218 0 3.39-1.219 3.39-2.844 0-1.203-.781-2.14-1.906-2.39v-.031c.797-.36 1.266-1.157 1.266-2.125 0-1.329-.938-2.5-3.047-2.5h-2.485zm1.328-1.11v-3.374h1.516c1.188 0 1.953.64 1.953 1.656 0 1.219-.812 1.719-2.094 1.719zm0-4.484v-3.187h1.047c1.282 0 1.828.656 1.828 1.578 0 .984-.656 1.61-1.859 1.61zm11.262 5.75c2.766 0 4.875-1.984 4.875-5.062 0-2.969-2.015-5.078-4.875-5.078-2.812 0-4.875 2.078-4.875 5.078 0 3.062 2.078 5.062 4.875 5.062zm0-1.14c-2.078 0-3.469-1.531-3.469-3.922 0-2.375 1.391-3.938 3.47-3.938 2.202 0 3.452 1.672 3.452 3.938 0 2.39-1.36 3.922-3.453 3.922zm8.508.984h1.328v-8.797h2.75l.375-1.093h-7.312v1.093h2.859zm5.285-.625c.64.438 1.594.781 2.734.781 1.938 0 3.282-1.03 3.282-2.703 0-3.093-4.328-2.875-4.328-4.968 0-.985.812-1.329 1.64-1.329.766 0 1.516.188 2.203.563v-1.219c-.484-.25-1.312-.484-2.25-.484-1.906 0-3 1.172-3 2.594 0 2.968 4.328 2.703 4.328 4.937 0 1.078-.906 1.469-1.875 1.469a3.852 3.852 0 0 1-2.171-.688zm8.082.625h1.328v-4.5h3.219v-1.11h-3.219v-3.187h3.297l.39-1.093h-5.015zm11.27.156c2.765 0 4.875-1.984 4.875-5.062 0-2.969-2.016-5.078-4.875-5.078-2.813 0-4.875 2.078-4.875 5.078 0 3.062 2.078 5.062 4.875 5.062zm0-1.14c-2.078 0-3.47-1.531-3.47-3.922 0-2.375 1.392-3.938 3.47-3.938 2.203 0 3.453 1.672 3.453 3.938 0 2.39-1.36 3.922-3.453 3.922zm6.945.984h1.328v-4.094h1.031c.282.063.657.516 1.125 1.344l1.61 2.75h1.562l-1.75-2.937c-.531-.891-.906-1.438-1.203-1.594v-.031c1.234-.375 1.984-1.235 1.984-2.594 0-.906-.375-1.766-1.265-2.266-.5-.297-1.188-.468-2.188-.468h-2.234Zm1.328-5.203v-3.594h.906c.703 0 1.141.172 1.438.407.422.312.64.796.64 1.359 0 .719-.328 1.25-.812 1.516-.36.218-.75.312-1.281.312zm7.024 5.203h2.5c3.546 0 5.39-2.125 5.39-5 0-2.86-1.765-4.89-5.297-4.89h-2.593zm1.328-1.094v-7.703h1.156c2.719 0 4 1.578 4 3.766 0 2.125-1.031 3.937-3.969 3.937zm-92.399 17.797c.64.438 1.594.782 2.735.782 1.937 0 3.28-1.032 3.28-2.704 0-3.093-4.327-2.875-4.327-4.968 0-.985.812-1.328 1.64-1.328.766 0 1.516.187 2.203.562v-1.219c-.484-.25-1.312-.484-2.25-.484-1.906 0-3 1.172-3 2.594 0 2.968 4.329 2.703 4.329 4.937 0 1.078-.907 1.469-1.875 1.469a3.852 3.852 0 0 1-2.172-.688zm8.086.625h1.328v-3.578h.578c.875 0 1.532-.125 2.047-.36 1.235-.546 1.735-1.64 1.735-2.796 0-1.266-.563-2.203-1.485-2.703-.547-.313-1.218-.453-2.187-.453h-2.016zm1.328-4.672v-4.125h.672c.64 0 1.078.125 1.406.313.579.344.891.984.891 1.75 0 .844-.312 1.469-.953 1.797-.313.156-.75.265-1.344.265zm10.825 4.829c2.765 0 4.875-1.985 4.875-5.063 0-2.969-2.016-5.078-4.875-5.078-2.813 0-4.875 2.078-4.875 5.078 0 3.063 2.078 5.063 4.875 5.063zm0-1.141c-2.079 0-3.47-1.531-3.47-3.922 0-2.375 1.391-3.937 3.47-3.937 2.203 0 3.453 1.671 3.453 3.937 0 2.39-1.36 3.922-3.453 3.922zm6.949.984h1.328v-4.093h1.031c.281.062.656.515 1.125 1.343l1.61 2.75h1.562l-1.75-2.937c-.531-.89-.906-1.438-1.203-1.594v-.031c1.234-.375 1.984-1.235 1.984-2.594 0-.906-.375-1.766-1.265-2.266-.5-.296-1.188-.468-2.188-.468h-2.234Zm1.328-5.203v-3.594h.906c.703 0 1.14.172 1.438.407.421.312.64.797.64 1.359 0 .719-.328 1.25-.812 1.516-.36.218-.75.312-1.282.312zm8.578 5.203h1.328v-8.797h2.75l.375-1.093h-7.312v1.093h2.859zm5.285-.625c.64.438 1.594.782 2.735.782 1.937 0 3.28-1.032 3.28-2.704 0-3.093-4.327-2.875-4.327-4.968 0-.985.812-1.328 1.64-1.328.766 0 1.516.187 2.203.562v-1.219c-.484-.25-1.312-.484-2.25-.484-1.906 0-3 1.172-3 2.594 0 2.968 4.329 2.703 4.329 4.937 0 1.078-.907 1.469-1.875 1.469a3.852 3.852 0 0 1-2.172-.688zm17.871-1.015c-.687.375-1.437.656-2.375.656-2.172 0-3.547-1.61-3.547-3.906 0-2.22 1.36-3.953 3.641-3.953.984 0 1.75.25 2.453.625v-1.235c-.516-.297-1.422-.531-2.484-.531-3 0-5.016 2.281-5.016 5.156 0 2.89 1.766 4.985 4.813 4.985a6.06 6.06 0 0 0 2.89-.735zm6.586 1.797c2.766 0 4.875-1.985 4.875-5.063 0-2.969-2.015-5.078-4.875-5.078-2.812 0-4.875 2.078-4.875 5.078 0 3.063 2.078 5.063 4.875 5.063zm0-1.141c-2.078 0-3.469-1.531-3.469-3.922 0-2.375 1.391-3.937 3.47-3.937 2.202 0 3.452 1.671 3.452 3.937 0 2.39-1.36 3.922-3.453 3.922zm6.95.984h1.328v-6.14c0-.422 0-1.063-.032-1.5h.032c.203.375.468.765.671 1.062l2.516 3.703h.656l2.282-3.625c.203-.281.515-.797.718-1.172v7.673h1.328v-9.891h-1.25l-2.515 3.953c-.375.61-.64 1.062-.875 1.453h-.031c-.235-.406-.5-.781-.891-1.39l-2.703-4.016h-1.235zm12.027 0h1.328v-3.578h.578c.875 0 1.531-.125 2.047-.36 1.234-.546 1.734-1.64 1.734-2.796 0-1.266-.562-2.203-1.484-2.703-.547-.313-1.219-.453-2.188-.453h-2.015zm1.328-4.672v-4.125h.672c.64 0 1.078.125 1.406.313.578.344.89.984.89 1.75 0 .844-.312 1.469-.953 1.797-.312.156-.75.265-1.343.265zm6.422 4.672h4.953v-1.093h-3.625v-8.797h-1.328zm6.547 0h5.062v-1.093h-3.734v-3.407h3.234v-1.11h-3.234v-3.187h3.281l.39-1.093h-5zm6.191 0h1.484l2.782-4 2.64 4h1.516l-3.313-5.015 3.407-4.875h-1.5l-2.672 3.906-2.563-3.906h-1.547l3.25 4.922zm0 0"
        aria-label="ABBOTSFORD SPORTS COMPLEX"
        fill="#c9c9ca"
      />
      <path
        d="m0 0-17.875-.687.479-12.751h-5.166v-6.833h13.499s1.167-16.833 5.5-23l3.001 1s7.5-21 33.166-31.667l-1.167-2.833s11.501-4 24.001-4l.166 7.167 12.834.5-.167 4.5 1.5-.167-.667 27.667h4.667l.167 2.5h2v5.5l-5-.167v1.167l-1.5.167-.167 1.833 2.167.167-.334 7.833-2 .167-.333 3.833-6.667.5s0 7.166-8.833 8.166v4.167h-5.167v-3.333h-3.166v6h1V7.729h-7.167V6.562h-6.5v6.167l-33.833-.833V2.063H0Z"
        transform="matrix(1.33333 0 0 -1.33333 722.724 568.263)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building G
      />
      <BuildingDisplay
        campus="A"
        building="G"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="m0 0-17.875-.687.479-12.751h-5.166v-6.833h13.499s1.167-16.833 5.5-23l3.001 1s7.5-21 33.166-31.667l-1.167-2.833s11.501-4 24.001-4l.166 7.167 12.834.5-.167 4.5 1.5-.167-.667 27.667h4.667l.167 2.5h2v5.5l-5-.167v1.167l-1.5.167-.167 1.833 2.167.167-.334 7.833-2 .167-.333 3.833-6.667.5s0 7.166-8.833 8.166v4.167h-5.167v-3.333h-3.166v6h1V7.729h-7.167V6.562h-6.5v6.167l-33.833-.833V2.063H0Z"
        transform="matrix(1.33333 0 0 -1.33333 722.724 568.263)"
      />
      <path
        d="M0 0v-18.312h-.75v-2.313H.375v-6.937H13v9.312h5.375v-1.187h6.312v1.875h5.5v-9.313h12.751V-24h6.375v11.062h-6.625V.687H29.75v-2.75h-5.375V-7.75h-6v5.625h-5.5L12.813.062z"
        transform="matrix(1.33333 0 0 -1.33333 824.391 701.013)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building F
      />

      <path
        d="M0 0v-25.667h-25.833V-37h36.5L10.417.083z"
        transform="matrix(1.33333 0 0 -1.33333 645.308 719.18)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building T
      />

      <path
        d="m0 0-17.875-30.625-4.25 2.75-.375-4-50-.5-.25 13.625h-11.375l-.25 29.125h12L-72.5 23.75h3.125l-.25 41.625-1.25.25-3.75 8.5 1.75 2.75 23-2.25.125-1.5 20.875 3.25-1.75 5.875 2.125-.125v1l17 2.5L-8.75 83-13 69.625h2.125l-.375-5.75h-2.375l-.25-7.5H-6.5V51h1.375V19.375l7-3.75-7.125-12.25z"
        transform="matrix(1.33333 0 0 -1.33333 690.474 893.18)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building E
      />

      <path
        d="m0 0 16.875-.25V-1.5H49.75v-3.875h1.75L62.125-11.5 57-20.125h-1.625v-52.5H52.5v-3.625h-2.75v-1.25h-9.375v5.375H2.75v42.875H-.125v8.75H-8.25v8.875h1.875v1.5l5.125 4.75h1.125z"
        transform="matrix(1.33333 0 0 -1.33333 475.641 787.013)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building S
      />

      <path
        d="m0 0 22.333.834L22.667 11l-3 3.5 2 2.167L24 14l11 .834-.333 22.666-3.334 3L11 39.834 9.666 42.5l13.667 14.667-.166 4.666-10.833 10L13.5 73l1.166-.167 5.167 5.667 10 .333 2.834 3.334-.334 9.666 6 7.167-6.666 6.167.333 10-4 3.5-9.333-1-7.001 6.166-6.5-6.5-9.5-.166.834-1.334L-6.334 113H-8l.834-9-6.5-6.667 6.332-5.833-2.666-.333-4.666-12.334 2.166-2.166L-28 59.833l.166-3.833 17-15.833-2.5-2.667 5-11.5 4-.166L-3.666 3Z"
        transform="matrix(1.33333 0 0 -1.33333 477.974 762.736)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building D
      />

      <path
        d="m0 0 5.167-5.167-8-9.166 5.333-5-8.333-9L22.333-55l25 26 7.167-6.5L77-11.667l-16.833 15.5 5 5.167L72.5 2.667l.667.5L109-30.167l22 23.334L87.5 33.5l6 7-1.167 1-.5 3.333H88.5L87 46l-3.667-3.833-7.333 6.5-10.5-11.334L61 41l1 1.667-.833.833-.5 3.167-3-.167-1.5 1.333L52.333 44l-5.5 5z"
        transform="matrix(1.33333 0 0 -1.33333 229.086 682.735)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building C
      />

      <path
        d="m0 0 45-42.5 7 7 3.001-2.5 33 35-7.834 7.5 26.166 27.833 2-1.833 2.5 2.167 4.668.166-.5 4.334 2.832 2.666-6.5 5.834-.332 1.5-1.334.166-1.334 1.334-.166 9.333-9.834-.333-18.5 17.666-41.333-43.5L41 29.5l-2-1.833-.667.5-3.666-3.5-6.334 5.166z"
        transform="matrix(1.33333 0 0 -1.33333 366.086 573.847)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building B
      />

      <path
        d="M0 0h-5.833v6.167h6V2.833h4.666V12.5l40.334 1.167v-4H49V1.333l60.333 1.5.167-4.333 3.5-.167.333-8.5h9.5v4.834L175.5-3.667l29.5 31 9.5-8.5 1 .834 2.666.166.334-3.333-1-.833 12.166-12-29.166-31-4.167 4L193.5-26.5l.833-1-2.167-2.667-.5-2.666H189l-2.667-3-2.667 2.333-9-.167v-4.166L123.5-39.5l-.5 8.833-79.5-2.5v5h-4.167v3.5L.667-25.833Z"
        transform="matrix(1.33333 0 0 -1.33333 535.53 457.625)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building A
      />

      <path
        d="m0 0 32.917 41.666L31.875 43l3 4 1.625-1L60 115.5l2.25-.75 1.001 3.249 9-3-1.126-3.374 9.459-3.292-23.333-68-1.876.542-1.75-4.375L56 36.125l-1.625-4.25 1.209-1.209-3.667-4.667-3.042 2.626-1.75-2.375 1.126-.917-31.334-38.667-1.667 1.084-2.625-2.875-7.375 6 2.625 3z"
        transform="matrix(1.33333 0 0 -1.33333 819.864 983.957)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building H
      />

      <path
        d="m0 0 1.75.125V10.5l11.375-.375L13-.25h-2.25l-.5-9 3.5.125-.25-8.375h-3.125v-7L1-24.25l.125 9.625L0-14.875Z"
        transform="matrix(1.33333 0 0 -1.33333 719.697 1115.124)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building FH
      />
      <path
        d="M504.118 843.53c2 1.39 4.875 2.281 7.953 2.281 5.406 0 9.406-2.89 9.406-7.562 0-8.36-11.406-7.719-11.406-12.563 0-2.125 1.765-2.843 3.61-2.843 2.077 0 4.202.61 6.28 1.687v-4.406c-1.453-.719-3.718-1.313-6.453-1.313-5.468 0-8.547 3.391-8.547 7.282 0 8.031 11.391 7.39 11.391 12.547 0 2.28-2.203 3.125-4.39 3.125-2.407 0-4.407-.844-5.97-1.922zm-22.72-202.566h7.75c9.173 0 14.845-5.36 14.845-13.36 0-7.796-5.078-13-14.391-13h-8.203zm4.798-3.922v-18.516h2.953c6.453 0 9.687 3.64 9.687 9.157 0 4.968-2.64 9.359-9.593 9.359zm160.992-149.398h4.922l2.484-6.594H664l2.563 6.594h5.078l-10.562-26.485h-3.688zM656 477.128l1.922-5.203c.72-2.047 1.11-3.203 1.36-4.125h.078c.234.89.594 2.078 1.312 4.078l1.844 5.25zm-205.683 67.394h8.437c6.125 0 9.235-3.718 9.235-7.796 0-3.079-1.875-5.61-4.953-6.36v-.078c2.078-1.047 3.203-3.172 3.203-5.453 0-3.438-2.563-6.672-8.203-6.672h-7.72zm4.797-3.953v-7.453h3.593c2.688 0 4.407 1.36 4.407 3.61 0 2.671-1.719 3.843-4.922 3.843zm0-11.406v-7.047h2.234c2.89 0 4.125 1.563 4.125 3.531 0 2.032-1.406 3.516-4.078 3.516zM289.993 675.479c-1.875 1.079-3.875 1.844-6.485 1.844-5.39 0-8.75-3.844-8.75-9.406 0-5.188 3.032-9.516 8.922-9.516 2.563 0 4.75.64 6.797 1.72v-4.47c-1.64-.734-4.047-1.28-6.922-1.28-8.484 0-13.922 6.108-13.922 13.718 0 7.719 4.688 13.281 13.328 13.281 2.641 0 5.438-.484 8.36-2.094zm0 0"
        aria-label="S DA BC"
        fill="#fff"
      />
      <path
        d="M778.297 608.604h-4.843v8.36c-1.032.484-2.641.797-4.391.797-5.688 0-9-3.72-9-9.407 0-5.593 3.36-9.515 9.719-9.515 2.843 0 5.203.719 7.281 1.765v-4.484a22.47 22.47 0 0 0-7.64-1.312c-8.766 0-14.485 5.875-14.485 13.875 0 7.562 5.125 13.125 13.766 13.125 3.671 0 7.203-.922 9.593-2.125zM625.383 866.722h14.594V862.8h-9.797v-7.563h8.438v-3.922h-8.438v-7.03h8.485l1.28-3.923h-14.562zm0 0"
        aria-label="G E"
        fill="#fff"
      />
      <path
        d="M632.141 743.694h3.219v-15h4.734l.828-2.625h-13.906v2.625h5.125Zm0 0"
        aria-label="T"
        fill="#fff"
      />
      <path
        d="M878.622 917.73h3.296v-7.844h8.813v7.843h3.328v-18.14h-3.328v7.484h-8.813v-7.484h-3.296Zm0 0"
        aria-label="H"
        fill="#fff"
      />
      <path
        d="M832.602 722.151h2.922v-6.968h5.11v-2.391h-5.11v-4.266h5.203l.75-2.39h-8.875zm0 0"
        aria-label="F"
        fill="#fff"
      />
      <path
        d="M689.817 1138.35h2.781v-6.624h4.844v-2.266h-4.844v-4.063h4.938l.718-2.265h-8.437zm11.086 0h2.781v-6.578h7.39v6.579h2.782v-15.22h-2.781v6.282h-7.391v-6.281h-2.781Zm0 0"
        aria-label="FH"
        fill="#fff"
      />
      <BuildingDisplay
        campus="A"
        building="F"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="M0 0v-18.312h-.75v-2.313H.375v-6.937H13v9.312h5.375v-1.187h6.312v1.875h5.5v-9.313h12.751V-24h6.375v11.062h-6.625V.687H29.75v-2.75h-5.375V-7.75h-6v5.625h-5.5L12.813.062z"
        transform="matrix(1.33333 0 0 -1.33333 824.391 701.013)"
      />
      <BuildingDisplay
        campus="A"
        building="T"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="M0 0v-25.667h-25.833V-37h36.5L10.417.083z"
        transform="matrix(1.33333 0 0 -1.33333 645.308 719.18)"
      />
      <BuildingDisplay
        campus="A"
        building="E"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="m0 0-17.875-30.625-4.25 2.75-.375-4-50-.5-.25 13.625h-11.375l-.25 29.125h12L-72.5 23.75h3.125l-.25 41.625-1.25.25-3.75 8.5 1.75 2.75 23-2.25.125-1.5 20.875 3.25-1.75 5.875 2.125-.125v1l17 2.5L-8.75 83-13 69.625h2.125l-.375-5.75h-2.375l-.25-7.5H-6.5V51h1.375V19.375l7-3.75-7.125-12.25z"
        transform="matrix(1.33333 0 0 -1.33333 690.474 893.18)"
      />
      <BuildingDisplay
        campus="A"
        building="S"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="m0 0 16.875-.25V-1.5H49.75v-3.875h1.75L62.125-11.5 57-20.125h-1.625v-52.5H52.5v-3.625h-2.75v-1.25h-9.375v5.375H2.75v42.875H-.125v8.75H-8.25v8.875h1.875v1.5l5.125 4.75h1.125z"
        transform="matrix(1.33333 0 0 -1.33333 475.641 787.013)"
      />
      <BuildingDisplay
        campus="A"
        building="D"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="m0 0 22.333.834L22.667 11l-3 3.5 2 2.167L24 14l11 .834-.333 22.666-3.334 3L11 39.834 9.666 42.5l13.667 14.667-.166 4.666-10.833 10L13.5 73l1.166-.167 5.167 5.667 10 .333 2.834 3.334-.334 9.666 6 7.167-6.666 6.167.333 10-4 3.5-9.333-1-7.001 6.166-6.5-6.5-9.5-.166.834-1.334L-6.334 113H-8l.834-9-6.5-6.667 6.332-5.833-2.666-.333-4.666-12.334 2.166-2.166L-28 59.833l.166-3.833 17-15.833-2.5-2.667 5-11.5 4-.166L-3.666 3Z"
        transform="matrix(1.33333 0 0 -1.33333 477.974 762.736)"
      />
      <BuildingDisplay
        campus="A"
        building="C"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="m0 0 5.167-5.167-8-9.166 5.333-5-8.333-9L22.333-55l25 26 7.167-6.5L77-11.667l-16.833 15.5 5 5.167L72.5 2.667l.667.5L109-30.167l22 23.334L87.5 33.5l6 7-1.167 1-.5 3.333H88.5L87 46l-3.667-3.833-7.333 6.5-10.5-11.334L61 41l1 1.667-.833.833-.5 3.167-3-.167-1.5 1.333L52.333 44l-5.5 5z"
        transform="matrix(1.33333 0 0 -1.33333 229.086 682.735)"
      />
      <BuildingDisplay
        campus="A"
        building="B"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="m0 0 45-42.5 7 7 3.001-2.5 33 35-7.834 7.5 26.166 27.833 2-1.833 2.5 2.167 4.668.166-.5 4.334 2.832 2.666-6.5 5.834-.332 1.5-1.334.166-1.334 1.334-.166 9.333-9.834-.333-18.5 17.666-41.333-43.5L41 29.5l-2-1.833-.667.5-3.666-3.5-6.334 5.166z"
        transform="matrix(1.33333 0 0 -1.33333 366.086 573.847)"
      />
      <BuildingDisplay
        campus="A"
        building="A"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="M0 0h-5.833v6.167h6V2.833h4.666V12.5l40.334 1.167v-4H49V1.333l60.333 1.5.167-4.333 3.5-.167.333-8.5h9.5v4.834L175.5-3.667l29.5 31 9.5-8.5 1 .834 2.666.166.334-3.333-1-.833 12.166-12-29.166-31-4.167 4L193.5-26.5l.833-1-2.167-2.667-.5-2.666H189l-2.667-3-2.667 2.333-9-.167v-4.166L123.5-39.5l-.5 8.833-79.5-2.5v5h-4.167v3.5L.667-25.833Z"
        transform="matrix(1.33333 0 0 -1.33333 535.53 457.625)"
      />
      <BuildingDisplay
        campus="A"
        building="H"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="m0 0 32.917 41.666L31.875 43l3 4 1.625-1L60 115.5l2.25-.75 1.001 3.249 9-3-1.126-3.374 9.459-3.292-23.333-68-1.876.542-1.75-4.375L56 36.125l-1.625-4.25 1.209-1.209-3.667-4.667-3.042 2.626-1.75-2.375 1.126-.917-31.334-38.667-1.667 1.084-2.625-2.875-7.375 6 2.625 3z"
        transform="matrix(1.33333 0 0 -1.33333 819.864 983.957)"
      />
      <BuildingDisplay
        campus="A"
        building="FH"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="m0 0 1.75.125V10.5l11.375-.375L13-.25h-2.25l-.5-9 3.5.125-.25-8.375h-3.125v-7L1-24.25l.125 9.625L0-14.875Z"
        transform="matrix(1.33333 0 0 -1.33333 719.697 1115.124)"
      />
      <path
        d="M0 0h5l23.167 23.167H34v-4.5h-2.333L10.833-2.167v-3.5L6-6.333Z"
        transform="matrix(1.33333 0 0 -1.33333 490.418 486.29)"
        clip-path="url(#aF)"
        fill="#74c32c"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
      />
      <path
        d="M0 0h15.411v.934H29.24v-1.51h1.929v-32.83l-1.151-1.844h-2.734l.287 1.844h-1.478l-.108-1.844 1.443-1.3H31.169l2.799 2.59V.934h9.288v-5.236h6.218v-18.146l-3.906-4.317h-4.182l.287-2.084 1.295-.922 2.6.922 5.642 6.545v-15.829h-3.47l-2.172 2.232s-1.161.649-1.448 0c-.288-.649-.469-.468-.469-.468l.181-4.414h3.309v-32.029l-5.755.728v-6.628h.982l7.812 4.893v-17.523L39.113-98.34H-9.21v58.337z"
        transform="matrix(1.33333 0 0 -1.33333 90.962 107.169)"
        clip-path="url(#aG)"
        fill="#c9c9ca"
      />
      <path
        d="M0 0v-25.896h.863v-5.756H0V-55.97h.863v-4.137H0v-28.96h-2.015v-11.292h27.916v23.812H38.42l2.447 10.504v14.534s3.885 2.446 4.461 8.489c0 0 .863 5.186-3.454 10.58v17.196l-2.095 5.033-.027 8.634H29.067V0h-4.892v-1.865h-5.181V0H13.67v-1.865H8.778V0Z"
        transform="matrix(1.33333 0 0 -1.33333 53.646 104.954)"
        clip-path="url(#aH)"
        fill="#3e4147"
      />
      <path
        d="M0 0v-25.896h.863v-5.756H0V-55.97h.863v-4.137H0v-28.959h-2.015v-11.293h27.916v23.812H38.42l2.447 10.504v14.534s3.885 2.446 4.461 8.49c0 0 .863 5.185-3.454 10.579v17.196l-2.095 5.033-.027 8.634H29.067V0h-4.892v-1.865h-5.181V0H13.67v-1.865H8.778V0Z"
        transform="matrix(1.3333 0 0 -1.33333 52.98 104)"
        fill="#71c32d"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
        // Building K
      />
      <path
        d="M71.52 172.815h4.797v-11.562h.125l9.312 11.562h5.875l-11.187-13.562 10.594-12.797h-5.594l-9 11.234h-.125v-11.234H71.52Zm0 0"
        aria-label="K"
        fill="#fff"
      />
      <BuildingDisplay
        campus="A"
        building="K"
        selectedBuilding={targetBuilding}
        setSelectedBuilding={setTargetBuilding}
        svgPath="M0 0v-25.896h.863v-5.756H0V-55.97h.863v-4.137H0v-28.959h-2.015v-11.293h27.916v23.812H38.42l2.447 10.504v14.534s3.885 2.446 4.461 8.49c0 0 .863 5.185-3.454 10.579v17.196l-2.095 5.033-.027 8.634H29.067V0h-4.892v-1.865h-5.181V0H13.67v-1.865H8.778V0Z"
        transform="matrix(1.3333 0 0 -1.33333 52.98 104)"
      />
      {/* <path
        d="M0 0v-25.896h.863v-5.756H0V-55.97h.863v-4.137H0v-28.959h-2.015v-11.293h27.916v23.812H38.42l2.447 10.504v14.534s3.885 2.446 4.461 8.49c0 0 .863 5.185-3.454 10.579v17.196l-2.095 5.033-.027 8.634H29.067V0h-4.892v-1.865h-5.181V0H13.67v-1.865H8.778V0Z"
        transform="matrix(1.33333 0 0 -1.33333 50.98 102.38)"
        clip-path="url(#aI)"
        fill="#74c32c"
        stroke="#231f20"
        stroke-width="2"
        strokeMiterlimit="10"
      /> */}

      <g clip-path="url(#aJ)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.646-5.648A5.654 5.654 0 0 1 0-11.296a5.655 5.655 0 0 1 5.648 5.648A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 148.777 251.898)"
          clip-path="url(#aK)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.065a.806.806 0 0 0-.16-.14l-.098-.098-.052-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.099-.625.303-.83l.127-.076.066-.021.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.043l.15-.033.475-.119h.066l.053-.021h.043l.064-.022.27-.054.042-.021.088-.022.151-.042c.16-.044.301-.098.396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.524.128-3.924c0-.269-.032-.485-.108-.646-.204-.712-.613-1.207-1.207-1.478a2.298 2.298 0 0 0-.225-.117c-.282-.076-.636-.108-1.068-.108-1.173 0-2.154.452-2.93 1.369l.02.043.043.021c.012.011.012.011.022.011h.011c.065.076.14.14.239.194l.052.065.226.182.032.012c.01.011.033.02.043.02a.956.956 0 0 0 .282.249h.052c.541-.701 1.144-1.046 1.823-1.046.376 0 .744.087 1.1.27a.664.664 0 0 0 .204.194l.022.054a.967.967 0 0 1 .151.301v.108c0 .356-.141.648-.409.852l-.067.021c-.074.034-.14.043-.193.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a1.024 1.024 0 0 0-.302.075h-.065l-.15.032h-.043l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.952.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 131.013 177.945)"
        clip-path="url(#aL)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.646-5.648A5.654 5.654 0 0 1 0-11.296a5.655 5.655 0 0 1 5.648 5.648A5.655 5.655 0 0 1 0 0m0-11.992a6.35 6.35 0 0 0-6.342 6.344A6.349 6.349 0 0 0 0 .696a6.352 6.352 0 0 0 6.345-6.344A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 127.418 173.745)"
        clip-path="url(#aM)"
        fill="#100f0d"
      />
      <g clip-path="url(#aN)" transform="translate(-21.359 -78.153)">
        <path
          d="m0 0-15.99.388.388 15.992L.39 15.991Z"
          transform="matrix(1.33333 0 0 -1.33333 148.832 224.463)"
          clip-path="url(#aO)"
          fill="#fff"
          fillOpacity={0}
        />
        <path
          d="M0 0a1.017 1.017 0 0 0-1.042-.993A1.019 1.019 0 1 0 0 0"
          transform="matrix(1.33333 0 0 -1.33333 137.471 206.574)"
          clip-path="url(#aP)"
          fill="#110f0d"
        />
        <path
          d="m0 0-.642 3.957a.663.663 0 0 1-.638.556l-3.2.078-.1.628 2.684-.066a.499.499 0 0 1 .024.995l-2.871.069-.301 1.857a1.019 1.019 0 0 1-2.011-.325l.264-1.633a3.747 3.747 0 0 1-2.771-3.524 3.743 3.743 0 0 1 3.647-3.829 3.745 3.745 0 0 1 3.83 3.648.497.497 0 1 1-.994.024A2.75 2.75 0 0 0-5.891-.243a2.747 2.747 0 0 0-2.677 2.811 2.75 2.75 0 0 0 1.939 2.559l.159-.982a1.02 1.02 0 0 1 .98-.857c.009.001 3.627-.087 3.627-.087l.554-3.414A.663.663 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 144.68 220.16)"
          clip-path="url(#aQ)"
          fill="#110f0d"
        />
      </g>
      <path
        d="M510.762 1001.401h10.39v-2.875h-6.874v-16.453h-3.516Zm18.871.297c4.125 0 6.953-3.11 6.953-7.281 0-4.156-2.828-7.234-6.953-7.234-4.14 0-6.922 3.078-6.922 7.234 0 4.172 2.782 7.281 6.922 7.281zm0-2.812c-2.203 0-3.343-1.89-3.343-4.469 0-2.547 1.14-4.422 3.343-4.422 2.188 0 3.344 1.875 3.344 4.422 0 2.578-1.156 4.469-3.344 4.469zm14.867 2.812c1.375 0 3.047-.422 4.047-1.094l-1.062-2.406c-.516.36-1.281.688-2.11.688-.906 0-1.343-.469-1.343-1.766v-6.86h3.343l.844-2.734h-4.187v-4.25l-3.485 1.032v3.218h-2.5v2.735h2.5v7.703c0 2.328 1.485 3.734 3.953 3.734zm17.282-.297h3.453v-19.468h-2.672l-6.453 2.921 1.172 2.735 4.5-2.031zm14.898.297c4.313 0 6.985-3.437 6.985-9.922 0-6.453-2.672-9.875-6.985-9.875-4.312 0-6.984 3.422-6.984 9.875 0 6.485 2.672 9.922 6.984 9.922zm0-2.969c-2.344 0-3.265-2.406-3.265-6.953 0-4.515.921-6.922 3.265-6.922 2.344 0 3.25 2.407 3.25 6.922 0 4.547-.906 6.953-3.25 6.953zM761.606 927.085l5.047-9.078-2.516-1.39-3.344 6-14.375-8-1.703 3.077zm9.434-16.352c2.015-3.593.671-7.593-2.985-9.61-3.625-2.03-7.687-1.03-9.703 2.563-2 3.625-.672 7.532 2.953 9.563 3.656 2.016 7.735 1.11 9.735-2.516zm-2.47-1.359c-1.062 1.922-3.265 2-5.53.75-2.22-1.25-3.297-3.156-2.235-5.078 1.078-1.906 3.281-2.016 5.5-.766 2.266 1.25 3.344 3.188 2.266 5.094zm9.7-11.629c.672-1.203 1.11-2.875 1-4.062l-2.61-.25c.063.64-.03 1.468-.421 2.187-.453.797-1.063.938-2.188.313l-6-3.344 1.625-2.922-1.984-2.063-2.031 3.657-3.72-2.063-.796 3.547 2.812 1.563-1.203 2.187 2.391 1.328 1.203-2.187 6.734 3.75c2.032 1.125 4 .515 5.188-1.64zm8.148-15.242 1.672-3.016-17.015-9.469-1.297 2.329-.578 7.062 2.968.313.407-4.922zm7.5-12.875c2.094-3.766.375-7.781-5.28-10.938-5.641-3.125-9.938-2.453-12.032 1.313-2.094 3.765-.39 7.765 5.25 10.89 5.656 3.157 9.969 2.5 12.062-1.265zm-2.593-1.438c-1.14 2.047-3.703 1.672-7.672-.547-3.953-2.187-5.594-4.156-4.453-6.203 1.14-2.047 3.672-1.672 7.625.516 3.968 2.219 5.64 4.187 4.5 6.234zm0 0"
        aria-label="Lot 10"
        fill="#231f20"
      />
      <path
        d="M291.457 809.71h7.547v-2.094h-4.984v-11.969h-2.563Zm13.72.219c3 0 5.046-2.266 5.046-5.297 0-3.031-2.047-5.266-5.047-5.266-3.015 0-5.031 2.235-5.031 5.266s2.016 5.297 5.031 5.297zm0-2.047c-1.595 0-2.438-1.375-2.438-3.25 0-1.86.843-3.219 2.437-3.219 1.594 0 2.438 1.36 2.438 3.219 0 1.875-.844 3.25-2.438 3.25zm10.812 2.047c1 0 2.218-.297 2.953-.797l-.781-1.75a2.75 2.75 0 0 1-1.532.5c-.656 0-.984-.344-.984-1.281v-5h2.437l.61-1.985h-3.047v-3.094l-2.531.75v2.344H311.3v1.985h1.813v5.609c0 1.687 1.078 2.719 2.875 2.719zm12.562-.22h2.516v-14.155h-1.938l-4.687 2.125.86 1.984 3.25-1.469zm10.836.22c3.14 0 5.078-2.5 5.078-7.22 0-4.687-1.937-7.187-5.078-7.187-3.125 0-5.062 2.5-5.062 7.188 0 4.719 1.937 7.219 5.062 7.219zm0-2.157c-1.703 0-2.36-1.75-2.36-5.062 0-3.281.657-5.031 2.36-5.031 1.719 0 2.375 1.75 2.375 5.03 0 3.313-.656 5.063-2.375 5.063zm10.719 2.157c3.437 0 6.031-2.047 6.031-5.594 0-3.203-2.156-4.969-4.844-4.969a6.5 6.5 0 0 0-1.953.297v-5.047h-2.547v14.61c.86.437 2.016.703 3.313.703zm.406-2.11c-.36 0-.765-.047-1.172-.172v-5.843c.313-.141.766-.328 1.532-.328 1.656 0 2.64 1.234 2.64 3.015 0 1.985-1.172 3.328-3 3.328zM224.895 585.218h7.547v-2.094h-4.985v-11.969h-2.562zm13.723.218c3 0 5.047-2.265 5.047-5.296 0-3.032-2.047-5.266-5.047-5.266-3.016 0-5.032 2.234-5.032 5.266 0 3.03 2.016 5.296 5.032 5.296zm0-2.046c-1.594 0-2.438-1.375-2.438-3.25 0-1.86.844-3.22 2.438-3.22 1.593 0 2.437 1.36 2.437 3.22 0 1.875-.844 3.25-2.437 3.25zm10.812 2.046c1 0 2.219-.296 2.953-.796l-.781-1.75a2.75 2.75 0 0 1-1.531.5c-.656 0-.985-.344-.985-1.282v-5h2.438l.61-1.984h-3.048v-3.094l-2.53.75v2.344h-1.813v1.984h1.812v5.61c0 1.687 1.078 2.718 2.875 2.718zm12.559-.218h2.515V571.06h-1.937l-4.688 2.125.86 1.985 3.25-1.469zm-37.094 25.601h2.562v-7.984c0-.781 0-1.594-.046-2.172h.046c.47.672.954 1.375 1.579 2.156l6.203 8h2.343v-14.062h-2.578v7.5c0 .765 0 1.61.047 2.36h-.047a35.787 35.787 0 0 0-1.578-2.173l-5.984-7.687h-2.547zm20.164.219c3 0 5.047-2.266 5.047-5.297 0-3.031-2.047-5.265-5.047-5.265-3.016 0-5.031 2.234-5.031 5.265 0 3.031 2.015 5.297 5.031 5.297zm0-2.047c-1.594 0-2.437-1.375-2.437-3.25 0-1.86.843-3.219 2.437-3.219 1.594 0 2.438 1.36 2.438 3.22 0 1.874-.844 3.25-2.438 3.25zm6.953 1.828h2.547v-7.125c.828-.718 1.375-1 2.047-1 .297 0 .703.063 1.14.344l.907-2.156c-.406-.281-.969-.406-1.438-.406-1.015 0-1.86.468-2.765 1.39l-.282-1.14h-2.156zm11.625.219c1 0 2.219-.297 2.953-.797l-.781-1.75a2.75 2.75 0 0 1-1.531.5c-.656 0-.985-.344-.985-1.281v-5h2.438l.61-1.984h-3.048v-3.094l-2.53.75v2.344h-1.813v1.984h1.812v5.61c0 1.687 1.078 2.718 2.875 2.718zm4.5-.219h2.547v-7.062c.734-.61 1.61-1.063 2.469-1.063 1.297 0 1.562 1 1.562 2.235v5.89h2.532v-6.672c0-2.89-1.625-3.671-3.22-3.671-1.28 0-2.437.593-3.343 1.359v-6.11h-2.547zm-45.566-126.422h7.547v-2.093h-4.985v-11.97h-2.562zm13.719.22c3 0 5.046-2.266 5.046-5.298 0-3.031-2.046-5.265-5.046-5.265-3.016 0-5.032 2.234-5.032 5.265 0 3.032 2.016 5.297 5.032 5.297zm0-2.048c-1.594 0-2.438-1.375-2.438-3.25 0-1.86.844-3.218 2.438-3.218 1.593 0 2.437 1.359 2.437 3.218 0 1.875-.844 3.25-2.437 3.25zm10.812 2.047c1 0 2.219-.297 2.953-.797l-.781-1.75a2.75 2.75 0 0 1-1.531.5c-.657 0-.985-.343-.985-1.281v-5h2.438l.61-1.984h-3.048v-3.094l-2.531.75v2.344h-1.812v1.984h1.812v5.61c0 1.687 1.078 2.718 2.875 2.718zm8.406-.219h9.797v-2.093h-6.531c.875-3.625 6.406-4.407 6.406-8.407 0-2.125-1.484-3.687-4.5-3.687-1.922 0-3.547.578-4.703 1.14l.688 1.985c1.015-.5 2.203-.969 3.625-.969 1.125 0 2.171.5 2.171 1.797 0 2.969-6.375 3.172-6.953 10.234zm0 0"
        aria-label="Lot 10b Lot 1 North Lot 2"
        fill="#231f20"
      />
      <path
        d="M228.235 383.272h7.094v-1.953h-4.688v-11.234h-2.406Zm12.867.204c2.813 0 4.734-2.125 4.734-4.97 0-2.827-1.921-4.937-4.734-4.937-2.828 0-4.719 2.11-4.719 4.938 0 2.844 1.89 4.969 4.719 4.969zm0-1.922c-1.5 0-2.281-1.282-2.281-3.047 0-1.735.781-3.016 2.281-3.016s2.281 1.281 2.281 3.016c0 1.765-.781 3.047-2.281 3.047zm10.137 1.922c.937 0 2.078-.282 2.765-.75l-.718-1.641c-.36.25-.891.469-1.454.469-.609 0-.906-.328-.906-1.203v-4.672h2.281l.579-1.86h-2.86v-2.906l-2.39.703v2.203h-1.704v1.86h1.704v5.25c0 1.578 1.03 2.547 2.703 2.547zm7.883-.204h9.171v-1.953h-6.109c.813-3.406 6-4.14 6-7.89 0-2-1.39-3.453-4.219-3.453-1.812 0-3.328.53-4.406 1.062l.64 1.86c.954-.47 2.063-.907 3.407-.907 1.047 0 2.031.469 2.031 1.688 0 2.78-5.984 2.968-6.515 9.593zm17.054 0h2c-.14-.5-.172-1.312-.172-2.421v-3.844c0-2.281-1.265-3.438-3.797-3.438a7.592 7.592 0 0 0-3.671.938l.78 1.547c.688-.36 1.548-.657 2.485-.657 1.094 0 1.813.47 1.813 1.579v.296l-1.61.063c-.968.031-1.78.203-2.437.531-.985.5-1.61 1.313-1.61 2.594 0 1.812 1.344 3.016 3.141 3.016 1.188 0 2.047-.485 2.719-1.11zm-.562-4.406v2.031c-.313.25-.953.688-1.828.688-.86 0-1.407-.469-1.407-1.297 0-.469.188-.86.578-1.078.329-.172.766-.281 1.391-.297zm0 0"
        aria-label="Lot 2a"
        fill="#231f20"
      />
      <path
        d="M412.188 205.577h6.86v-1.89h-4.532v-10.86h-2.328Zm12.453.188c2.719 0 4.578-2.047 4.578-4.797 0-2.75-1.86-4.782-4.578-4.782-2.734 0-4.578 2.032-4.578 4.782s1.844 4.797 4.578 4.797zm0-1.86c-1.453 0-2.203-1.234-2.203-2.937 0-1.688.75-2.922 2.203-2.922 1.453 0 2.203 1.234 2.203 2.922 0 1.703-.75 2.937-2.203 2.937zm9.805 1.86c.922 0 2.015-.266 2.672-.704l-.688-1.593c-.36.234-.86.437-1.39.437-.61 0-.891-.297-.891-1.156v-4.531h2.203l.563-1.797h-2.766v-2.813l-2.313.688v2.125h-1.64v1.797h1.64v5.093c0 1.532.985 2.454 2.61 2.454zm7.844-3.297h5.703v3.11h2.28v-3.11h1.892v-1.907h-1.891v-7.843h-1.672l-6.312 8.187zm2.578-1.86 3.234-4.359c-.016.36-.11 1.469-.11 2.5v1.812h-1.515c-.469 0-1.312.047-1.61.047zm59.761 4.97h6.86v-1.892h-4.532v-10.859h-2.328zm12.457.187c2.72 0 4.579-2.047 4.579-4.797 0-2.75-1.86-4.782-4.579-4.782-2.734 0-4.578 2.032-4.578 4.782s1.844 4.797 4.578 4.797zm0-1.86c-1.453 0-2.203-1.234-2.203-2.937 0-1.688.75-2.922 2.203-2.922 1.454 0 2.204 1.234 2.204 2.922 0 1.703-.75 2.937-2.204 2.937zm9.805 1.86c.922 0 2.016-.266 2.672-.704l-.688-1.593c-.359.234-.859.437-1.39.437-.61 0-.89-.297-.89-1.156v-4.531h2.202l.563-1.797h-2.766v-2.813l-2.312.688v2.125h-1.64v1.797h1.64v5.093c0 1.532.984 2.454 2.61 2.454zm7.75-.688c.828.422 1.938.688 3.281.688 3.672 0 5.235-1.907 5.235-4.297 0-1.422-.75-2.75-2.344-3.375-.656-.266-1.469-.39-2.438-.39h-.5v-2.985h4.875l.47-1.89h-7.61v6.702h1.594c1.015 0 1.78.078 2.312.297.813.313 1.188.906 1.188 1.781 0 1.516-1.266 2.203-2.86 2.203a5.914 5.914 0 0 1-2.562-.562zm0 0"
        aria-label="Lot 4Lot 5"
        fill="#231f20"
      />
      <path
        d="M465.407 417.784h3.78v-1.047h-2.5v-6h-1.28Zm6.86.11c1.515 0 2.53-1.141 2.53-2.657 0-1.515-1.015-2.64-2.53-2.64-1.5 0-2.517 1.125-2.517 2.64 0 1.516 1.016 2.657 2.516 2.657zm0-1.032c-.798 0-1.22-.687-1.22-1.625 0-.922.422-1.61 1.22-1.61.812 0 1.218.688 1.218 1.61 0 .938-.406 1.625-1.219 1.625zm5.413 1.032c.516 0 1.125-.157 1.485-.391l-.391-.89c-.188.14-.469.25-.766.25-.328 0-.5-.173-.5-.641v-2.5h1.219l.313-1h-1.532v-1.547l-1.265.375v1.172h-.907v1h.907v2.812c0 .844.547 1.36 1.437 1.36zm4.274-.391c.593.266 1.359.39 2.015.39 1.969 0 2.86-.968 2.86-2.187 0-.828-.47-1.422-1.297-1.594v-.031c.718-.281 1.078-.797 1.078-1.516 0-.984-.703-1.89-2.266-1.89-.875 0-1.672.297-2.203.562l.344 1c.5-.265 1.125-.484 1.703-.484.719 0 1.078.375 1.078.937 0 .672-.516 1.032-1.578 1.032h-.75v1.03h.937c.344 0 .641.017.86.079.5.125.734.438.734.89 0 .72-.547 1.094-1.594 1.094-.468 0-1.062-.109-1.562-.328zm7.89.39c1.719 0 3.016-1.03 3.016-2.796 0-1.61-1.078-2.5-2.422-2.5-.39 0-.688.062-.984.156v-2.531h-1.266v7.312c.422.235 1 .36 1.656.36zm.203-1.062c-.187 0-.39-.016-.593-.078v-2.938c.156-.062.39-.156.765-.156.844 0 1.328.625 1.328 1.5 0 1-.578 1.672-1.5 1.672zm-77.968 80.547h3.78v-1.047h-2.5v-6h-1.28zm6.859.11c1.516 0 2.531-1.141 2.531-2.657s-1.015-2.64-2.531-2.64c-1.5 0-2.516 1.124-2.516 2.64s1.016 2.656 2.516 2.656zm0-1.032c-.797 0-1.219-.687-1.219-1.625 0-.922.422-1.61 1.219-1.61.812 0 1.219.688 1.219 1.61 0 .938-.407 1.625-1.22 1.625zm5.414 1.031c.516 0 1.125-.156 1.484-.39l-.39-.891c-.188.14-.469.25-.766.25-.328 0-.5-.172-.5-.64v-2.5h1.219l.312-1h-1.53v-1.547l-1.266.375v1.171h-.907v1h.907v2.813c0 .844.546 1.36 1.437 1.36zm4.273-.39c.594.265 1.36.39 2.016.39 1.969 0 2.86-.968 2.86-2.187 0-.828-.47-1.422-1.297-1.594v-.031c.718-.282 1.078-.797 1.078-1.516 0-.984-.703-1.89-2.266-1.89-.875 0-1.672.296-2.203.562l.344 1c.5-.266 1.125-.484 1.703-.484.719 0 1.078.375 1.078.937 0 .672-.516 1.031-1.578 1.031h-.75v1.032h.937c.344 0 .64.015.86.078.5.125.734.437.734.89 0 .72-.547 1.094-1.594 1.094-.468 0-1.062-.11-1.562-.328zm9.25.28h1.079c-.079-.265-.094-.702-.094-1.296v-2.047c0-1.219-.688-1.844-2.031-1.844-.72 0-1.36.172-1.97.5l.423.829c.36-.188.828-.344 1.328-.344.594 0 .969.25.969.844v.156l-.86.031c-.515.016-.953.11-1.312.281-.516.266-.844.703-.844 1.39 0 .97.703 1.61 1.672 1.61.625 0 1.094-.265 1.453-.593zm-.296-2.343v1.078c-.172.125-.516.375-.985.375-.453 0-.75-.265-.75-.703 0-.25.094-.453.313-.578.172-.094.406-.14.734-.156zm0 0"
        aria-label="Lot 3b Lot 3a"
        fill="#231f20"
      />
      <path
        d="M623.008 419.8h7.547v-2.094h-4.984v-11.969h-2.563zm13.723.219c3 0 5.047-2.266 5.047-5.297 0-3.032-2.047-5.266-5.047-5.266-3.016 0-5.031 2.234-5.031 5.266 0 3.03 2.015 5.297 5.03 5.297zm0-2.047c-1.594 0-2.438-1.375-2.438-3.25 0-1.86.844-3.22 2.438-3.22 1.594 0 2.437 1.36 2.437 3.22 0 1.875-.843 3.25-2.437 3.25zm10.812 2.047c1 0 2.22-.297 2.954-.797l-.782-1.75a2.75 2.75 0 0 1-1.531.5c-.656 0-.984-.344-.984-1.282v-5h2.437l.61-1.984H647.2v-3.094l-2.532.75v2.344h-1.812v1.984h1.812v5.61c0 1.687 1.079 2.719 2.875 2.719zm14.168 0c2.813 0 4.875-1.86 4.875-4.875 0-2.766-1.906-4.344-4.265-4.344a5.977 5.977 0 0 0-3.297 1.015c.36-2.875 1.937-4.125 3.828-4.125.797 0 1.61.188 2.36.579l.656-1.985c-1.047-.5-2.172-.672-3.141-.672-3.969 0-6.344 3.422-6.344 7.75 0 4.578 2.407 6.657 5.328 6.657zm.047-2.079c-1.422 0-2.61-1.359-2.672-4.093.594-.516 1.657-.953 2.563-.953 1.312 0 2.234.906 2.234 2.625 0 1.515-.75 2.421-2.125 2.421zm10.258 2.079c3.438 0 6.031-2.047 6.031-5.594 0-3.203-2.156-4.969-4.843-4.969a6.5 6.5 0 0 0-1.954.297v-5.047h-2.546v14.61c.859.437 2.015.703 3.312.703zm.406-2.11c-.36 0-.765-.047-1.172-.172v-5.843c.313-.141.766-.329 1.532-.329 1.656 0 2.64 1.235 2.64 3.016 0 1.984-1.172 3.328-3 3.328zm0 0"
        aria-label="Lot 6b"
        fill="#231f20"
      />
      <path
        d="M96.825 229.847h6.859v-1.891h-4.531v-10.86h-2.328Zm12.453.187c2.719 0 4.578-2.047 4.578-4.797 0-2.75-1.86-4.781-4.578-4.781-2.735 0-4.578 2.031-4.578 4.781 0 2.75 1.843 4.797 4.578 4.797zm0-1.86c-1.453 0-2.203-1.234-2.203-2.937 0-1.687.75-2.922 2.203-2.922 1.453 0 2.203 1.235 2.203 2.922 0 1.703-.75 2.938-2.203 2.938zm9.804 1.86c.922 0 2.016-.266 2.672-.703l-.687-1.594c-.36.235-.86.438-1.39.438-.61 0-.891-.297-.891-1.157v-4.53h2.203l.562-1.798h-2.765v-2.812l-2.313.687v2.125h-1.64v1.797h1.64v5.094c0 1.531.984 2.453 2.61 2.453zm11.407-.187h2.281v-12.86h-1.75l-4.266 1.938.782 1.797 2.953-1.329zm4.851 0h8.875v-1.891h-5.922c.797-3.297 5.813-4.016 5.813-7.64 0-1.923-1.344-3.344-4.078-3.344-1.75 0-3.219.53-4.266 1.03l.625 1.798c.922-.453 1.985-.875 3.281-.875 1.032 0 1.985.453 1.985 1.625 0 2.703-5.797 2.89-6.313 9.297zm0 0"
        aria-label="Lot 12"
        fill="#231f20"
      />
      <path
        d="M543.696 413.128h6.594V411.3h-4.36V400.83h-2.234Zm11.992.187c2.625 0 4.422-1.984 4.422-4.625 0-2.656-1.797-4.609-4.422-4.609-2.64 0-4.406 1.953-4.406 4.61 0 2.64 1.765 4.624 4.406 4.624zm0-1.796c-1.406 0-2.14-1.188-2.14-2.829 0-1.625.734-2.812 2.14-2.812 1.39 0 2.125 1.187 2.125 2.812 0 1.641-.734 2.829-2.125 2.829zm9.453 1.796c.875 0 1.938-.265 2.578-.687l-.672-1.531c-.343.218-.828.422-1.343.422-.579 0-.86-.297-.86-1.11v-4.375h2.125l.531-1.734h-2.656v-2.703l-2.219.656v2.047h-1.593v1.734h1.593v4.906c0 1.485.938 2.375 2.516 2.375zm12.387 0c2.453 0 4.265-1.625 4.265-4.25 0-2.437-1.671-3.812-3.734-3.812-1.156 0-2.14.39-2.89.89.328-2.515 1.703-3.609 3.359-3.609.687 0 1.406.172 2.062.5l.578-1.734c-.921-.422-1.906-.578-2.75-.578-3.468 0-5.562 2.984-5.562 6.765 0 4.016 2.11 5.828 4.672 5.828zm.031-1.812c-1.234 0-2.266-1.188-2.328-3.578.516-.453 1.453-.844 2.234-.844 1.157 0 1.969.797 1.969 2.297 0 1.328-.656 2.125-1.875 2.125zm11.367 1.625h1.86c-.125-.469-.172-1.234-.172-2.25v-3.594c0-2.125-1.172-3.203-3.532-3.203a6.969 6.969 0 0 0-3.421.875l.734 1.438a4.876 4.876 0 0 1 2.312-.61c1.016 0 1.688.438 1.688 1.469v.281l-1.5.047c-.906.047-1.672.188-2.281.516-.922.453-1.5 1.203-1.5 2.406 0 1.687 1.25 2.812 2.937 2.812 1.094 0 1.906-.453 2.531-1.03zm-.531-4.11v1.891c-.297.235-.89.656-1.719.656-.797 0-1.297-.453-1.297-1.218 0-.453.172-.797.547-1 .297-.172.703-.266 1.281-.282zm0 0"
        aria-label="Lot 6a"
        fill="#231f20"
      />
      <path
        d="M880.786 448.241h7.546v-2.094h-4.984V434.18h-2.562Zm13.722.219c3 0 5.047-2.266 5.047-5.297 0-3.031-2.047-5.266-5.047-5.266-3.015 0-5.031 2.235-5.031 5.266s2.016 5.297 5.031 5.297zm0-2.047c-1.593 0-2.437-1.375-2.437-3.25 0-1.86.844-3.219 2.437-3.219 1.594 0 2.438 1.36 2.438 3.219 0 1.875-.844 3.25-2.438 3.25zm10.813 2.047c1 0 2.219-.297 2.953-.797l-.781-1.75a2.75 2.75 0 0 1-1.532.5c-.656 0-.984-.344-.984-1.281v-5h2.438l.609-1.985h-3.047v-3.093l-2.531.75v2.343h-1.813v1.985h1.813v5.61c0 1.687 1.078 2.718 2.875 2.718zm9.449-.219h2.687c.938-4.922 2.813-9.469 6-13.156v-.906h-9.984l.61 2.093h5.937c-1.938 2.5-4.14 6.579-5.25 11.97zM883.004 572.23h7.547v-2.093h-4.984v-11.97h-2.563zm13.723.22c3 0 5.047-2.266 5.047-5.298 0-3.03-2.047-5.265-5.047-5.265-3.016 0-5.031 2.234-5.031 5.265 0 3.032 2.015 5.297 5.031 5.297zm0-2.048c-1.594 0-2.437-1.375-2.437-3.25 0-1.86.843-3.218 2.437-3.218 1.594 0 2.438 1.359 2.438 3.218 0 1.875-.844 3.25-2.438 3.25zm10.813 2.047c1 0 2.218-.297 2.953-.797l-.782-1.75a2.75 2.75 0 0 1-1.53.5c-.657 0-.985-.343-.985-1.28v-5h2.437l.61-1.985h-3.047v-3.094l-2.531.75v2.344h-1.813v1.984h1.813v5.61c0 1.687 1.078 2.718 2.875 2.718zm13.84 0c3.421 0 5.187-1.797 5.187-4.14 0-1.86-1.172-2.844-2.61-3.391v-.047c1.032-.531 2.141-1.469 2.141-3.203 0-1.828-1.562-3.625-4.547-3.625-2.969 0-4.781 1.64-4.781 3.828 0 1.64.984 2.484 2.047 3.094v.031c-1.406.594-2.438 1.844-2.438 3.547 0 2.328 1.782 3.906 5 3.906zm.156-1.984c-1.297 0-2.454-.735-2.454-2.203 0-1.157.891-1.938 1.72-2.282 1.39.407 3.077.891 3.077 2.532 0 1.265-1.062 1.953-2.343 1.953zm.406-6.469c-1.266-.36-2.485-.875-2.485-2.234 0-1 .797-1.735 1.954-1.735 1.28 0 2 .86 2 1.875 0 1.047-.704 1.688-1.47 2.094zm0 0"
        aria-label="Lot 7 Lot 8"
        fill="#231f20"
      />
      <path
        d="M905.989 635.796h4.953v-1.375h-3.281v-7.844h-1.672Zm8.996.14c1.969 0 3.312-1.484 3.312-3.468 0-1.985-1.343-3.469-3.312-3.469-1.985 0-3.313 1.484-3.313 3.469 0 1.984 1.328 3.468 3.313 3.468zm0-1.343c-1.047 0-1.594-.89-1.594-2.125 0-1.219.547-2.125 1.594-2.125 1.047 0 1.594.906 1.594 2.125 0 1.234-.547 2.125-1.594 2.125zm7.09 1.343c.672 0 1.468-.203 1.937-.515l-.5-1.156a1.87 1.87 0 0 1-1.015.328c-.422 0-.641-.219-.641-.844v-3.266h1.594l.406-1.312h-2v-2.031l-1.672.5v1.53h-1.187v1.313h1.187v3.672c0 1.11.719 1.781 1.89 1.781zm8.113 0c2.766 0 4.172-1.89 4.172-5.093 0-3.032-1.438-4.36-3.438-4.36-1.843 0-3.187 1.266-3.187 3.188 0 2 1.36 2.844 2.828 2.844.781 0 1.469-.235 2.016-.657h.015c-.187 1.828-1 2.72-2.437 2.72-.625 0-1.235-.188-1.75-.454l-.422 1.344c.687.328 1.437.468 2.203.468zm.75-4.78c-.938 0-1.469-.595-1.469-1.626 0-1.015.547-1.687 1.422-1.687 1.047 0 1.719 1.047 1.734 2.531-.375.406-1 .781-1.687.781zm-64.957 4.64h4.953v-1.375h-3.281v-7.844h-1.672zm9 .14c1.969 0 3.312-1.484 3.312-3.468 0-1.985-1.343-3.469-3.312-3.469-1.984 0-3.313 1.484-3.313 3.469 0 1.984 1.329 3.468 3.313 3.468zm0-1.343c-1.047 0-1.594-.89-1.594-2.125 0-1.219.547-2.125 1.594-2.125 1.047 0 1.594.906 1.594 2.125 0 1.234-.547 2.125-1.594 2.125zm7.086 1.343c.672 0 1.469-.203 1.937-.515l-.5-1.156a1.87 1.87 0 0 1-1.015.328c-.422 0-.64-.219-.64-.844v-3.266h1.593l.406-1.312h-2v-2.031l-1.672.5v1.53h-1.187v1.313h1.187v3.672c0 1.11.719 1.781 1.89 1.781zm8.113 0c2.766 0 4.172-1.89 4.172-5.093 0-3.032-1.437-4.36-3.437-4.36-1.844 0-3.188 1.266-3.188 3.188 0 2 1.36 2.844 2.828 2.844.781 0 1.469-.235 2.016-.657h.015c-.187 1.828-1 2.72-2.437 2.72-.625 0-1.234-.188-1.75-.454l-.422 1.344c.688.328 1.438.468 2.203.468zm.75-4.78c-.937 0-1.469-.595-1.469-1.626 0-1.015.547-1.687 1.422-1.687 1.047 0 1.719 1.047 1.735 2.531-.375.406-1 .781-1.688.781zm0 0"
        aria-label="Lot 9Lot 9"
        fill="#231f20"
      />
      <path
        d="M193.27 743.143h5.781v-1.593h-3.812v-9.14h-1.969Zm10.488.157c2.297 0 3.86-1.719 3.86-4.032 0-2.312-1.563-4.03-3.86-4.03-2.297 0-3.843 1.718-3.843 4.03 0 2.313 1.546 4.032 3.843 4.032zm0-1.563c-1.234 0-1.86-1.031-1.86-2.469 0-1.421.626-2.468 1.86-2.468 1.219 0 1.86 1.047 1.86 2.468 0 1.438-.641 2.47-1.86 2.47zm8.254 1.563c.766 0 1.703-.219 2.25-.594l-.578-1.344a2.144 2.144 0 0 1-1.187.375c-.5 0-.75-.25-.75-.969v-3.812h1.859l.484-1.516h-2.343v-2.375l-1.938.578v1.797h-1.375v1.516h1.375v4.281c0 1.281.844 2.063 2.203 2.063zm9.606-.157h1.922v-10.828h-1.485l-3.594 1.641.657 1.516 2.5-1.125zm-28.864 13.508c.813.563 1.985.922 3.25.922 2.188 0 3.828-1.172 3.828-3.078 0-3.406-4.656-3.14-4.656-5.11 0-.859.719-1.156 1.469-1.156.86 0 1.719.235 2.562.688v-1.797c-.578-.297-1.515-.547-2.625-.547-2.234 0-3.484 1.39-3.484 2.969 0 3.281 4.64 3.016 4.64 5.125 0 .922-.89 1.266-1.796 1.266-.969 0-1.781-.344-2.422-.782zm12.325.922c2.296 0 3.859-1.719 3.859-4.031 0-2.313-1.563-4.031-3.86-4.031-2.296 0-3.843 1.718-3.843 4.03 0 2.313 1.547 4.032 3.844 4.032zm0-1.562c-1.235 0-1.86-1.032-1.86-2.47 0-1.42.625-2.468 1.86-2.468 1.218 0 1.859 1.047 1.859 2.469 0 1.437-.64 2.469-1.86 2.469zm7.878 1.562c1.016 0 1.813-.437 2.391-.953l.297.797h1.672c-.125-.406-.14-1.078-.14-1.906v-5.797h-1.954v5.515a2.217 2.217 0 0 1-1.578.688c-.594 0-.969-.25-1.156-.703-.11-.235-.172-.547-.172-.953v-4.547h-1.938v4.734c0 .719.094 1.188.266 1.61.469 1.218 1.562 1.515 2.312 1.515zm9.094 0c.766 0 1.703-.219 2.25-.594l-.578-1.343a2.144 2.144 0 0 1-1.187.375c-.5 0-.75-.25-.75-.97v-3.812h1.859l.484-1.515h-2.343v-2.375l-1.938.578v1.797h-1.375v1.515h1.375v4.282c0 1.28.844 2.062 2.203 2.062zm3.446-.156h1.937v-5.39c.563-.47 1.234-.813 1.89-.813.985 0 1.188.765 1.188 1.703v4.5h1.938v-5.094c0-2.203-1.235-2.812-2.47-2.812-.968 0-1.843.453-2.546 1.047v-4.672h-1.937zm0 0"
        aria-label="Lot 1 South"
        fill="#231f20"
      />
      <path
        d="M0 0a6.588 6.588 0 1 0-13.176 0A6.588 6.588 0 0 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 906.158 415.028)"
        clip-path="url(#aR)"
        fill="#759fda"
      />
      <path
        d="M0 0h3.866l-.34-1.041H1.274v-1.87h2.242v-1.041H1.274v-2.007h2.603V-7H0Z"
        transform="matrix(1.33333 0 0 -1.33333 894.883 410.304)"
        clip-path="url(#aS)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.041 6.041 0 0 1-6.034-6.035A6.041 6.041 0 0 1 0-12.069a6.041 6.041 0 0 1 6.034 6.034A6.041 6.041 0 0 1 0 0m0-13.035c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7"
        transform="matrix(1.33333 0 0 -1.33333 897.304 407.417)"
        clip-path="url(#aT)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.588 6.588 0 1 0-13.176 0A6.588 6.588 0 0 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 269.55 343.968)"
        clip-path="url(#aU)"
        fill="#759fda"
      />
      <path
        d="M0 0h3.866l-.34-1.041H1.274v-1.87h2.242v-1.041H1.274v-2.007h2.603V-7H0Z"
        transform="matrix(1.33333 0 0 -1.33333 258.275 339.244)"
        clip-path="url(#aV)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.041 6.041 0 0 1-6.034-6.035A6.041 6.041 0 0 1 0-12.069a6.041 6.041 0 0 1 6.034 6.034A6.041 6.041 0 0 1 0 0m0-13.035c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7"
        transform="matrix(1.33333 0 0 -1.33333 260.696 336.358)"
        clip-path="url(#aW)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.588 6.588 0 1 0-13.176 0A6.588 6.588 0 0 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 257.55 441.302)"
        clip-path="url(#aX)"
        fill="#759fda"
      />
      <path
        d="M0 0h3.866l-.34-1.041H1.274v-1.87h2.242v-1.041H1.274v-2.007h2.603V-7H0Z"
        transform="matrix(1.33333 0 0 -1.33333 246.275 436.578)"
        clip-path="url(#aY)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.041 6.041 0 0 1-6.034-6.035A6.041 6.041 0 0 1 0-12.069a6.041 6.041 0 0 1 6.034 6.034A6.041 6.041 0 0 1 0 0m0-13.035c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7"
        transform="matrix(1.33333 0 0 -1.33333 248.696 433.691)"
        clip-path="url(#aZ)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.901 6.901 0 0 0-6.902-6.902 6.901 6.901 0 1 0 0 13.803A6.901 6.901 0 0 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 336.752 773.74)"
        clip-path="url(#ba)"
        fill="#f28014"
      />
      <path
        d="M0 0c.357 0 .646.057.858.168.411.199.611.6.611 1.146 0 .477-.19.889-.578 1.124-.212.122-.512.188-.913.188H-.4V0Zm-1.736 3.717H.033c.679 0 1.213-.1 1.647-.312.758-.378 1.191-1.09 1.191-2.091 0-.847-.367-1.726-1.402-2.148C1.068-.99.568-1.09-.089-1.09H-.4v-2.526h-1.336z"
        transform="matrix(1.33333 0 0 -1.33333 327.7 773.82)"
        clip-path="url(#bb)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.329 6.329 0 0 1-6.322-6.32A6.33 6.33 0 0 1 0-12.643 6.33 6.33 0 0 1 6.322-6.32 6.329 6.329 0 0 1 0 0m0-13.654c-4.043 0-7.333 3.289-7.333 7.334 0 4.043 3.29 7.332 7.333 7.332 4.044 0 7.334-3.289 7.334-7.332 0-4.045-3.29-7.334-7.334-7.334"
        transform="matrix(1.33333 0 0 -1.33333 327.921 765.841)"
        clip-path="url(#bc)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.125 6.125 0 1 0-12.25 0A6.125 6.125 0 0 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 527.21 407.323)"
        clip-path="url(#bd)"
        fill="#f25470"
      />
      <path
        d="M0 0h1.315L2.7-3.594c.191-.511.341-.953.482-1.344h.02c.13.381.281.823.492 1.355L5.069 0h1.305l-2.7-6.655H2.7Z"
        transform="matrix(1.33333 0 0 -1.33333 514.817 403.707)"
        clip-path="url(#be)"
        fill="#231f20"
      />
      <path
        d="M0 0a5.709 5.709 0 0 1-5.702-5.702A5.708 5.708 0 0 1 0-11.403a5.708 5.708 0 0 1 5.702 5.701A5.71 5.71 0 0 1 0 0m0-12.316a6.622 6.622 0 0 0-6.615 6.614A6.623 6.623 0 0 0 0 .913a6.622 6.622 0 0 0 6.614-6.615A6.621 6.621 0 0 0 0-12.316"
        transform="matrix(1.33333 0 0 -1.33333 519.066 399.56)"
        clip-path="url(#bf)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.125 6.125 0 1 0-12.25 0A6.125 6.125 0 0 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 462.582 419.701)"
        clip-path="url(#bg)"
        fill="#f25470"
      />
      <path
        d="M0 0h1.316L2.7-3.594c.191-.511.341-.953.482-1.345h.02c.13.382.281.824.492 1.356L5.069 0h1.305l-2.7-6.655H2.7Z"
        transform="matrix(1.33333 0 0 -1.33333 450.189 416.085)"
        clip-path="url(#bh)"
        fill="#231f20"
      />
      <path
        d="M0 0a5.709 5.709 0 0 1-5.702-5.702A5.708 5.708 0 0 1 0-11.403a5.708 5.708 0 0 1 5.702 5.701A5.71 5.71 0 0 1 0 0m0-12.316a6.622 6.622 0 0 0-6.615 6.614A6.623 6.623 0 0 0 0 .913a6.622 6.622 0 0 0 6.614-6.615A6.621 6.621 0 0 0 0-12.316"
        transform="matrix(1.33333 0 0 -1.33333 454.437 411.938)"
        clip-path="url(#bi)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.125 6.125 0 1 0-12.25 0A6.125 6.125 0 0 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 743.974 420.013)"
        clip-path="url(#bj)"
        fill="#f25470"
      />
      <path
        d="M0 0h1.315L2.7-3.594c.191-.511.341-.953.482-1.345h.02c.13.382.281.824.491 1.356L5.069 0h1.304L3.674-6.655H2.7Z"
        transform="matrix(1.33333 0 0 -1.33333 731.581 416.397)"
        clip-path="url(#bk)"
        fill="#231f20"
      />
      <path
        d="M0 0a5.709 5.709 0 0 1-5.702-5.702A5.708 5.708 0 0 1 0-11.403a5.708 5.708 0 0 1 5.702 5.701A5.709 5.709 0 0 1 0 0m0-12.316a6.62 6.62 0 0 0-6.614 6.614A6.622 6.622 0 0 0 0 .913a6.622 6.622 0 0 0 6.614-6.615A6.621 6.621 0 0 0 0-12.316"
        transform="matrix(1.33333 0 0 -1.33333 735.83 412.25)"
        clip-path="url(#bl)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.125 6.125 0 1 0-12.25 0A6.125 6.125 0 0 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 803.434 771.339)"
        clip-path="url(#bm)"
        fill="#f25470"
      />
      <path
        d="M0 0h1.315L2.7-3.594c.191-.512.341-.953.482-1.345h.02c.13.382.281.824.491 1.356L5.069 0h1.304L3.674-6.654H2.7Z"
        transform="matrix(1.33333 0 0 -1.33333 791.04 767.722)"
        clip-path="url(#bn)"
        fill="#231f20"
      />
      <path
        d="M0 0a5.708 5.708 0 0 1-5.702-5.701A5.708 5.708 0 0 1 0-11.402a5.707 5.707 0 0 1 5.702 5.701A5.708 5.708 0 0 1 0 0m0-12.316a6.622 6.622 0 0 0-6.614 6.615A6.622 6.622 0 0 0 0 .913a6.621 6.621 0 0 0 6.614-6.614A6.622 6.622 0 0 0 0-12.316"
        transform="matrix(1.33333 0 0 -1.33333 795.29 763.576)"
        clip-path="url(#bo)"
        fill="#231f20"
      />
      <path
        d="M272 924.25h-5.25v5.25H272Z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bp)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M272 916.792h-5.25v5.25H272Z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bq)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M272 909.333h-5.25v5.25H272Z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#br)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M272 901.875h-5.25v5.25H272Z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bs)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M312.667 1008.917h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bt)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M312.667 1001.458h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bu)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M312.667 994h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bv)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M312.667 986.542h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bw)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M342.375 763.625h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bx)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M377.291 706.333h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#by)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M432.875 822.904h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bz)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M412.187 510.36h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bA)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="m0 0-4.551 2.617 2.617 4.551 4.551-2.617Z"
        transform="matrix(1.33333 0 0 -1.33333 680.763 904.292)"
        clip-path="url(#bB)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="m0 0-4.551 2.617 2.617 4.551 4.551-2.617Z"
        transform="matrix(1.33333 0 0 -1.33333 675.597 913.459)"
        clip-path="url(#bC)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M250.125 679.875h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bD)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M380.625 791.875h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bE)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M529.375 807.375h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bF)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="m0 0-3.618 3.804L.186 7.423l3.619-3.804Z"
        transform="matrix(1.33333 0 0 -1.33333 786.628 497.462)"
        clip-path="url(#bG)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="M606.125 723.625h-5.25v5.25h5.25z"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#bH)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <path
        d="m0 0-4.307 3.002 3.002 4.307 4.307-3.002Z"
        transform="matrix(1.33333 0 0 -1.33333 493.177 459.386)"
        clip-path="url(#bI)"
        fill="#9ddff8"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <g clip-path="url(#bJ)" transform="translate(-21.359 -78.153)">
        <path
          d="m0 0-14.128 7.5 7.5 14.128 14.129-7.5z"
          transform="matrix(1.33333 0 0 -1.33333 362.375 614.235)"
          clip-path="url(#bK)"
          fill="#fff"
          fillOpacity={0}
        />
        <path
          d="M0 0a1.016 1.016 0 0 0-1.376-.422 1.017 1.017 0 1 0 .954 1.799C.076 1.113.263.497 0 0"
          transform="matrix(1.33333 0 0 -1.33333 360.215 593.154)"
          clip-path="url(#bL)"
          fill="#110f0d"
        />
        <path
          d="m0 0 1.196 3.826a.664.664 0 0 1-.322.783l-2.827 1.5.191.608 2.371-1.26a.497.497 0 0 1 .467.879l-2.537 1.346.561 1.795a1.02 1.02 0 0 1-1.944.609l-.494-1.579a3.746 3.746 0 0 1-4.055-1.911 3.745 3.745 0 0 1 1.55-5.057 3.745 3.745 0 0 1 5.057 1.55.498.498 0 1 1-.878.466 2.75 2.75 0 0 0-3.713-1.137 2.748 2.748 0 0 0-1.138 3.711 2.752 2.752 0 0 0 2.879 1.422l-.297-.95a1.02 1.02 0 0 1 .494-1.204c.008-.003 3.205-1.701 3.205-1.701L-1.266.395A.665.665 0 0 1-.83-.436.662.662 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 360.586 608.529)"
          clip-path="url(#bM)"
          fill="#110f0d"
        />
      </g>
      <g clip-path="url(#bN)" transform="translate(-21.359 -78.153)">
        <path
          d="m0 0-11.734 11.383L-.351 23.117l11.734-11.383Z"
          transform="matrix(1.33333 0 0 -1.33333 421.178 757.3)"
          clip-path="url(#bO)"
          fill="#fff"
          fillOpacity={0}
        />
        <path
          d="M0 0a1.04 1.04 0 1 0-1.492 1.448A1.04 1.04 0 0 0 0 0"
          transform="matrix(1.33333 0 0 -1.33333 425.057 735.99)"
          clip-path="url(#bP)"
          fill="#110f0d"
        />
        <path
          d="m0 0 2.263 3.416a.677.677 0 0 1-.094.86L-.178 6.553l.359.542 1.97-1.91a.51.51 0 0 1 .708.73L.752 7.958l1.062 1.603A1.041 1.041 0 1 1 .079 10.71l-.933-1.409A3.833 3.833 0 0 1-5.38 8.58a3.827 3.827 0 0 1 .083-5.406 3.827 3.827 0 0 1 5.405.083.508.508 0 1 1-.73.707 2.809 2.809 0 0 0-3.967-.06 2.81 2.81 0 0 0-.061 3.968 2.81 2.81 0 0 0 3.23.576l-.562-.849a1.042 1.042 0 0 1 .142-1.322C-1.832 6.271.823 3.696.823 3.696L-1.129.749A.678.678 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 421.045 751.19)"
          clip-path="url(#bQ)"
          fill="#110f0d"
        />
      </g>
      <g clip-path="url(#bR)" transform="translate(-21.359 -78.153)">
        <path
          d="m0 0-14.958 1.522 1.522 14.959 14.958-1.523z"
          transform="matrix(1.33333 0 0 -1.33333 523.639 518.786)"
          clip-path="url(#bS)"
          fill="#fff"
          fillOpacity={0}
        />
        <path
          d="M0 0a.957.957 0 1 0-1.904.19A.957.957 0 0 0 0 0"
          transform="matrix(1.33333 0 0 -1.33333 514.287 501.196)"
          clip-path="url(#bT)"
          fill="#110f0d"
        />
        <path
          d="m0 0-.315 3.755a.622.622 0 0 1-.557.568l-2.993.305-.051.596 2.512-.256a.468.468 0 0 1 .095.931l-2.687.273-.147 1.763a.956.956 0 0 1-1.034.872.96.96 0 0 1-.875-1.033l.13-1.549a3.525 3.525 0 0 1-2.853-3.1 3.516 3.516 0 0 1 6.994-.714.467.467 0 1 1-.929.096 2.582 2.582 0 0 0-5.135.522 2.587 2.587 0 0 0 2.003 2.258l.078-.933a.955.955 0 0 1 .855-.872l3.395-.346.271-3.239A.624.624 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 520.06 514.454)"
          clip-path="url(#bU)"
          fill="#110f0d"
        />
      </g>
      <g clip-path="url(#bV)" transform="translate(-21.359 -78.153)">
        <path
          d="m0 0-14.311-.394-.393 14.31 14.31.394z"
          transform="matrix(1.33333 0 0 -1.33333 738.906 520.05)"
          clip-path="url(#bW)"
          fill="#fff"
          fillOpacity={0}
        />
        <path
          d="M0 0a.911.911 0 1 0-1.821-.05A.911.911 0 0 0 0 0"
          transform="matrix(1.33333 0 0 -1.33333 727.923 504.589)"
          clip-path="url(#bX)"
          fill="#110f0d"
        />
        <path
          d="m0 0-.758 3.506a.592.592 0 0 1-.595.469l-2.863-.079-.122.556 2.404.066a.446.446 0 0 1-.025.891l-2.569-.072-.357 1.646a.91.91 0 1 1-1.781-.384l.313-1.448a3.352 3.352 0 0 1-2.315-3.277 3.353 3.353 0 0 1 3.439-3.253 3.35 3.35 0 0 1 3.253 3.438.444.444 0 0 1-.456.432.447.447 0 0 1-.434-.457A2.46 2.46 0 0 0-5.253-.49a2.46 2.46 0 0 0-2.525 2.388 2.46 2.46 0 0 0 1.614 2.377l.189-.871a.91.91 0 0 1 .914-.718l3.248.089.654-3.025A.592.592 0 1 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 734.996 516.397)"
          clip-path="url(#bY)"
          fill="#110f0d"
        />
      </g>
      <g clip-path="url(#bZ)" transform="translate(-21.359 -78.153)">
        <path
          d="M683.028 806.232h-16.195v16.196h16.195z"
          transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          clip-path="url(#ca)"
          fill="#fff"
          fillOpacity={0}
        />
        <path
          d="M0 0a1.031 1.031 0 1 0-2.062-.002A1.031 1.031 0 0 0 0 0"
          transform="matrix(1.33333 0 0 -1.33333 898.766 539.194)"
          clip-path="url(#cb)"
          fill="#110f0d"
        />
        <path
          d="m0 0-.749 3.989a.67.67 0 0 1-.659.548h-3.239l-.121.633h2.72a.504.504 0 0 1 0 1.008l-2.909-.001-.35 1.872a1.03 1.03 0 1 1-2.026-.379l.308-1.647a3.793 3.793 0 0 1-2.72-3.633 3.792 3.792 0 0 1 3.788-3.787A3.791 3.791 0 0 1-2.171 2.39a.503.503 0 1 1-1.007 0A2.783 2.783 0 0 0-5.957-.39a2.783 2.783 0 0 0-2.781 2.78c0 1.225.798 2.269 1.899 2.637l.188-.991c.09-.496.524-.841 1.011-.841h3.674l.647-3.443a.668.668 0 0 1 .783-.536A.674.674 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 906.397 552.77)"
          clip-path="url(#cc)"
          fill="#110f0d"
        />
      </g>
      <g clip-path="url(#cd)" transform="translate(-21.359 -78.153)">
        <path
          d="M677.537 753.761h-16.195v16.196h16.195z"
          transform="matrix(1.33333 0 0 -1.33333 0 1632)"
          clip-path="url(#ce)"
          fill="#fff"
          fillOpacity={0}
        />
        <path
          d="M0 0a1.031 1.031 0 1 0-2.062-.002A1.031 1.031 0 0 0 0 0"
          transform="matrix(1.33333 0 0 -1.33333 891.444 609.156)"
          clip-path="url(#cf)"
          fill="#110f0d"
        />
        <path
          d="m0 0-.749 3.989a.67.67 0 0 1-.659.548h-3.238l-.122.633h2.72a.504.504 0 1 1 0 1.008l-2.909-.001-.35 1.872a1.03 1.03 0 1 1-2.026-.379l.309-1.647A3.793 3.793 0 0 1-9.745 2.39a3.792 3.792 0 0 1 3.788-3.787A3.791 3.791 0 0 1-2.171 2.39a.503.503 0 1 1-1.007 0A2.783 2.783 0 0 0-5.957-.39a2.783 2.783 0 0 0-2.781 2.78c0 1.225.799 2.269 1.899 2.637l.188-.991a1.027 1.027 0 0 1 1.011-.841h3.674l.647-3.443a.668.668 0 0 1 .783-.536A.674.674 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 899.075 622.732)"
          clip-path="url(#cg)"
          fill="#110f0d"
        />
      </g>
      <g clip-path="url(#ch)" transform="translate(-21.359 -78.153)">
        <path
          d="m0 0-8.466-14.798-14.8 8.467 8.468 14.799z"
          transform="matrix(1.33333 0 0 -1.33333 764.066 926.768)"
          clip-path="url(#ci)"
          fill="#fff"
          fillOpacity={0}
        />
        <path
          d="M0 0a1.085 1.085 0 1 0-1.08-1.883A1.085 1.085 0 0 0 0 0"
          transform="matrix(1.33333 0 0 -1.33333 741.538 928.357)"
          clip-path="url(#cj)"
          fill="#110f0d"
        />
        <path
          d="m0 0-4.04 1.4a.702.702 0 0 1-.841-.317l-1.694-2.96-.641.223L-5.795.83a.53.53 0 1 1-.92.526L-8.236-1.3l-1.894.657a1.088 1.088 0 0 1-1.383-.667 1.089 1.089 0 0 1 .67-1.382l1.667-.579a3.994 3.994 0 0 1 1.897-4.386 3.992 3.992 0 0 1 5.441 1.484A3.99 3.99 0 0 1-3.319-.734a.53.53 0 1 1-.526-.921 2.927 2.927 0 0 0-2.907-5.081A2.934 2.934 0 0 0-8.168-3.62l1.003-.348c.5-.176 1.042.037 1.298.484l1.921 3.356 3.48-1.208a.705.705 0 0 1 .901.435A.71.71 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 757.93 928.478)"
          clip-path="url(#ck)"
          fill="#110f0d"
        />
      </g>
      <g clip-path="url(#cl)" transform="translate(-21.359 -78.153)">
        <path
          d="m0 0-12.263-14.609-14.61 12.262 12.264 14.611z"
          transform="matrix(1.33333 0 0 -1.33333 845.876 1094.348)"
          clip-path="url(#cm)"
          fill="#fff"
          fillOpacity={0}
        />
        <path
          d="M0 0a1.217 1.217 0 0 0-1.564-1.862 1.221 1.221 0 0 0-.151 1.714C-1.282.365-.517.432 0 0"
          transform="matrix(1.33333 0 0 -1.33333 820.758 1091.62)"
          clip-path="url(#cn)"
          fill="#110f0d"
        />
        <path
          d="m0 0-4.169 2.345a.79.79 0 0 1-.99-.182L-7.611-.761l-.662.375 2.058 2.451a.593.593 0 1 1-.908.762L-9.326.206l-1.955 1.1a1.215 1.215 0 0 1-1.654-.461 1.218 1.218 0 0 1 .463-1.655l1.719-.968a4.467 4.467 0 0 1 1.218-5.206 4.466 4.466 0 0 1 6.284.552 4.466 4.466 0 0 1-.55 6.284.593.593 0 0 1-.762-.91 3.274 3.274 0 0 0-4.21-5.016 3.283 3.283 0 0 0-.941 3.711l1.037-.581a1.21 1.21 0 0 1 1.525.273C-7.144-2.659-4.37.645-4.37.645l3.592-2.022a.787.787 0 0 1 1.076.299A.79.79 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 838.78 1095.01)"
          clip-path="url(#co)"
          fill="#110f0d"
        />
      </g>
      <g clip-path="url(#cp)" transform="translate(-21.359 -78.153)">
        <path
          d="m0 0-19.072-.246-.247 19.073 19.074.246z"
          transform="matrix(1.33333 0 0 -1.33333 612.213 1049.451)"
          clip-path="url(#cq)"
          fill="#fff"
          fillOpacity={0}
        />
        <path
          d="M0 0a1.217 1.217 0 0 0-2.432-.03 1.22 1.22 0 0 0 1.2 1.232A1.218 1.218 0 0 0 0 0"
          transform="matrix(1.33333 0 0 -1.33333 597.883 1028.641)"
          clip-path="url(#cr)"
          fill="#110f0d"
        />
        <path
          d="m0 0-.945 4.689a.787.787 0 0 1-.784.631l-3.816-.05-.147.745 3.2.041c.33.008.59.273.586.603a.59.59 0 0 1-.602.583L-5.932 7.2l-.443 2.199a1.213 1.213 0 1 1-2.379-.479l.388-1.934a4.466 4.466 0 0 1-3.149-4.321 4.465 4.465 0 0 1 4.52-4.4 4.465 4.465 0 0 1 4.402 4.518.593.593 0 0 1-1.186-.017 3.276 3.276 0 0 0-6.549-.085 3.282 3.282 0 0 0 2.197 3.135l.237-1.164a1.21 1.21 0 0 1 1.202-.977l4.328.057.813-4.041a.786.786 0 0 1 .929-.62A.79.79 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 607.078 1044.508)"
          clip-path="url(#cs)"
          fill="#110f0d"
        />
      </g>
      <path
        d="m230.392 35.714 2.73-.17-.403-6.591h.073l5.714 6.262 3.363-.207-6.86-7.347 5.593-7.675-3.205.195-4.739 6.725h-.073l-.39-6.408-2.729.17zm13.2-.816 2.73-.17-.67-10.795-2.73.171zm.598-12.634c.95-.06 1.632-.828 1.571-1.73-.048-.938-.828-1.608-1.778-1.547-.95.061-1.62.84-1.572 1.754.06.914.828 1.584 1.779 1.523zm4.739 12.311 2.717-.17-.463-7.554c.743-.719 1.681-1.255 2.57-1.303 1.402-.086 1.743.962 1.816 2.29l.39 6.299 2.74-.17-.438-7.152c-.195-3.07-1.998-3.801-3.716-3.692-1.34.085-2.522.743-3.606 1.706l-.353-1.194-2.327.146zm16.667 4.398c3.752-.231 5.604-1.961 5.482-3.91-.244-4.045-7.225-1.803-7.347-3.74-.012-.232.037-.464.22-.817.377.085.84.134 1.34.098 2.631-.159 4.374-1.852 4.227-4.277-.06-.95-.438-1.851-1.108-2.497.22-.146.56-.207.78-.22.255-.012.548 0 .816.061l.426-1.998a7.29 7.29 0 0 0-.73 0c-1.317.086-2.023.488-2.547 1.097-.085.085-.158.11-.268.073-.463-.232-1.23-.402-2.18-.353-2.95.182-4.29 2.254-4.168 4.24.086 1.45.841 2.655 2.023 3.252-.865.658-1.218 1.462-1.182 2.096.037.572.317 1.06.792 1.316-1.084.536-1.864 1.522-1.79 2.716.121 1.864 2.046 3.058 5.214 2.863zm.255-1.949c-1.803.11-2.985-.463-3.045-1.535-.05-.719.438-1.206.767-1.474 1.51.475 4.837-.049 4.934 1.498.049.805-1.01 1.414-2.656 1.511zm-.706-8.467c-1.206.073-1.962-.816-2.023-1.889-.085-1.303.683-2.058 1.755-2.132 1.218-.073 1.998.829 2.07 1.913.074 1.304-.706 2.047-1.802 2.108zm13.05 4.215 2.73-.17-.366-5.86 1.304-.086c.378.073.962.658 1.79 1.962l2.389 3.667 3.155-.195-2.79-4.215c-.865-1.328-1.535-2.12-2.01-2.34l-.012-.048c1.706-.646 2.839-2.06 2.717-4.057-.098-1.535-.829-2.875-2.461-3.533-.829-.342-1.852-.512-3.265-.427l-4.106.256zm2.23-8.272-.292-4.703 1.267-.073c.816-.06 1.34.098 1.73.33.682.352 1.06 1.035 1.109 1.827.06.925-.317 1.644-.926 2.046-.45.28-.938.451-1.645.5zm15.775 7.395c1.315-.085 2.875-.463 3.91-1.048l-.962-15.582-2.73.17.33 5.227c-.45-.073-1.06-.073-1.474-.049-3.436.208-5.763 2.705-5.556 6.14.22 3.546 2.96 5.361 6.482 5.142zm-.183-2.266c-1.974.122-3.387-.999-3.521-3.095-.134-2.217 1.17-3.581 3.07-3.703.548-.025.902.012 1.316.085l.402 6.457c-.353.159-.902.232-1.267.256zm8.202 1.742c.804-.049 1.45-.767 1.389-1.669-.049-.89-.78-1.51-1.584-1.462-.853.061-1.486.755-1.437 1.645.06.901.78 1.547 1.632 1.486zm0 0"
        aria-label="King R d."
        fill="#fff"
      />
      <path
        d="m953.102 250.308-.062 3.515 11 .172c.671.016 1.671.031 2.437.031v.047c-.734.375-1.422.875-2.016 1.297l-6.156 4.11-.015 1.609 5.875 3.922c.5.36 1.593 1.078 2.14 1.36v.046c-.765-.063-1.765-.078-2.562-.094l-10.907-.172-.046 3.547 19.328.313.046-3.235-7.109-4.75a57 57 0 0 0-2.594-1.625v-.047c.782-.421 1.516-.921 2.532-1.593l7.375-4.938.062-3.203zm-.777 29.765c-.032 1.906.53 3.64 1.28 4.766l2.407-.969c-.5-.984-.906-1.953-.89-3.25.046-2.375 1.625-3.906 4.468-3.86 2.547.048 4.469 1.594 4.422 4.173-.015 1.359-.406 2.39-1.125 3.359l2.953.047c.469-.735.969-1.969.985-3.703.078-4.14-2.953-7.39-7.266-7.453-4.016-.063-7.172 2.375-7.234 6.89zm.18 7.453-.063 3.516 8.469.14v.094l-8.579 6.688-.078 4.312 10.078-8.047 9.266 7.922.063-4.109-8.125-6.734v-.094l8.234.14.063-3.515zm-.66 22.618c-.032 1.703.327 3.437 1.218 4.906l2.422-1.016c-.547-1-.906-2.11-.89-3.515.046-2.329 1.437-3.829 3.577-3.86l-.14 8.89.812.016c4.61.078 7.469-2.14 7.531-6.046.063-3.954-3.03-6.297-7.203-6.36-3.75-.062-7.25 1.906-7.328 6.985zm8.765-3.47c1.672.016 3.125 1.016 3.11 2.75-.032 1.845-1.61 2.579-3.188 2.626zm-8.606 11.415-.047 3.5 9.704.156c.843 1.031 1.421 2.266 1.406 3.406-.031 1.797-1.406 2.125-3.11 2.094l-8.093-.125-.063 3.531 9.188.14c3.953.063 5.078-2.171 5.11-4.374.03-1.719-.704-3.297-1.829-4.781l1.562-.329.047-3zm-.222 14.578-.188 11.406 2.735.047.093-6.234 11.047 6.53.172-11.124-2.75.656-.078 5.313zm-.223 13.465-.047 3.515 13.875.22.047-3.517zm16.094 2.015c-.016 1.235.906 2.172 2.062 2.204 1.203.015 2.125-.907 2.14-2.141.032-1.219-.89-2.156-2.062-2.172-1.171-.031-2.109.89-2.14 2.11zm-16.598 11.356c-.031 1.703.328 3.437 1.219 4.906l2.422-1.015c-.547-1-.906-2.11-.89-3.516.046-2.328 1.437-3.828 3.577-3.86l-.14 8.891.812.016c4.61.078 7.469-2.14 7.531-6.047.063-3.953-3.03-6.297-7.203-6.36-3.75-.062-7.25 1.907-7.328 6.985zm8.766-3.469c1.672.016 3.125 1.016 3.11 2.75-.032 1.844-1.61 2.578-3.188 2.625zm-8.707 18.485-.063 3.515 7.531.125-.03 1.672c-.11.469-.923 1.156-2.673 2.078l-4.937 2.703-.063 4.047 5.672-3.14c1.781-.985 2.86-1.766 3.188-2.36h.062c.672 2.25 2.344 3.844 4.922 3.875 1.969.031 3.766-.766 4.766-2.797.515-1.031.828-2.312.86-4.125l.093-5.281zm10.343 3.687 6.047.094-.03 1.625c-.016 1.047-.25 1.703-.595 2.156-.515.844-1.421 1.266-2.437 1.25-1.203-.015-2.094-.562-2.547-1.39-.297-.594-.484-1.235-.469-2.141zm-11.015 19.434c-.031 1.687.297 3.718.953 5.109l20.031.313.047-3.516-6.719-.109c.14-.547.203-1.328.203-1.86.079-4.405-2.89-7.655-7.296-7.718-4.563-.078-7.157 3.266-7.22 7.781zm2.906-.016c.047-2.531 1.625-4.234 4.313-4.188 2.843.047 4.453 1.86 4.421 4.297a6.21 6.21 0 0 1-.234 1.657l-8.297-.125c-.156-.469-.219-1.172-.203-1.64zm-3.05 10.309c-.016 1.046.859 1.937 2.015 1.953 1.14.015 1.984-.844 2-1.89.031-1.095-.813-1.985-1.953-2-1.156-.017-2.031.843-2.063 1.937zm0 0"
        aria-label="McK enzie R d."
        fill="#fff"
      />
      <path
        d="M172.61 290.995c-.438-.766-.75-1.578-.735-2.64 0-2.22 1.579-3.579 3.844-3.579 2.125.016 3.906 1.266 3.906 3.672a5.846 5.846 0 0 1-.734 2.781h1.844c.297-.671.515-1.656.531-2.828 0-3.468-2.484-5.703-5.594-5.718-3.156-.016-5.437 1.906-5.437 5.437-.016 1.078.172 2.219.828 3.422zm-2.41 5.305c0 2.297 1.718 3.875 4.03 3.89 2.329 0 4.063-1.562 4.063-3.859.016-2.312-1.703-3.875-4.03-3.875-2.313-.016-4.048 1.531-4.063 3.844zm1.562 0c0-1.235 1.047-1.86 2.485-1.86 1.421 0 2.468.641 2.468 1.875 0 1.22-1.047 1.86-2.468 1.86-1.438 0-2.485-.656-2.485-1.875zm.328 5.426c-1.218 0-1.86.656-1.875 1.937 0 .453.078.984.266 1.453l1.516-.375a1.812 1.812 0 0 1-.094-.5c0-.36.156-.578.703-.578l9.297.031.015-1.937zm-.015 4.66c-1.22 0-1.86.656-1.875 1.937 0 .453.078.985.265 1.453l1.516-.375a1.812 1.812 0 0 1-.094-.5c0-.36.156-.578.703-.578l9.297.031.016-1.937zm-1.938 8.191c0 .953.203 1.922.703 2.735l1.344-.594c-.297-.547-.516-1.172-.516-1.953 0-1.297.766-2.157 1.97-2.172l-.016 4.968h.453c2.562 0 4.156-1.25 4.156-3.421.016-2.22-1.734-3.5-4.063-3.5-2.093-.016-4.015 1.109-4.03 3.937zm4.844-2c.937 0 1.766.547 1.766 1.516 0 1.031-.875 1.453-1.766 1.484zm-8.59 9.344c0 2.687 1.125 4.094 2.531 4.11 2.907 0 1.625-5.095 3.016-5.095.156 0 .328.047.562.204-.078.25-.125.578-.125.937 0 1.89 1.11 3.234 2.844 3.234.688 0 1.36-.234 1.86-.687.093.156.125.406.109.562 0 .188-.031.391-.078.579l1.406.406c.016-.11.031-.344.031-.516.016-.953-.25-1.469-.656-1.875-.047-.062-.062-.11-.031-.187.172-.313.344-.86.344-1.547.015-2.11-1.407-3.172-2.829-3.172-1.03 0-1.937.484-2.406 1.297-.453-.656-1-.953-1.453-.953-.422 0-.781.187-.969.515-.343-.812-1.015-1.39-1.875-1.39-1.328-.016-2.265 1.297-2.28 3.578zm1.375.265c0-1.296.484-2.093 1.25-2.093.516 0 .828.375 1 .61-.406 1.046-.172 3.452-1.281 3.452-.578 0-.969-.797-.969-1.969zm6.078-.109c0-.86.672-1.36 1.438-1.36.937 0 1.453.579 1.453 1.344 0 .875-.688 1.391-1.469 1.391-.922 0-1.422-.578-1.422-1.375zm-3.762 8.805c0 .953.204 1.922.704 2.734l1.343-.594c-.297-.546-.515-1.171-.515-1.953 0-1.297.765-2.156 1.968-2.172l-.015 4.97h.453c2.562 0 4.156-1.25 4.156-3.423.016-2.218-1.734-3.5-4.062-3.5-2.094-.015-4.016 1.11-4.032 3.938zm4.844-2c.938 0 1.766.547 1.766 1.515 0 1.032-.875 1.454-1.766 1.485zm-4.71 10.375-.016 3.172c-.016 3.75 2.172 6.062 5.453 6.078 3.187.015 5.312-2.063 5.328-5.875l.016-3.344zm1.593 1.953 7.563.031v1.219c-.016 2.625-1.5 3.953-3.75 3.937-2.032 0-3.829-1.093-3.813-3.937zm-1.633 9.02-.015 1.937 5.468.016c.547.64.766 1.062.766 1.578 0 .218-.047.53-.266.875l1.657.703c.218-.313.312-.735.312-1.094 0-.781-.36-1.422-1.062-2.14l.859-.204.016-1.64zm-.156 6.351c-.016.594.469 1.094 1.11 1.094.64 0 1.109-.5 1.124-1.094a1.09 1.09 0 0 0-1.109-1.094c-.64 0-1.125.5-1.125 1.094zm0 0"
        aria-label="C ollege Dr ."
        fill="#fff"
      />
      <path
        d="M377.793 46.186c0 1.75.594 3 1.813 3.594.5.25 1.14.375 1.875.375l5.969.016v-1.735l-5.844-.015c-.516 0-.953-.094-1.281-.266-.688-.344-1.078-1.015-1.078-1.969 0-.953.39-1.609 1.078-1.937.343-.172.78-.25 1.28-.25l5.86.016.016-1.75-5.969-.016c-.734 0-1.36.11-1.86.36-1.234.577-1.859 1.812-1.859 3.577zm.122 5.832-.016 1.72 4.797.015c.406.515.719 1.11.719 1.687 0 .875-.688 1.047-1.516 1.047l-4-.015v1.734l4.531.016c1.953 0 2.485-1.094 2.485-2.172 0-.86-.375-1.64-.938-2.375l.781-.172v-1.469zm-.024 7.829-.016 1.734 6.844.016.016-1.735zm7.953.89c0 .61.453 1.078 1.016 1.078.594 0 1.062-.468 1.062-1.078 0-.61-.468-1.047-1.047-1.047-.578 0-1.03.438-1.03 1.047zm-8.027 4.555v1.312l6.89 2.782V67.65l-4.656-1.672v-.03l4.672-1.673v-1.75zm-.117 8.066c0 .828.187 1.688.625 2.407l1.187-.516c-.265-.5-.453-1.047-.453-1.734 0-1.141.688-1.907 1.75-1.907l-.016 4.375h.407c2.265 0 3.656-1.093 3.656-3.015.016-1.953-1.531-3.11-3.578-3.11-1.86-.015-3.563.985-3.578 3.5zm4.312-1.765c.828 0 1.531.468 1.531 1.328 0 .906-.765 1.281-1.546 1.312zm-4.18 5.68-.015 1.718 4.828.016c.5.562.687.937.687 1.39 0 .204-.046.485-.234.782l1.469.609c.187-.281.265-.64.265-.953 0-.703-.312-1.281-.937-1.906l.781-.188v-1.453zm.497 4.765c-.344.578-.657 1.453-.672 2.531 0 1.469.625 2.766 2.125 2.766 2.39.016 1.968-3.188 3.047-3.188.453 0 .625.391.625.97 0 .718-.188 1.359-.438 1.937h1.469a5.89 5.89 0 0 0 .328-2c.016-1.61-.844-2.61-2.047-2.61-2.297 0-1.875 3.219-3.031 3.203-.516 0-.719-.5-.719-1.203a3.68 3.68 0 0 1 .578-1.86zm-.536 6.637-.015 1.734 6.844.016.015-1.735zm7.954.89c0 .61.453 1.078 1.015 1.078.594 0 1.063-.468 1.063-1.078 0-.609-.47-1.047-1.047-1.047-.578 0-1.031.438-1.031 1.047zm-8.122 5.114c0 .672.204 1.5.532 1.984l1.187-.516a1.98 1.98 0 0 1-.328-1.046c0-.438.219-.657.86-.657l3.39.016v1.64l1.344.422V94.46l2.094.015-.485-1.718-1.594-.016v-1.234h-1.343v1.234l-3.813-.015c-1.14 0-1.828.734-1.844 1.953zm-2.972 1.972a3.777 3.777 0 0 0-.313 1.532c-.015 1.25.344 2.375 3.188 3.453l7.047 2.64.015-1.75-4.86-1.672v-.03l4.876-2.063v-1.797l-6.813 3.078c-1.562-.547-2.078-1.156-2.078-1.922 0-.375.11-.703.266-1.016Zm2.996 13.723v1.453l4.062 1.453c.563.203 1.047.375 1.579.516v.047c-.532.125-1.047.312-1.61.515l-4.047 1.422v1.469l9.578 3.25v-1.797l-5.406-1.672c-.562-.172-1.078-.281-1.656-.437v-.032c.578-.156 1.156-.359 1.687-.546l5.391-1.813.016-1.766-1.657.594-3.843-1.312c-.516-.172-1-.328-1.594-.485v-.03c.594-.157 1.125-.298 1.61-.47l5.5-1.734v-1.969zm.02 14.664v1.438c.359-.094.953-.125 1.75-.125l2.78.015c1.641 0 2.485-.906 2.485-2.734a5.59 5.59 0 0 0-.656-2.672l-1.125.578c.265.484.469 1.11.469 1.781 0 .797-.344 1.328-1.141 1.328h-.219l-.047-1.171c-.031-.704-.125-1.297-.375-1.766-.36-.719-.937-1.156-1.86-1.172-1.327 0-2.187.969-2.202 2.266 0 .859.344 1.468.797 1.968zm3.187-.39-1.469-.016c-.187-.235-.5-.703-.5-1.344 0-.61.36-1 .953-1 .344.016.61.14.766.422.125.234.203.562.219 1zm-6.305 2.335a3.777 3.777 0 0 0-.312 1.532c-.016 1.25.343 2.375 3.187 3.453l7.047 2.64.016-1.75-4.86-1.672v-.03l4.875-2.063v-1.797l-6.812 3.078c-1.563-.547-2.078-1.156-2.078-1.922 0-.375.11-.703.265-1.016Zm0 0"
        aria-label="Univ ersity W ay"
        fill="#fff"
      />
      <path
        d="M484.387 1045.327h-1.719v2.984c-.375.172-.953.282-1.578.282-2.031 0-3.203-1.328-3.203-3.36 0-2 1.188-3.39 3.469-3.39 1.016 0 1.844.25 2.594.625v-1.61a8.201 8.201 0 0 0-2.735-.468c-3.125 0-5.156 2.109-5.156 4.953 0 2.703 1.828 4.687 4.906 4.687 1.313 0 2.563-.328 3.422-.75zm1.88 4.563h1.718v-6.75h-1.719Zm.858-7.86c.594 0 1.047-.453 1.047-1.015 0-.579-.453-1.016-1.047-1.016-.609 0-1.046.453-1.046 1.016 0 .578.437 1.015 1.046 1.015zm2.57 6.328c0 1.078.563 1.625 1.704 1.625a3.33 3.33 0 0 0 1.25-.234l-.328-1.313c-.14.047-.344.079-.422.079-.328 0-.5-.141-.5-.61v-8.125h-1.703zm4.071 0c0 1.078.563 1.625 1.703 1.625a3.33 3.33 0 0 0 1.25-.234l-.328-1.313c-.14.047-.344.079-.422.079-.328 0-.5-.141-.5-.61v-8.125h-1.703Zm4.04 1.532h1.718v-6.75h-1.719Zm.859-7.86c.593 0 1.046-.453 1.046-1.015 0-.579-.453-1.016-1.046-1.016-.61 0-1.047.453-1.047 1.016 0 .578.437 1.015 1.047 1.015zm1.992 7.344c.562.344 1.437.656 2.484.656 1.453 0 2.75-.61 2.75-2.094 0-2.359-3.172-1.953-3.172-3.015 0-.438.375-.61.953-.61.72 0 1.344.188 1.922.422v-1.437a5.89 5.89 0 0 0-2-.328c-1.578 0-2.547.843-2.547 2.03 0 2.267 3.172 1.83 3.172 2.985 0 .5-.5.703-1.187.703a3.458 3.458 0 0 1-1.844-.546zm8.425.516h1.766l.875-2.36h3.36l.921 2.36h1.813l-3.781-9.454h-1.313Zm3.141-3.75.688-1.86c.265-.734.406-1.14.484-1.469h.031c.094.313.219.735.469 1.454l.656 1.875zm8.195 3.796h1.282l2.75-6.796h-1.72l-1.64 4.593h-.031l-1.672-4.593h-1.719zm7.95.094c.828 0 1.672-.187 2.39-.625l-.515-1.172a3.46 3.46 0 0 1-1.72.453c-1.124 0-1.874-.671-1.89-1.703h4.328v-.406c0-2.25-1.109-3.61-3-3.61-1.937 0-3.046 1.532-3.046 3.548 0 1.828.984 3.515 3.453 3.515zm-1.75-4.234c0-.813.468-1.531 1.312-1.531.89 0 1.266.75 1.297 1.53zm6.511 4.219c.516 0 .938-.422.938-.985 0-.547-.422-.969-.938-.969a.95.95 0 0 0-.953.97c0 .562.422.984.953.984zm0 0"
        aria-label="Gillis Ave."
        fill="#fff"
      />
      <path
        d="M0 0c0-5.847-4.74-10.587-10.587-10.587-5.848 0-10.587 4.74-10.587 10.587 0 5.847 4.739 10.587 10.587 10.587C-4.74 10.587 0 5.847 0 0"
        transform="matrix(1.33333 0 0 -1.33333 519.34 491.402)"
        clip-path="url(#ct)"
        fill="#fff"
      />
      <path
        d="M0 0c-5.266 0-9.55-4.284-9.55-9.549 0-5.266 4.284-9.55 9.55-9.55 5.266 0 9.55 4.284 9.55 9.55C9.55-4.284 5.266 0 0 0m0-21.175c-6.41 0-11.625 5.215-11.625 11.626C-11.625-3.139-6.41 2.076 0 2.076c6.411 0 11.626-5.215 11.626-11.625 0-6.411-5.215-11.626-11.626-11.626"
        transform="matrix(1.33333 0 0 -1.33333 505.224 478.669)"
        clip-path="url(#cu)"
        fill="#231f20"
      />
      <path
        d="M396.95 789.965h-3.628v9.718h3.628zm-3.647 12.468c0 .516.179.955.537 1.315a1.75 1.75 0 0 0 1.291.541c.516 0 .954-.18 1.315-.541.36-.36.541-.799.541-1.315 0-.503-.181-.934-.541-1.291a1.801 1.801 0 0 0-1.315-.537c-.503 0-.934.18-1.291.537a1.758 1.758 0 0 0-.537 1.291"
        transform="matrix(1.33333 0 0 -1.33333 -21.359 1553.847)"
        clip-path="url(#cv)"
        fill="#231f20"
      />
      <path
        d="M0 0a7.123 7.123 0 0 0-7.124-7.124A7.123 7.123 0 0 0-14.248 0a7.123 7.123 0 0 0 7.124 7.124A7.123 7.123 0 0 0 0 0"
        transform="matrix(1.33333 0 0 -1.33333 833.34 558.495)"
        clip-path="url(#cw)"
        fill="#fff"
      />
      <path
        d="M0 0a6.504 6.504 0 0 1-6.497-6.497A6.505 6.505 0 0 1 0-12.995a6.505 6.505 0 0 1 6.497 6.498A6.504 6.504 0 0 1 0 0m0-14.247c-4.273 0-7.75 3.476-7.75 7.75 0 4.273 3.477 7.75 7.75 7.75s7.75-3.477 7.75-7.75c0-4.274-3.477-7.75-7.75-7.75"
        transform="matrix(1.33333 0 0 -1.33333 823.842 549.832)"
        clip-path="url(#cx)"
        fill="#231f20"
      />
      <path
        d="M0 0c.975 0 1.463.333 1.463 1.104 0 .655-.488 1.027-1.296 1.027H-.899V0Zm-.231 3.569c.77 0 1.168.436 1.168.989 0 .577-.385 1.027-1.208 1.027h-.628V3.569Zm-2.427 3.454H0c1.836 0 2.657-1.066 2.657-2.145 0-.693-.346-1.373-1.002-1.707v-.026c1.015-.269 1.58-1.091 1.58-2.041 0-1.284-1.002-2.542-3.004-2.542h-2.889z"
        transform="matrix(1.33333 0 0 -1.33333 824.383 562.04)"
        clip-path="url(#cy)"
        fill="#231f20"
      />
      <path
        d="M0 0a6.903 6.903 0 0 1 6.904 6.904 6.905 6.905 0 1 1-13.809 0A6.904 6.904 0 0 1 0 0"
        transform="matrix(1.33333 0 0 -1.33333 541.308 968.09)"
        clip-path="url(#cz)"
        fill="#216e38"
        stroke="#acdd69"
        strokeMiterlimit="10"
      />
      <path
        d="M0 0v-.657a.55.55 0 1 1 1.101 0c0 .169-.009.657-.009.657h.728v3.899s-.201 1.976-.283 2.76c-.092.875-.294 1.131-.908 1.42-.883.416-1.871.589-2.912.589-1.04 0-2.028-.173-2.91-.589-.615-.289-.817-.545-.909-1.42-.083-.784-.282-2.76-.282-2.76V0h.728s-.009-.488-.009-.657a.55.55 0 1 1 1.1 0V0Zm-5.662 1.838a.548.548 0 1 0 1.096 0 .548.548 0 0 0-1.096 0m5.664 0a.549.549 0 1 0 1.099-.001.549.549 0 0 0-1.099.001m-3.977 5.59a.25.25 0 0 0 0 .5h3.407a.25.25 0 0 0 0-.5zM-5.279 3.87a.368.368 0 0 0-.374.402c.063.876.115 1.372.222 2.252.023.188.185.322.429.322H.447c.243 0 .405-.15.429-.337.117-.927.159-1.334.225-2.232.018-.254-.155-.407-.352-.407Z"
        transform="matrix(1.33333 0 0 -1.33333 544.509 963.791)"
        clip-path="url(#cA)"
        fill="#fff"
      />
      <g clip-path="url(#cB)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 630.59 1062.006)"
          clip-path="url(#cC)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.066a.832.832 0 0 0-.16-.139l-.097-.098-.053-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.099-.625.303-.83l.127-.076.066-.021.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.043l.15-.033.475-.119h.066l.053-.021h.043l.064-.022.27-.054.042-.021.089-.022.15-.042c.16-.044.301-.098.396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.525.128-3.924c0-.269-.032-.485-.107-.646-.205-.712-.614-1.207-1.208-1.478a2.298 2.298 0 0 0-.225-.117c-.282-.076-.636-.108-1.067-.108-1.174 0-2.155.452-2.931 1.369l.02.043.043.021c.012.011.012.011.022.011h.011c.065.076.14.139.239.194l.053.065.225.182.032.012c.01.011.034.021.043.021a.946.946 0 0 0 .282.247h.052c.541-.7 1.144-1.045 1.823-1.045.377 0 .744.087 1.1.27a.66.66 0 0 0 .204.193l.022.055a.967.967 0 0 1 .151.301v.108c0 .356-.14.648-.409.852l-.066.021c-.075.034-.141.043-.194.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a1.024 1.024 0 0 0-.302.075h-.065l-.15.032h-.043l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.952.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 612.827 988.054)"
        clip-path="url(#cD)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0m0-11.992a6.35 6.35 0 0 0-6.342 6.345A6.35 6.35 0 0 0 0 .696a6.352 6.352 0 0 0 6.345-6.343A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 609.232 983.853)"
        clip-path="url(#cE)"
        fill="#100f0d"
      />
      <g clip-path="url(#cF)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.646-5.648A5.654 5.654 0 0 1 0-11.296a5.655 5.655 0 0 1 5.648 5.648A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 224.96 783.02)"
          clip-path="url(#cG)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.066a.832.832 0 0 0-.16-.139l-.098-.098-.052-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.098-.625.303-.83l.127-.076.066-.021.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.043l.15-.033.475-.119h.066l.053-.021h.043l.064-.022.27-.054.042-.021.088-.022.151-.042c.16-.044.301-.098.396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.525.128-3.924c0-.269-.032-.485-.108-.646-.204-.712-.613-1.207-1.207-1.478a2.298 2.298 0 0 0-.225-.117c-.282-.076-.636-.109-1.068-.109-1.173 0-2.154.453-2.93 1.37l.02.043.043.021c.012.011.012.011.022.011h.01a.862.862 0 0 0 .24.194l.052.065.226.182.032.012c.01.011.033.02.043.02a.937.937 0 0 0 .282.248h.052c.541-.7 1.144-1.045 1.823-1.045.376 0 .744.087 1.1.27a.66.66 0 0 0 .204.193l.022.055a.967.967 0 0 1 .151.301v.108c0 .356-.141.648-.409.852l-.067.021c-.074.034-.14.043-.193.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a.994.994 0 0 0-.302.075h-.065l-.15.032h-.043l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.953.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 207.197 709.067)"
        clip-path="url(#cH)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.646-5.648A5.654 5.654 0 0 1 0-11.296a5.655 5.655 0 0 1 5.648 5.648A5.655 5.655 0 0 1 0 0m0-11.992a6.349 6.349 0 0 0-6.342 6.344A6.35 6.35 0 0 0 0 .696a6.352 6.352 0 0 0 6.345-6.344A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 203.602 704.866)"
        clip-path="url(#cI)"
        fill="#100f0d"
      />
      <g clip-path="url(#cJ)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 252.96 611.02)"
          clip-path="url(#cK)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.066a.832.832 0 0 0-.16-.139l-.098-.098-.052-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.098-.625.303-.83l.127-.076.066-.021.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.043l.15-.033.475-.119h.066l.053-.021h.043l.064-.022.27-.054.042-.021.088-.022.151-.042c.16-.044.301-.098.396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.525.128-3.924c0-.269-.032-.485-.108-.646-.204-.712-.613-1.207-1.207-1.478a2.298 2.298 0 0 0-.225-.117c-.282-.076-.636-.109-1.068-.109-1.173 0-2.154.453-2.93 1.37l.02.043.043.021c.012.011.012.011.022.011h.01a.862.862 0 0 0 .24.194l.052.065.226.182.032.012c.01.011.033.02.043.02a.937.937 0 0 0 .282.248h.052c.541-.7 1.144-1.045 1.823-1.045.376 0 .744.087 1.1.27a.66.66 0 0 0 .204.193l.022.055a.967.967 0 0 1 .151.301v.108c0 .356-.141.648-.409.852l-.067.021c-.074.034-.14.043-.193.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a.994.994 0 0 0-.302.075h-.065l-.15.032h-.043l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.953.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 235.197 537.067)"
        clip-path="url(#cL)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0m0-11.992a6.35 6.35 0 0 0-6.342 6.345A6.349 6.349 0 0 0 0 .696a6.351 6.351 0 0 0 6.345-6.343A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 231.602 532.866)"
        clip-path="url(#cM)"
        fill="#100f0d"
      />
      <g clip-path="url(#cN)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.647-5.647A5.655 5.655 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 450.956 246.255)"
          clip-path="url(#cO)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.065a.806.806 0 0 0-.16-.14l-.098-.098-.052-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.099-.625.303-.83l.127-.075.066-.022.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.043l.15-.033.475-.119h.066l.053-.021h.043l.064-.022.27-.054.042-.021.088-.022.151-.042a1.83 1.83 0 0 0 .396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.524.128-3.924c0-.269-.032-.485-.107-.646-.205-.712-.614-1.207-1.207-1.478-.075-.042-.151-.085-.226-.117-.282-.076-.636-.108-1.067-.108-1.174 0-2.155.452-2.931 1.369l.02.043.043.021c.012.011.012.011.022.011h.011c.065.076.14.14.239.194l.053.065.225.182.032.012c.01.011.033.021.043.021a.965.965 0 0 0 .282.248h.052c.541-.701 1.144-1.046 1.823-1.046.376 0 .744.087 1.1.27a.664.664 0 0 0 .204.194l.022.054a.967.967 0 0 1 .151.301v.108c0 .356-.14.648-.409.852l-.067.021c-.074.034-.14.043-.193.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a1.024 1.024 0 0 0-.302.075h-.065l-.15.032h-.043l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.952.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 433.192 172.302)"
        clip-path="url(#cP)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.647-5.647A5.655 5.655 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0m0-11.992a6.35 6.35 0 0 0-6.342 6.345A6.349 6.349 0 0 0 0 .696a6.351 6.351 0 0 0 6.345-6.343A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 429.597 168.102)"
        clip-path="url(#cQ)"
        fill="#100f0d"
      />
      <g clip-path="url(#cR)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.647-5.647A5.655 5.655 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 542.956 246.255)"
          clip-path="url(#cS)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.065a.806.806 0 0 0-.16-.14l-.098-.098-.052-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.099-.625.303-.83l.127-.075.066-.022.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.043l.15-.033.475-.119h.066l.053-.021h.043l.064-.022.27-.054.042-.021.088-.022.151-.042a1.83 1.83 0 0 0 .396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.524.128-3.924c0-.269-.032-.485-.107-.646-.205-.712-.614-1.207-1.207-1.478-.075-.042-.151-.085-.226-.117-.282-.076-.636-.108-1.067-.108-1.174 0-2.155.452-2.931 1.369l.02.043.043.021c.012.011.012.011.022.011h.011c.065.076.14.14.239.194l.053.065.225.182.032.012c.01.011.033.021.043.021a.965.965 0 0 0 .282.248h.052c.541-.701 1.144-1.046 1.823-1.046.376 0 .744.087 1.1.27a.664.664 0 0 0 .204.194l.022.054a.967.967 0 0 1 .151.301v.108c0 .356-.14.648-.409.852l-.067.021c-.074.034-.14.043-.193.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a1.024 1.024 0 0 0-.302.075h-.065l-.15.032h-.043l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.952.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 525.192 172.302)"
        clip-path="url(#cT)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.647-5.647A5.655 5.655 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0m0-11.992a6.35 6.35 0 0 0-6.342 6.345A6.349 6.349 0 0 0 0 .696a6.351 6.351 0 0 0 6.345-6.343A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 521.597 168.102)"
        clip-path="url(#cU)"
        fill="#100f0d"
      />
      <g clip-path="url(#cV)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 629.172 481.275)"
          clip-path="url(#cW)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.065a.806.806 0 0 0-.16-.14l-.097-.098-.053-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.098-.625.303-.83l.127-.075.066-.022.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.043l.15-.033.475-.119h.066l.053-.021h.043l.064-.022.27-.054.042-.021.088-.022.151-.042a1.83 1.83 0 0 0 .396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.524.128-3.924c0-.269-.032-.485-.107-.646-.205-.712-.614-1.207-1.207-1.478-.075-.042-.151-.085-.226-.117-.282-.076-.636-.108-1.067-.108-1.174 0-2.155.452-2.931 1.369l.02.043.043.021c.012.011.012.011.022.011h.01c.066.076.141.14.24.194l.053.065.225.182.032.012c.01.011.034.021.043.021a.965.965 0 0 0 .282.248h.052c.541-.701 1.144-1.046 1.823-1.046.376 0 .744.087 1.1.27a.664.664 0 0 0 .204.194l.022.054a.967.967 0 0 1 .151.301v.108c0 .356-.141.648-.409.852l-.067.021c-.074.034-.14.043-.193.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a1.024 1.024 0 0 0-.302.075h-.065l-.15.032h-.043l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.952.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 611.408 407.322)"
        clip-path="url(#cX)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0m0-11.992a6.35 6.35 0 0 0-6.342 6.345A6.349 6.349 0 0 0 0 .696a6.351 6.351 0 0 0 6.345-6.343A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 607.813 403.121)"
        clip-path="url(#cY)"
        fill="#100f0d"
      />
      <g clip-path="url(#cZ)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 922.763 612.108)"
          clip-path="url(#da)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.065a.806.806 0 0 0-.16-.14l-.097-.098-.053-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.099-.625.303-.83l.127-.075.066-.022.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.043l.15-.033.475-.119h.066l.053-.021h.043l.064-.022.27-.054.042-.021.089-.022.15-.042a1.83 1.83 0 0 0 .396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.524.128-3.924c0-.269-.032-.485-.107-.646-.205-.712-.614-1.207-1.208-1.478a2.298 2.298 0 0 0-.225-.117c-.282-.076-.636-.108-1.067-.108-1.174 0-2.155.452-2.931 1.369l.02.043.043.021c.012.011.012.011.022.011h.011c.065.076.14.14.239.194l.053.065.225.182.032.012c.01.011.034.021.043.021a.965.965 0 0 0 .282.248h.052c.541-.701 1.144-1.046 1.823-1.046.377 0 .744.087 1.1.27a.664.664 0 0 0 .204.194l.022.054a.967.967 0 0 1 .151.301v.108c0 .356-.141.648-.409.852l-.066.021c-.075.034-.141.043-.194.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a1.024 1.024 0 0 0-.302.075h-.065l-.15.032h-.043l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.952.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 905 538.155)"
        clip-path="url(#db)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0m0-11.992a6.35 6.35 0 0 0-6.342 6.345A6.349 6.349 0 0 0 0 .696a6.351 6.351 0 0 0 6.345-6.343A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 901.404 533.955)"
        clip-path="url(#dc)"
        fill="#100f0d"
      />
      <g clip-path="url(#dd)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 900.096 718.775)"
          clip-path="url(#de)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.065a.806.806 0 0 0-.16-.14l-.097-.098-.053-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.099-.625.303-.83l.127-.075.066-.022.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.043l.15-.033.475-.119h.066l.053-.021h.043l.064-.022.27-.054.042-.021.089-.022.15-.042a1.83 1.83 0 0 0 .396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.524.128-3.924c0-.269-.032-.485-.107-.646-.205-.712-.614-1.207-1.208-1.478a2.298 2.298 0 0 0-.225-.117c-.282-.076-.636-.108-1.067-.108-1.174 0-2.155.452-2.931 1.369l.02.043.043.021c.012.011.012.011.022.011h.011c.065.076.14.14.239.194l.053.065.225.182.032.012c.01.011.034.021.043.021a.965.965 0 0 0 .282.248h.052c.541-.701 1.144-1.046 1.823-1.046.377 0 .744.087 1.1.27a.664.664 0 0 0 .204.194l.022.054a.967.967 0 0 1 .151.301v.108c0 .356-.141.648-.409.852l-.066.021c-.075.034-.141.043-.194.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a1.024 1.024 0 0 0-.302.075h-.065l-.15.032h-.043l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.952.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 882.333 644.822)"
        clip-path="url(#df)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0m0-11.992a6.35 6.35 0 0 0-6.342 6.345A6.349 6.349 0 0 0 0 .696a6.351 6.351 0 0 0 6.345-6.343A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 878.737 640.621)"
        clip-path="url(#dg)"
        fill="#100f0d"
      />
      <g clip-path="url(#dh)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 940.096 720.108)"
          clip-path="url(#di)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.065a.806.806 0 0 0-.16-.14l-.097-.098-.053-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.099-.625.303-.83l.127-.075.066-.022.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.043l.15-.033.475-.119h.066l.053-.021h.043l.064-.022.27-.054.042-.021.089-.022.15-.042a1.83 1.83 0 0 0 .396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.524.128-3.924c0-.269-.032-.485-.107-.646-.205-.712-.614-1.207-1.208-1.478a2.298 2.298 0 0 0-.225-.117c-.282-.076-.636-.108-1.067-.108-1.174 0-2.155.452-2.931 1.369l.02.043.043.021c.012.011.012.011.022.011h.011c.065.076.14.14.239.194l.053.065.225.182.032.012c.01.011.034.021.043.021a.965.965 0 0 0 .282.248h.052c.541-.701 1.144-1.046 1.823-1.046.377 0 .744.087 1.1.27a.664.664 0 0 0 .204.194l.022.054a.967.967 0 0 1 .151.301v.108c0 .356-.141.648-.409.852l-.066.021c-.075.034-.141.043-.194.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a1.024 1.024 0 0 0-.302.075h-.065l-.15.032h-.043l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.952.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 922.333 646.155)"
        clip-path="url(#dj)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0m0-11.992a6.35 6.35 0 0 0-6.342 6.345A6.349 6.349 0 0 0 0 .696a6.351 6.351 0 0 0 6.345-6.343A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 918.737 641.955)"
        clip-path="url(#dk)"
        fill="#100f0d"
      />
      <g clip-path="url(#dl)" transform="translate(-21.359 -78.153)">
        <path
          d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0"
          transform="matrix(1.33333 0 0 -1.33333 765.43 945.441)"
          clip-path="url(#dm)"
          fill="#f7f567"
        />
      </g>
      <path
        d="m0 0-.099-.065a.806.806 0 0 0-.16-.14l-.098-.098-.052-.021a.33.33 0 0 0-.194-.152.385.385 0 0 0-.226-.182.41.41 0 0 0-.121-.118c-.43.592-.97.882-1.625.882-.076 0-.152 0-.227-.009-.583-.022-.949-.271-1.111-.755 0-.357.098-.625.303-.83l.127-.076.066-.021.193-.098h.098l.076-.021.084-.022c.076-.032.142-.032.197-.043l.085-.02.076-.022h.042l.151-.033.474-.119h.067l.053-.021h.043l.064-.022.27-.054.042-.021.088-.022.151-.042c.16-.044.301-.098.396-.151l.034-.044.054-.021.043-.054c.043-.043.141-.075.141-.118l.236-.205C0-3.126.128-3.525.128-3.924c0-.269-.032-.485-.108-.646-.204-.712-.613-1.207-1.207-1.478a2.298 2.298 0 0 0-.225-.117c-.282-.076-.636-.108-1.068-.108-1.173 0-2.154.452-2.93 1.369l.02.043.043.021c.012.011.012.011.022.011h.01c.066.076.141.14.24.194l.052.065.226.182.032.012c.01.011.033.021.043.021a.976.976 0 0 0 .281.248h.053c.541-.701 1.144-1.046 1.822-1.046.377 0 .745.087 1.101.27a.664.664 0 0 0 .204.194l.022.054a.967.967 0 0 1 .151.301v.108c0 .356-.141.648-.409.852l-.067.021c-.074.034-.14.043-.193.054l-.032.033h-.056l-.075.022-.042.021h-.053l-.033.022a1.016 1.016 0 0 0-.302.075h-.065l-.151.032h-.042l-.076.022-.043.021c-.163.022-.27.043-.301.075-1.251.151-1.953.798-2.09 1.941.029 1.369.786 2.111 2.241 2.231.161.01.288.021.43.021C-1.38 1.217-.561.808 0 0"
        transform="matrix(1.33333 0 0 -1.33333 747.666 871.488)"
        clip-path="url(#dn)"
        fill="#211d1d"
      />
      <path
        d="M0 0a5.654 5.654 0 0 1-5.646-5.647A5.654 5.654 0 0 1 0-11.296a5.656 5.656 0 0 1 5.648 5.649A5.655 5.655 0 0 1 0 0m0-11.992a6.35 6.35 0 0 0-6.342 6.345A6.349 6.349 0 0 0 0 .696a6.351 6.351 0 0 0 6.345-6.343A6.352 6.352 0 0 0 0-11.992"
        transform="matrix(1.33333 0 0 -1.33333 744.07 867.288)"
        clip-path="url(#do)"
        fill="#100f0d"
      />
      <path
        d="M0 0h-2.667l7 301 3.26-49.405z"
        transform="matrix(1.33333 0 0 -1.33333 160.42 763.625)"
        clip-path="url(#dp)"
        fill="url(#dq)"
        stroke="#211d1d"
        stroke-width=".5"
        strokeMiterlimit="10"
      />
      <path
        d="m0 0-2.333-.667 7 248.667h2.666Z"
        transform="matrix(1.33333 0 0 -1.33333 174.196 763.18)"
        clip-path="url(#dr)"
        fill="url(#ds)"
        stroke="#211d1d"
        stroke-width=".5"
        strokeMiterlimit="10"
      />
      <path
        d="M0 0h3.226l.484 491H-.351z"
        transform="matrix(1.33333 0 0 -1.33333 977.643 1023.67)"
        clip-path="url(#dt)"
        fill="url(#du)"
        stroke="#211d1d"
        stroke-width=".5"
        strokeMiterlimit="10"
      />
      <path
        d="m18.672-3.414 100.9 1.025-2.56 5.829-98.34-.79Z"
        transform="matrix(1.33333 0 0 -1.33333 -24.364 776.688)"
        clip-path="url(#dv)"
        fill="url(#dw)"
        stroke="#211d1d"
        stroke-width=".5"
        strokeMiterlimit="10"
      />
      <path
        d="M-25.82-1.387 88.548.306l-.205 4.652-114.163-.627Z"
        transform="matrix(1.33333 0 0 -1.33333 35.13 808.643)"
        clip-path="url(#dx)"
        fill="url(#dy)"
        stroke="#211d1d"
        stroke-width=".5"
        strokeMiterlimit="10"
      />
      <g fill="#fff">
        <path
          d="M0 0a.573.573 0 0 0-.176-.417.569.569 0 0 0-.819 0A.57.57 0 0 0-1.172 0v4.807h-.673a.143.143 0 0 0-.104.044.14.14 0 0 0-.044.105v3.708c0 .408.145.758.436 1.048.29.29.639.436 1.047.436h.214c.08 0 .149-.03.208-.088A.286.286 0 0 0 0 9.851Zm-2.952 7.128c0-.189-.661-.778-.836-.839V.122c0-.161-.059-.3-.177-.417a.567.567 0 0 0-.409-.176h.007-.015.008a.57.57 0 0 0-.41.176.57.57 0 0 0-.176.417v6.167c-.176.061-.958.65-.958.839v2.48c0 .08.029.149.087.208a.286.286 0 0 0 .209.088c.08 0 .15-.029.209-.088a.288.288 0 0 0 .088-.208V7.679c0-.08.029-.15.088-.209a.284.284 0 0 1 .209-.088c.08 0 .149.029.208.088a.286.286 0 0 1 .088.209v1.929c0 .08.03.149.088.208a.284.284 0 0 0 .209.088c.08 0 .15-.029.209-.088a.288.288 0 0 0 .088-.208V7.679c0-.08.029-.15.088-.209a.282.282 0 0 1 .208-.088c.08 0 .15.029.209.088a.286.286 0 0 1 .088.209v1.929c0 .08.029.149.088.208a.283.283 0 0 0 .209.088c.08 0 .149-.029.208-.088a.284.284 0 0 0 .088-.208zm.228 4.541a6.921 6.921 0 1 1 0-13.843 6.921 6.921 0 0 1 0 13.843"
          transform="matrix(1.33333 0 0 -1.33333 511.49 523.315)"
          clip-path="url(#dz)"
        />
        <path
          d="M0 0a.573.573 0 0 0-.176-.417.569.569 0 0 0-.819 0A.57.57 0 0 0-1.172 0v4.807h-.673a.143.143 0 0 0-.104.044.14.14 0 0 0-.044.105v3.708c0 .408.145.758.436 1.048.29.29.639.436 1.047.436h.214c.08 0 .149-.03.208-.088A.286.286 0 0 0 0 9.851Zm-2.952 7.128c0-.189-.661-.778-.836-.839V.122c0-.161-.059-.3-.177-.417a.567.567 0 0 0-.409-.176h.007-.015.008a.57.57 0 0 0-.41.176.57.57 0 0 0-.176.417v6.167c-.176.061-.958.65-.958.839v2.48c0 .08.029.149.087.208a.286.286 0 0 0 .209.088c.08 0 .15-.029.209-.088a.288.288 0 0 0 .088-.208V7.679c0-.08.029-.15.088-.209a.284.284 0 0 1 .209-.088c.08 0 .149.029.208.088a.286.286 0 0 1 .088.209v1.929c0 .08.03.149.088.208a.284.284 0 0 0 .209.088c.08 0 .15-.029.209-.088a.288.288 0 0 0 .088-.208V7.679c0-.08.029-.15.088-.209a.282.282 0 0 1 .208-.088c.08 0 .15.029.209.088a.29.29 0 0 1 .088.209v1.929c0 .08.029.149.088.208a.283.283 0 0 0 .209.088c.08 0 .149-.029.208-.088a.284.284 0 0 0 .088-.208zm.228 4.541a6.92 6.92 0 1 1 0-13.842 6.92 6.92 0 0 1 0 13.842"
          transform="matrix(1.33333 0 0 -1.33333 823.138 460.844)"
          clip-path="url(#dA)"
        />
        <path
          d="M0 0a.572.572 0 0 0-.176-.417.569.569 0 0 0-.819 0A.569.569 0 0 0-1.172 0v4.807h-.673a.143.143 0 0 0-.104.044.14.14 0 0 0-.044.105v3.708c0 .408.145.758.436 1.048.29.29.639.436 1.047.436h.214c.08 0 .149-.03.208-.088A.286.286 0 0 0 0 9.851Zm-2.952 7.128c0-.189-.661-.778-.836-.839V.122c0-.161-.059-.3-.177-.417a.567.567 0 0 0-.409-.176h.007-.015.008a.57.57 0 0 0-.41.176.57.57 0 0 0-.176.417v6.167c-.176.061-.958.65-.958.839v2.48c0 .08.029.149.087.208a.286.286 0 0 0 .209.088c.08 0 .15-.029.209-.088a.288.288 0 0 0 .088-.208V7.679c0-.08.029-.15.088-.209a.284.284 0 0 1 .209-.088c.08 0 .149.029.208.088a.286.286 0 0 1 .088.209v1.929c0 .08.03.149.088.208a.284.284 0 0 0 .209.088c.08 0 .15-.029.209-.088a.288.288 0 0 0 .088-.208V7.679c0-.08.029-.15.088-.209a.282.282 0 0 1 .208-.088c.08 0 .15.029.209.088a.286.286 0 0 1 .088.209v1.929c0 .08.029.149.088.208a.283.283 0 0 0 .209.088c.08 0 .149-.029.208-.088a.284.284 0 0 0 .088-.208zm.228 4.541a6.92 6.92 0 1 1 0-13.842 6.92 6.92 0 0 1 0 13.842"
          transform="matrix(1.33333 0 0 -1.33333 722.046 582.51)"
          clip-path="url(#dB)"
        />
      </g>
    </svg>
  );
}
