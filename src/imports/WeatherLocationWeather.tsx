import svgPaths from "./svg-ozkw6axrv2";
import imgImage from "figma:asset/164f9a6fd0599959a30209c9ec648f4aee17e074.png";
import { imgAC, imgVector2 } from "./svg-c7ccp";

function Container() {
  return <div className="absolute bg-gradient-to-b from-[#224a59] from-[33.173%] h-[996px] left-0 to-[#89a9b6] top-0 w-[393px]" data-name="Container" />;
}

function Image() {
  return (
    <div className="absolute h-[996px] left-0 opacity-[0.36] top-0 w-[393px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[996px] left-0 top-0 w-[393px]" data-name="Container">
      <Container />
      <Image />
    </div>
  );
}

function Subtract() {
  return (
    <div className="absolute contents inset-[20%_19.61%]" data-name="Subtract">
      <div className="absolute inset-[20%_19.61%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 30">
          <path d={svgPaths.p2d18aad0} fill="url(#paint0_radial_17_3569)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(15.5 4.99647) rotate(90) scale(24.9843 25.8333)" gradientUnits="userSpaceOnUse" id="paint0_radial_17_3569" r="1">
              <stop stopColor="#FACC15" />
              <stop offset="1" stopColor="#D97706" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[49.969px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Subtract />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[49.969px] items-start left-[54.95px] top-[292.34px] w-[51px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#092339] h-[117.891px] left-[24px] rounded-[16px] top-[111.89px] w-[345px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[0.77%] contents left-0 right-[0.77%] top-0" data-name="Group">
      <div className="absolute bottom-[0.77%] left-0 right-[0.77%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
          <path d={svgPaths.p10fe6a00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[34.719px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[38.14px] size-[34.719px] top-[136.65px]" data-name="Group7">
      <Icon5 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[84.63px] top-[136.36px] w-[215.281px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-0 text-[14px] text-nowrap text-white top-0 tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Optimal Wind Conditions Window:
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-[84.63px] top-[156.36px] w-[196.875px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-0 text-[14px] text-nowrap text-white top-0 tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        14:00 - 18:00 ( Winds 27 km/h)
      </p>
    </div>
  );
}

function Container4() {
  return <div className="absolute left-[11px] rounded-[23px] size-[2px] top-[11px]" data-name="Container" />;
}

function Icon6() {
  return (
    <div className="absolute bottom-1/4 contents left-[16.04%] right-[16.04%] top-[24.9%]" data-name="Icon">
      <div className="absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
          <path d={svgPaths.p22a8d70} fill="var(--fill-0, #4F378A)" id="icon" />
        </svg>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon6 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[4px]" data-name="Icon12">
      <Icon7 />
    </div>
  );
}

function HandleShape() {
  return (
    <div className="absolute bg-white left-[8px] overflow-clip rounded-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[24px] top-[8px]" data-name="HandleShape">
      <Container4 />
      <Icon12 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="absolute left-[16px] rounded-[100px] size-[40px] top-[-4px]" data-name="StateLayer12">
      <HandleShape />
    </div>
  );
}

function Switch() {
  return (
    <div className="absolute bg-[#3377e4] h-[32px] left-[308.98px] rounded-[100px] top-[190.69px] w-[52px]" data-name="Switch">
      <StateLayer8 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_4px_0px_inset_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-[37.5px] top-[191.69px] w-[237.828px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-0 text-[14px] text-[rgba(255,255,255,0.74)] text-nowrap top-0 tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Westerly wind and 5M swell expected
      </p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[24px] top-[111.89px]">
      <Container3 />
      <Group7 />
      <Paragraph />
      <Paragraph1 />
      <Switch />
      <Paragraph2 />
    </div>
  );
}

function Group2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="Group">
        <path d={svgPaths.p3902e000} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </svg>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[17px] size-[20px] top-[12.69px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[20px]">
        <Group2 />
      </div>
    </div>
  );
}

function Fab6() {
  return (
    <div className="absolute bg-[#112233] h-[74px] left-[24px] rounded-[16px] top-[404.31px] w-[170px]" data-name="Fab7">
      <div className="box-border content-stretch flex h-[74px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[170px]">
        <Icon8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[16px] left-[134.84px] top-[488.91px] w-[50.719px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-0 text-[11px] text-nowrap text-white top-[-1px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        See More
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20px] left-[68px] top-[441.31px] w-[57.859px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-[5px] text-[14px] text-nowrap text-white top-[-6px] tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`27 Km/h `}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-gradient-to-b from-[#0c2b4e] from-[50.481%] h-[654px] left-0 rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.2)] to-[#365386] top-[297px] w-[393px]" data-name="Container">
      <Group27 />
      <Fab6 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Icon9() {
  return <div className="h-[28px] shrink-0 w-full" data-name="Icon" />;
}

function Icon10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[26px] size-[28px] top-[26px]" data-name="Icon">
      <Icon9 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="absolute left-[6.5px] rounded-[20px] size-[80px] top-0" data-name="StateLayer">
      <Icon10 />
    </div>
  );
}

function Fab() {
  return (
    <div className="absolute bg-[#3777e4] h-[80px] left-[25px] overflow-clip rounded-[20px] shadow-[0px_8px_20px_0px_rgba(55,119,228,0.4)] top-[256px] w-[93px]" data-name="Fab">
      <StateLayer />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[10.234px] left-[53.99px] top-[307.08px] w-[37.734px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-[19.84px] text-[12px] text-center text-nowrap text-white top-0 tracking-[0.4px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        32 °C
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[21px] left-[49.48px] top-[257.38px] w-[44px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-[22.14px] text-[11px] text-center text-nowrap text-white top-[-1px] tracking-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Now
      </p>
    </div>
  );
}

function Icon11() {
  return <div className="h-[28px] shrink-0 w-full" data-name="Icon" />;
}

function Icon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[26px] size-[28px] top-[26px]" data-name="Icon1">
      <Icon11 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="absolute left-[-11px] rounded-[20px] size-[80px] top-px" data-name="StateLayer1">
      <Icon1 />
    </div>
  );
}

function Fab1() {
  return (
    <div className="absolute bg-[#739fec] h-[82px] left-[123px] overflow-clip rounded-[20px] shadow-[0px_6px_16px_0px_rgba(115,159,236,0.3)] top-[255px] w-[58px]" data-name="Fab1">
      <StateLayer1 />
    </div>
  );
}

function Icon13() {
  return <div className="h-[28px] shrink-0 w-full" data-name="Icon" />;
}

function Icon2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[26px] size-[28px] top-[26px]" data-name="Icon2">
      <Icon13 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="absolute left-[-11px] rounded-[20px] size-[80px] top-px" data-name="StateLayer2">
      <Icon2 />
    </div>
  );
}

function Fab2() {
  return (
    <div className="absolute bg-[#739fec] h-[82px] left-[185px] overflow-clip rounded-[20px] shadow-[0px_6px_16px_0px_rgba(115,159,236,0.3)] top-[255px] w-[58px]" data-name="Fab2">
      <StateLayer2 />
    </div>
  );
}

function Icon14() {
  return <div className="h-[28px] shrink-0 w-full" data-name="Icon" />;
}

function Icon3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[26px] size-[28px] top-[26px]" data-name="Icon3">
      <Icon14 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="absolute left-[-11px] rounded-[20px] size-[80px] top-px" data-name="StateLayer3">
      <Icon3 />
    </div>
  );
}

function Fab3() {
  return (
    <div className="absolute bg-[#739fec] h-[82px] left-[247.98px] overflow-clip rounded-[20px] shadow-[0px_6px_16px_0px_rgba(115,159,236,0.3)] top-[255px] w-[58px]" data-name="Fab3">
      <StateLayer3 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[10.234px] left-[132.99px] top-[307.08px] w-[37.734px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-[19.84px] text-[12px] text-center text-nowrap text-white top-0 tracking-[0.4px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        32 °C
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[10.234px] left-[194.24px] top-[308.86px] w-[37.734px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-[19.84px] text-[12px] text-center text-nowrap text-white top-0 tracking-[0.4px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        32 °C
      </p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[10.234px] left-[258.51px] top-[308.86px] w-[37.734px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-[19.84px] text-[12px] text-center text-nowrap text-white top-0 tracking-[0.4px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        32 °C
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[21px] left-[189.73px] top-[259.14px] w-[44px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-[21.78px] text-[11px] text-center text-nowrap text-white top-[-1px] tracking-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        16:00
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[21px] left-[128.48px] top-[257.38px] w-[44px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-[21.78px] text-[11px] text-center text-nowrap text-white top-[-1px] tracking-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:00
      </p>
    </div>
  );
}

function Icon15() {
  return <div className="h-[28px] shrink-0 w-full" data-name="Icon" />;
}

function Icon4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[26px] size-[28px] top-[26px]" data-name="Icon4">
      <Icon15 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="absolute left-[-11px] rounded-[20px] size-[80px] top-[0.5px]" data-name="StateLayer4">
      <Icon4 />
    </div>
  );
}

function Fab4() {
  return (
    <div className="absolute bg-[#739fec] h-[81px] left-[310.98px] overflow-clip rounded-[20px] shadow-[0px_6px_16px_0px_rgba(115,159,236,0.3)] top-[255px] w-[58px]" data-name="Fab4">
      <StateLayer4 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[21px] left-[254px] top-[259.14px] w-[44px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-[21.78px] text-[11px] text-center text-nowrap text-white top-[-1px] tracking-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        18:00
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[14px] text-nowrap text-white top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wave Height (24h)
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[5%_1.61%_35%_12.86%]" data-name="Group">
      <div className="absolute bottom-[-0.83%] left-0 right-0 top-[-0.83%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 266 61">
          <g id="Group">
            <path d="M0 60.5H266" id="Vector" stroke="var(--stroke-0, white)" strokeDasharray="3 3" strokeOpacity="0.1" />
            <path d="M0 30.5H266" id="Vector_2" stroke="var(--stroke-0, white)" strokeDasharray="3 3" strokeOpacity="0.1" />
            <path d="M0 0.5H266" id="Vector_3" stroke="var(--stroke-0, white)" strokeDasharray="3 3" strokeOpacity="0.1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[5%_1.61%_35%_12.86%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.19%] right-[-0.19%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267 60">
          <g id="Group">
            <path d="M33.75 0V60" id="Vector" stroke="var(--stroke-0, white)" strokeDasharray="3 3" strokeOpacity="0.1" />
            <path d="M100.25 0V60" id="Vector_2" stroke="var(--stroke-0, white)" strokeDasharray="3 3" strokeOpacity="0.1" />
            <path d="M133.5 0V60" id="Vector_3" stroke="var(--stroke-0, white)" strokeDasharray="3 3" strokeOpacity="0.1" />
            <path d="M166.75 0V60" id="Vector_4" stroke="var(--stroke-0, white)" strokeDasharray="3 3" strokeOpacity="0.1" />
            <path d="M200 0V60" id="Vector_5" stroke="var(--stroke-0, white)" strokeDasharray="3 3" strokeOpacity="0.1" />
            <path d="M266.5 0V60" id="Vector_6" stroke="var(--stroke-0, white)" strokeDasharray="3 3" strokeOpacity="0.1" />
            <path d="M0.5 0V60" id="Vector_7" stroke="var(--stroke-0, white)" strokeDasharray="3 3" strokeOpacity="0.1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[5%_1.61%_35%_12.86%]" data-name="Group">
      <Group3 />
      <Group5 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[70.1%_71.94%_17.9%_19.05%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[70.1%_71.94%_17.9%_19.05%] leading-[normal] not-italic text-[10px] text-[rgba(255,255,255,0.7)] text-center text-nowrap whitespace-pre">03:00</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[70.1%_50.56%_17.9%_40.43%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[70.1%_50.56%_17.9%_40.43%] leading-[normal] not-italic text-[10px] text-[rgba(255,255,255,0.7)] text-center text-nowrap whitespace-pre">09:00</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[70.1%_40.19%_17.9%_51.45%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[70.1%_40.19%_17.9%_51.45%] leading-[normal] not-italic text-[10px] text-[rgba(255,255,255,0.7)] text-center text-nowrap whitespace-pre">12:00</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[70.1%_29.5%_17.9%_62.14%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[70.1%_29.5%_17.9%_62.14%] leading-[normal] not-italic text-[10px] text-[rgba(255,255,255,0.7)] text-center text-nowrap whitespace-pre">15:00</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[70.1%_18.65%_17.9%_72.67%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[70.1%_18.65%_17.9%_72.67%] leading-[normal] not-italic text-[10px] text-[rgba(255,255,255,0.7)] text-center text-nowrap whitespace-pre">18:00</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[70.1%_0.08%_17.9%_90.92%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[70.1%_0.08%_17.9%_90.92%] leading-[normal] not-italic text-[10px] text-[rgba(255,255,255,0.7)] text-center text-nowrap whitespace-pre">24:00</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[70.1%_0.08%_17.9%_19.05%]" data-name="Group">
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[65%_0.08%_17.9%_12.86%]" data-name="Group">
      <div className="absolute inset-[65%_1.61%_35%_12.86%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 266 1">
            <path d="M0 0.5H266" id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <Group14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[58.55%_89.71%_29.45%_8.04%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[58.55%_89.71%_29.45%_8.04%] leading-[normal] not-italic text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap text-right whitespace-pre">3</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[28.55%_89.71%_59.45%_8.04%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[28.55%_89.71%_59.45%_8.04%] leading-[normal] not-italic text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap text-right whitespace-pre">5</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[1.05%_89.71%_86.95%_8.36%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[1.05%_89.71%_86.95%_8.36%] leading-[normal] not-italic text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap text-right whitespace-pre">7</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[1.05%_89.71%_29.45%_8.04%]" data-name="Group">
      <Group16 />
      <Group17 />
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[1.05%_87.14%_29.45%_-4.82%]" data-name="Group">
      <div className="absolute inset-[5%_87.14%_35%_12.86%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 60">
            <path d="M0.5 0V60" id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <Group19 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[28.55%_101.93%_59.45%_-4.82%] leading-[normal] not-italic text-[10px] text-[rgba(255,255,255,0.5)] text-nowrap whitespace-pre">M</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[17%_1.61%_35%_12.86%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.06%] right-[-0.12%] top-[-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267 50">
          <g id="Group">
            <path d={svgPaths.p11bffec0} fill="url(#paint0_linear_17_3571)" fillOpacity="0.6" id="recharts-area-:r7:" />
            <path d={svgPaths.pf1fce00} id="Vector" stroke="var(--stroke-0, #3777E4)" strokeWidth="3" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_3571" x1="0.151482" x2="0.151482" y1="1.5" y2="49.5">
              <stop offset="0.05" stopColor="#3777E4" stopOpacity="0.8" />
              <stop offset="0.95" stopColor="#3777E4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[13%_0.32%_49%_11.58%]" data-name="Group">
      <div className="absolute inset-[-2.63%_-0.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276 40">
          <g id="Group">
            <path d={svgPaths.p14b4900} fill="var(--fill-0, #3777E4)" fillOpacity="0.6" id="Vector" stroke="var(--stroke-0, #3777E4)" strokeWidth="2" />
            <path d={svgPaths.p2137de80} fill="var(--fill-0, #3777E4)" fillOpacity="0.6" id="Vector_2" stroke="var(--stroke-0, #3777E4)" strokeWidth="2" />
            <path d={svgPaths.pa518880} fill="var(--fill-0, #3777E4)" fillOpacity="0.6" id="Vector_3" stroke="var(--stroke-0, #3777E4)" strokeWidth="2" />
            <path d={svgPaths.p342ce280} fill="var(--fill-0, #3777E4)" fillOpacity="0.6" id="Vector_4" stroke="var(--stroke-0, #3777E4)" strokeWidth="2" />
            <path d={svgPaths.p1a16bf00} fill="var(--fill-0, #3777E4)" fillOpacity="0.6" id="Vector_5" stroke="var(--stroke-0, #3777E4)" strokeWidth="2" />
            <path d={svgPaths.p23bf2600} fill="var(--fill-0, #3777E4)" fillOpacity="0.6" id="Vector_6" stroke="var(--stroke-0, #3777E4)" strokeWidth="2" />
            <path d={svgPaths.p1cd35080} fill="var(--fill-0, #3777E4)" fillOpacity="0.6" id="Vector_7" stroke="var(--stroke-0, #3777E4)" strokeWidth="2" />
            <path d={svgPaths.p37782000} fill="var(--fill-0, #3777E4)" fillOpacity="0.6" id="Vector_8" stroke="var(--stroke-0, #3777E4)" strokeWidth="2" />
            <path d={svgPaths.p30f35e00} fill="var(--fill-0, #3777E4)" fillOpacity="0.6" id="Vector_9" stroke="var(--stroke-0, #3777E4)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[13%_0.32%_35%_11.58%]" data-name="Group">
      <Group21 />
      <Group22 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute h-[100px] left-0 overflow-clip top-0 w-[311px]" data-name="Icon">
      <Group6 />
      <Group15 />
      <Group20 />
      <Group23 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[165px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[165px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function WaveHeightChart() {
  return (
    <div className="absolute bg-[#112233] h-[160px] left-[24px] rounded-[16px] top-[535.31px] w-[345px]" data-name="WaveHeightChart">
      <div className="box-border content-stretch flex flex-col h-[160px] items-start overflow-clip p-px relative rounded-[inherit] w-[345px]">
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[10.234px] left-[322.07px] top-[308.86px] w-[37.734px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-[19.84px] text-[12px] text-center text-nowrap text-white top-0 tracking-[0.4px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        32 °C
      </p>
    </div>
  );
}

function Paragraph14() {
  return <div className="absolute h-[20px] left-[64.97px] top-[715.22px] w-[79.875px]" data-name="Paragraph" />;
}

function Group24() {
  return (
    <div className="absolute bottom-0 left-0 right-[5%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
        <g id="Group">
          <path d={svgPaths.pd64be80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[19px] relative w-[14.25px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19px] overflow-clip relative rounded-[inherit] w-[14.25px]">
        <Group24 />
      </div>
    </div>
  );
}

function Fab5() {
  return (
    <div className="absolute bg-[#112233] h-[74px] left-[199px] rounded-[16px] top-[700.69px] w-[170px]" data-name="Fab6">
      <div className="box-border content-stretch flex h-[74px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[170px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-[44.56px] text-[14px] text-nowrap text-white top-[32px] tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          18 C
        </p>
        <div className="absolute flex h-[19px] items-center justify-center left-[17.7px] top-[14.53px] w-[14.25px]">
          <div className="flex-none rotate-[180deg]">
            <Icon17 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[21px] left-[317.56px] top-[259.14px] w-[44px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-[21.78px] text-[11px] text-center text-nowrap text-white top-[-1px] tracking-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20:00
      </p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[20px] left-[249px] top-[718.69px] w-[108.156px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-[-5.96px] text-[14px] text-nowrap text-white top-[-6px] tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sea Temperature
      </p>
    </div>
  );
}

function Paragraph17() {
  return <div className="absolute h-[20px] left-[249px] top-[768.38px] w-[28.938px]" data-name="Paragraph" />;
}

function Paragraph18() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:ExtraBold',_sans-serif] font-extrabold leading-[40px] left-[71px] text-[#ecf3f7] text-[32px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Magnolia `}</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:ExtraBold',_sans-serif] font-extrabold leading-[40px] left-[71.06px] text-[#ecf3f7] text-[32px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Beach
      </p>
    </div>
  );
}

function Paragraph20() {
  return <div className="h-[40px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[120px] items-start left-[58.48px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.5)] top-[106.58px] w-[141.766px]" data-name="Container">
      <Paragraph18 />
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function Paragraph21() {
  return <div className="absolute h-[16px] left-[308.98px] top-[871.28px] w-[50.719px]" data-name="Paragraph" />;
}

function Paragraph22() {
  return (
    <div className="absolute h-[16px] left-[308.98px] top-[784.38px] w-[50.719px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] left-0 text-[11px] text-nowrap text-white top-[-1px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        See More
      </p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute box-border content-stretch flex h-[124.938px] items-start left-[211.74px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.6)] top-[86.72px] w-[111.266px]" data-name="Paragraph">
      <p className="basis-0 font-['Jost:Bold',_sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[77px] text-center text-white">32</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.641px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[41.641px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-0 text-[14px] text-nowrap text-white top-0 tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Hourly
        </p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[84.328px]" data-name="StateLayer9">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-[84.328px]">
        <Paragraph24 />
      </div>
    </div>
  );
}

function Segment() {
  return (
    <div className="absolute bg-[#3777e4] box-border content-stretch flex flex-col h-[32px] items-center justify-center left-0 overflow-clip rounded-bl-[24px] rounded-tl-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[8px] w-[84.328px]" data-name="Segment1">
      <StateLayer5 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[45.453px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-0 text-[#4a4459] text-[14px] text-nowrap top-0 tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Weekly
        </p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="h-[32px] opacity-60 relative shrink-0 w-[84.328px]" data-name="StateLayer10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-[84.328px]">
        <Paragraph25 />
      </div>
    </div>
  );
}

function Segment1() {
  return (
    <div className="absolute bg-[#e8def8] content-stretch flex flex-col h-[32px] items-center justify-center left-[86.33px] overflow-clip top-[8px] w-[84.328px]" data-name="Segment4">
      <StateLayer6 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.438px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[41.438px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-0 text-[#4a4459] text-[14px] text-nowrap top-0 tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          7 days
        </p>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="h-[32px] relative shrink-0 w-[84.328px]" data-name="StateLayer11">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center overflow-clip pl-0 pr-[0.016px] py-0 relative rounded-[inherit] w-[84.328px]">
        <Paragraph26 />
      </div>
    </div>
  );
}

function EndSegment() {
  return (
    <div className="absolute bg-[#e8def8] content-stretch flex flex-col h-[32px] items-center justify-center left-[172.66px] overflow-clip rounded-br-[16px] rounded-tr-[16px] top-[8px] w-[84.328px]" data-name="EndSegment">
      <StateLayer7 />
    </div>
  );
}

function ConnectedButtonGroup() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[48px] left-[69.44px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[189.48px] w-[257px]" data-name="ConnectedButtonGroup">
      <Segment />
      <Segment1 />
      <EndSegment />
    </div>
  );
}

function Frame6() {
  return <div className="absolute h-[41.5px] left-[24px] top-[535.31px] w-[44px]" data-name="Frame33833" />;
}

function Frame7() {
  return <div className="absolute h-[26px] left-[157px] top-[573.17px] w-[42px]" data-name="Frame33834" />;
}

function Group1() {
  return <div className="absolute h-[19px] left-[215.7px] top-[710.84px] w-[14.25px]" data-name="Group1" />;
}

function Group4() {
  return <div className="absolute left-[37.48px] size-[20px] top-[780.41px]" data-name="Group4" />;
}

function Component01SunnyColor() {
  return (
    <div className="absolute contents inset-[3.125%]" data-name="01_sunny_color">
      <div className="absolute inset-[21.875%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.563px] mask-size-[30px_30px]" data-name="å½¢ç¶" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p1725260} fill="url(#paint0_radial_17_3522)" id="Ã¥Â½Â¢Ã§Â¶" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(2.57813 2.10937) rotate(43.0203) scale(19.5537)" gradientUnits="userSpaceOnUse" id="paint0_radial_17_3522" r="1">
              <stop offset="0.193671" stopColor="#FFE475" />
              <stop offset="0.529275" stopColor="#FFB029" />
              <stop offset="0.780467" stopColor="#FF9100" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[3.125%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.938px] mask-size-[30px_30px]" data-name="å½¢ç¶_2" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <path d={svgPaths.p1769a300} fill="url(#paint0_linear_17_3498)" id="Ã¥Â½Â¢Ã§Â¶_2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_3498" x1="-0.175782" x2="28.3008" y1="-0.175781" y2="28.3008">
              <stop offset="0.166667" stopColor="#FFE475" />
              <stop offset="0.798611" stopColor="#FFBF29" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Component01SunnyColor />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Component01SunnyColor6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[57.53px] size-[30px] top-[275.5px]" data-name="Component01SunnyColor">
      <Icon18 />
    </div>
  );
}

function Component01SunnyColor7() {
  return (
    <div className="absolute contents inset-[3.125%]" data-name="01_sunny_color">
      <div className="absolute inset-[21.875%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.563px] mask-size-[30px_30px]" data-name="å½¢ç¶" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p1725260} fill="url(#paint0_radial_17_3522)" id="Ã¥Â½Â¢Ã§Â¶" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(2.57813 2.10937) rotate(43.0203) scale(19.5537)" gradientUnits="userSpaceOnUse" id="paint0_radial_17_3522" r="1">
              <stop offset="0.193671" stopColor="#FFE475" />
              <stop offset="0.529275" stopColor="#FFB029" />
              <stop offset="0.780467" stopColor="#FF9100" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[3.125%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.938px] mask-size-[30px_30px]" data-name="å½¢ç¶_2" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <path d={svgPaths.p1769a300} fill="url(#paint0_linear_17_3498)" id="Ã¥Â½Â¢Ã§Â¶_2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_3498" x1="-0.175782" x2="28.3008" y1="-0.175781" y2="28.3008">
              <stop offset="0.166667" stopColor="#FFE475" />
              <stop offset="0.798611" stopColor="#FFBF29" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Component01SunnyColor7 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup1 />
    </div>
  );
}

function Component01SunnyColor1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[197.78px] size-[30px] top-[277.27px]" data-name="Component01SunnyColor1">
      <Icon19 />
    </div>
  );
}

function Component01SunnyColor8() {
  return (
    <div className="absolute contents inset-[3.125%]" data-name="01_sunny_color">
      <div className="absolute inset-[21.875%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.563px] mask-size-[30px_30px]" data-name="å½¢ç¶" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p1725260} fill="url(#paint0_radial_17_3522)" id="Ã¥Â½Â¢Ã§Â¶" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(2.57813 2.10937) rotate(43.0203) scale(19.5537)" gradientUnits="userSpaceOnUse" id="paint0_radial_17_3522" r="1">
              <stop offset="0.193671" stopColor="#FFE475" />
              <stop offset="0.529275" stopColor="#FFB029" />
              <stop offset="0.780467" stopColor="#FF9100" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[3.125%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.938px] mask-size-[30px_30px]" data-name="å½¢ç¶_2" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <path d={svgPaths.p1769a300} fill="url(#paint0_linear_17_3498)" id="Ã¥Â½Â¢Ã§Â¶_2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_3498" x1="-0.175782" x2="28.3008" y1="-0.175781" y2="28.3008">
              <stop offset="0.166667" stopColor="#FFE475" />
              <stop offset="0.798611" stopColor="#FFBF29" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Component01SunnyColor8 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup2 />
    </div>
  );
}

function Component01SunnyColor2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[312.98px] size-[30px] top-[91.58px]" data-name="Component01SunnyColor2">
      <Icon20 />
    </div>
  );
}

function Component01SunnyColor9() {
  return (
    <div className="absolute contents inset-[3.125%]" data-name="01_sunny_color">
      <div className="absolute inset-[21.875%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.563px] mask-size-[30px_30px]" data-name="å½¢ç¶" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p1725260} fill="url(#paint0_radial_17_3522)" id="Ã¥Â½Â¢Ã§Â¶" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(2.57813 2.10937) rotate(43.0203) scale(19.5537)" gradientUnits="userSpaceOnUse" id="paint0_radial_17_3522" r="1">
              <stop offset="0.193671" stopColor="#FFE475" />
              <stop offset="0.529275" stopColor="#FFB029" />
              <stop offset="0.780467" stopColor="#FF9100" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[3.125%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.938px] mask-size-[30px_30px]" data-name="å½¢ç¶_2" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <path d={svgPaths.p1769a300} fill="url(#paint0_linear_17_3498)" id="Ã¥Â½Â¢Ã§Â¶_2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_3498" x1="-0.175782" x2="28.3008" y1="-0.175781" y2="28.3008">
              <stop offset="0.166667" stopColor="#FFE475" />
              <stop offset="0.798611" stopColor="#FFBF29" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Component01SunnyColor9 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup3 />
    </div>
  );
}

function Component01SunnyColor3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[136.53px] size-[30px] top-[275.5px]" data-name="Component01SunnyColor3">
      <Icon21 />
    </div>
  );
}

function Component01SunnyColor10() {
  return (
    <div className="absolute contents inset-[3.125%]" data-name="01_sunny_color">
      <div className="absolute inset-[21.875%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.563px] mask-size-[30px_30px]" data-name="å½¢ç¶" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p1725260} fill="url(#paint0_radial_17_3522)" id="Ã¥Â½Â¢Ã§Â¶" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(2.57813 2.10937) rotate(43.0203) scale(19.5537)" gradientUnits="userSpaceOnUse" id="paint0_radial_17_3522" r="1">
              <stop offset="0.193671" stopColor="#FFE475" />
              <stop offset="0.529275" stopColor="#FFB029" />
              <stop offset="0.780467" stopColor="#FF9100" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[3.125%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.938px] mask-size-[30px_30px]" data-name="å½¢ç¶_2" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <path d={svgPaths.p1769a300} fill="url(#paint0_linear_17_3498)" id="Ã¥Â½Â¢Ã§Â¶_2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_3498" x1="-0.175782" x2="28.3008" y1="-0.175781" y2="28.3008">
              <stop offset="0.166667" stopColor="#FFE475" />
              <stop offset="0.798611" stopColor="#FFBF29" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Component01SunnyColor10 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup4 />
    </div>
  );
}

function Component01SunnyColor4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[262.03px] size-[30px] top-[277.27px]" data-name="Component01SunnyColor4">
      <Icon22 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[20px] left-[68px] top-[836.28px] w-[67.156px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-[5px] text-[14px] text-nowrap text-white top-[-122.04px] tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wind Peak
      </p>
    </div>
  );
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

function Icon23() {
  return (
    <div className="h-[30px] overflow-clip relative w-full" data-name="Icon">
      <DirectionalArrowRight />
    </div>
  );
}

function DirectionalArrowRight1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[22.5px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.3)] size-[30px] top-[48.14px]" data-name="DirectionalArrowRight3">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] w-full">
          <Icon23 />
        </div>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[30.797px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.47%] left-0 right-[2.47%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 31">
          <path d={svgPaths.p1d6dae00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[30.797px] items-start left-[343.08px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.3)] top-[55.77px] w-[26.344px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function Component01SunnyColor11() {
  return (
    <div className="absolute contents inset-[3.125%]" data-name="01_sunny_color">
      <div className="absolute inset-[21.875%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.563px] mask-size-[30px_30px]" data-name="å½¢ç¶" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p1725260} fill="url(#paint0_radial_17_3522)" id="Ã¥Â½Â¢Ã§Â¶" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(2.57813 2.10937) rotate(43.0203) scale(19.5537)" gradientUnits="userSpaceOnUse" id="paint0_radial_17_3522" r="1">
              <stop offset="0.193671" stopColor="#FFE475" />
              <stop offset="0.529275" stopColor="#FFB029" />
              <stop offset="0.780467" stopColor="#FF9100" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[3.125%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.938px] mask-size-[30px_30px]" data-name="å½¢ç¶_2" style={{ maskImage: `url('${imgAC}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <path d={svgPaths.p1769a300} fill="url(#paint0_linear_17_3498)" id="Ã¥Â½Â¢Ã§Â¶_2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_3498" x1="-0.175782" x2="28.3008" y1="-0.175781" y2="28.3008">
              <stop offset="0.166667" stopColor="#FFE475" />
              <stop offset="0.798611" stopColor="#FFBF29" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Component01SunnyColor11 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup5 />
    </div>
  );
}

function Component01SunnyColor5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[325.59px] size-[30px] top-[277.27px]" data-name="Component01SunnyColor5">
      <Icon25 />
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.28%] top-[3.42%]" data-name="Vector">
      <div className="absolute bottom-[5.53%] left-0 right-[97.35%] top-[3.42%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p2ee61e00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_95.99%_19.29%_3.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path d={svgPaths.p2400d300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.59%_92.67%_7.69%_4.6%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p3e6082f0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.59%_90.72%_7.69%_7.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 12">
          <path d={svgPaths.p360a6d00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.46%_0.28%_29.07%_99.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <path d={svgPaths.p67bd080} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.38%_1.62%_15.38%_91.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
          <path d={svgPaths.p1f6b0e00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.69%_10.77%_1.28%_84.05%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
          <path d={svgPaths.p2e663100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[79.17%] right-[19.91%] top-[23.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
          <path d={svgPaths.p15802df0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[80.7%] right-[18.39%] top-[7.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 12">
          <path d={svgPaths.p1966ef00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[77.65%] right-[21.43%] top-1/2" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
          <path d={svgPaths.p3b8f8680} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[76.13%] right-[22.96%] top-[69.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p8920000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Vector />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13px] items-start left-[36.44px] top-[13.02px] w-[327.078px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function Frame() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="frame">
        <path d={svgPaths.p3cc3c580} fill="var(--fill-0, white)" id="Vector" />
        <path d="M24 0H0V24H24V0Z" fill="var(--fill-0, white)" id="Vector_2" opacity="0" />
        <path d={svgPaths.p20a4c200} fill="var(--fill-0, white)" id="Vector_3" />
      </g>
    </svg>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[245px] overflow-clip size-[24px] top-[936px]" data-name="Frame">
      <Frame />
    </div>
  );
}

function VuesaxOutlineFrame() {
  return (
    <div className="absolute left-[-235px] size-0 top-[-924px]" data-name="VuesaxOutlineFrame">
      <Frame1 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[6.82px] top-[40px] w-[28.359px]" data-name="Paragraph">
      <p className="capitalize font-['Montserrat:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">profile</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[72px] left-[235px] top-0 w-[44px]" data-name="Frame21">
      <VuesaxOutlineFrame />
      <Paragraph28 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[114.44px] top-[40px] w-[41.125px]" data-name="Frame24">
      <p className="capitalize font-['Montserrat:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">Favorites</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[16.67%_16.87%_16.67%_16.83%]" data-name="Group">
      <div className="absolute inset-[16.67%_16.87%_16.67%_16.83%]" data-name="Vector_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p9b12f00} fill="var(--fill-0, white)" id="Vector_2" />
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Group">
      <Group25 />
    </div>
  );
}

function FilterAlt() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="FilterAlt">
      <Group26 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="capitalize font-['Montserrat:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">Filter</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start left-[326px] pb-0 pt-[12px] px-[9px] top-0 w-[42px]" data-name="Frame23">
      <FilterAlt />
      <Paragraph29 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute contents inset-[12.5%_8.33%_16.67%_8.33%]" data-name="home">
      <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-3px] mask-size-[24px_24px]" data-name="Vector_2" style={{ maskImage: `url('${imgVector2}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
          <path d={svgPaths.p36ed3400} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Home />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup6 />
    </div>
  );
}

function Home1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9px] size-[24px] top-[12px]" data-name="Home">
      <Icon27 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[6.66px] top-[40px] w-[26.688px]" data-name="Paragraph">
      <p className="capitalize font-['Montserrat:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">Home</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[72px] left-[25px] overflow-clip top-0 w-[42px]" data-name="Frame20">
      <Home1 />
      <Paragraph30 />
    </div>
  );
}

function Favorite() {
  return (
    <div className="absolute contents inset-[12.5%_8.33%_11.04%_8.33%]" data-name="favorite">
      <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-3px] mask-size-[24px_24px]" data-name="Vector_2" style={{ maskImage: `url('${imgVector2}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p117c68d0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Favorite />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup7 />
    </div>
  );
}

function Favorite1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[123.5px] size-[24px] top-[15px]" data-name="Favorite">
      <Icon28 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[#173259] h-[72px] left-0 shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.3)] top-[778px] w-[393px]" data-name="Navbar">
      <Frame3 />
      <Frame5 />
      <Frame4 />
      <Frame2 />
      <Favorite1 />
    </div>
  );
}

function WeatherDetailScreen() {
  return (
    <div className="h-[850px] overflow-clip relative shrink-0 w-full" data-name="WeatherDetailScreen">
      <Container1 />
      <Container2 />
      <Container5 />
      <Fab />
      <Paragraph5 />
      <Paragraph6 />
      <Fab1 />
      <Fab2 />
      <Fab3 />
      <Paragraph7 />
      <Paragraph8 />
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
      <Fab4 />
      <Paragraph12 />
      <WaveHeightChart />
      <Paragraph13 />
      <Paragraph14 />
      <Fab5 />
      <Paragraph15 />
      <Paragraph16 />
      <Paragraph17 />
      <Container8 />
      <Paragraph21 />
      <Paragraph22 />
      <Paragraph23 />
      <ConnectedButtonGroup />
      <Frame6 />
      <Frame7 />
      <Group1 />
      <Group4 />
      <Component01SunnyColor6 />
      <Component01SunnyColor1 />
      <Component01SunnyColor2 />
      <Component01SunnyColor3 />
      <Component01SunnyColor4 />
      <Paragraph27 />
      <DirectionalArrowRight1 />
      <Container9 />
      <Component01SunnyColor5 />
      <Container10 />
      <Navbar />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#0c2b4e] items-start left-0 overflow-clip to-[#89a9b6] top-0 via-50% via-[rgba(54,83,134,0.525)] w-[393px]" data-name="App">
      <WeatherDetailScreen />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[15px] left-0 top-[-20000px] w-[6.391px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-neutral-950 text-nowrap top-0 tracking-[0.1172px] whitespace-pre">3</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[21px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 tracking-[-0.4395px] whitespace-pre">🏄</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[19.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-full">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[19.5px] left-0 text-[13px] text-nowrap text-white top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Surfing
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#3777e4] box-border content-stretch flex gap-[8px] h-[46px] items-center left-0 px-[17px] py-px rounded-[3.35544e+07px] top-0 w-[104.906px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#3777e4] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[21px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 tracking-[-0.4395px] whitespace-pre">⛵</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[19.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-full">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[19.5px] left-0 text-[13px] text-[rgba(255,255,255,0.8)] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sailing
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] h-[46px] items-center left-[119px] px-[17px] py-px rounded-[3.35544e+07px] top-0 w-[114px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[21px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 tracking-[-0.4395px] whitespace-pre">🏄‍♂️</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[19.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-full">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[19.5px] left-0 text-[13px] text-[rgba(255,255,255,0.8)] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Windsurfing
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] h-[46px] items-center left-[247.45px] px-[17px] py-px rounded-[3.35544e+07px] top-0 w-[133.047px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text5 />
      <Text6 />
    </div>
  );
}

function SportSelector() {
  return (
    <div className="absolute h-[50px] left-[24px] overflow-clip top-[351px] w-[566px]" data-name="SportSelector">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

export default function WeatherLocationWeather() {
  return (
    <div className="bg-white relative size-full" data-name="Weather - Location Weather">
      <App />
      <Text />
      <SportSelector />
    </div>
  );
}