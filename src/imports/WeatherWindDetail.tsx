import svgPaths from "./svg-c5lcqhk0cp";

function Text() {
  return (
    <div className="absolute h-[15px] left-0 top-[-20000px] w-[6.422px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-neutral-950 text-nowrap top-0 tracking-[0.1172px] whitespace-pre">0</p>
    </div>
  );
}

function Container() {
  return <div className="absolute h-[13px] left-0 top-0 w-[393px]" data-name="Container" />;
}

function DirectionalArrowRight() {
  return (
    <div className="absolute contents inset-[13.72%_12.49%_13.72%_12.5%]" data-name="Directional / Arrow Right">
      <div className="absolute inset-[13.72%_12.49%_13.72%_12.5%]" data-name="Arrow Right">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
          <path d={svgPaths.p1bbb8500} fill="var(--fill-0, white)" id="Arrow Right" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[30px] overflow-clip relative w-full" data-name="Icon">
      <DirectionalArrowRight />
    </div>
  );
}

function DirectionalArrowRight2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.3)] size-[30px] top-[-9.86px]" data-name="DirectionalArrowRight3">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute left-[24px] size-[30px] top-[58px]" data-name="Button">
      <DirectionalArrowRight2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[30px] left-[138.69px] top-[58px] w-[115.625px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[30px] left-0 not-italic text-[20px] text-nowrap text-white top-0 tracking-[-0.4492px] whitespace-pre">Wind Details</p>
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.28%] top-[3.42%]" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327 13">
        <g id="Vector">
          <path d={svgPaths.p2ee61e00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1104f700} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1de68d80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p32bb2700} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p30634400} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p11fdde80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2ca4c680} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p39f72d00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3221be80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p312e6100} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p4426780} fill="var(--fill-0, white)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute h-[13px] left-[32.96px] overflow-clip top-[13px] w-[327.078px]" data-name="Icon">
      <Vector />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Button />
      <Heading />
      <Icon1 />
    </div>
  );
}

function WindDetailScreen() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1417.5px] items-start left-0 overflow-clip top-0 w-[393px]" data-name="WindDetailScreen">
      <Container1 />
    </div>
  );
}

function Container2() {
  return <div className="absolute h-[13px] left-0 top-0 w-[393px]" data-name="Container" />;
}

function DirectionalArrowRight1() {
  return (
    <div className="absolute contents inset-[13.72%_12.49%_13.72%_12.5%]" data-name="Directional / Arrow Right">
      <div className="absolute inset-[13.72%_12.49%_13.72%_12.5%]" data-name="Arrow Right">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
          <path d={svgPaths.p1bbb8500} fill="var(--fill-0, white)" id="Arrow Right" />
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[30px] overflow-clip relative w-full" data-name="Icon">
      <DirectionalArrowRight1 />
    </div>
  );
}

function DirectionalArrowRight3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.3)] size-[30px] top-[-9.86px]" data-name="DirectionalArrowRight3">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] w-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute left-[24px] size-[30px] top-[58px]" data-name="Button">
      <DirectionalArrowRight3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[30px] left-[138.69px] top-[58px] w-[115.625px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[30px] left-0 not-italic text-[20px] text-nowrap text-white top-0 tracking-[-0.4492px] whitespace-pre">Wind Details</p>
    </div>
  );
}

