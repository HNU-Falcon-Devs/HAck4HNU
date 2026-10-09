import { useMemo, useState, type ReactNode } from "react";

type IconName =
  | "activity"
  | "announcement"
  | "arrow"
  | "award"
  | "bolt"
  | "check"
  | "chevron"
  | "close"
  | "edit"
  | "eye"
  | "flag"
  | "grid"
  | "help"
  | "history"
  | "logout"
  | "menu"
  | "plus"
  | "rules"
  | "score"
  | "search"
  | "settings"
  | "shield"
  | "team"
  | "trash"
  | "users";

const iconPaths: Record<IconName, ReactNode> = {
  activity: <><path d="M3 12h4l2.2-5 4.1 10 2.1-5H21" /></>,
  announcement: <><path d="M3 11v2a2 2 0 0 0 2 2h2l3 4h2l-1.5-4L19 12V6L7 10H5a2 2 0 0 0-2 1Z" /><path d="M19 8a3 3 0 0 1 0 6" /></>,
  arrow: <><path d="m9 18 6-6-6-6" /></>,
  award: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-2 4.5 2-1-9" /></>,
  bolt: <><path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  chevron: <><path d="m8 10 4 4 4-4" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
  eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
  flag: <><path d="M5 21V4" /><path d="M5 5h11l-2 3 2 3H5" /></>,
  grid: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.7 9a2.5 2.5 0 1 1 3.1 2.4c-.8.3-.8 1.1-.8 1.6M12 17h.01" /></>,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></>,
  logout: <><path d="M9 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4M16 17l5-5-5-5M21 12H9" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  rules: <><path d="M6 3h9l3 3v15H6Z" /><path d="M14 3v4h4M9 11h6M9 15h6" /></>,
  score: <><path d="M4 19V9M10 19V5M16 19v-7M22 19V8" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
  shield: <><path d="M12 3 4 6v5c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6Z" /><path d="m9 12 2 2 4-5" /></>,
  team: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20v-2a5 5 0 0 1 10 0v2M14 15a4 4 0 0 1 7 3v2" /></>,
  trash: <><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6" /></>,
  users: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20v-2a5 5 0 0 1 10 0v2M14 15a4 4 0 0 1 7 3v2" /></>,
};

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{iconPaths[name]}</svg>;
}

type Team = {
  id: number;
  name: string;
  code: string;
  members: { name: string; role: string; score: number; initials: string }[];
  total: number;
  status: "Active" | "Disabled";
  username: string;
  lastActive: string;
};

const initialTeams: Team[] = [
  { id: 1, name: "Binary Bisons", code: "BB", members: [{ name: "Angela Flores", role: "Team Captain", score: 320, initials: "AF" }, { name: "John Mercado", role: "Member", score: 250, initials: "JM" }, { name: "Mika Reyes", role: "Member", score: 210, initials: "MR" }, { name: "Paolo Lim", role: "Member", score: 200, initials: "PL" }], total: 980, status: "Active", username: "hnu_binarybisons", lastActive: "2 min ago" },
  { id: 2, name: "Cipher Saints", code: "CS", members: [{ name: "Sofia Ramos", role: "Team Captain", score: 280, initials: "SR" }, { name: "Elijah Cruz", role: "Member", score: 240, initials: "EC" }, { name: "Noah Uy", role: "Member", score: 210, initials: "NU" }, { name: "Bea Tan", role: "Member", score: 170, initials: "BT" }], total: 900, status: "Active", username: "hnu_ciphersaints", lastActive: "8 min ago" },
  { id: 3, name: "Root Raiders", code: "RR", members: [{ name: "Luis Dizon", role: "Team Captain", score: 260, initials: "LD" }, { name: "Ana Yu", role: "Member", score: 210, initials: "AY" }, { name: "Kyle Ong", role: "Member", score: 180, initials: "KO" }], total: 820, status: "Active", username: "hnu_rootraiders", lastActive: "15 min ago" },
  { id: 4, name: "Packet Patrol", code: "PP", members: [{ name: "Theo Garcia", role: "Team Captain", score: 250, initials: "TG" }, { name: "Iris Co", role: "Member", score: 200, initials: "IC" }, { name: "Mark Go", role: "Member", score: 180, initials: "MG" }], total: 780, status: "Active", username: "hnu_packetpatrol", lastActive: "22 min ago" },
  { id: 5, name: "Null Pointers", code: "NP", members: [{ name: "Dani Santos", role: "Team Captain", score: 230, initials: "DS" }, { name: "Gab Valdez", role: "Member", score: 190, initials: "GV" }, { name: "Lei Chua", role: "Member", score: 150, initials: "LC" }], total: 720, status: "Active", username: "hnu_nullpointers", lastActive: "35 min ago" },
  { id: 6, name: "Firewall Falcons", code: "FF", members: [{ name: "Eric Sy", role: "Team Captain", score: 220, initials: "ES" }, { name: "Joy Chan", role: "Member", score: 180, initials: "JC" }, { name: "Renzo Lee", role: "Member", score: 160, initials: "RL" }], total: 680, status: "Active", username: "hnu_firewallfalcons", lastActive: "1 hr ago" },
  { id: 7, name: "Crypto Knights", code: "CK", members: [{ name: "Nico Yap", role: "Team Captain", score: 210, initials: "NY" }, { name: "May Agustin", role: "Member", score: 170, initials: "MA" }, { name: "Sam Po", role: "Member", score: 150, initials: "SP" }], total: 640, status: "Active", username: "hnu_cryptoknights", lastActive: "2 hrs ago" },
  { id: 8, name: "Stack Smashers", code: "SS", members: [{ name: "Ria Velasco", role: "Team Captain", score: 200, initials: "RV" }, { name: "Ken Lao", role: "Member", score: 160, initials: "KL" }, { name: "Ian Cua", role: "Member", score: 130, initials: "IC" }], total: 590, status: "Active", username: "hnu_stacksmashers", lastActive: "3 hrs ago" },
  { id: 9, name: "Codebreakers", code: "CB", members: [{ name: "Zoe Palma", role: "Team Captain", score: 180, initials: "ZP" }, { name: "Matt Dee", role: "Member", score: 150, initials: "MD" }, { name: "Aya Ong", role: "Member", score: 120, initials: "AO" }], total: 540, status: "Disabled", username: "hnu_codebreakers", lastActive: "Yesterday" },
  { id: 10, name: "Byte Force", code: "BF", members: [{ name: "Jay Castro", role: "Team Captain", score: 170, initials: "JC" }, { name: "Kim Tan", role: "Member", score: 130, initials: "KT" }, { name: "Max Lim", role: "Member", score: 100, initials: "ML" }], total: 480, status: "Active", username: "hnu_byteforce", lastActive: "Yesterday" },
];

