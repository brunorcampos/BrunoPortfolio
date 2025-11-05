import svgPaths from "./svg-rg669bj6ig";
import imgCalendarView from "figma:asset/2472e02156cdaeb8fab86dbc37ae797a3d519539.png";

function Group() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.28%] top-[3.43%]" data-name="Group">
      <div className="absolute bottom-[5.53%] left-0 right-[97.35%] top-[3.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p6211400} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_95.99%_19.29%_3.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path d={svgPaths.p241488f2} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.59%_92.67%_7.69%_4.6%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p2e970a0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.59%_90.72%_7.69%_7.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 12">
          <path d={svgPaths.p239019f0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.46%_0.28%_29.07%_99.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <path d={svgPaths.p31c2a400} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.38%_1.62%_15.38%_91.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
          <path d={svgPaths.p14d46b00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.69%_10.76%_1.28%_84.05%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
          <path d={svgPaths.p161c2800} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[79.17%] right-[19.91%] top-[23.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
          <path d={svgPaths.p264a6500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[80.7%] right-[18.39%] top-[7.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 12">
          <path d={svgPaths.p106fa100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[77.65%] right-[21.43%] top-1/2" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
          <path d={svgPaths.p3334c100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[76.13%] right-[22.96%] top-[69.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p1924e600} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[12.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12.995px] items-start left-[33px] top-[17.99px] w-[326.992px]" data-name="StatusBar">
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20.982px] relative shrink-0 w-[80.986px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.982px] relative w-[80.986px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#49454f] text-[14px] text-nowrap top-[0.32px] tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          August 2025
        </p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[17.987px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p20171f80} fill="var(--fill-0, #49454F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[20.982px] relative shrink-0 w-[106.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.986px] h-[20.982px] items-center relative w-[106.958px]">
        <Text />
        <Icon1 />
      </div>
    </div>
  );
}

function CalendarView() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="CalendarView">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CalendarView">
          <path d={svgPaths.p1c601100} fill="var(--fill-0, #49454F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[3.8977e+07px] shrink-0 size-[39.985px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.018px] py-0 relative size-[39.985px]">
        <CalendarView />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f7d9300} id="Vector" stroke="var(--stroke-0, #49454F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99953" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[3.8977e+07px] shrink-0 size-[39.985px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.018px] py-0 relative size-[39.985px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[39.985px] relative shrink-0 w-[87.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.986px] h-[39.985px] items-start relative w-[87.955px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function CalendarView1() {
  return (
    <div className="absolute box-border content-stretch flex h-[65.141px] items-center justify-between left-0 pb-[1.162px] pt-0 px-[15.99px] top-0 w-[363.999px]" data-name="CalendarView">
      <div aria-hidden="true" className="absolute border-[#e7e0ec] border-[0px_0px_1.162px] border-solid inset-0 pointer-events-none" />
      <Container />
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24.012px] left-[17.57px] top-[11.98px] w-[10.001px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        S
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24.012px] left-[64.47px] top-[11.98px] w-[14.466px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        M
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24.012px] left-[115.82px] top-[11.98px] w-[10.055px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        T
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24.012px] left-[162.64px] top-[11.98px] w-[14.701px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        W
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[24.012px] left-[214.1px] top-[11.98px] w-[10.055px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        T
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[24.012px] left-[263.59px] top-[11.98px] w-[9.347px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        F
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[24.012px] left-[312.42px] top-[11.98px] w-[10.001px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        S
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[47.989px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container3() {
  return <div className="absolute h-[47.989px] left-0 top-0 w-[45.139px]" data-name="Container" />;
}

function Container4() {
  return <div className="absolute h-[47.989px] left-[49.13px] top-0 w-[45.157px]" data-name="Container" />;
}

function CalendarView2() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[9.492px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[9.492px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          1
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[98.28px] rounded-[3.8977e+07px] size-[39.985px] top-0" data-name="Button">
      <CalendarView2 />
    </div>
  );
}

function CalendarView3() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[9.492px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[9.492px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          2
        </p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[147.41px] rounded-[3.8977e+07px] size-[39.985px] top-0" data-name="Button">
      <CalendarView3 />
    </div>
  );
}

function CalendarView4() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[9.492px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[9.492px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          3
        </p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[196.56px] rounded-[3.8977e+07px] size-[39.985px] top-0" data-name="Button">
      <CalendarView4 />
    </div>
  );
}

function CalendarView5() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[9.492px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[9.492px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          4
        </p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[245.7px] rounded-[3.8977e+07px] size-[39.985px] top-0" data-name="Button">
      <CalendarView5 />
    </div>
  );
}

function CalendarView6() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[9.492px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[9.492px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#6750a4] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          5
        </p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[294.85px] p-[1.162px] rounded-[3.8977e+07px] size-[39.985px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#6750a4] border-[1.162px] border-solid inset-0 pointer-events-none rounded-[3.8977e+07px]" />
      <CalendarView6 />
    </div>
  );
}

function CalendarView7() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[9.492px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[9.492px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          6
        </p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[3.8977e+07px] size-[39.985px] top-[51.98px]" data-name="Button">
      <CalendarView7 />
    </div>
  );
}

function CalendarView8() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[9.492px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[9.492px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          7
        </p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[49.13px] rounded-[3.8977e+07px] size-[39.985px] top-[51.98px]" data-name="Button">
      <CalendarView8 />
    </div>
  );
}

function CalendarView9() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[9.492px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[9.492px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          8
        </p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[98.28px] rounded-[3.8977e+07px] size-[39.985px] top-[51.98px]" data-name="Button">
      <CalendarView9 />
    </div>
  );
}

function CalendarView10() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[9.492px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[9.492px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          9
        </p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[147.41px] rounded-[3.8977e+07px] size-[39.985px] top-[51.98px]" data-name="Button">
      <CalendarView10 />
    </div>
  );
}

function CalendarView11() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          10
        </p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[196.56px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[51.98px]" data-name="Button">
      <CalendarView11 />
    </div>
  );
}

function CalendarView12() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          11
        </p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[245.7px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[51.98px]" data-name="Button">
      <CalendarView12 />
    </div>
  );
}

function CalendarView13() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          12
        </p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[294.85px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[51.98px]" data-name="Button">
      <CalendarView13 />
    </div>
  );
}

function CalendarView14() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          13
        </p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[95.96px]" data-name="Button">
      <CalendarView14 />
    </div>
  );
}

function CalendarView15() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          14
        </p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[49.13px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[95.96px]" data-name="Button">
      <CalendarView15 />
    </div>
  );
}

function CalendarView16() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          15
        </p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[98.28px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[95.96px]" data-name="Button">
      <CalendarView16 />
    </div>
  );
}

function CalendarView17() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          16
        </p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[147.41px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[95.96px]" data-name="Button">
      <CalendarView17 />
    </div>
  );
}

function CalendarView18() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[19.203px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[19.203px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[16px] text-nowrap text-white top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          17
        </p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-[#ff6b35] box-border content-stretch flex items-center justify-center left-[196.56px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[95.96px]" data-name="Button">
      <CalendarView18 />
    </div>
  );
}

function CalendarView19() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          18
        </p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[245.7px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[95.96px]" data-name="Button">
      <CalendarView19 />
    </div>
  );
}

function CalendarView20() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          19
        </p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[294.85px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[95.96px]" data-name="Button">
      <CalendarView20 />
    </div>
  );
}

function CalendarView21() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          20
        </p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[139.94px]" data-name="Button">
      <CalendarView21 />
    </div>
  );
}

function CalendarView22() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          21
        </p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[49.13px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[139.94px]" data-name="Button">
      <CalendarView22 />
    </div>
  );
}

function CalendarView23() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          22
        </p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[98.28px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[139.94px]" data-name="Button">
      <CalendarView23 />
    </div>
  );
}