function Vector1() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.28%] top-[3.42%]" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327 13">
        <g id="Vector">
          <path d={svgPaths.p2ee61e00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1104f700} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1de68d80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p32bb2700} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p30634400} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p11fdde80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2ca4c680} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p39f72d00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3221be80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p312e6100} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p4426780} fill="var(--fill-0, white)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute h-[13px] left-[32.96px] overflow-clip top-[13px] w-[327.078px]" data-name="Icon">
      <Vector1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[#4fc3f7] grow h-[39.5px] min-h-px min-w-px relative rounded-[10px] shadow-[0px_2px_8px_0px_rgba(13,127,239,0.4)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.5px] relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[19.5px] left-[32.75px] not-italic text-[13px] text-nowrap text-white top-[9.75px] tracking-[-0.0762px] whitespace-pre">Hourly Forecast</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 grow h-[39.5px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.5px] relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[19.5px] left-[50.75px] not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-nowrap top-[9.75px] tracking-[-0.0762px] whitespace-pre">Wind Map</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[8px] h-[49.5px] items-start left-[24px] pb-px pt-[5px] px-[5px] rounded-[14px] top-[101px] w-[345px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Button1 />
      <Heading1 />
      <Icon3 />
      <Container3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[24px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[36px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-0 tracking-[0.0703px] whitespace-pre">⭐</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[-0.1504px] whitespace-pre">Best Conditions</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.8)] top-0 w-[251px]">Peak winds expected between 12:00 - 18:00 today. Perfect for kitesurfing!</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[61px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[61px] items-start relative w-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[rgba(13,127,239,0.2)] h-[95px] items-start left-[21.08px] pb-px pt-[17px] px-[17px] rounded-[14px] to-[rgba(236,72,153,0.2)] top-[792px] w-[345px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(13,127,239,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container8 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[22px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[22px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[30px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">💨</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[50.281px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[0.0645px] whitespace-pre">Avg Wind</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[27.578px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[0.0703px] whitespace-pre">18</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[19.5px] left-[31.58px] top-[13px] w-[26.672px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[-0.0762px] whitespace-pre">km/h</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function StatCard() {
  return (
    <div className="[grid-area:1_/_1] bg-[#112233] relative rounded-[14px] shrink-0" data-name="StatCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[30px] relative shrink-0 w-[22px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[22px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[30px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">⚡</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[54.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[54.234px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[0.0645px] whitespace-pre">Peak Gust</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[30.594px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[0.0703px] whitespace-pre">35</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[19.5px] left-[34.59px] top-[13px] w-[26.672px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[-0.0762px] whitespace-pre">km/h</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function StatCard1() {
  return (
    <div className="[grid-area:1_/_2] bg-[#112233] relative rounded-[14px] shrink-0" data-name="StatCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[30px] relative shrink-0 w-[22px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[22px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[30px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">🌊</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[67.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[67.453px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[0.0645px] whitespace-pre">Wave Height</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[41.938px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[0.0703px] whitespace-pre">5-6</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[19.5px] left-[45.94px] top-[13px] w-[11.297px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[-0.0762px] whitespace-pre">M</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function StatCard2() {
  return (
    <div className="[grid-area:2_/_1] bg-[#112233] relative rounded-[14px] shrink-0" data-name="StatCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[30px] relative shrink-0 w-[22px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[22px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[30px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">🌡️</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[29.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[29.313px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[0.0645px] whitespace-pre">Temp</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[27.578px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[0.0703px] whitespace-pre">18</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[19.5px] left-[31.58px] top-[13px] w-[15.297px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[-0.0762px] whitespace-pre">°C</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function StatCard3() {
  return (
    <div className="[grid-area:2_/_2] bg-[#112233] relative rounded-[14px] shrink-0" data-name="StatCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[228px] left-[24px] top-[549px] w-[345px]" data-name="Container">
      <StatCard />
      <StatCard1 />
      <StatCard2 />
      <StatCard3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[19.5px] left-[25px] top-[25px] w-[295px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 tracking-[-0.0762px] whitespace-pre">Current Conditions</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16.5px] left-[24px] not-italic text-[11px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-0 tracking-[0.0645px] translate-x-[-50%] whitespace-pre">Direction</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[27px] left-[24.7px] not-italic text-[18px] text-center text-nowrap text-white top-px tracking-[-0.4395px] translate-x-[-50%] whitespace-pre">SW</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-[23.75px] not-italic text-[10px] text-[rgba(255,255,255,0.5)] text-center top-0 tracking-[0.1172px] translate-x-[-50%] w-[23px]">270°</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[62.5px] relative shrink-0 w-[47.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[62.5px] items-start relative w-[47.5px]">
        <Container20 />
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[48px] relative shrink-0 w-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] w-px" />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16.5px] left-[30.5px] not-italic text-[11px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-0 tracking-[0.0645px] translate-x-[-50%] whitespace-pre">Gusts up to</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[27px] left-[30.69px] not-italic text-[18px] text-center text-nowrap text-white top-px tracking-[-0.4395px] translate-x-[-50%] whitespace-pre">35</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-[31.19px] not-italic text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-0 tracking-[0.1172px] translate-x-[-50%] whitespace-pre">mph</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[62.5px] relative shrink-0 w-[60.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[62.5px] items-start relative w-[60.438px]">
        <Container25 />
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[62.5px] items-center justify-center left-[25px] top-[284.5px] w-[295px]" data-name="Container">
      <Container23 />
      <Container24 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[16.5px] left-[95.83px] top-[12px] w-[8.328px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#112233] text-[11px] text-nowrap top-0 tracking-[0.0645px] whitespace-pre">N</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[16.5px] left-[181.28px] top-[91.75px] w-[6.719px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#112233] text-[11px] text-nowrap top-0 tracking-[0.0645px] whitespace-pre">E</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[16.5px] left-[96.39px] top-[171.5px] w-[7.219px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#112233] text-[11px] text-nowrap top-0 tracking-[0.0645px] whitespace-pre">S</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[16.5px] left-[12px] top-[91.75px] w-[10.875px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#112233] text-[11px] text-nowrap top-0 tracking-[0.0645px] whitespace-pre">W</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute left-0 size-[200px] top-0" data-name="Container">
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute left-[15px] rounded-[3.35544e+07px] size-[170px] top-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0e7f0] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute left-[30px] rounded-[3.35544e+07px] size-[140px] top-[30px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f0f4f8] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[30px] left-0 not-italic text-[20px] text-nowrap text-white top-0 tracking-[-0.4492px] whitespace-pre">27</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[13.5px] opacity-80 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-nowrap text-white top-0 tracking-[0.167px] whitespace-pre">mph</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[43.5px] relative shrink-0 w-[23.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[43.5px] items-start relative w-[23.719px]">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex from-[#0d7fef] items-center justify-center left-[45px] rounded-[3.35544e+07px] shadow-[0px_2px_8px_0px_rgba(13,127,239,0.3)] size-[110px] to-[#5c9bd9] top-[45px]" data-name="Container">
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-white left-0 rounded-[3.35544e+07px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] size-[200px] top-0" data-name="Container">
      <Container34 />
      <Container35 />
      <Container36 />
      <Container40 />
    </div>
  );
}

function WindCompass() {
  return (
    <div className="absolute left-[72.5px] size-[200px] top-[60.5px]" data-name="WindCompass">
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#112233] h-[372px] left-[24.69px] rounded-[20px] top-[162px] w-[345px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.3)]" />
      <Container19 />
      <Container29 />
      <WindCompass />
    </div>
  );
}

function WindDetailScreen1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[852px] items-start left-0 overflow-clip top-0 w-[393px]" data-name="WindDetailScreen" style={{ backgroundImage: "linear-gradient(rgb(12, 43, 78) 50.481%, rgb(54, 83, 134) 100%), linear-gradient(rgb(34, 74, 89) 33.173%, rgb(137, 169, 182) 100%)" }}>
      <Container4 />
      <Container9 />
      <Container18 />
      <Container42 />
    </div>
  );
}

export default function WeatherWindDetail() {
  return (
    <div className="relative size-full" data-name="Weather -  Wind Detail">
      <Text />
      <WindDetailScreen />
      <WindDetailScreen1 />
    </div>
  );
}