const announcements = [
  { title: "Welcome to HNU CTF 2025", body: "The competition portal is now open. Review the rules and verify your team roster.", time: "Today, 9:00 AM", tag: "Important" },
  { title: "Competition schedule updated", body: "Opening ceremonies begin at 8:30 AM in the COECS AVR.", time: "Yesterday, 4:20 PM", tag: "Schedule" },
  { title: "Account security reminder", body: "Please change your initial password after your first login and never share credentials.", time: "May 18, 2025", tag: "Security" },
];

const adminNav: { label: string; icon: IconName }[] = [
  { label: "Overview", icon: "grid" }, { label: "Teams", icon: "team" }, { label: "Members", icon: "users" },
  { label: "Scores", icon: "score" }, { label: "Announcements", icon: "announcement" }, { label: "Challenges", icon: "flag" },
  { label: "Rules", icon: "rules" }, { label: "Activity Logs", icon: "activity" }, { label: "Settings", icon: "settings" },
];

const Button = ({ children, variant = "primary", onClick, disabled = false, type = "button", className = "" }: { children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "danger"; onClick?: () => void; disabled?: boolean; type?: "button" | "submit"; className?: string }) => (
  <button type={type} onClick={onClick} disabled={disabled} className={`button button-${variant} ${className}`}>{children}</button>
);

function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "green" | "purple" | "amber" | "neutral" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