function CalendarView24() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          23
        </p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[147.41px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[139.94px]" data-name="Button">
      <CalendarView24 />
    </div>
  );
}

function CalendarView25() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          24
        </p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[196.56px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[139.94px]" data-name="Button">
      <CalendarView25 />
    </div>
  );
}

function CalendarView26() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[245.7px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[139.94px]" data-name="Button">
      <CalendarView26 />
    </div>
  );
}

function CalendarView27() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          26
        </p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[294.85px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[139.94px]" data-name="Button">
      <CalendarView27 />
    </div>
  );
}

function CalendarView28() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          27
        </p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[183.91px]" data-name="Button">
      <CalendarView28 />
    </div>
  );
}

function CalendarView29() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          28
        </p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[49.13px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[183.91px]" data-name="Button">
      <CalendarView29 />
    </div>
  );
}

function CalendarView30() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          29
        </p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[98.28px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[183.91px]" data-name="Button">
      <CalendarView30 />
    </div>
  );
}

function CalendarView31() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          30
        </p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[147.41px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[183.91px]" data-name="Button">
      <CalendarView31 />
    </div>
  );
}

function CalendarView32() {
  return (
    <div className="h-[24.012px] relative shrink-0 w-[18.985px]" data-name="CalendarView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.012px] relative w-[18.985px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          31
        </p>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[196.56px] pl-0 pr-[0.018px] py-0 rounded-[3.8977e+07px] size-[39.985px] top-[183.91px]" data-name="Button">
      <CalendarView32 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[223.899px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
      <Button32 />
    </div>
  );
}

function CalendarView33() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7.986px] items-start left-0 pb-0 pt-[11.997px] px-[11.997px] top-[65.14px] w-[363.999px]" data-name="CalendarView">
      <Container2 />
      <Container5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.983px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p848ea70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[39.966px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.986px] h-[39.966px] items-center justify-center relative w-full">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="absolute bg-[#ff6b35] box-border content-stretch flex flex-col gap-[10px] items-start left-[304.84px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[337.34px] w-[44px]" data-name="Button">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white h-[388px] left-[15px] overflow-clip rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[157px] w-[364px]" data-name="Container">
      <CalendarView1 />
      <CalendarView33 />
      <Button33 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-[248.674px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.994px] relative w-[248.674px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.15px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Oyster Festival
        </p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20.001px] relative shrink-0 w-[248.674px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.001px] relative w-[248.674px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] left-0 text-[#1d1b20] text-[14px] top-[-0.84px] tracking-[0.25px] w-[101px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          @ Bimini Beach
        </p>
      </div>
    </div>
  );
}

