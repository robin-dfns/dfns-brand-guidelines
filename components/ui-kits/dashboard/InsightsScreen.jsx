const DS3 = window.DFNSDesignSystem_12f785;
const { InfoTooltip, Badge } = DS3;

function StatCell({ label, value }) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:2,padding:'14px 20px',borderLeft:'1px solid #e1e4ec',alignSelf:'stretch',justifyContent:'center'}}>
      <span style={{fontFamily:'var(--font-sans)',fontWeight:400,fontSize:12,lineHeight:'16px',color:'#575c7b',whiteSpace:'nowrap'}}>{label}</span>
      <span style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:18,lineHeight:1,color:'#170c33'}}>{value}</span>
    </div>
  );
}

function StatCard({ title, tooltip, cells, chart = true }) {
  return (
    <div style={{borderRadius:12,background:'#fff',boxShadow:'inset 0 0 0 1px #e1e4ec',display:'flex',flexDirection:'column',gap:8,minWidth:0,flex:1}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid #e1e4ec',height:68,boxSizing:'border-box'}}>
        <div style={{display:'flex',gap:4,alignItems:'center',padding:'24px'}}>
          <span style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:14,lineHeight:'20px',color:'#170c33'}}>{title}</span>
          <InfoTooltip text={tooltip} showing="bottom" size={14}/>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignSelf:'stretch'}}>
          {cells.map(([l,v]) => <StatCell key={l} label={l} value={v}/>) }
        </div>
      </div>
      {chart && (
        <div style={{display:'flex',flexDirection:'column',gap:8,padding:'0 12px 24px',alignItems:'center'}}>
          <img src="../../assets/img/chart-wallets.png" alt="" style={{width:'100%',height:158,objectFit:'cover',objectPosition:'bottom'}}/>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignSelf:'stretch',padding:'0 8px'}}>
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>(<span key={d} style={{fontFamily:'var(--font-mono)',fontWeight:400,fontSize:11,color:'#575c7b'}}>{d}</span>))}
          </div>
        </div>
      )}
    </div>
  );
}

function InsightsScreen() {
  return (
    <React.Fragment>
      <div style={{display:'flex',flexDirection:'column',gap:6}}>
        <span style={{fontFamily:'var(--font-sans)',fontWeight:450,fontSize:22,letterSpacing:'-0.4px',color:'#363a5b'}}>Insights</span>
        <span style={{fontFamily:'var(--font-sans)',fontWeight:400,fontSize:14,lineHeight:'20px',color:'#575c7b'}}>Activity across your organization for the last 7 days.</span>
      </div>
      <div style={{display:'flex',flexDirection:'row',gap:16}}>
        <StatCard title="Wallets" tooltip="Wallets created in this org" cells={[['Custodial','866'],['Delegated','534'],['Total Wallets','1.4k']]}/>
        <StatCard title="Transfers" tooltip="On-chain transfers" cells={[['Pending','12'],['Failed','3'],['Total','9.2k']]}/>
      </div>
      <div style={{display:'flex',flexDirection:'row',gap:16}}>
        <StatCard title="Policy Approvals" tooltip="Pending approvals" chart={false} cells={[['Waiting','4'],['Approved','231']]}/>
        <StatCard title="API Credentials" tooltip="Active service accounts" chart={false} cells={[['Active','18'],['Expired','2']]}/>
      </div>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <Badge color="green">All systems operational</Badge>
        <span style={{fontFamily:'var(--font-mono)',fontSize:12,color:'#575c7b'}}>updated 2 min ago</span>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { InsightsScreen });