function Avatar({ initials, purple = false }: { initials: string; purple?: boolean }) {
  return <span className={`avatar ${purple ? "avatar-purple" : ""}`}>{initials}</span>;
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function PageTitle({ eyebrow, title, detail, action }: { eyebrow?: string; title: string; detail?: string; action?: ReactNode }) {
  return <div className="page-heading"><div><div className="eyebrow">{eyebrow}</div><div className="page-title">{title}</div>{detail && <div className="page-detail">{detail}</div>}</div>{action}</div>;
}

function StatCard({ label, value, detail, icon, accent = "navy" }: { label: string; value: string; detail: string; icon: IconName; accent?: "navy" | "purple" | "green" | "amber" }) {
  return <Card className="stat-card"><div className={`stat-icon stat-${accent}`}><Icon name={icon} /></div><div><div className="stat-label">{label}</div><div className="stat-value">{value}</div><div className="stat-detail">{detail}</div></div></Card>;
}

function TeamMark({ team, size = "normal" }: { team: Team; size?: "normal" | "large" }) {
  return <div className={`team-mark team-mark-${size}`}>{team.code}</div>;
}

function Modal({ title, children, onClose }: { title: string; children: ReactNode; onClose: () => void }) {
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal" onMouseDown={(event) => event.stopPropagation()}><div className="modal-head"><div className="modal-title">{title}</div><button className="icon-button" onClick={onClose} aria-label="Close"><Icon name="close" /></button></div>{children}</div></div>;
}

function Sidebar({ active, setActive, role, open, close }: { active: string; setActive: (value: string) => void; role: "admin" | "team"; open: boolean; close: () => void }) {
  const teamItems = [{ label: "Dashboard", icon: "grid" as IconName }, { label: "My Team", icon: "team" as IconName }, { label: "Score History", icon: "history" as IconName }, { label: "Announcements", icon: "announcement" as IconName }, { label: "Challenges", icon: "flag" as IconName }, { label: "Rules", icon: "rules" as IconName }];
  const items = role === "admin" ? adminNav : teamItems;
  return <>
    {open && <div className="sidebar-scrim" onClick={close} />}
    <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <div className="brand"><div className="brand-seal"><Icon name="shield" /></div><div><div className="brand-name">HNU CTF</div><div className="brand-sub">COECS · 2025</div></div></div>
      <div className="nav-caption">{role === "admin" ? "ADMINISTRATION" : "TEAM PORTAL"}</div>
      <nav className="nav-list">{items.map((item) => <button key={item.label} className={`nav-item ${active === item.label ? "nav-active" : ""}`} onClick={() => { setActive(item.label); close(); }}><Icon name={item.icon} /><span>{item.label}</span>{active === item.label && <span className="nav-dot" />}</button>)}</nav>
      <div className="sidebar-bottom">
        <div className="support-box"><div className="support-icon"><Icon name="help" /></div><div className="support-title">Need assistance?</div><div className="support-copy">Contact the CTF organizing committee.</div><button>Get support <Icon name="arrow" className="size-4" /></button></div>
        <button className="logout-button"><Icon name="logout" /><span>Logout</span></button>
      </div>
    </aside>
  </>;
}

function Topbar({ role, setRole, selectedTeam, menu }: { role: "admin" | "team"; setRole: (role: "admin" | "team") => void; selectedTeam: Team; menu: () => void }) {
  return <header className="topbar">
    <button className="mobile-menu" onClick={menu} aria-label="Open menu"><Icon name="menu" /></button>
    <div className="top-actions">
      <div className="role-switch"><button className={role === "admin" ? "selected" : ""} onClick={() => setRole("admin")}>Admin</button><button className={role === "team" ? "selected" : ""} onClick={() => setRole("team")}>Team view</button></div>
      <button className="notification-button" aria-label="Notifications"><Icon name="announcement" /><span /></button>
      <div className="profile"><Avatar initials={role === "admin" ? "AD" : selectedTeam.code} purple={role === "team"} /><div className="profile-copy"><div>{role === "admin" ? "CTF Administrator" : selectedTeam.name}</div><span>{role === "admin" ? "Super Admin" : "Team account"}</span></div><Icon name="chevron" className="size-4 text-slate-400" /></div>
    </div>
  </header>;
}

function Overview({ teams, goTo }: { teams: Team[]; goTo: (page: string) => void }) {
  const memberCount = teams.reduce((sum, team) => sum + team.members.length, 0);
  const totalPoints = teams.reduce((sum, team) => sum + team.total, 0);
  return <>
    <PageTitle eyebrow="ADMIN DASHBOARD" title="Competition overview" detail="Monitor team activity, scores, and competition progress." action={<Button onClick={() => goTo("Announcements")}><Icon name="plus" className="size-4" /> New announcement</Button>} />
    <div className="stats-grid">
      <StatCard label="Total teams" value={`${teams.length} / 10`} detail="All slots allocated" icon="team" accent="navy" />
      <StatCard label="Registered members" value={String(memberCount)} detail="Across all teams" icon="users" accent="purple" />
      <StatCard label="Total points" value={totalPoints.toLocaleString()} detail="+420 this week" icon="award" accent="amber" />
      <StatCard label="Active teams" value={String(teams.filter((team) => team.status === "Active").length)} detail="1 account disabled" icon="bolt" accent="green" />
    </div>
    <div className="overview-grid">
      <Card className="leaderboard-card">
        <div className="card-header"><div><div className="card-title">Live leaderboard</div><div className="card-subtitle">Current team standings by total score</div></div><button className="text-button" onClick={() => goTo("Scores")}>View all <Icon name="arrow" className="size-4" /></button></div>
        <div className="leaderboard-list">{[...teams].sort((a, b) => b.total - a.total).slice(0, 5).map((team, index) => <div className="leader-row" key={team.id}><div className={`rank rank-${index + 1}`}>{index + 1}</div><TeamMark team={team} /><div className="leader-name"><strong>{team.name}</strong><span>{team.members.length} members</span></div><div className="leader-score"><strong>{team.total.toLocaleString()}</strong><span>points</span></div></div>)}</div>
      </Card>
      <Card>
        <div className="card-header"><div><div className="card-title">Recent activity</div><div className="card-subtitle">Latest administrative actions</div></div><button className="icon-button"><Icon name="activity" /></button></div>
        <div className="activity-list">
          {[
            ["+100 points", "Binary Bisons", "Solved bonus challenge", "8 min ago", "score"],
            ["Account enabled", "Crypto Knights", "by Administrator", "24 min ago", "check"],
            ["Member updated", "Packet Patrol", "Roster information", "1 hr ago", "users"],
            ["Password reset", "Null Pointers", "Credentials regenerated", "2 hrs ago", "shield"],
          ].map((row) => <div className="activity-row" key={row[0] + row[1]}><div className={`activity-icon activity-${row[4]}`}><Icon name={row[4] as IconName} /></div><div><strong>{row[0]}</strong><span>{row[1]} · {row[2]}</span></div><time>{row[3]}</time></div>)}
        </div>
        <button className="full-link" onClick={() => goTo("Activity Logs")}>View complete activity log</button>
      </Card>
    </div>
    <div className="section-heading"><div><div className="card-title">Quick actions</div><div className="card-subtitle">Common competition management tasks</div></div></div>
    <div className="quick-grid">
      {[["Manage teams", "Create, edit, or disable team accounts", "team", "Teams"], ["Adjust scores", "Add or deduct points with a reason", "score", "Scores"], ["Post update", "Share news with all competitors", "announcement", "Announcements"], ["Review logs", "See every administrative action", "history", "Activity Logs"]].map((item) => <button className="quick-card" key={item[0]} onClick={() => goTo(item[3])}><div className="quick-icon"><Icon name={item[2] as IconName} /></div><div><strong>{item[0]}</strong><span>{item[1]}</span></div><Icon name="arrow" className="quick-arrow" /></button>)}
    </div>
  </>;
}

function TeamsPage({ teams, setTeams, openScore }: { teams: Team[]; setTeams: (teams: Team[]) => void; openScore: (team: Team) => void }) {
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Team | null>(null);
  const [viewing, setViewing] = useState<Team | null>(null);
  const filtered = teams.filter((team) => team.name.toLowerCase().includes(search.toLowerCase()) || team.username.includes(search.toLowerCase()));
  const updateTeam = (team: Team) => setTeams(teams.map((item) => item.id === team.id ? team : item));
  return <>
    <PageTitle eyebrow="TEAM MANAGEMENT" title="Teams" detail="Manage team accounts, credentials, rosters, and access." action={<Button disabled={teams.length >= 10}><Icon name="plus" className="size-4" /> Add team</Button>} />
    <Card>
      <div className="table-toolbar"><div className="search-field"><Icon name="search" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search teams or usernames..." /></div><div className="slot-count"><span>{teams.length}</span> of 10 team slots used</div></div>
      <div className="table-wrap"><table><thead><tr><th>Team</th><th>Members</th><th>Username</th><th>Total score</th><th>Status</th><th>Last active</th><th aria-label="Actions" /></tr></thead><tbody>{filtered.map((team) => <tr key={team.id}><td><div className="team-cell"><TeamMark team={team} /><div><strong>{team.name}</strong><span>Team {String(team.id).padStart(2, "0")}</span></div></div></td><td>{team.members.length} members</td><td><code>{team.username}</code></td><td><strong>{team.total.toLocaleString()}</strong> pts</td><td><Badge tone={team.status === "Active" ? "green" : "neutral"}><span className="badge-dot" />{team.status}</Badge></td><td className="muted">{team.lastActive}</td><td><div className="row-actions"><button title="View team" onClick={() => setViewing(team)}><Icon name="eye" /></button><button title="Adjust score" onClick={() => openScore(team)}><Icon name="score" /></button><button title="Edit team" onClick={() => setEditing(team)}><Icon name="edit" /></button></div></td></tr>)}</tbody></table></div>
      <div className="table-footer"><span>Showing {filtered.length} of {teams.length} teams</span><span>Maximum capacity: 10 teams</span></div>
    </Card>
    {editing && <Modal title="Edit team account" onClose={() => setEditing(null)}><form onSubmit={(event) => { event.preventDefault(); updateTeam(editing); setEditing(null); }}><div className="form-grid"><label><span>Team name</span><input value={editing.name} onChange={(event) => setEditing({ ...editing, name: event.target.value })} /></label><label><span>Username</span><input value={editing.username} onChange={(event) => setEditing({ ...editing, username: event.target.value })} /></label></div><label className="toggle-row"><div><strong>Account access</strong><span>Allow this team to sign in</span></div><button type="button" className={`toggle ${editing.status === "Active" ? "toggle-on" : ""}`} onClick={() => setEditing({ ...editing, status: editing.status === "Active" ? "Disabled" : "Active" })}><span /></button></label><div className="credential-box"><Icon name="shield" /><div><strong>Password stored securely</strong><span>Initial passwords are represented by hashes in production.</span></div><Button variant="secondary">Reset password</Button></div><div className="modal-actions"><Button variant="danger" onClick={() => { if (confirm(`Delete ${editing.name}?`)) { setTeams(teams.filter((team) => team.id !== editing.id)); setEditing(null); } }}><Icon name="trash" className="size-4" /> Delete</Button><div><Button variant="ghost" onClick={() => setEditing(null)}>Cancel</Button><Button type="submit">Save changes</Button></div></div></form></Modal>}
    {viewing && <Modal title="Team details" onClose={() => setViewing(null)}><div className="team-modal-hero"><TeamMark team={viewing} size="large" /><div><div className="team-modal-name">{viewing.name}</div><code>{viewing.username}</code></div><Badge tone={viewing.status === "Active" ? "green" : "neutral"}>{viewing.status}</Badge></div><div className="member-list">{viewing.members.map((member) => <div className="member-row" key={member.name}><Avatar initials={member.initials} /><div><strong>{member.name}</strong><span>{member.role}</span></div><strong>{member.score} pts</strong></div>)}</div><div className="modal-actions modal-actions-right"><Button variant="secondary" onClick={() => { setViewing(null); setEditing(viewing); }}><Icon name="edit" className="size-4" /> Edit team</Button><Button onClick={() => { setViewing(null); openScore(viewing); }}>Adjust score</Button></div></Modal>}
  </>;
}

function ScoresPage({ teams, openScore, openSoloScore }: { teams: Team[]; openScore: (team: Team) => void; openSoloScore: (team: Team, member: Team["members"][number]) => void }) {
  const [scoreView, setScoreView] = useState<"team" | "solo">("team");
  const ranked = [...teams].sort((a, b) => b.total - a.total);
  const rankedMembers = teams
    .flatMap((team) => team.members.map((member) => ({ ...member, team })))
    .sort((a, b) => b.score - a.score);
  return <>
    <PageTitle eyebrow="SCORING" title="Scores & rankings" detail="View and manage team totals or individual competitor scores." />
    <div className="score-banner"><Icon name="shield" /><div><strong>Audit-ready scoring</strong><span>Every score adjustment requires a reason and is recorded with an administrator and timestamp.</span></div></div>
    <div className="score-tabs"><button className={scoreView === "team" ? "score-tab-active" : ""} onClick={() => setScoreView("team")}><Icon name="team" /> Team scoring</button><button className={scoreView === "solo" ? "score-tab-active" : ""} onClick={() => setScoreView("solo")}><Icon name="users" /> Solo scoring</button></div>
    <Card>
      {scoreView === "team" ? <div className="table-wrap"><table><thead><tr><th>Rank</th><th>Team</th><th>Total score</th><th>Gap</th><th>Status</th><th>Action</th></tr></thead><tbody>{ranked.map((team, index) => <tr key={team.id}><td><div className={`rank rank-${index + 1}`}>{index + 1}</div></td><td><div className="team-cell"><TeamMark team={team} /><strong>{team.name}</strong></div></td><td><strong className="large-score">{team.total.toLocaleString()}</strong> pts</td><td className="muted">{index === 0 ? "Leader" : `−${(ranked[0].total - team.total).toLocaleString()} pts`}</td><td><Badge tone={team.status === "Active" ? "green" : "neutral"}>{team.status}</Badge></td><td><Button variant="secondary" onClick={() => openScore(team)}>Adjust team score</Button></td></tr>)}</tbody></table></div>
      : <div className="table-wrap"><table><thead><tr><th>Rank</th><th>Competitor</th><th>Team</th><th>Role</th><th>Solo score</th><th>Action</th></tr></thead><tbody>{rankedMembers.map((member, index) => <tr key={`${member.team.id}-${member.name}`}><td><div className={`rank rank-${index + 1}`}>{index + 1}</div></td><td><div className="team-cell"><Avatar initials={member.initials} purple /><strong>{member.name}</strong></div></td><td><div className="team-cell"><TeamMark team={member.team} /><strong>{member.team.name}</strong></div></td><td className="muted">{member.role}</td><td><strong className="large-score">{member.score.toLocaleString()}</strong> pts</td><td><Button variant="secondary" onClick={() => openSoloScore(member.team, member)}>Adjust solo score</Button></td></tr>)}</tbody></table></div>}
      <div className="table-footer"><span>{scoreView === "team" ? `${ranked.length} ranked teams` : `${rankedMembers.length} ranked competitors`}</span><span>Rankings update automatically after every adjustment</span></div>
    </Card>
  </>;
}

function MembersPage({ teams }: { teams: Team[] }) {
  const allMembers = teams.flatMap((team) => team.members.map((member) => ({ ...member, team })));
  return <>
    <PageTitle eyebrow="ROSTER MANAGEMENT" title="Members" detail={`${allMembers.length} competitors across ${teams.length} registered teams.`} action={<Button><Icon name="plus" className="size-4" /> Add member</Button>} />
    <Card><div className="table-toolbar"><div className="search-field"><Icon name="search" /><input placeholder="Search members..." /></div><Badge tone="purple">{allMembers.length} registered</Badge></div><div className="table-wrap"><table><thead><tr><th>Member</th><th>Team</th><th>Role</th><th>Individual score</th><th>Account</th><th /></tr></thead><tbody>{allMembers.map((member) => <tr key={member.name}><td><div className="team-cell"><Avatar initials={member.initials} /><strong>{member.name}</strong></div></td><td>{member.team.name}</td><td className="muted">{member.role}</td><td><strong>{member.score}</strong> pts</td><td><Badge tone={member.team.status === "Active" ? "green" : "neutral"}>{member.team.status}</Badge></td><td><div className="row-actions"><button><Icon name="edit" /></button><button><Icon name="trash" /></button></div></td></tr>)}</tbody></table></div></Card>
  </>;
}

function AnnouncementsPage() {
  const [items, setItems] = useState(announcements);
  const [compose, setCompose] = useState(false);
  return <>
    <PageTitle eyebrow="COMMUNICATIONS" title="Announcements" detail="Publish updates visible to every registered team." action={<Button onClick={() => setCompose(true)}><Icon name="plus" className="size-4" /> New announcement</Button>} />
    <div className="announcement-layout"><div className="announcement-feed">{items.map((item, index) => <Card className="announcement-card" key={item.title}><div className="announcement-icon"><Icon name={index === 2 ? "shield" : "announcement"} /></div><div className="announcement-content"><div><Badge tone={index === 0 ? "purple" : "neutral"}>{item.tag}</Badge><time>{item.time}</time></div><div className="announcement-title">{item.title}</div><p>{item.body}</p></div><button className="icon-button"><Icon name="edit" /></button></Card>)}</div><Card className="announcement-side"><div className="card-title">Publishing guide</div><div className="guide-item"><span>1</span><div><strong>Be concise</strong><p>Lead with the action teams need to take.</p></div></div><div className="guide-item"><span>2</span><div><strong>Protect privacy</strong><p>Never include credentials or private member data.</p></div></div><div className="guide-item"><span>3</span><div><strong>Use clear timing</strong><p>Include dates and deadlines where relevant.</p></div></div></Card></div>
    {compose && <Modal title="New announcement" onClose={() => setCompose(false)}><form onSubmit={(event) => { event.preventDefault(); const form = new FormData(event.currentTarget); setItems([{ title: String(form.get("title")), body: String(form.get("body")), time: "Just now", tag: "Update" }, ...items]); setCompose(false); }}><label><span>Title</span><input name="title" required placeholder="Announcement title" /></label><label><span>Message</span><textarea name="body" required rows={5} placeholder="Write a clear update for all teams..." /></label><div className="modal-actions modal-actions-right"><Button variant="ghost" onClick={() => setCompose(false)}>Cancel</Button><Button type="submit">Publish announcement</Button></div></form></Modal>}
  </>;
}

function RulesPage() {
  const rules = [
    ["Compete with integrity", "Teams must complete all competition tasks independently. Collaboration between teams is prohibited."],
    ["No AI assistance", "The use of generative AI, AI coding assistants, or AI-powered solution tools is strictly prohibited during the competition."],
    ["Protect the infrastructure", "Do not attack the competition platform, other teams, HNU systems, or any target outside the designated scope."],
    ["Keep flags private", "Do not share flags, hints, credentials, or solutions with anyone outside your registered team."],
    ["Follow organizer decisions", "All score adjustments and rulings by the HNU COECS organizing committee are final."],
  ];
  return <>
    <PageTitle eyebrow="COMPETITION POLICY" title="Rules & conduct" detail="Every participant must understand and follow these rules." />
    <div className="rules-hero"><div><Badge tone="purple">HNU CTF 2025</Badge><div className="rules-hero-title">Play fair. Learn deeply.<br />Defend responsibly.</div><p>These rules protect the fairness, safety, and learning goals of the competition.</p></div><Icon name="shield" /></div>
    <div className="rules-list">{rules.map((rule, index) => <Card className="rule-card" key={rule[0]}><div className="rule-number">{String(index + 1).padStart(2, "0")}</div><div><div className="rule-title">{rule[0]}</div><p>{rule[1]}</p></div>{index === 1 && <Badge tone="amber">Strictly enforced</Badge>}</Card>)}</div>
    <div className="acknowledgment"><Icon name="check" /><div><strong>Participation confirms acceptance</strong><span>By accessing the team portal, every participant agrees to these competition rules and the HNU Code of Conduct.</span></div></div>
  </>;
}

function ChallengesPage() {
  return <div className="coming-page"><div className="coming-visual"><div className="coming-ring"><Icon name="flag" /></div><span className="spark spark-a" /><span className="spark spark-b" /><span className="spark spark-c" /></div><Badge tone="purple">CTF ARENA</Badge><div className="coming-title">Challenges Coming Soon</div><p>The challenge arena is being prepared. Check back when the competition officially begins.</p><div className="challenge-plan">{[["5", "Easy", "20–40 points"], ["15", "Medium", "50–70 points"], ["10", "Difficult", "75–100 points"]].map((item, index) => <div key={item[1]}><span className={`difficulty difficulty-${index}`}>{item[1]}</span><strong>{item[0]}</strong><p>{item[2]}</p></div>)}</div><div className="flag-example"><span>Example flag format</span><code>HNU{"{Dia_ra_ahoang_flag_39378743892492}"}</code></div></div>;
}

function ActivityLogs() {
  const rows = [
    ["Score adjusted", "Binary Bisons", "+100 points · Bonus task verified", "CTF Administrator", "Today, 10:42 AM"],
    ["Account enabled", "Crypto Knights", "Team login restored", "CTF Administrator", "Today, 10:26 AM"],
    ["Member updated", "Packet Patrol", "Roster details changed", "CTF Administrator", "Today, 9:12 AM"],
    ["Password reset", "Null Pointers", "New initial password generated", "CTF Administrator", "Today, 8:48 AM"],
    ["Announcement posted", "All teams", "Competition schedule updated", "CTF Administrator", "Yesterday, 4:20 PM"],
  ];
  return <><PageTitle eyebrow="SECURITY & AUDIT" title="Activity logs" detail="A chronological record of administrative actions." /><Card><div className="table-wrap"><table><thead><tr><th>Action</th><th>Target</th><th>Details</th><th>Performed by</th><th>Timestamp</th></tr></thead><tbody>{rows.map((row) => <tr key={row[0] + row[4]}><td><strong>{row[0]}</strong></td><td>{row[1]}</td><td className="muted">{row[2]}</td><td>{row[3]}</td><td className="muted">{row[4]}</td></tr>)}</tbody></table></div></Card></>;
}

function SettingsPage() {
  return <><PageTitle eyebrow="SYSTEM" title="Competition settings" detail="Configure prototype preferences and administrative controls." /><div className="settings-grid"><Card><div className="card-title">Competition profile</div><div className="card-subtitle">Basic event information shown across the portal.</div><form><label><span>Competition name</span><input defaultValue="HNU CTF Competition 2025" /></label><label><span>Organizing department</span><input defaultValue="College of Engineering and Computer Studies" /></label><div className="form-grid"><label><span>Team limit</span><input value="10" readOnly /></label><label><span>Scoring mode</span><input value="Manual" readOnly /></label></div><Button>Save settings</Button></form></Card><Card><div className="card-title">Security controls</div><div className="card-subtitle">Prototype representation of production security settings.</div>{[["Role-based access", "Separate administrator and team permissions"], ["Password hashing", "Store hashes only; never plaintext passwords"], ["Audit logging", "Record all score and account changes"]].map((item) => <label className="toggle-row" key={item[0]}><div><strong>{item[0]}</strong><span>{item[1]}</span></div><button type="button" className="toggle toggle-on"><span /></button></label>)}</Card></div><div className="prototype-note"><Icon name="shield" /><div><strong>Localhost prototype notice</strong><span>This interface demonstrates intended behavior only. Backend services, database persistence, authentication, password hashing, and access security require separate production implementation.</span></div></div></>;
}

function TeamDashboard({ team, teams, setSelectedTeam, active }: { team: Team; teams: Team[]; setSelectedTeam: (id: number) => void; active: string }) {
  const rank = [...teams].sort((a, b) => b.total - a.total).findIndex((item) => item.id === team.id) + 1;
  if (active === "Challenges") return <ChallengesPage />;
  if (active === "Rules") return <RulesPage />;
  if (active === "Announcements") return <><PageTitle eyebrow="TEAM PORTAL" title="Announcements" detail="Official updates from the HNU CTF committee." /><div className="announcement-feed">{announcements.map((item, index) => <Card className="announcement-card" key={item.title}><div className="announcement-icon"><Icon name={index === 2 ? "shield" : "announcement"} /></div><div className="announcement-content"><div><Badge tone={index === 0 ? "purple" : "neutral"}>{item.tag}</Badge><time>{item.time}</time></div><div className="announcement-title">{item.title}</div><p>{item.body}</p></div></Card>)}</div></>;
  if (active === "My Team") return <><PageTitle eyebrow="PRIVATE TEAM DATA" title={team.name} detail="Your assigned roster and individual score contributions." /><Card><div className="team-profile-head"><TeamMark team={team} size="large" /><div><div className="team-modal-name">{team.name}</div><code>{team.username}</code></div><Badge tone="green">Account active</Badge></div><div className="member-cards">{team.members.map((member) => <div className="member-card" key={member.name}><Avatar initials={member.initials} purple /><div><strong>{member.name}</strong><span>{member.role}</span></div><div><strong>{member.score}</strong><span>points</span></div></div>)}</div><div className="privacy-note"><Icon name="shield" /><span>Only your team and authorized administrators can view this roster.</span></div></Card></>;
  if (active === "Score History") return <><PageTitle eyebrow="SCORING" title="Score history" detail="A read-only record of your team’s point adjustments." /><Card><div className="timeline">{[["+100", "Bonus task verified", "Today, 10:42 AM"], ["+250", "Web security exercise", "May 20, 2:15 PM"], ["+350", "Cryptography milestone", "May 19, 11:34 AM"], ["+280", "Forensics exercise", "May 18, 3:02 PM"]].map((item) => <div className="timeline-item" key={item[2]}><div className="timeline-dot" /><div><strong>{item[1]}</strong><span>Recorded by CTF Administrator · {item[2]}</span></div><Badge tone="green">{item[0]} pts</Badge></div>)}</div></Card></>;
  return <>
    <div className="team-welcome"><div><div className="eyebrow">TEAM DASHBOARD</div><div className="page-title">Welcome back, {team.name}</div><div className="page-detail">Your private competition hub. Scores and roster details are read-only.</div></div><label className="team-preview-select"><span>Preview team</span><select value={team.id} onChange={(event) => setSelectedTeam(Number(event.target.value))}>{teams.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}</select></label></div>
    <div className="team-score-hero"><div className="score-identity"><TeamMark team={team} size="large" /><div><span>Current total score</span><strong>{team.total.toLocaleString()}</strong><small>points</small></div></div><div className="rank-block"><span>OVERALL RANK</span><div><strong>#{rank}</strong><small>of 10 teams</small></div></div><div className="hero-shield"><Icon name="shield" /></div></div>
    <div className="team-dashboard-grid">
      <Card className="roster-card"><div className="card-header"><div><div className="card-title">Team roster</div><div className="card-subtitle">{team.members.length} registered members</div></div><Badge tone="purple">Private</Badge></div><div className="member-list">{team.members.map((member) => <div className="member-row" key={member.name}><Avatar initials={member.initials} /><div><strong>{member.name}</strong><span>{member.role}</span></div><div className="member-score"><strong>{member.score}</strong><span>points</span></div></div>)}</div></Card>
      <Card><div className="card-header"><div><div className="card-title">Score progress</div><div className="card-subtitle">Your position in the field</div></div><Icon name="score" className="size-5 text-purple-600" /></div><div className="progress-content"><div className="progress-copy"><span>Your score</span><strong>{team.total.toLocaleString()} pts</strong></div><div className="progress-track"><span style={{ width: `${Math.max(12, team.total / 9.8)}%` }} /></div><div className="progress-labels"><span>0</span><span>Leader: 980</span></div><div className="rank-message"><Icon name="award" /><div><strong>{rank <= 3 ? "You’re on the podium" : `${980 - team.total} points to the lead`}</strong><span>Keep learning and stay focused.</span></div></div></div></Card>
    </div>
    <div className="team-bottom-grid"><Card><div className="card-header"><div className="card-title">Recent score activity</div><button className="text-button">View history <Icon name="arrow" className="size-4" /></button></div><div className="compact-history">{[["+100", "Bonus task verified", "Today, 10:42 AM"], ["+250", "Web security exercise", "May 20, 2:15 PM"], ["+350", "Cryptography milestone", "May 19, 11:34 AM"]].map((item) => <div key={item[2]}><span className="history-plus">{item[0]}</span><div><strong>{item[1]}</strong><span>{item[2]}</span></div></div>)}</div></Card><Card><div className="card-header"><div className="card-title">Latest announcement</div><Badge tone="purple">Important</Badge></div><div className="latest-announcement"><div className="announcement-icon"><Icon name="announcement" /></div><div><strong>{announcements[0].title}</strong><p>{announcements[0].body}</p><span>{announcements[0].time}</span></div></div></Card></div>
  </>;
}

export default function App() {
  const [teams, setTeams] = useState(initialTeams);
  const [role, setRole] = useState<"admin" | "team">("admin");
  const [active, setActive] = useState("Overview");
  const [selectedTeamId, setSelectedTeamId] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scoreTeam, setScoreTeam] = useState<Team | null>(null);
  const [soloTarget, setSoloTarget] = useState<{ team: Team; member: Team["members"][number] } | null>(null);
  const selectedTeam = teams.find((team) => team.id === selectedTeamId) || teams[0];
  const [scoreAmount, setScoreAmount] = useState("");
  const [scoreReason, setScoreReason] = useState("");

  const switchRole = (next: "admin" | "team") => {
    setRole(next);
    setActive(next === "admin" ? "Overview" : "Dashboard");
  };

  const page = useMemo(() => {
    if (role === "team") return <TeamDashboard team={selectedTeam} teams={teams} setSelectedTeam={setSelectedTeamId} active={active} />;
    if (active === "Teams") return <TeamsPage teams={teams} setTeams={setTeams} openScore={setScoreTeam} />;
    if (active === "Members") return <MembersPage teams={teams} />;
    if (active === "Scores") return <ScoresPage teams={teams} openScore={setScoreTeam} openSoloScore={(team, member) => setSoloTarget({ team, member })} />;
    if (active === "Announcements") return <AnnouncementsPage />;
    if (active === "Rules") return <RulesPage />;
    if (active === "Challenges") return <ChallengesPage />;
    if (active === "Activity Logs") return <ActivityLogs />;
    if (active === "Settings") return <SettingsPage />;
    return <Overview teams={teams} goTo={setActive} />;
  }, [active, role, selectedTeam, teams]);

  const applyScore = () => {
    if (!scoreTeam || !scoreReason.trim() || !scoreAmount) return;
    const amount = Number(scoreAmount);
    setTeams(teams.map((team) => team.id === scoreTeam.id ? { ...team, total: Math.max(0, team.total + amount) } : team));
    setScoreTeam(null);
    setScoreAmount("");
    setScoreReason("");
  };

  const applySoloScore = () => {
    if (!soloTarget || !scoreReason.trim() || !scoreAmount) return;
    const amount = Number(scoreAmount);
    setTeams(teams.map((team) => {
      if (team.id !== soloTarget.team.id) return team;
      const members = team.members.map((member) => member.name === soloTarget.member.name ? { ...member, score: Math.max(0, member.score + amount) } : member);
      const previousScore = soloTarget.member.score;
      const updatedScore = Math.max(0, previousScore + amount);
      return { ...team, members, total: Math.max(0, team.total + updatedScore - previousScore) };
    }));
    setSoloTarget(null);
    setScoreAmount("");
    setScoreReason("");
  };

  return <div className="app-shell">
    <Sidebar active={active} setActive={setActive} role={role} open={sidebarOpen} close={() => setSidebarOpen(false)} />
    <div className="main-shell"><Topbar role={role} setRole={switchRole} selectedTeam={selectedTeam} menu={() => setSidebarOpen(true)} /><main className="content">{page}</main><footer>HNU CTF Competition Management · Holy Name University COECS <span>Local prototype · 2025</span></footer></div>
    {scoreTeam && <Modal title="Adjust team score" onClose={() => setScoreTeam(null)}><div className="score-modal-team"><TeamMark team={scoreTeam} /><div><strong>{scoreTeam.name}</strong><span>Current score: {scoreTeam.total.toLocaleString()} points</span></div></div><div className="form-grid"><label><span>Point adjustment</span><input type="number" value={scoreAmount} onChange={(event) => setScoreAmount(event.target.value)} placeholder="e.g. 100 or -50" /></label><label><span>Updated total</span><input value={(Math.max(0, scoreTeam.total + Number(scoreAmount || 0))).toLocaleString() + " points"} readOnly /></label></div><label><span>Reason for adjustment <b>Required</b></span><textarea rows={4} value={scoreReason} onChange={(event) => setScoreReason(event.target.value)} placeholder="Explain why this score is being changed..." /></label><div className="audit-note"><Icon name="history" /><span>This adjustment will be recorded with your administrator account and the current timestamp.</span></div><div className="modal-actions modal-actions-right"><Button variant="ghost" onClick={() => setScoreTeam(null)}>Cancel</Button><Button disabled={!scoreReason.trim() || !scoreAmount} onClick={applyScore}>Confirm adjustment</Button></div></Modal>}
    {soloTarget && <Modal title="Adjust solo score" onClose={() => setSoloTarget(null)}><div className="score-modal-team"><Avatar initials={soloTarget.member.initials} purple /><div><strong>{soloTarget.member.name}</strong><span>{soloTarget.team.name} · Current solo score: {soloTarget.member.score.toLocaleString()} points</span></div></div><div className="form-grid"><label><span>Point adjustment</span><input type="number" value={scoreAmount} onChange={(event) => setScoreAmount(event.target.value)} placeholder="e.g. 50 or -20" /></label><label><span>Updated solo score</span><input value={(Math.max(0, soloTarget.member.score + Number(scoreAmount || 0))).toLocaleString() + " points"} readOnly /></label></div><label><span>Reason for adjustment <b>Required</b></span><textarea rows={4} value={scoreReason} onChange={(event) => setScoreReason(event.target.value)} placeholder="Explain why this competitor’s score is being changed..." /></label><div className="audit-note"><Icon name="history" /><span>The individual score, team total, and rankings will update automatically. This action will be recorded with your administrator account and timestamp.</span></div><div className="modal-actions modal-actions-right"><Button variant="ghost" onClick={() => setSoloTarget(null)}>Cancel</Button><Button disabled={!scoreReason.trim() || !scoreAmount} onClick={applySoloScore}>Confirm solo adjustment</Button></div></Modal>}
  </div>;
}