function CalendarView34() {
  return (
    <div className="basis-0 grow h-[79.987px] min-h-px min-w-px relative shrink-0" data-name="CalendarView">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.993px] h-[79.987px] items-start justify-center pl-[15.99px] pr-0 py-0 relative w-full">
          <Heading />
          <Paragraph7 />
        </div>
      </div>
    </div>
  );
}

function CalendarView35() {
  return (
    <div className="relative shrink-0 size-[79.987px]" data-name="CalendarView">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCalendarView} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[79.987px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f7f2fa] h-[79.987px] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[79.987px] items-start relative w-full">
          <CalendarView34 />
          <CalendarView35 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-[248.674px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.994px] relative w-[248.674px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#1d1b20] text-[16px] text-nowrap top-[0.32px] tracking-[0.15px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sail Race
        </p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20.001px] relative shrink-0 w-[248.674px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.001px] relative w-[248.674px]">
        <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] left-0 text-[#1d1b20] text-[14px] top-[-0.84px] tracking-[0.25px] w-[110px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          @ Pagoda Beach
        </p>
      </div>
    </div>
  );
}

function CalendarView36() {
  return (
    <div className="basis-0 grow h-[79.987px] min-h-px min-w-px relative shrink-0" data-name="CalendarView">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.993px] h-[79.987px] items-start justify-center pl-[15.99px] pr-0 py-0 relative w-full">
          <Heading1 />
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function CalendarView37() {
  return (
    <div className="relative shrink-0 size-[79.987px]" data-name="CalendarView">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCalendarView} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[79.987px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f7f2fa] h-[79.987px] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[79.987px] items-start relative w-full">
          <CalendarView36 />
          <CalendarView37 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[11.997px] h-[188.978px] items-start left-[-0.62px] overflow-clip px-[15.99px] py-0 top-[567.75px] w-[392.622px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function BottomNav() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="BottomNav">
      <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
          <path d={svgPaths.p3c183900} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[23.994px]">
        <BottomNav />
      </div>
    </div>
  );
}

function BottomNav1() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[31.018px]" data-name="BottomNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.992px] relative w-[31.018px]">
        <p className="absolute capitalize font-['Montserrat:Regular',_sans-serif] font-normal leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.16px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="basis-0 grow h-[42.979px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.993px] h-[42.979px] items-center justify-center relative w-full">
        <Container11 />
        <BottomNav1 />
      </div>
    </div>
  );
}

