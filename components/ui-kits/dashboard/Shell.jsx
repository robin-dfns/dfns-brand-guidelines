const DS = window.DFNSDesignSystem_12f785;
const { Icon, SelectorBig } = DS;

function TopBar() {
  return (
    <div style={{position:'relative',height:64,borderRadius:8,background:'#e0e3f0',display:'flex',flexDirection:'row',padding:'12px 16px',justifyContent:'space-between',alignItems:'center',flexShrink:0}}>
      <img src="../../assets/logotype-2026.svg" alt="Dfns" style={{height:24}}/>
      <div style={{position:'relative',width:749,height:40,flexShrink:0}}>
        <div style={{position:'absolute',left:-24,top:-1,width:798,height:42,borderRadius:12,background:'linear-gradient(7.839deg,rgba(163,227,251,0.6) -1.36%,rgba(238,145,249,0.6) 20.55%,rgba(255,169,146,0.6) 40.77%,rgba(255,255,255,0) 68.41%)',filter:'blur(6px)'}}/>
        <div style={{position:'relative',height:40,borderRadius:12,background:'#fff',display:'flex',flexDirection:'row',padding:'8px 16px',justifyContent:'space-between',alignItems:'center',boxSizing:'border-box',cursor:'text'}}>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <Icon name="HeroiconsOutlineMagnifyingGlass" size={16} style={{color:'#5123ce'}}/>
            <span style={{fontFamily:'var(--font-sans)',fontWeight:450,fontSize:16,lineHeight:'20px',color:'#5123ce'}}>Search on Dfns</span>
          </div>
          <Icon name="HeroiconsOutlineCubeTransparent" size={18} style={{color:'#5123ce'}}/>
        </div>
      </div>
      <div style={{display:'flex',gap:16,alignItems:'center'}}>
        <Icon name="HeroiconsMiniBellAlert" size={20} style={{color:'#575b7b'}}/>
        <span style={{fontFamily:'var(--font-sans)',fontWeight:400,fontSize:16,color:'#363a5b'}}>Thibault@dfns.co</span>
        <img src="../../assets/img/avatar.png" alt="" style={{width:40,height:40,borderRadius:1000,objectFit:'cover'}}/>
      </div>
    </div>
  );
}

const NAV = [
  ['Dashboard','HeroiconsSolidComputerDesktop'],
  ['Transfers','HeroiconsMiniArrowsRightLeft'],
  ['Wallets','HeroiconsSolidWallet'],
  ['Operations','HeroiconsSolidCreditCard'],
  ['Org','HeroiconsSolidBuildingLibrary'],
  ['Insights','HeroiconsSolidChartBarSquare'],
];

function NavItem({ label, icon, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'flex',flexDirection:'row',gap:8,padding:'8px 16px',alignItems:'center',borderRadius:6,cursor:'pointer',background:active?'#f0f1f4':hover?'rgba(240,241,244,0.5)':'transparent',margin:'0 12px'}}>
      <Icon name={icon} size={20} style={{color:'#363a5b'}}/>
      <span style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:14,lineHeight:1,color:'#1e202e'}}>{label}</span>
    </div>
  );
}

function Sidebar({ current, onNavigate }) {
  return (
    <div style={{width:256,display:'flex',flexDirection:'column',gap:10,alignSelf:'stretch',flexShrink:0}}>
      <div style={{borderRadius:8,background:'#e0e3f0',display:'flex',flexDirection:'column',padding:'12px 0',flexGrow:1,gap:12}}>
        <div style={{padding:'0 12px'}}>
          <SelectorBig label="Stripe Treasury" icon={<img src="../../assets/img/org-logo.png" alt="" style={{width:28,height:28,borderRadius:4,background:'#685cfe',objectFit:'contain'}}/>} style={{width:'100%',background:'#f0f1f4'}}/>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:4}}>
          {NAV.map(([label,icon]) => <NavItem key={label} label={label} icon={icon} active={current===label} onClick={()=>onNavigate(label)}/>) }
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'row',gap:8,height:36,padding:'8px 16px',alignItems:'center',borderRadius:6,background:'#2d1866',cursor:'pointer',boxSizing:'border-box'}}>
        <Icon name="HeroiconsMiniCommandLine" size={16} style={{color:'#e0e3f0'}}/>
        <span style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:14,lineHeight:1,color:'#e0e3f0'}}>Developers</span>
      </div>
    </div>
  );
}

function Shell({ current, onNavigate, children }) {
  return (
    <div style={{width:1920,minHeight:1080,background:'#f0f1f4',display:'flex',flexDirection:'column',gap:12,padding:12,boxSizing:'border-box',fontFamily:'var(--font-sans)'}}>
      <TopBar/>
      <div style={{display:'flex',flexDirection:'row',gap:12,alignItems:'stretch',flexGrow:1}}>
        <Sidebar current={current} onNavigate={onNavigate}/>
        <div style={{flexGrow:1,borderRadius:8,background:'#fcfcfd',display:'flex',flexDirection:'column',gap:32,padding:24,boxSizing:'border-box'}}>{children}</div>
      </div>
    </div>
  );
}

Object.assign(window, { Shell });
