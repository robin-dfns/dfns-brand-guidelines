const DS2 = window.DFNSDesignSystem_12f785;
const { Button } = DS2;

function DataBlockCard({ value, sub, heading, para, cta, link }) {
  return (
    <div style={{flex:1,borderRadius:18,background:'#e0e3f0',display:'flex',flexDirection:'column',minWidth:0}}>
      <div style={{display:'flex',flexDirection:'column',gap:3,padding:24,paddingBottom:19}}>
        <span style={{fontFamily:'var(--font-sans)',fontWeight:300,fontSize:24,lineHeight:1,color:'#442599',whiteSpace:'nowrap'}}>{value}</span>
        <span style={{fontFamily:'var(--font-sans)',fontWeight:450,fontSize:14,lineHeight:'20px',color:'#363a5b'}}>{sub}</span>
      </div>
      <div style={{padding:'1px 24px 24px'}}>
        <div style={{borderRadius:12,background:'#fcfcfd',display:'flex',flexDirection:'column',gap:8,padding:'19px 20px',justifyContent:'center'}}>
          <div style={{display:'flex',flexDirection:'column',gap:16,paddingBottom:8}}>
            <span style={{fontFamily:'"Helvetica Neue",var(--font-sans)',fontWeight:400,fontSize:32,lineHeight:1.05,letterSpacing:'-1px',color:'#26251e'}}>{heading}</span>
            <span style={{fontFamily:'var(--font-sans)',fontWeight:400,fontSize:16,lineHeight:'25px',letterSpacing:'-0.01em',color:'#575c7b'}}>{para}</span>
          </div>
          <div style={{display:'flex',flexDirection:'row',gap:16,alignItems:'center'}}>
            <button type="button" style={{display:'inline-flex',gap:6,padding:10,alignItems:'center',height:40,borderRadius:12,border:'none',background:'#2d1866',cursor:'pointer',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:15,lineHeight:'20px',color:'#f0f1f4',whiteSpace:'nowrap'}}>{cta} ›</button>
            <button type="button" style={{display:'inline-flex',padding:'10px 12px',alignItems:'center',height:40,borderRadius:12,border:'none',background:'rgba(84,97,200,0.1)',cursor:'pointer',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:15,lineHeight:'20px',color:'#442599',whiteSpace:'nowrap'}}>{link}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WalletSquircle() {
  const d = "M 24 12 C 24 16.093 23.721 20.711 22.221 22.216 C 20.721 23.72 15.349 24 12.035 24 C 8.721 24 3.349 23.72 1.849 22.216 C 0.349 20.711 0 16.093 0 12 C 0 7.907 0.349 3.289 1.849 1.784 C 3.349 0.28 8.721 0 12.035 0 C 15.349 0 20.721 0.28 22.221 1.784 C 23.721 3.289 24 7.907 24 12 Z";
  return (
    <span style={{position:'relative',width:24,height:24,display:'inline-block'}}>
      <svg width="24" height="24" viewBox="0 0 24 24" style={{position:'absolute',left:0,top:2,opacity:0.24}}><path d={d} fill="#aa8bff"/></svg>
      <svg width="24" height="24" viewBox="0 0 24 24" style={{position:'absolute',left:0,top:0}}>
        <defs><linearGradient id="wsq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5a31cc"/><stop offset="1" stopColor="#442599"/></linearGradient></defs>
        <path d={d} fill="url(#wsq)"/>
      </svg>
    </span>
  );
}

function Tab({ label, active }) {
  return active
    ? <Button variant="primary" style={{height:40}}>{label}</Button>
    : <Button variant="secondary" style={{height:40}}>{label}</Button>;
}

function HomeScreen() {
  return (
    <React.Fragment>
      <div style={{display:'flex',flexDirection:'column',gap:30}}>
        <div style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
          <Tab label="Overview" active/><Tab label="Wallets"/><Tab label="Transfers"/><Tab label="Policies"/>
        </div>
        <div style={{borderRadius:12,background:'#f0f1f4',boxShadow:'inset 0 0 0 1px rgba(121,111,255,0.3), 0 10px 20px 0 rgba(0,0,0,0.1)',display:'flex',flexDirection:'column',gap:24,padding:'24px 24px 40px'}}>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <span style={{fontFamily:'var(--font-sans)',fontWeight:450,fontSize:14,lineHeight:'20px',color:'#575c7b'}}>Portfolio value</span>
              <span style={{fontFamily:'var(--font-sans)',fontWeight:300,fontSize:48,lineHeight:1,color:'#442599'}}>210,203<span style={{fontSize:24}}>USD</span></span>
              <span style={{fontFamily:'var(--font-sans)',fontWeight:450,fontSize:14,lineHeight:'20px',color:'#056f15'}}>+1,234USD (+1.34%) in the last month</span>
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,alignItems:'center'}}>
            <img src="../../assets/img/chart-wallets.png" alt="Portfolio chart" style={{width:'100%',maxHeight:260,objectFit:'cover',objectPosition:'bottom'}}/>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignSelf:'stretch',padding:'0 6px'}}>
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>(<span key={d} style={{fontFamily:'var(--font-mono)',fontWeight:400,fontSize:12,color:'#575c7b'}}>{d}</span>))}
            </div>
          </div>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'row',gap:10,alignItems:'stretch'}}>
        <DataBlockCard value="Get to know Dfns" sub="Complete the onboarding to learn how to use Dfns" heading="New Policy" para="Creating a Policy with an admin Quorum will help protect your organization & assets." cta="Create Policy" link="Read the Guide"/>
        <DataBlockCard value="Explore Advanced Features" sub="Delve into the advanced functionalities to maximize your Dfns" heading="Advanced Features" para="Tailor policies to fit your organization's specific needs and requirements." cta="Customize Now" link="View Customization Guide"/>
        <DataBlockCard value="Get Support" sub="Reach out for assistance or guidance whenever you need help" heading="Support Channels" para="Access various support channels including chat, email, and community forums." cta="Contact Support" link="Visit our Support Page"/>
      </div>
      <div style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
        <WalletSquircle/>
        <span style={{fontFamily:'var(--font-sans)',fontWeight:450,fontSize:22,lineHeight:1,letterSpacing:'-0.4px',color:'#363a5b'}}>Wallets Service</span>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { HomeScreen });