function BottomNav2() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="BottomNav">
      <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p9a47dc0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[23.994px]">
        <BottomNav2 />
      </div>
    </div>
  );
}

function BottomNav3() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[44.758px]" data-name="BottomNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.992px] relative w-[44.758px]">
        <p className="absolute capitalize font-['Montserrat:Regular',_sans-serif] font-normal leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.16px] whitespace-pre">Favorites</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="basis-0 grow h-[42.979px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.993px] h-[42.979px] items-center justify-center relative w-full">
        <Container12 />
        <BottomNav3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[26.394px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1.1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
            <path d="M1.09974 1.09974V5.49871" id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19948" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1.1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
            <path d="M1.09974 1.09974V5.49871" id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19948" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p189d5080} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19948" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1.1px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 3">
            <path d="M1.09974 1.09974H20.8951" id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19948" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[26.394px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[26.394px]">
        <Icon4 />
      </div>
    </div>
  );
}

function BottomNav4() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[45.611px]" data-name="BottomNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.992px] relative w-[45.611px]">
        <p className="absolute capitalize font-['Montserrat:Medium',_sans-serif] font-medium leading-[15px] left-0 text-[10px] text-nowrap text-white top-[0.16px] whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="basis-0 grow h-[42.979px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4.793px] h-[42.979px] items-center justify-center pb-[3.2px] pt-0 px-0 relative w-full">
        <Container13 />
        <BottomNav4 />
      </div>
    </div>
  );
}

function BottomNav5() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="BottomNav">
      <div className="absolute inset-[5.21%_28.38%_51.58%_28.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p17522f90} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.82%_17.75%_6.04%_19.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p1d7961f0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[23.994px]">
        <BottomNav5 />
      </div>
    </div>
  );
}

function BottomNav6() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[31.908px]" data-name="BottomNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.992px] relative w-[31.908px]">
        <p className="absolute capitalize font-['Montserrat:Regular',_sans-serif] font-normal leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.16px] whitespace-pre">Profile</p>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="basis-0 grow h-[42.979px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.993px] h-[42.979px] items-center justify-center relative w-full">
        <Container14 />
        <BottomNav6 />
      </div>
    </div>
  );
}

function BottomNav7() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="BottomNav">
      <div className="absolute inset-[16.67%_16.87%_16.67%_16.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p9459500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[23.994px]">
        <BottomNav7 />
      </div>
    </div>
  );
}

function BottomNav8() {
  return (
    <div className="h-[14.992px] relative shrink-0 w-[25.537px]" data-name="BottomNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.992px] relative w-[25.537px]">
        <p className="absolute capitalize font-['Montserrat:Regular',_sans-serif] font-normal leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.16px] whitespace-pre">Filter</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="basis-0 grow h-[42.979px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.993px] h-[42.979px] items-center justify-center relative w-full">
        <Container15 />
        <BottomNav8 />
      </div>
    </div>
  );
}

function BottomNav9() {
  return (
    <div className="absolute bg-[#173259] box-border content-stretch flex h-[71.983px] items-center justify-between left-0 px-[15.99px] py-0 top-[779.47px] w-[392.622px]" data-name="BottomNav">
      <Button34 />
      <Button35 />
      <Button36 />
      <Button37 />
      <Button38 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[29.984px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Icon">
          <path d={svgPaths.p28156530} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button39() {
  return (
    <div className="relative shrink-0 size-[29.984px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[29.984px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[26.989px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.47%] left-0 right-[2.47%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <path d={svgPaths.p3dfcea00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="relative shrink-0 size-[26.989px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[26.989px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute box-border content-stretch flex h-[29.984px] items-center justify-between left-0 px-[23.994px] py-0 top-[73px] w-[392.622px]" data-name="Container">
      <Button39 />
      <Button40 />
    </div>
  );
}

export default function CommunityHubCalendarOfEvents() {
  return (
    <div className="bg-gradient-to-b from-[#0c2b4e] from-[50.481%] relative size-full to-[#365386]" data-name="Community Hub - Calendar of Events">
      <StatusBar />
      <Container7 />
      <Container10 />
      <BottomNav9 />
      <Container16 />
    </div>
  );
}