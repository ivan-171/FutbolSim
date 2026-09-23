
(()=>{
'use strict';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const COLORS=['#70a7ff','#50e0bd','#ff9b6b','#b48cff','#ff7da0','#ffd36a','#7bdc92','#91ccff','#e7a0ff','#8ce5ff','#ffb1a8','#aab9d8','#92e3c8','#f1be74','#cb9bff','#7db6d9'];
const CLUB_A=['Real','Atlético','Sporting','Racing','Unión','Deportivo','Ciudad','Estrella','Olympic','Inter','Academia','Club'];
const CLUB_B=['Norte','Sur','Valle','Puerto','Central','Azul','Oeste','Monte','Río','Capital','Aurora','Costa','Sierra','Bosque','Mar','Lago'];
const FIRST=["Álex", "Mateo", "Lucas", "Leo", "Hugo", "Dani", "Nico", "Iván", "Marco", "Adrián", "Pablo", "Sergio", "Bruno", "Diego", "Eric", "Samuel", "Martín", "Gabriel", "Álvaro", "Mario", "Jan", "Noah", "Milan", "Luca", "Rui", "Yuki", "Omar", "Theo", "Finn", "Marek", "Iker", "Unai", "Aitor", "Gael", "Marc", "Pol", "Óscar", "Jorge", "Raúl", "David", "Miguel", "Andrés", "Tomás", "Julián", "Emilio", "Gonzalo", "Rodrigo", "Thiago", "Enzo", "Franco", "Facundo", "Agustín", "Nicolás", "Valentín", "Matías", "Lautaro", "Joaquín", "Santiago", "Benjamín", "Arthur", "Louis", "Hugo", "Jules", "Mathis", "Clément", "Antoine", "Théo", "Bastien", "Maxime", "Romain", "Étienne", "Nathan", "Raphaël", "Maël", "Pierre", "Victor", "Adrien", "Liam", "Oliver", "Jack", "Harry", "George", "Charlie", "Alfie", "James", "Ethan", "Mason", "Jacob", "Oscar", "Freddie", "Archie", "Callum", "Connor", "Ryan", "Scott", "Lewis", "Lukas", "Felix", "Jonas", "Niklas", "Leon", "Florian", "Julian", "Maximilian", "Timo", "Kai", "Nils", "Moritz", "Fabian", "Jannik", "Benedikt", "Johannes", "Matthias", "Matteo", "Lorenzo", "Marco", "Davide", "Federico", "Riccardo", "Andrea", "Simone", "Gabriele", "Alessio", "Tommaso", "Niccolò", "Edoardo", "Giacomo", "Salvatore", "João", "Tiago", "Diogo", "Gonçalo", "Afonso", "Miguel", "Duarte", "Pedro", "André", "Rafael", "Bernardo", "Tomé", "Nuno", "Daan", "Sem", "Luuk", "Jesse", "Bram", "Thijs", "Sven", "Wout", "Joris", "Mees", "Teun", "Koen", "Erik", "Søren", "Magnus", "Emil", "Mikkel", "Anders", "Henrik", "Oskar", "Viktor", "Elias", "Anton", "Kristoffer", "Jakub", "Mateusz", "Kacper", "Piotr", "Tomasz", "Pawel", "Milosz", "Adam", "Kamil", "Filip", "Bartosz", "Dominik", "Ivan", "Nikola", "Luka", "Marko", "Stefan", "Mihajlo", "Aleksandar", "Petar", "Bojan", "Dusan", "Viktor", "Andrej", "Arda", "Kerem", "Emir", "Burak", "Mert", "Can", "Eren", "Kaan", "Yusuf", "Hakan", "Ozan", "Yuto", "Haruto", "Ren", "Sota", "Kaito", "Daichi", "Takumi", "Riku", "Sho", "Keita", "Naoki", "Hiroto", "Min-jun", "Ji-ho", "Seo-jun", "Hyun-woo", "Joon", "Tae-hyun", "Dong-hyun", "Sung-ho", "Chinedu", "Emeka", "Tunde", "Seyi", "Kelechi", "Ibrahim", "Musa", "Samuel", "Victor", "Femi", "Ade", "Kwame", "Kofi", "Yaw", "Lucas", "Gabriel", "Pedro", "Guilherme", "Vinícius", "Caio", "Murilo", "Renan", "Matheus", "Felipe", "Gustavo", "Danilo", "Ruan", "Wesley", "Amadou", "Moussa", "Ibrahima", "Sadio", "Ismaïla", "Pape", "Cheikh", "Mamadou", "Abdou", "Ousmane", "Boubacar", "Sekou"];
const LAST=["Soler", "Costa", "Mena", "Silva", "Vargas", "León", "Keller", "Novak", "Lund", "Sato", "Diallo", "Mendes", "Becker", "Haddad", "Martin", "Pereira", "Serrano", "Kovac", "Ferretti", "Olsen", "Navarro", "Rossi", "Moretti", "Torres", "Campos", "Reyes", "Vega", "Molina", "Blanco", "Santos", "García", "Martínez", "López", "Sánchez", "Pérez", "Gómez", "Fernández", "Ruiz", "Díaz", "Moreno", "Muñoz", "Álvarez", "Romero", "Alonso", "Gutiérrez", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Márquez", "Cabrera", "Iglesias", "Medina", "Cano", "Prieto", "Vidal", "Ramos", "Rodríguez", "Suárez", "Acosta", "Benítez", "Quiroga", "Ferreyra", "Domínguez", "Roldán", "Godoy", "Ledesma", "Figueroa", "Villalba", "Peralta", "Ponce", "Cardozo", "Sosa", "Dubois", "Moreau", "Laurent", "Simon", "Michel", "Lefèvre", "Leroy", "Roux", "David", "Bertrand", "Morel", "Fournier", "Girard", "Bonnet", "Dupont", "Lambert", "Fontaine", "Smith", "Jones", "Taylor", "Brown", "Williams", "Wilson", "Johnson", "Davies", "Robinson", "Wright", "Walker", "White", "Edwards", "Green", "Hall", "Wood", "Hughes", "Lewis", "Clarke", "Turner", "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Schulz", "Becker", "Hoffmann", "Schäfer", "Koch", "Bauer", "Richter", "Klein", "Wolf", "Neumann", "Bianchi", "Romano", "Ricci", "Marino", "Greco", "Bruno", "Gallo", "Conti", "De Luca", "Mancini", "Lombardi", "Barbieri", "Fontana", "Santoro", "Mariani", "Rinaldi", "Fernandes", "Carvalho", "Gomes", "Martins", "Rocha", "Correia", "Teixeira", "Nunes", "Coelho", "Monteiro", "Pinto", "Cardoso", "Tavares", "Moura", "De Jong", "Jansen", "De Vries", "Van Dijk", "Bakker", "Visser", "Smit", "Meijer", "De Boer", "Mulder", "Bos", "Vos", "Kuiper", "Dekker", "Johansen", "Hansen", "Larsen", "Andersen", "Nielsen", "Pedersen", "Kristensen", "Eriksen", "Berg", "Dahl", "Solberg", "Nygaard", "Kowalski", "Nowak", "Wójcik", "Kowalczyk", "Kamiński", "Lewandowski", "Zieliński", "Szymański", "Dąbrowski", "Kozłowski", "Mazur", "Krawczyk", "Jovanović", "Petrović", "Nikolić", "Marković", "Đorđević", "Stojanović", "Ilić", "Pavlović", "Milošević", "Todorović", "Popović", "Savić", "Yılmaz", "Kaya", "Demir", "Şahin", "Çelik", "Yıldız", "Aydın", "Öztürk", "Arslan", "Koç", "Kurt", "Tanaka", "Suzuki", "Takahashi", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato", "Yoshida", "Yamada", "Sasaki", "Matsumoto", "Kim", "Lee", "Park", "Choi", "Jung", "Kang", "Cho", "Yoon", "Jang", "Lim", "Han", "Okafor", "Balogun", "Adeyemi", "Nwosu", "Eze", "Obi", "Mensah", "Boateng", "Asante", "Osei", "Owusu", "Amoah", "Traoré", "Konaté", "Camara", "Keita", "Touré", "Diop", "Ba", "Fofana", "Oliveira", "Souza", "Lima", "Alves", "Ribeiro", "Barbosa", "Melo", "Castro", "Araujo", "Freitas", "Correia", "Machado", "Batista", "Nascimento"];
const POS=['POR','DEF','MED','DEL'];
const POS_COUNTS={POR:2,DEF:6,MED:6,DEL:4};
let nextTeamId=17,nextPlayerId=1,teams=[],world=null,leagueTab='d1',rngState=17117,TESTING=false;
const MANUAL_SAVE_KEY='leagueforge-universe-manual-v5',AUTO_SAVE_KEY='leagueforge-universe-autosave-v5',LEGACY_SAVE_KEY='leagueforge-universe-manual-v41',LEGACY_SAVE_KEY2='leagueforge-universe-autosave-v41',LEGACY_SAVE_KEY3='leagueforge-universe';
const toast=$('#toast');
function note(t){toast.textContent=t;toast.style.display='block';clearTimeout(note.t);note.t=setTimeout(()=>toast.style.display='none',2100)}
function statePayload(){if(world)world.rngState=rngState;return{version:'4.1',savedAt:Date.now(),teams,nextTeamId,nextPlayerId,world}}
function recalcIds(){const clubSets=[...(teams||[]),...(world?.teams||[])],players=clubSets.flatMap(t=>t.players||[]);nextTeamId=Math.max(nextTeamId||1,...clubSets.map(t=>t.id||0))+1;nextPlayerId=Math.max(nextPlayerId||1,...players.map(p=>p.id||0))+1}
function setAutosaveStatus(text,ok=true){const e=$('#autosaveState');if(e){e.textContent=text;e.className=ok?'autosaveDot':''}}
function autosave(reason=''){if(TESTING||!world)return;try{localStorage.setItem(AUTO_SAVE_KEY,JSON.stringify(statePayload()));setAutosaveStatus('✓')}catch(e){setAutosaveStatus('Error',false)}}
function manualSave(){if(!world){note('No hay mundo que guardar');return}try{localStorage.setItem(MANUAL_SAVE_KEY,JSON.stringify(statePayload()));autosave('manual');note('Partida guardada')}catch(e){note('No se pudo guardar')}}
function applySavedPayload(payload,announce='Partida cargada'){
 const data=payload?.world!==undefined?payload:{world:payload};if(!data.world)throw new Error('El archivo no contiene un universo válido');
 world=data.world;teams=data.teams||structuredClone(world.teams||teams);nextTeamId=data.nextTeamId||nextTeamId;nextPlayerId=data.nextPlayerId||nextPlayerId;rngState=world.rngState||17117;recalcIds();renderTeams();renderPlayerTeamSelect();renderAll();switchView('dashboard');autosave('load');if(announce)note(announce)
}
function loadLatestSave(){try{const m=localStorage.getItem(MANUAL_SAVE_KEY),a=localStorage.getItem(AUTO_SAVE_KEY),l=localStorage.getItem(LEGACY_SAVE_KEY);if(!m&&!a&&!l){note('No hay guardados');return}const pm=m?JSON.parse(m):null,pa=a?JSON.parse(a):null,pl=l?JSON.parse(l):null;let chosen=pm||pa||pl;if(pa&&(!chosen.savedAt||(pa.savedAt||0)>(chosen.savedAt||0)))chosen=pa;if(pm&&(!chosen.savedAt||(pm.savedAt||0)>(chosen.savedAt||0)))chosen=pm;applySavedPayload(chosen,chosen===pa?'Autosave cargado':chosen===pl?'Guardado antiguo migrado':'Guardado manual cargado')}catch(e){note('No se pudo cargar el guardado')}}
function esc(v){return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
function seedRng(s){rngState=(Number(s)||17117)>>>0}
function random(){rngState+=0x6D2B79F5;let t=rngState;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}
function rnd(a,b){return random()*(a-b)+b}
function ri(a,b=0){return Math.floor(rnd(a,b))}
function d6(){return 1+ri(6)}
function pick(a){return a[ri(a.length)]}
function shuffle(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=ri(i+1);[x[i],x[j]]=[x[j],x[i]]}return x}
function playerName(){return pick(FIRST)+' '+pick(LAST)}
function activeTeams(){return teams.filter(t=>t.active)}
function allPlayers(){return world?world.teams.flatMap(t=>t.players):teams.flatMap(t=>t.players||[])}
function playerValue(p){return Math.max(.4,((p.ovr-50)**1.65)/12 * Math.max(.35,(35-p.age)/15))}
function makePlayer(teamId,pos,base=72,age=null,name=null){
 const a=age??ri(33,18),curve=a<=21?rnd(1,5):a>=31?rnd(-3,1):rnd(-1,3);
 return{id:nextPlayerId++,teamId,name:name||playerName(),pos,age:a,ovr:clamp(Math.round(base+curve+rnd(-5,5)),45,94),injury:0,
 season:{apps:0,goals:0,assists:0},career:{apps:0,goals:0,assists:0,seasons:0},retired:false};
}
function generateSquad(t,base=t.ovr){
 t.players=[];
 for(const pos of POS)for(let i=0;i<POS_COUNTS[pos];i++)t.players.push(makePlayer(t.id,pos,base));
}
function makeTeam(id,name,ovr,color){
 const t={id,name,ovr,atk:clamp(ovr+Math.round(rnd(-4,5)),45,99),def:clamp(ovr+Math.round(rnd(-4,5)),45,99),active:true,color,budget:Math.round(rnd(18,55)*10)/10,players:[]};
 generateSquad(t,ovr);return t;
}
function buildInitialTeams(n=16){
 teams=[];nextPlayerId=1;
 for(let i=0;i<n;i++){const o=Math.round(rnd(64,86));teams.push(makeTeam(i+1,CLUB_A[i%CLUB_A.length]+' '+CLUB_B[(i*3)%CLUB_B.length],o,COLORS[i%COLORS.length]))}
 nextTeamId=n+1;
}
seedRng(17117);buildInitialTeams();

function switchView(v){
 $$('.view').forEach(x=>x.classList.toggle('active',x.id===v));$$('.navbtn').forEach(x=>x.classList.toggle('active',x.dataset.view===v));
 if(v==='teams')renderTeams();if(v==='players')renderPlayers();if(v==='setup')renderSetup();if(v==='tables')renderTables();if(v==='stats')renderPlayerStats();if(v==='market')renderMarket();if(v==='history')renderHistory();if(v==='records')renderRecords();if(v==='hof')renderHof();
}
$$('.navbtn').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.view)));

function clubEditorTeams(){return world?world.teams:teams}
function syncClubRename(t,oldName,newName){if(!world)return;for(const st of [world.season?.d1Stats,world.season?.d2Stats])if(st?.[t.id])st[t.id].name=newName;if(world.honours?.[oldName]){world.honours[newName]=world.honours[newName]||{league:0,cup:0,doubles:0,invincible:0,promotions:0,relegations:0};for(const k of Object.keys(world.honours[oldName]))world.honours[newName][k]=(world.honours[newName][k]||0)+(world.honours[oldName][k]||0);delete world.honours[oldName]}}
function renderTeams(){
 const r=$('#teamList'),list=clubEditorTeams(),live=!!world;r.innerHTML='';
 $('#addTeam').disabled=live;$('#genTeams').disabled=live;if($('#clubScopeBadge')){$('#clubScopeBadge').textContent=live?'Universo actual':'Plantilla de nuevo universo';$('#clubScopeBadge').classList.toggle('live',live)}
 if($('#clubEditorSubtitle'))$('#clubEditorSubtitle').textContent=live?'Edita nombres y fuerza de los clubes que ya existen en tu partida.':'Diseña la estructura competitiva antes de crear el universo.';
 if($('#clubEditorHint'))$('#clubEditorHint').textContent=live?'Alta, baja y participación quedan bloqueadas durante una dinastía para proteger la estructura histórica.':'Desmarca un club para dejarlo fuera del universo nuevo.';
 list.forEach(t=>{
  const row=document.createElement('div');row.className='teamrow';
  row.innerHTML=`<input class="act" type="checkbox" ${live||t.active?'checked':''} ${live?'disabled':''}><input class="nm" value="${esc(t.name)}"><input class="ovr" type="number" min="45" max="99" value="${t.ovr}"><input class="atk" type="number" min="45" max="99" value="${t.atk}"><input class="def" type="number" min="45" max="99" value="${t.def}"><button class="btn danger del" ${live?'disabled':''}>✕</button>`;
  row.querySelector('.act').addEventListener('change',e=>{if(live)return;t.active=e.target.checked;renderSetup();syncDash()});
  row.querySelector('.nm').addEventListener('change',e=>{const old=t.name,newName=e.target.value.trim()||old;t.name=newName;e.target.value=newName;if(live){syncClubRename(t,old,newName);autosave('club rename')}renderPlayerTeamSelect();renderAll()});
  ['ovr','atk','def'].forEach(k=>row.querySelector('.'+k).addEventListener('change',e=>{t[k]=clamp(parseInt(e.target.value)||70,45,99);e.target.value=t[k];if(live)autosave('club edit')}));
  row.querySelector('.del').addEventListener('click',()=>{if(live){note('No puedes eliminar clubes durante una dinastía');return}teams=teams.filter(x=>x.id!==t.id);renderTeams();renderSetup();renderPlayerTeamSelect()});
  r.appendChild(row)
 });
 if($('#clubCountLabel'))$('#clubCountLabel').textContent=`${list.length} clubes${live?' en el universo':' · '+activeTeams().length+' activos'}`;
}
$('#addTeam').addEventListener('click',()=>{if(world){note('Crea un universo nuevo para cambiar el número de clubes');return}const o=70,t=makeTeam(nextTeamId++,'Nuevo Club',o,COLORS[nextTeamId%COLORS.length]);teams.push(t);renderTeams();renderPlayerTeamSelect();renderSetup()});
$('#genTeams').addEventListener('click',()=>{if(world){note('Crea un universo nuevo para regenerar clubes');return}buildInitialTeams(16);renderTeams();renderPlayerTeamSelect();renderSetup();syncDash();note('16 clubes y 288 jugadores generados')});

function currentEditableTeams(){return world?world.teams:teams}
function renderPlayerTeamSelect(){
 const s=$('#playerTeamSelect'),old=+s.value;s.innerHTML='';
 currentEditableTeams().forEach(t=>s.insertAdjacentHTML('beforeend',`<option value="${t.id}">${esc(t.name)}</option>`));
 if([...s.options].some(o=>+o.value===old))s.value=old;
}
$('#playerTeamSelect').addEventListener('change',renderPlayers);
function renderPlayers(){
 renderPlayerTeamSelect();
 const ts=currentEditableTeams(),t=ts.find(x=>x.id===+$('#playerTeamSelect').value)||ts[0],root=$('#playerList');
 if(!t){root.innerHTML='<div class="empty">Sin clubes.</div>';return}
 $('#playerTeamSelect').value=t.id;
 const q=($('#playerSearch')?.value||'').trim().toLowerCase(),pos=$('#playerPosFilter')?.value||'',status=$('#playerStatusFilter')?.value||'',sort=$('#playerSort')?.value||'pos';
 let list=[...t.players].filter(p=>(!q||p.name.toLowerCase().includes(q))&&(!pos||p.pos===pos)&&(!status||(status==='fit'?!p.injury:p.injury>0)));
 const sorts={
  pos:(a,b)=>POS.indexOf(a.pos)-POS.indexOf(b.pos)||b.ovr-a.ovr,
  ovr:(a,b)=>b.ovr-a.ovr||a.age-b.age,
  age:(a,b)=>a.age-b.age||b.ovr-a.ovr,
  goals:(a,b)=>b.career.goals-a.career.goals||b.ovr-a.ovr
 };
 list.sort(sorts[sort]||sorts.pos);
 $('#squadSummary').textContent=`${t.players.length} jugadores · ${available(t).length} disponibles · presupuesto ${t.budget.toFixed(1)}M · media ${squadAverage(t).toFixed(1)}`;
 if($('#playerFilterCount'))$('#playerFilterCount').textContent=`${list.length}/${t.players.length}`;
 root.innerHTML='';
 list.forEach(p=>{
  const row=document.createElement('div');row.className='playerrow';
  row.innerHTML=`<input class="pn" value="${esc(p.name)}" maxlength="32"><select class="pp">${POS.map(x=>`<option ${x===p.pos?'selected':''}>${x}</option>`).join('')}</select><input class="pa" type="number" min="16" max="45" value="${p.age}"><input class="po" type="number" min="40" max="99" value="${p.ovr}"><span class="${p.injury?'pillBad':'pillGood'}">${p.injury?'Lesión '+p.injury+'p':'Disponible'}</span><span>${p.career.goals}</span><span>${p.career.assists}</span><span class="valueText">${playerValue(p).toFixed(1)}M</span>`;
  row.querySelector('.pn').addEventListener('change',e=>{p.name=e.target.value.trim()||p.name;e.target.value=p.name;if(world)autosave('player edit')});
  row.querySelector('.pp').addEventListener('change',e=>{p.pos=e.target.value;if(world)autosave('player edit');renderPlayers()});
  row.querySelector('.pa').addEventListener('change',e=>{p.age=clamp(parseInt(e.target.value)||24,16,45);e.target.value=p.age;if(world)autosave('player edit');renderPlayers()});
  row.querySelector('.po').addEventListener('change',e=>{p.ovr=clamp(parseInt(e.target.value)||70,40,99);e.target.value=p.ovr;if(world)autosave('player edit');renderPlayers()});
  root.appendChild(row);
 });
 if(!list.length)root.innerHTML='<div class="empty">No hay jugadores con estos filtros.</div>';
}
['#playerSearch','#playerPosFilter','#playerStatusFilter','#playerSort'].forEach(sel=>$(sel)?.addEventListener(sel==='#playerSearch'?'input':'change',renderPlayers));
$('#addPlayer').addEventListener('click',()=>{const ts=currentEditableTeams(),t=ts.find(x=>x.id===+$('#playerTeamSelect').value);if(!t)return;t.players.push(makePlayer(t.id,'MED',t.ovr,18));if(world)autosave('new player');renderPlayers()});

function setupSourceTeams(){return world?world.teams:activeTeams()}
function renderSetup(){
 const source=setupSourceTeams(),n=source.length,top=clamp(+$('#topSize').value||8,4,Math.max(4,n-2));
 $('#setupInfo').innerHTML=`<div class="trophyrow"><span>Clubes activos</span><b>${n}</b></div><div class="trophyrow"><span>Primera</span><b>${Math.min(top,n)}</b></div><div class="trophyrow"><span>Segunda</span><b>${Math.max(0,n-top)}</b></div><div class="trophyrow"><span>Jugadores</span><b>${source.reduce((s,t)=>s+t.players.length,0)}</b></div>`;
 if($('#clubCountLabel'))$('#clubCountLabel').textContent=`${n} clubes activos`;
 const m=$('#mode').value;$$('[data-mode-card]').forEach(c=>c.classList.toggle('active',c.dataset.modeCard===m));$('#modeInfo').innerHTML=m==='ratings'?'<b>Valoraciones:</b> el XI disponible, OVR, ataque, defensa y localía determinan la fuerza.':m==='equal'?'<b>Todos iguales:</b> la calidad individual se ignora; todos los clubes parten de idéntica fuerza.':'<b>Azar total:</b> también se ignora la localía. Los dados y el caos mandan.';
}
$('#mode').addEventListener('change',renderSetup);$('#topSize').addEventListener('input',renderSetup);
$$('[data-mode-card]').forEach(c=>c.addEventListener('click',()=>{$('#mode').value=c.dataset.modeCard;renderSetup()}));

function blankStats(t){return{id:t.id,name:t.name,color:t.color,pj:0,w:0,d:0,l:0,gf:0,ga:0,pts:0}}
function schedule(list,legs){
 let arr=list.map(t=>t.id);if(arr.length%2)arr.push(null);let rot=[...arr],out=[],n=rot.length;
 for(let r=0;r<n-1;r++){let g=[];for(let i=0;i<n/2;i++){let a=rot[i],b=rot[n-1-i];if(a!==null&&b!==null)g.push((r+i)%2===0?{home:a,away:b,result:null}:{home:b,away:a,result:null})}out.push(g);rot.splice(1,0,rot.pop())}
 if(legs===2)out=out.concat(out.map(rd=>rd.map(g=>({home:g.away,away:g.home,result:null}))));
 return out;
}
function pairCup(ids){
 let p=[];for(let i=0;i<ids.length;i+=2){const home=ids[i]??null,away=ids[i+1]??null;if(home===null&&away===null)continue;p.push({home,away,result:null,winner:null})}return p
}
function createCup(ids){
 const x=shuffle(ids.filter(id=>id!==null&&id!==undefined));let target=1;while(target<x.length)target*=2;
 const byes=target-x.length,pairs=[];let i=0;
 // Distribute byes as real-team vs empty slots; never create empty-vs-empty ties.
 for(let b=0;b<byes;b++)pairs.push({home:x[i++],away:null,result:null,winner:null});
 while(i<x.length)pairs.push({home:x[i++],away:x[i++]??null,result:null,winner:null});
 return{currentPairs:shuffle(pairs),winner:null,finished:false,roundNo:1};
}
function initSeason(no,d1ids,d2ids){
 const stats1={},stats2={};d1ids.forEach(id=>stats1[id]=blankStats(team(id)));d2ids.forEach(id=>stats2[id]=blankStats(team(id)));
 world.season={no,d1ids:[...d1ids],d2ids:[...d2ids],d1Schedule:schedule(d1ids.map(team),world.config.legs),d2Schedule:schedule(d2ids.map(team),world.config.legs),d1Round:0,d2Round:0,d1Stats:stats1,d2Stats:stats2,leagueFinished:false,cup:createCup([...d1ids,...d2ids]),cupHistory:[],leagueHistory:[],finished:false,finalized:false};
 world.teams.forEach(t=>t.players.forEach(p=>p.season={apps:0,goals:0,assists:0}));
}
function team(id){return world?.teams.find(t=>t.id===id)||teams.find(t=>t.id===id)}
function createWorld(){
 const source=world?world.teams:activeTeams(),act=source.map(t=>structuredClone(t));if(act.length<6){note('Necesitas al menos 6 clubes');return}
 seedRng(+$('#seedInput').value||17117);
 const top=clamp(+$('#topSize').value||8,4,act.length-2),movement=clamp(+$('#movement').value||2,1,Math.min(4,Math.floor(top/2),act.length-top));
 act.forEach(t=>{if(!t.players?.length)generateSquad(t,t.ovr);t.budget=t.budget||Math.round(rnd(18,55)*10)/10});
 const sorted=[...act].sort((a,b)=>b.ovr-a.ovr);
 world={name:$('#worldName').value.trim()||'Federación LeagueForge',teams:act,config:{mode:$('#mode').value,chaos:+$('#chaos').value,homeAdv:+$('#homeAdv').value,legs:+$('#legs').value,topSize:top,movement},phase:'season',history:[],news:['Se inaugura el nuevo universo LeagueForge.'],retired:[],honours:{},records:{highestPoints:null,mostGoalsTeam:null,biggestWin:null,mostGoalsMatch:null,topScorerSeason:null,topAssistSeason:null},rivalries:{},historicalMatches:0,offers:[],transferLog:[],rngState:rngState};
 initSeason(1,sorted.slice(0,top).map(t=>t.id),sorted.slice(top).map(t=>t.id));if(!TESTING){renderAll();switchView('dashboard');autosave('create');note('Mundo creado')};
}
$('#createWorld').addEventListener('click',createWorld);$('#quickStart').addEventListener('click',()=>{if(activeTeams().length<6)teams.forEach(t=>t.active=true);createWorld()});

function squadAverage(t){return t.players?.length?t.players.reduce((s,p)=>s+p.ovr,0)/t.players.length:0}
function available(t,pos){return t.players.filter(p=>!p.retired&&!p.injury&&(!pos||p.pos===pos)).sort((a,b)=>b.ovr-a.ovr)}
function lineup(t){
 const chosen=[],take=(pos,n)=>{const a=available(t,pos);for(let i=0;i<Math.min(n,a.length);i++)chosen.push(a[i])};
 take('POR',1);take('DEF',4);take('MED',3);take('DEL',3);
 const rest=available(t).filter(p=>!chosen.includes(p));while(chosen.length<11&&rest.length)chosen.push(rest.shift());
 return chosen;
}
function teamStrength(t){
 if(world.config.mode==='random')return{atk:75,def:75,ovr:75,lineup:lineup(t)};
 if(world.config.mode==='equal')return{atk:75,def:75,ovr:75,lineup:lineup(t)};
 const xi=lineup(t),avg=xi.length?xi.reduce((s,p)=>s+p.ovr,0)/xi.length:50;
 const fw=xi.filter(p=>p.pos==='DEL'),md=xi.filter(p=>p.pos==='MED'),df=xi.filter(p=>p.pos==='DEF'||p.pos==='POR');
 const pa=fw.length?fw.reduce((s,p)=>s+p.ovr,0)/fw.length:avg,pd=df.length?df.reduce((s,p)=>s+p.ovr,0)/df.length:avg,pm=md.length?md.reduce((s,p)=>s+p.ovr,0)/md.length:avg;
 return{atk:(pa*.55+pm*.2+t.atk*.25),def:(pd*.6+pm*.15+t.def*.25),ovr:avg,lineup:xi};
}
function weightPlayer(p,kind){
 let w=p.ovr/60;
 if(kind==='goal')w*=p.pos==='DEL'?3.8:p.pos==='MED'?1.7:p.pos==='DEF'?.45:.12;
 else w*=p.pos==='MED'?3:p.pos==='DEL'?2.2:p.pos==='DEF'?.7:.1;
 return Math.max(.05,w);
}
function weightedPick(arr,kind){
 if(!arr.length)return null;let total=arr.reduce((s,p)=>s+weightPlayer(p,kind),0),r=random()*total;
 for(const p of arr){r-=weightPlayer(p,kind);if(r<=0)return p}return arr[arr.length-1];
}
function recordGoal(teamObj,xi,goals){
 const events=[];for(let i=0;i<goals;i++){
  const scorer=weightedPick(xi,'goal');if(!scorer)continue;scorer.season.goals++;scorer.career.goals++;
  let assist=null;const assistPool=xi.filter(p=>p.id!==scorer.id);if(assistPool.length&&random()<.82){assist=weightedPick(assistPool,'assist');assist.season.assists++;assist.career.assists++}
  events.push({scorerId:scorer.id,scorer:scorer.name,assistId:assist?.id||null,assist:assist?.name||null});
 }return events;
}
function injuryCheck(t,xi){
 if(random()>.18)return null;const p=pick(xi);if(!p)return null;p.injury=ri(5,1);world.news.unshift(`🏥 ${p.name} (${t.name}) estará lesionado ${p.injury} partidos.`);return p;
}
function tickInjuries(t,excludeId=null){t.players.forEach(p=>{if(p.injury>0&&p.id!==excludeId)p.injury--})}
function updateRivalry(a,b,hg,ag){
 const key=[a.id,b.id].sort((x,y)=>x-y).join('-'),r=world.rivalries[key]??={a:Math.min(a.id,b.id),b:Math.max(a.id,b.id),games:0,draws:0,wins:{},goals:{}};
 r.games++;r.goals[a.id]=(r.goals[a.id]||0)+hg;r.goals[b.id]=(r.goals[b.id]||0)+ag;if(hg===ag)r.draws++;else{const w=hg>ag?a.id:b.id;r.wins[w]=(r.wins[w]||0)+1}world.rivalries[key]=r;
}
function updateMatchRecords(r){
 const a=team(r.home),b=team(r.away),margin=Math.abs(r.hg-r.ag),total=r.hg+r.ag;
 if(!world.records.biggestWin||margin>world.records.biggestWin.margin)world.records.biggestWin={margin,score:`${r.hg}-${r.ag}`,home:a.name,away:b.name,season:world.season.no};
 if(!world.records.mostGoalsMatch||total>world.records.mostGoalsMatch.total)world.records.mostGoalsMatch={total,score:`${r.hg}-${r.ag}`,home:a.name,away:b.name,season:world.season.no};
}
function simMatch(h,a,cup=false){
 const hs=teamStrength(h),as=teamStrength(a),hd=[d6(),d6()],ad=[d6(),d6()],hr=hd[0]+hd[1],ar=ad[0]+ad[1],mode=world.config.mode,chaos=world.config.chaos;
 let hp,ap,hdef,adef;
 if(mode==='random'){hp=hr*10+rnd(-22,22)*chaos;ap=ar*10+rnd(-22,22)*chaos;hdef=adef=70}
 else{hp=hs.atk*.52+hs.ovr*.25+hr*2.15+rnd(-7,7)*chaos+(mode==='equal'?world.config.homeAdv*4:world.config.homeAdv*5);ap=as.atk*.52+as.ovr*.25+ar*2.15+rnd(-7,7)*chaos;hdef=hs.def*.67+hs.ovr*.18;adef=as.def*.67+as.ovr*.18}
 function goals(att,def,roll){let x=mode==='random'?clamp(.5+(att-45)/38,.1,4.7):clamp(1.12+(att-def)/12+(roll-7)*.08,.1,4.7),g=0,ch=5+Math.max(0,Math.round(x));for(let i=0;i<ch;i++)if(random()<clamp(x/ch,.025,.58))g++;if(random()<.045*chaos)g++;return clamp(g,0,8)}
 let hg=goals(hp,adef,hr),ag=goals(ap,hdef,ar),pens=null,winner=null;
 if(cup&&hg===ag){let ph=0,pa=0;for(let i=0;i<5;i++){if(random()<.74)ph++;if(random()<.74)pa++}while(ph===pa){if(random()<.74)ph++;if(random()<.74)pa++}pens=[ph,pa];winner=ph>pa?h.id:a.id}else winner=hg>ag?h.id:ag>hg?a.id:null;
 hs.lineup.forEach(p=>{p.season.apps++;p.career.apps++});as.lineup.forEach(p=>{p.season.apps++;p.career.apps++});
 const hEvents=recordGoal(h,hs.lineup,hg),aEvents=recordGoal(a,as.lineup,ag),newHInjury=injuryCheck(h,hs.lineup),newAInjury=injuryCheck(a,as.lineup);tickInjuries(h,newHInjury?.id||null);tickInjuries(a,newAInjury?.id||null);
 const r={home:h.id,away:a.id,hg,ag,hd,ad,pens,winner,hPower:Math.round(hp),aPower:Math.round(ap),homeEvents:hEvents,awayEvents:aEvents};
 updateMatchRecords(r);updateRivalry(h,a,hg,ag);world.historicalMatches++;return r;
}
function stats(div){return div==='d1'?world.season.d1Stats:world.season.d2Stats}
function sortedStats(div){return Object.values(stats(div)).sort((a,b)=>b.pts-a.pts||((b.gf-b.ga)-(a.gf-a.ga))||b.gf-a.gf||a.name.localeCompare(b.name))}
function applyResult(div,r){const st=stats(div),h=st[r.home],a=st[r.away];h.pj++;a.pj++;h.gf+=r.hg;h.ga+=r.ag;a.gf+=r.ag;a.ga+=r.hg;if(r.hg>r.ag){h.w++;a.l++;h.pts+=3}else if(r.hg<r.ag){a.w++;h.l++;a.pts+=3}else{h.d++;a.d++;h.pts++;a.pts++}}
function divisionSchedule(div){return div==='d1'?world.season.d1Schedule:world.season.d2Schedule}
function divisionRound(div){return div==='d1'?world.season.d1Round:world.season.d2Round}
function setDivisionRound(div,v){if(div==='d1')world.season.d1Round=v;else world.season.d2Round=v}
function leagueHistoryEntry(div,round){let e=world.season.leagueHistory.find(x=>x.division===div&&x.round===round);if(!e){e={division:div,round,results:[]};world.season.leagueHistory.push(e)}return e}
function updateLeagueCompletion(){const s=world.season;s.leagueFinished=s.d1Round>=s.d1Schedule.length&&s.d2Round>=s.d2Schedule.length;if(s.leagueFinished)checkSeasonComplete()}
function simLeagueMatch(div,gameIndex,{render=true,save=true}={}){
 if(!world||world.phase!=='season'||world.season.leagueFinished)return null;const sched=divisionSchedule(div),idx=divisionRound(div);if(idx>=sched.length)return null;const games=sched[idx],g=games[gameIndex];if(!g||g.result)return g?.result||null;
 const r=simMatch(team(g.home),team(g.away));g.result=r;applyResult(div,r);const he=leagueHistoryEntry(div,idx+1);he.results.push(r);world.season.lastReveal={type:'league',division:div,round:idx+1,result:r};
 if(games.every(x=>x.result))setDivisionRound(div,idx+1);updateLeagueCompletion();if(save)autosave('league match');if(render&&!TESTING)renderAll();return r;
}
function simDivisionRound(div,{render=false,save=false}={}){
 if(!world||world.phase!=='season')return;const sched=divisionSchedule(div),idx=divisionRound(div);if(idx>=sched.length)return;const games=sched[idx];for(let i=0;i<games.length;i++)if(!games[i].result)simLeagueMatch(div,i,{render:false,save:false});if(save)autosave('division round');if(render&&!TESTING)renderAll();
}
function simLeagueRound(){if(!world||world.phase!=='season'||world.season.leagueFinished)return;simDivisionRound('d1');simDivisionRound('d2');updateLeagueCompletion();autosave('league round');if(!TESTING)renderAll()}
function simNextLeagueMatch(div=leagueTab){if(!world||world.phase!=='season')return null;const sched=divisionSchedule(div),idx=divisionRound(div);if(idx>=sched.length){if(!TESTING)note('Esta división ya ha terminado');return null}const i=sched[idx].findIndex(g=>!g.result);if(i<0)return null;return simLeagueMatch(div,i)}
function simSelectedTeamMatch(){if(!world)return;const id=+$('#matchTeamSelect').value,sched=divisionSchedule(leagueTab),idx=divisionRound(leagueTab);if(idx>=sched.length)return note('Esta división ya ha terminado');const i=sched[idx].findIndex(g=>(g.home===id||g.away===id)&&!g.result);if(i<0)return note('Ese club ya ha jugado esta jornada');simLeagueMatch(leagueTab,i)}
$('#simLeagueNext').addEventListener('click',()=>simNextLeagueMatch());$('#simTeamMatch').addEventListener('click',simSelectedTeamMatch);$('#simLeagueRound').addEventListener('click',simLeagueRound);
/* v5 binds simLeagueAll below: division-specific */

function cupRoundName(n){if(n<=2)return'Final';if(n<=4)return'Semifinales';if(n<=8)return'Cuartos';if(n<=16)return'Octavos';if(n<=32)return'Dieciseisavos';return`Ronda de ${n}`}
function currentCupHistory(){const c=world.season.cup,name=cupRoundName(c.currentPairs.length*2);let e=world.season.cupHistory.find(x=>x.roundNo===c.roundNo);if(!e){e={roundNo:c.roundNo,name,results:[]};world.season.cupHistory.push(e)}return e}
function resolveCupByes(){const c=world.season.cup;for(const p of c.currentPairs){if(p.winner!=null)continue;if(p.home==null&&p.away!=null)p.winner=p.away;else if(p.away==null&&p.home!=null)p.winner=p.home}}
function advanceCupIfComplete(){const c=world.season.cup;resolveCupByes();if(!c.currentPairs.length||!c.currentPairs.every(p=>p.winner!=null))return false;const winners=c.currentPairs.map(p=>p.winner).filter(x=>x!=null);if(winners.length===1){c.winner=winners[0];c.finished=true;checkSeasonComplete()}else{c.currentPairs=pairCup(winners);c.roundNo++}return true}
function simCupMatch(index,{render=true,save=true}={}){
 if(!world||world.phase!=='season'||world.season.cup.finished)return null;const c=world.season.cup;resolveCupByes();const p=c.currentPairs[index];if(!p||p.winner!=null){advanceCupIfComplete();return p?.result||null}if(p.home==null||p.away==null){resolveCupByes();advanceCupIfComplete();return null}
 const roundName=cupRoundName(c.currentPairs.length*2),roundNo=c.roundNo,r=simMatch(team(p.home),team(p.away),true);p.result=r;p.winner=r.winner;const he=currentCupHistory();he.name=roundName;he.roundNo=roundNo;he.results.push(r);world.season.lastReveal={type:'cup',round:roundName,result:r};advanceCupIfComplete();if(save)autosave('cup match');if(render&&!TESTING)renderAll();return r;
}
function simNextCupMatch(){if(!world||world.phase!=='season'||world.season.cup.finished)return null;resolveCupByes();const c=world.season.cup,i=c.currentPairs.findIndex(p=>p.winner==null&&p.home!=null&&p.away!=null);if(i<0){advanceCupIfComplete();if(!TESTING)renderAll();return null}return simCupMatch(i)}
function simCupRound(){if(!world||world.phase!=='season'||world.season.cup.finished)return;const c=world.season.cup;resolveCupByes();const pairs=[...c.currentPairs];for(let i=0;i<pairs.length;i++)if(pairs[i].winner==null&&pairs[i].home!=null&&pairs[i].away!=null)simCupMatch(i,{render:false,save:false});advanceCupIfComplete();autosave('cup round');if(!TESTING)renderAll()}
$('#simCupNext').addEventListener('click',simNextCupMatch);$('#simCupRound').addEventListener('click',simCupRound);$('#simCupAll').addEventListener('click',()=>{if(!world)return;let g=30;while(!world.season.cup.finished&&g-->0)simCupRound();autosave('cup complete')});
function checkSeasonComplete(){if(world.season.leagueFinished&&world.season.cup.finished&&!world.season.finalized)finalizeSeason()}

function topSeasonPlayers(key){return allPlayers().filter(p=>!p.retired).sort((a,b)=>b.season[key]-a.season[key]||b.ovr-a.ovr)}
function honour(name){world.honours[name]??={league:0,cup:0,doubles:0,invincible:0,promotions:0,relegations:0};return world.honours[name]}
function finalizeSeason(){
 const d1=sortedStats('d1'),d2=sortedStats('d2'),m=world.config.movement,champ=d1[0],cup=team(world.season.cup.winner),rel=d1.slice(-m),pro=d2.slice(0,m);if(!champ||!cup)throw new Error('Estado final inválido: falta campeón de Liga o Copa');const invincible=champ.l===0;
 const scorer=topSeasonPlayers('goals')[0],assistant=topSeasonPlayers('assists')[0];
 const snapshot={season:world.season.no,champion:champ.name,cupWinner:cup.name,double:champ.id===cup.id,invincible,champPoints:champ.pts,relegated:rel.map(x=>x.name),promoted:pro.map(x=>x.name),topScorer:scorer?{name:scorer.name,goals:scorer.season.goals,club:team(scorer.teamId)?.name}:null,topAssist:assistant?{name:assistant.name,assists:assistant.season.assists,club:team(assistant.teamId)?.name}:null,d1:d1.map(x=>({...x})),d2:d2.map(x=>({...x}))};
 world.history.push(snapshot);honour(champ.name).league++;honour(cup.name).cup++;if(snapshot.double)honour(champ.name).doubles++;if(invincible)honour(champ.name).invincible++;rel.forEach(x=>honour(x.name).relegations++);pro.forEach(x=>honour(x.name).promotions++);
 for(const s of d1){if(!world.records.highestPoints||s.pts>world.records.highestPoints.value)world.records.highestPoints={value:s.pts,team:s.name,season:world.season.no};if(!world.records.mostGoalsTeam||s.gf>world.records.mostGoalsTeam.value)world.records.mostGoalsTeam={value:s.gf,team:s.name,season:world.season.no}}
 if(scorer&&(!world.records.topScorerSeason||scorer.season.goals>world.records.topScorerSeason.value))world.records.topScorerSeason={value:scorer.season.goals,player:scorer.name,club:team(scorer.teamId)?.name,season:world.season.no};
 if(assistant&&(!world.records.topAssistSeason||assistant.season.assists>world.records.topAssistSeason.value))world.records.topAssistSeason={value:assistant.season.assists,player:assistant.name,club:team(assistant.teamId)?.name,season:world.season.no};
 world.season.finalized=true;world.news.unshift(`🏆 ${champ.name} conquista la Liga. ${cup.name} gana la Copa.`);
 processAgingAndRetirements();openMarket();
}
function processAgingAndRetirements(){
 for(const t of world.teams){
  for(const p of [...t.players]){
   p.career.seasons++;p.age++;
   if(p.age<=23)p.ovr=clamp(p.ovr+(random()<.65?ri(3):0),40,96);
   else if(p.age>=31)p.ovr=clamp(p.ovr-ri(3),40,96);
   let retire=p.age>=39||(p.age>=36&&random()<.55)||(p.age>=34&&random()<.20);
   if(retire){p.retired=true;world.retired.push(structuredClone(p));t.players=t.players.filter(x=>x.id!==p.id);world.news.unshift(`👋 ${p.name} se retira a los ${p.age} años.`)}
  }
  while(t.players.length<18){const pos=leastCoveredPosition(t);const y=makePlayer(t.id,pos,Math.max(58,t.ovr-8),17+ri(3));t.players.push(y);world.news.unshift(`🌱 ${t.name} incorpora al canterano ${y.name}.`)}
  t.budget=Math.round((t.budget+10+rnd(0,12))*10)/10;
 }
}
function leastCoveredPosition(t){let c={POR:0,DEF:0,MED:0,DEL:0};t.players.forEach(p=>c[p.pos]++);return [...POS].sort((a,b)=>(c[a]/POS_COUNTS[a])-(c[b]/POS_COUNTS[b]))[0]}
function openMarket(){world.phase='market';world.offseason={fromD1:[...world.season.d1ids],fromD2:[...world.season.d2ids]};world.offers=[];world.transferLog=[];generateOffers(8);autosave('market open');if(!TESTING)renderAll()}
function saleBlockReason(seller,p){if(!seller||!p)return'Operación inválida';if(seller.players.length<=16)return'El club debe conservar al menos 16 jugadores';if(p.pos==='POR'&&seller.players.filter(x=>x.pos==='POR').length<=1)return'El club debe conservar al menos un portero';return null}
function ensureSquadDepth(t){while(t.players.filter(p=>p.pos==='POR').length<2)t.players.push(makePlayer(t.id,'POR',Math.max(58,t.ovr-9),17+ri(3)));while(t.players.length<18)t.players.push(makePlayer(t.id,leastCoveredPosition(t),Math.max(58,t.ovr-8),17+ri(3)))}
function transferPlayer(playerId,buyerId,fee){
 const seller=world.teams.find(t=>t.players.some(p=>p.id===playerId)),buyer=team(buyerId);if(!seller||!buyer||seller.id===buyer.id)return false;const p=seller.players.find(x=>x.id===playerId);if(buyer.budget<fee||saleBlockReason(seller,p))return false;
 seller.players=seller.players.filter(x=>x.id!==playerId);buyer.players.push(p);p.teamId=buyer.id;buyer.budget=Math.round((buyer.budget-fee)*10)/10;seller.budget=Math.round(clamp(seller.budget+fee,3,160)*10)/10;world.transferLog.unshift(`${p.name}: ${seller.name} → ${buyer.name} por ${fee.toFixed(1)}M`);autosave('transfer');return true;
}
function generateOffers(n=8){
 if(!world||world.phase!=='market')return;const clubs=world.teams;
 for(let i=0;i<n;i++){const seller=pick(clubs),candidates=seller.players.filter(p=>p.age<36&&!saleBlockReason(seller,p));if(!candidates.length)continue;const p=pick(candidates),buyers=clubs.filter(t=>t.id!==seller.id&&t.budget>1);if(!buyers.length)continue;const buyer=pick(buyers),base=playerValue(p),fee=Math.max(.5,Math.round(base*rnd(.8,1.35)*10)/10);world.offers.push({id:crypto.randomUUID?crypto.randomUUID():String(random()),playerId:p.id,sellerId:seller.id,buyerId:buyer.id,fee,status:'pending',source:'auto'})}
 autosave('offers');if(!TESTING)renderMarket();
}
$('#generateOffers').addEventListener('click',()=>generateOffers(6));
function offerAction(id,accept){
 const o=world.offers.find(x=>x.id===id);if(!o||o.status!=='pending')return;if(accept){const ok=transferPlayer(o.playerId,o.buyerId,o.fee);o.status=ok?'accepted':'failed';if(!ok&&!TESTING)note('El comprador no tiene presupuesto suficiente')}else o.status='rejected';autosave('offer action');if(!TESTING){renderMarket();syncDash()};
}
function renderMarket(){
 const root=$('#offerList'),log=$('#transferLog');
 if(!world||world.phase!=='market'){
  $('#closeMarket').disabled=true;root.innerHTML='<div class="empty">El mercado se abre cuando terminan Liga y Copa.</div>';log.innerHTML='<div class="muted small">Sin movimientos.</div>';
  if($('#marketOfferCount'))$('#marketOfferCount').textContent='0';if($('#marketDoneCount'))$('#marketDoneCount').textContent='0';if($('#marketSpend'))$('#marketSpend').textContent='0M';if($('#marketNextSeason'))$('#marketNextSeason').textContent='—';
  renderMarketSelectors();renderMarketValuation();return
 }
 $('#closeMarket').disabled=false;root.innerHTML='';
 const pending=world.offers.filter(o=>o.status==='pending'),accepted=world.offers.filter(o=>o.status==='accepted'),spent=accepted.reduce((x,o)=>x+o.fee,0);
 if($('#marketOfferCount'))$('#marketOfferCount').textContent=pending.length;if($('#marketDoneCount'))$('#marketDoneCount').textContent=accepted.length;if($('#marketSpend'))$('#marketSpend').textContent=spent.toFixed(1)+'M';if($('#marketNextSeason'))$('#marketNextSeason').textContent='T'+(world.season.no+1);
 if(!pending.length)root.innerHTML='<div class="empty">No hay propuestas pendientes. Puedes generar nuevas o crear una manual.</div>';
 pending.forEach(o=>{
  const p=allPlayers().find(x=>x.id===o.playerId)||world.retired.find(x=>x.id===o.playerId),seller=team(o.sellerId),buyer=team(o.buyerId);if(!p||!seller||!buyer)return;
  const value=playerValue(p),ratio=o.fee/value,feeClass=ratio<.88?'feeGood':ratio>1.2?'feeHigh':'',guard=saleBlockReason(seller,p),canPay=buyer.budget>=o.fee&&!guard;
  const el=document.createElement('div');el.className='transfer';
  el.innerHTML=`<div class="transferPlayer"><span class="playerIcon">${p.pos}</span><div><b>${esc(p.name)}</b><div class="muted tiny">${p.age} años · OVR ${p.ovr} · valor ${value.toFixed(1)}M</div></div></div><div><span class="muted tiny">${esc(seller.name)}</span><div>→ <b>${esc(buyer.name)}</b></div><div class="muted tiny ${buyer.budget>=o.fee?'':'budgetBad'}">Presupuesto comprador: ${buyer.budget.toFixed(1)}M</div>${guard?`<div class="marketGuard">${esc(guard)}</div>`:'<div class="marketSafe">Plantilla vendedora protegida</div>'}</div><div class="${feeClass}"><b>${o.fee.toFixed(1)}M</b><div class="muted tiny">${ratio<.88?'Buen precio':ratio>1.2?'Prima alta':'Precio razonable'}</div></div><div class="marketActions"><button class="btn good ac" ${canPay?'':'disabled'}>Aceptar</button><button class="btn danger re">Rechazar</button></div>`;
  el.querySelector('.ac').addEventListener('click',()=>offerAction(o.id,true));el.querySelector('.re').addEventListener('click',()=>offerAction(o.id,false));root.appendChild(el)
 });
 log.innerHTML=world.transferLog.length?world.transferLog.map(x=>`<div class="news">✅ ${esc(x)}</div>`).join(''):'<div class="muted small">Aún no se ha completado ningún traspaso.</div>';renderMarketSelectors();renderMarketValuation();
}
function renderMarketSelectors(){
 const sellers=$('#sellerSelect'),buyers=$('#buyerSelect');sellers.innerHTML=buyers.innerHTML='';const ts=world?.teams||teams;ts.forEach(t=>{sellers.insertAdjacentHTML('beforeend',`<option value="${t.id}">${esc(t.name)}</option>`);buyers.insertAdjacentHTML('beforeend',`<option value="${t.id}">${esc(t.name)}</option>`)});
 renderMarketPlayers();
}
$('#sellerSelect').addEventListener('change',renderMarketPlayers);$('#marketPlayerSelect').addEventListener('change',renderMarketValuation);$('#buyerSelect').addEventListener('change',renderMarketValuation);
function renderMarketPlayers(){const s=world?.teams.find(t=>t.id===+$('#sellerSelect').value),p=$('#marketPlayerSelect');p.innerHTML='';if(!s){renderMarketValuation();return}s.players.filter(x=>!saleBlockReason(s,x)).forEach(x=>p.insertAdjacentHTML('beforeend',`<option value="${x.id}">${esc(x.name)} · ${x.pos} · ${x.ovr}</option>`));renderMarketValuation()}
function renderMarketValuation(){const box=$('#marketValuation');if(!box)return;const p=allPlayers().find(x=>x.id===+$('#marketPlayerSelect').value),buyer=team(+$('#buyerSelect').value);if(!p){box.textContent='Selecciona un jugador para ver su valoración orientativa.';return}const v=playerValue(p);box.innerHTML=`Valor estimado <b>${v.toFixed(1)}M</b> · ${p.age} años · OVR ${p.ovr}${buyer?` · comprador: <b>${buyer.budget.toFixed(1)}M</b> disponibles`:''}`;}
$('#proposeTransfer').addEventListener('click',()=>{
 if(!world||world.phase!=='market'){note('Solo puedes proponer traspasos en verano');return}
 const sellerId=+$('#sellerSelect').value,buyerId=+$('#buyerSelect').value,playerId=+$('#marketPlayerSelect').value,fee=Math.max(0,+$('#customFee').value||0);
 if(sellerId===buyerId){note('Vendedor y comprador deben ser distintos');return}
 if(!playerId){note('No hay un jugador transferible seleccionado');return}
 world.offers.push({id:crypto.randomUUID?crypto.randomUUID():String(random()),playerId,sellerId,buyerId,fee,status:'pending',source:'manual'});autosave('manual offer');renderMarket();note('Propuesta añadida');
});
$('#closeMarket').addEventListener('click',startNextSeason);
function startNextSeason(){
 if(!world||world.phase!=='market')return;world.teams.forEach(ensureSquadDepth);
 const m=world.config.movement,d1=sortedFromArchive('d1'),d2=sortedFromArchive('d2'),rel=d1.slice(-m).map(x=>x.id),pro=d2.slice(0,m).map(x=>x.id);
 const newD1=world.offseason.fromD1.filter(id=>!rel.includes(id)).concat(pro),newD2=world.offseason.fromD2.filter(id=>!pro.includes(id)).concat(rel);
 world.phase='season';initSeason(world.season.no+1,newD1,newD2);world.news.unshift(`📅 Comienza la temporada ${world.season.no}.`);autosave('new season');if(!TESTING){renderAll();switchView('dashboard');note('Nueva temporada iniciada')};
}
function sortedFromArchive(div){const last=world.history[world.history.length-1];return last?(div==='d1'?last.d1:last.d2):[]}


function scorerSummary(events=[]){if(!events.length)return'<span class="muted">Sin goleadores</span>';const counts=new Map();events.forEach(e=>{const k=e.scorer;counts.set(k,(counts.get(k)||0)+1)});return[...counts].map(([n,c])=>`${esc(n)}${c>1?' ×'+c:''}`).join(' · ')}
function renderResultReveal(boxId,reveal,typeLabel){const box=$(boxId);if(!box)return;if(!reveal?.result){box.style.display='none';return}const r=reveal.result,h=team(r.home),a=team(r.away),pen=r.pens?` · penaltis ${r.pens[0]}-${r.pens[1]}`:'';box.style.display='block';box.innerHTML=`<div class="revealMeta">${esc(typeLabel)} · final${pen}</div><div class="revealScore"><div class="revealClub home">${esc(h?.name||'—')}</div><div class="revealNumber">${r.hg} — ${r.ag}</div><div class="revealClub away">${esc(a?.name||'—')}</div></div><div class="revealDetail"><div><b>🎲 ${r.hd.join(' + ')}</b> · potencia ${r.hPower}<div class="scorerLine">⚽ ${scorerSummary(r.homeEvents)}</div></div><div class="right"><b>🎲 ${r.ad.join(' + ')}</b> · potencia ${r.aPower}<div class="scorerLine">⚽ ${scorerSummary(r.awayEvents)}</div></div></div>`}
function populateMatchTeamSelect(){const sel=$('#matchTeamSelect');if(!sel||!world)return;const ids=leagueTab==='d1'?world.season.d1ids:world.season.d2ids,old=+sel.value;sel.innerHTML='';ids.map(team).filter(Boolean).sort((a,b)=>a.name.localeCompare(b.name)).forEach(t=>sel.insertAdjacentHTML('beforeend',`<option value="${t.id}">${esc(t.name)}</option>`));if([...sel.options].some(o=>+o.value===old))sel.value=old}
function resultRows(results){
 return results.map(r=>{
  const h=team(r.home),a=team(r.away),pen=r.pens?` <span class="muted">(${r.pens[0]}-${r.pens[1]} pen.)</span>`:'';
  return `<div class="resultCompact"><span style="text-align:right">${esc(h?.name||'—')}</span><span class="rscore">${r.hg}-${r.ag}${pen}</span><span>${esc(a?.name||'—')}</span><span class="diceMini">🎲 ${r.hd.join('+')} / ${r.ad.join('+')}</span></div>`;
 }).join('');
}
function renderLeagueLastResults(){
 const box=$('#leagueLastResults');if(!box||!world){if(box)box.style.display='none';return}
 const last=[...world.season.leagueHistory].reverse().find(x=>x.division===leagueTab);
 if(!last){box.style.display='none';return}
 box.style.display='block';box.innerHTML=`<div class="lastResultsTitle"><b>Última jornada jugada</b><span class="badge">J${last.round}</span></div>${resultRows(last.results)}`;
}
function renderCupLastResults(){
 const box=$('#cupLastResults');if(!box||!world||!world.season.cupHistory.length){if(box)box.style.display='none';return}
 const last=world.season.cupHistory[world.season.cupHistory.length-1];box.style.display='block';box.innerHTML=`<div class="lastResultsTitle"><b>${last.name}</b><span class="badge">Resultados</span></div>${resultRows(last.results)}`;
}

function renderLeague(){
 const divisionDone=!world||world.phase!=='season'||divisionRound(leagueTab)>=divisionSchedule(leagueTab).length;
 $('#simLeagueNext').disabled=divisionDone;$('#simLeagueRound').disabled=divisionDone;$('#simLeagueAll').disabled=divisionDone;$('#simTeamMatch').disabled=divisionDone;
 const root=$('#leagueFixtures'),reveal=world?.season?.lastReveal;if(!world){$('#leagueTitle').textContent='Sin competición';root.className='empty';root.innerHTML='Crea un mundo.';renderResultReveal('#leagueReveal',null,'');return}
 populateMatchTeamSelect();const sched=divisionSchedule(leagueTab),idx=divisionRound(leagueTab),name=leagueTab==='d1'?'Primera División':'Segunda División';
 if(reveal?.type==='league'&&reveal.division===leagueTab)renderResultReveal('#leagueReveal',reveal,`${name} · Jornada ${reveal.round}`);else renderResultReveal('#leagueReveal',null,'');
 if(idx>=sched.length){$('#leagueTitle').textContent=name+' completada';$('#leagueBadge').textContent='✓';root.className='';root.innerHTML='<div class="round"><b>Calendario finalizado.</b><div class="muted tiny">Consulta la tabla final o continúa con la Copa.</div></div>';renderLeagueLastResults();return}
 const games=sched[idx],played=games.filter(g=>g.result).length;$('#leagueTitle').textContent=`${name} · Jornada ${idx+1} de ${sched.length}`;$('#leagueBadge').textContent=`${played}/${games.length} jugados`;
 root.className='';root.innerHTML=games.map((g,i)=>{const h=team(g.home),a=team(g.away),r=g.result;if(r)return`<div class="match resultWin"><div class="home"><b>${esc(h.name)}</b><div class="muted tiny">${world.config.mode==='ratings'?'OVR '+h.ovr+' · ':''}Local</div></div><div class="scorebox"><div class="fixtureResult">${r.hg} — ${r.ag}</div><div class="playedBadge">✓ Jugado</div></div><div class="away"><b>${esc(a.name)}</b><div class="muted tiny">${world.config.mode==='ratings'?'OVR '+a.ovr+' · ':''}Visitante</div></div></div>`;return`<div class="match"><div class="home"><b>${esc(h.name)}</b><div class="muted tiny">${world.config.mode==='ratings'?'XI '+teamStrength(h).ovr.toFixed(1)+' · ':''}Disponibles ${available(h).length}/${h.players.length}</div></div><div class="scorebox"><div class="score">VS</div><button class="btn primary fixtureBtn simFixture" data-i="${i}">Simular</button></div><div class="away"><b>${esc(a.name)}</b><div class="muted tiny">${world.config.mode==='ratings'?'XI '+teamStrength(a).ovr.toFixed(1)+' · ':''}Disponibles ${available(a).length}/${a.players.length}</div></div></div>`}).join('');
 root.querySelectorAll('.simFixture').forEach(b=>b.addEventListener('click',()=>simLeagueMatch(leagueTab,+b.dataset.i)));renderLeagueLastResults();
}
$$('[data-div]').forEach(b=>b.addEventListener('click',()=>{leagueTab=b.dataset.div;$$('[data-div]').forEach(x=>x.classList.toggle('active',x===b));renderLeague()}));

function renderCup(){
 $('#simCupNext').disabled=!world||world.phase!=='season'||world.season.cup.finished;$('#simCupRound').disabled=$('#simCupNext').disabled;$('#simCupAll').disabled=$('#simCupNext').disabled;
 const root=$('#cupView'),reveal=world?.season?.lastReveal;if(!world){root.className='empty';root.innerHTML='Sin Copa.';renderResultReveal('#cupReveal',null,'');return}const c=world.season.cup;
 if(reveal?.type==='cup')renderResultReveal('#cupReveal',reveal,reveal.round);else renderResultReveal('#cupReveal',null,'');
 if(c.finished){$('#cupTitle').textContent='Copa finalizada';$('#cupBadge').textContent='🏆 '+team(c.winner).name;root.className='';root.innerHTML=`<div class="round"><div style="font-size:20px;font-weight:950">🏆 ${esc(team(c.winner).name)}</div><div class="muted tiny">Campeón de Copa · temporada ${world.season.no}</div></div>`;renderCupLastResults();return}
 resolveCupByes();$('#cupTitle').textContent=cupRoundName(c.currentPairs.length*2);const pending=c.currentPairs.filter(p=>p.winner==null&&p.home!=null&&p.away!=null).length;$('#cupBadge').textContent=`${pending} pendientes`;root.className='';root.innerHTML=c.currentPairs.map((p,i)=>{if(p.home==null||p.away==null){const id=p.home??p.away;return`<div class="round"><span class="badge">BYE</span> <b>${id?esc(team(id).name):'—'}</b> pasa automáticamente</div>`}if(p.result)return`<div class="match resultWin"><div class="home"><b>${esc(team(p.home).name)}</b></div><div class="scorebox"><div class="fixtureResult">${p.result.hg} — ${p.result.ag}</div><div class="playedBadge">${p.result.pens?'pen. '+p.result.pens[0]+'-'+p.result.pens[1]:'✓ Clasificado: '+esc(team(p.winner).name)}</div></div><div class="away"><b>${esc(team(p.away).name)}</b></div></div>`;return`<div class="match"><div class="home"><b>${esc(team(p.home).name)}</b></div><div class="scorebox"><div class="score">VS</div><button class="btn cup fixtureBtn simCupFixture" data-i="${i}">Simular</button><div class="muted tiny">Empate → penaltis</div></div><div class="away"><b>${esc(team(p.away).name)}</b></div></div>`}).join('');root.querySelectorAll('.simCupFixture').forEach(b=>b.addEventListener('click',()=>simCupMatch(+b.dataset.i)));renderCupLastResults();
}
function tableRow(s,i,n,div){let cls='';if(world.season.leagueFinished){if(div==='d1'&&i>=n-world.config.movement)cls='relegate';if(div==='d2'&&i<world.config.movement)cls='promote';if(div==='d1'&&i===0)cls+=' champ'}return`<tr class="${cls}"><td>${i+1}</td><td><span class="dot" style="display:inline-block;background:${s.color};margin-right:6px"></span><b>${esc(s.name)}</b></td><td>${s.pj}</td><td>${s.w}</td><td>${s.d}</td><td>${s.l}</td><td>${s.gf}</td><td>${s.ga}</td><td>${s.gf-s.ga}</td><td><b>${s.pts}</b></td></tr>`}
function renderTables(){for(const d of ['d1','d2']){const b=$('#table'+d.toUpperCase());if(!world){b.innerHTML='<tr><td colspan="10">Sin datos</td></tr>';continue}const a=sortedStats(d);b.innerHTML=a.map((s,i)=>tableRow(s,i,a.length,d)).join('')}}
function renderPlayerStats(){
 for(const [key,id] of [['goals','#scorers'],['assists','#assists']]){const a=allPlayers().filter(p=>!p.retired).sort((x,y)=>y.season[key]-x.season[key]||y.ovr-x.ovr).slice(0,15);$(id).innerHTML=a.map((p,i)=>`<tr><td>${i+1}</td><td>${esc(p.name)}</td><td>${esc(team(p.teamId)?.name||'—')}</td><td><b>${p.season[key]}</b></td></tr>`).join('')}
 const inj=allPlayers().filter(p=>p.injury>0).sort((a,b)=>b.injury-a.injury);$('#injuries').innerHTML=inj.length?inj.map(p=>`<div class="trophyrow"><span>${esc(p.name)}<div class="muted tiny">${esc(team(p.teamId)?.name||'')}</div></span><b class="pillBad">${p.injury} partidos</b></div>`).join(''):'<div class="muted small">No hay lesionados.</div>';
}
function renderHistory(){
 const r=$('#seasonArchive');if(!world||!world.history.length){r.innerHTML='<div class="empty">Completa una temporada para empezar a escribir la historia.</div>';return}
 r.innerHTML=[...world.history].reverse().map(h=>`<div class="round"><div class="seasonHero"><div class="seasonNumber">T${h.season}</div><div><div class="roundtitle" style="margin:0">${esc(h.champion)} campeón de Liga ${h.double?'· DOBLETE':''}</div><div class="muted tiny">Copa: ${esc(h.cupWinner)} · ${h.champPoints} puntos ${h.invincible?'· invicto':''}</div></div><div style="text-align:right"><div>⚽ ${h.topScorer?esc(h.topScorer.name)+' '+h.topScorer.goals:'—'}</div><div class="muted tiny">🎯 ${h.topAssist?esc(h.topAssist.name)+' '+h.topAssist.assists:'—'}</div></div></div><div class="grid g2"><div><div class="small pillGood">↑ ${h.promoted.map(esc).join(', ')}</div><div class="small pillBad">↓ ${h.relegated.map(esc).join(', ')}</div></div><div class="muted tiny" style="text-align:right">Archivo permanente de la temporada ${h.season}</div></div></div>`).join('');
}
function careerCandidates(){return [...allPlayers(),...(world?.retired||[])].sort((a,b)=>(b.career.goals*4+b.career.assists*2+b.career.apps*.15)-(a.career.goals*4+a.career.assists*2+a.career.apps*.15))}
function renderRecords(){
 if(!world){$('#clubRecords').innerHTML=$('#matchRecords').innerHTML=$('#seasonPlayerRecords').innerHTML=$('#careerRecords').innerHTML='<div class="empty">Sin datos.</div>';return}
 const r=world.records,careers=careerCandidates(),cg=[...careers].sort((a,b)=>b.career.goals-a.career.goals)[0],ca=[...careers].sort((a,b)=>b.career.assists-a.career.assists)[0],apps=[...careers].sort((a,b)=>b.career.apps-a.career.apps)[0];
 $('#clubRecords').innerHTML=`<div class="recordrow"><span>Más puntos</span><b>${r.highestPoints?r.highestPoints.value+' · '+esc(r.highestPoints.team):'—'}</b></div><div class="recordrow"><span>Más GF</span><b>${r.mostGoalsTeam?r.mostGoalsTeam.value+' · '+esc(r.mostGoalsTeam.team):'—'}</b></div>`;
 $('#matchRecords').innerHTML=`<div class="recordrow"><span>Mayor goleada</span><b>${r.biggestWin?esc(r.biggestWin.home)+' '+r.biggestWin.score+' '+esc(r.biggestWin.away):'—'}</b></div><div class="recordrow"><span>Más goles</span><b>${r.mostGoalsMatch?r.mostGoalsMatch.score+' · '+r.mostGoalsMatch.total:'—'}</b></div>`;
 $('#seasonPlayerRecords').innerHTML=`<div class="recordrow"><span>Goles / temporada</span><b>${r.topScorerSeason?r.topScorerSeason.value+' · '+esc(r.topScorerSeason.player):'—'}</b></div><div class="recordrow"><span>Asist. / temporada</span><b>${r.topAssistSeason?r.topAssistSeason.value+' · '+esc(r.topAssistSeason.player):'—'}</b></div>`;
 $('#careerRecords').innerHTML=`<div class="recordrow"><span>Goles carrera</span><b>${cg?cg.career.goals+' · '+esc(cg.name):'—'}</b></div><div class="recordrow"><span>Asist. carrera</span><b>${ca?ca.career.assists+' · '+esc(ca.name):'—'}</b></div><div class="recordrow"><span>Partidos carrera</span><b>${apps?apps.career.apps+' · '+esc(apps.name):'—'}</b></div>`;
}
function renderHof(){
 if(!world){$('#hofList').innerHTML=$('#rivalries').innerHTML='<div class="empty">Sin datos.</div>';return}
 const top=careerCandidates().slice(0,15);$('#hofList').innerHTML=top.map((p,i)=>`<div class="hof"><div class="rank">${i+1}</div><div><b>${esc(p.name)}</b><div class="muted tiny">${p.retired?'Retirado':'Activo'} · ${p.pos} · ${p.career.seasons} temporadas</div></div><div style="text-align:right"><b>${p.career.goals}G · ${p.career.assists}A</b><div class="muted tiny">${p.career.apps} partidos</div></div></div>`).join('');
 const riv=Object.values(world.rivalries).sort((a,b)=>b.games-a.games).slice(0,12);$('#rivalries').innerHTML=riv.length?riv.map(r=>{const a=team(r.a),b=team(r.b);return`<div class="trophyrow"><span>${esc(a?.name||'?')} — ${esc(b?.name||'?')}</span><b>${r.games} partidos</b></div>`}).join(''):'<div class="muted small">Aún no hay rivalidades.</div>';
}
function syncDash(){
 $('#hSeason').textContent=world?world.season.no:1;$('#hPhase').textContent=world?(world.phase==='market'?'Mercado':'Temporada'):'Preparación';$('#hMode').textContent=world?(world.config.mode==='random'?'Azar total':world.config.mode==='equal'?'Igualados':'Valoraciones'):'Valoraciones';
 $('#dPlayers').textContent=world?allPlayers().filter(p=>!p.retired).length:teams.reduce((s,t)=>s+t.players.length,0);$('#dGames').textContent=world?world.historicalMatches:0;$('#dRetired').textContent=world?world.retired.length:0;
 if(!world){$('#dState').textContent='Preparación';$('#dStateSub').textContent='Crea una competición.';$('#dCurrent').className='empty';$('#dCurrent').textContent='Aún no hay competición.';$('#newsFeed').className='empty';$('#newsFeed').textContent='El mundo aún no ha comenzado.';return}
 $('#dState').textContent=world.phase==='market'?'Mercado abierto':world.season.leagueFinished?'Liga finalizada':'En juego';$('#dStateSub').textContent=`Temporada ${world.season.no} · ${world.name}`;
 const lead=sortedStats('d1')[0];$('#dCurrent').className='';$('#dCurrent').innerHTML=`<div class="trophyrow"><span>Líder</span><b>${esc(lead.name)} · ${lead.pts} pts</b></div><div class="trophyrow"><span>Copa</span><b>${world.season.cup.finished?'🏆 '+esc(team(world.season.cup.winner).name):cupRoundName(world.season.cup.currentPairs.length*2)}</b></div><div class="trophyrow"><span>Mercado</span><b>${world.phase==='market'?'Abierto':'Cerrado'}</b></div>`;
 $('#newsFeed').className='';$('#newsFeed').innerHTML=world.news.slice(0,7).map(n=>`<div class="news">${esc(n)}</div>`).join('');
}

function leagueProgress(){
 if(!world)return{done:0,total:0,pct:0};
 const d1=world.season.d1Schedule.length,d2=world.season.d2Schedule.length;
 const done=world.season.d1Round+world.season.d2Round,total=d1+d2;
 return{done,total,pct:total?Math.round(done/total*100):0};
}
function cupProgress(){
 if(!world)return 0;
 if(world.season.cup.finished)return 100;
 const total=Math.max(1,Math.ceil(Math.log2(world.season.d1ids.length+world.season.d2ids.length)));
 return Math.min(95,Math.round((world.season.cup.roundNo-1)/total*100));
}
function updateCommandBar(){
 const leagueStep=$('#phaseLeague'),cupStep=$('#phaseCup'),marketStep=$('#phaseMarket'),archiveStep=$('#phaseArchive');
 [leagueStep,cupStep,marketStep,archiveStep].forEach(x=>{if(x){x.classList.remove('active','done')}});
 let title='Preparar competición',hint='Configura clubes y reglas.',label='Configurar',action=()=>switchView('setup'),pct=0,progressText='Crea un universo para comenzar';
 if(!world){
  if(leagueStep)leagueStep.classList.add('active');
 }else if(world.phase==='market'){
  leagueStep?.classList.add('done');cupStep?.classList.add('done');marketStep?.classList.add('active');
  title='Mercado de verano';hint=`Gestiona propuestas antes de la temporada ${world.season.no+1}.`;label='Abrir mercado';action=()=>switchView('market');pct=92;progressText=`Temporada ${world.season.no} cerrada · mercado abierto`;
 }else{
  const lp=leagueProgress(),leagueDone=world.season.leagueFinished,cupDone=world.season.cup.finished;
  if(leagueDone)leagueStep?.classList.add('done');else leagueStep?.classList.add('active');
  if(cupDone)cupStep?.classList.add('done');else if(leagueDone)cupStep?.classList.add('active');
  if(!leagueDone){
   title=`Jornada ${Math.max(world.season.d1Round,world.season.d2Round)+1}`;hint='Simula la siguiente jornada de Primera y Segunda.';label='Abrir jornada';action=()=>switchView('league');
  }else if(!cupDone){
   title=cupRoundName(world.season.cup.currentPairs.length*2);hint='La Liga terminó. Falta decidir la Copa.';label='Abrir Copa';action=()=>switchView('cup');
  }
  pct=Math.round(lp.pct*.75+cupProgress()*.17);
  progressText=`Liga ${lp.pct}% · Copa ${world.season.cup.finished?'completada':cupRoundName(world.season.cup.currentPairs.length*2)}`;
 }
 $('#nextActionTitle').textContent=title;$('#nextActionHint').textContent=hint;$('#nextActionBtn').textContent=label;$('#nextActionBtn').onclick=action;
 $('#seasonProgressBar').style.width=pct+'%';$('#seasonProgressPct').textContent=pct+'%';$('#seasonProgressText').textContent=progressText;
 if(world?.history?.length)archiveStep?.classList.add('done');
}
function renderDashboardFocus(){
 const eyebrow=$('#focusEyebrow'),title=$('#focusTitle'),sub=$('#focusSub'),primary=$('#focusPrimary'),secondary=$('#focusSecondary'),progress=$('#focusProgress'),mini=$('#miniStand');
 if(!eyebrow)return;
 if(!world){
  eyebrow.textContent='NUEVO UNIVERSO';title.textContent='Construye tu historia';sub.textContent='Crea clubes, elige el motor y comienza una dinastía.';
  primary.textContent='Configurar competición';primary.onclick=()=>switchView('setup');secondary.textContent='Editar clubes';secondary.onclick=()=>switchView('teams');progress.innerHTML='';
  mini.innerHTML='<div class="muted small">La clasificación aparecerá cuando empiece la Liga.</div>';return;
 }
 const leader=sortedStats('d1')[0],lp=leagueProgress();
 if(world.phase==='market'){
  eyebrow.textContent='ENTRE TEMPORADAS';title.textContent='Mercado de verano abierto';sub.textContent=`Decide los movimientos antes de arrancar la temporada ${world.season.no+1}.`;primary.textContent='Gestionar mercado';primary.onclick=()=>switchView('market');secondary.textContent='Ver historia';secondary.onclick=()=>switchView('history');
 }else if(!world.season.leagueFinished){
  eyebrow.textContent=`TEMPORADA ${world.season.no}`;title.textContent=`Jornada ${Math.max(world.season.d1Round,world.season.d2Round)+1}: la Liga sigue viva`;sub.textContent=`${leader.name} lidera con ${leader.pts} puntos. La Copa está en ${cupRoundName(world.season.cup.currentPairs.length*2).toLowerCase()}.`;primary.textContent='Abrir jornada';primary.onclick=()=>switchView('league');secondary.textContent='Ver clasificación';secondary.onclick=()=>switchView('tables');
 }else if(!world.season.cup.finished){
  eyebrow.textContent='DECISIÓN DE COPA';title.textContent='La Liga terminó; falta coronar la Copa';sub.textContent=`Campeón de Liga: ${leader.name}.`;primary.textContent='Abrir Copa';primary.onclick=()=>switchView('cup');secondary.textContent='Ver tabla final';secondary.onclick=()=>switchView('tables');
 }
 progress.innerHTML=`<div class="progressMeta"><span>Progreso de Liga</span><b>${lp.pct}%</b></div><div class="progress"><span style="width:${lp.pct}%"></span></div>`;
 mini.innerHTML=sortedStats('d1').slice(0,5).map((x,i)=>`<div class="miniStandRow"><b>${i+1}</b><span><i class="dot" style="display:inline-block;background:${x.color};margin-right:6px"></i>${esc(x.name)}</span><b>${x.pts}</b></div>`).join('');
}

function renderAll(){syncDash();renderLeague();renderCup();renderTables();renderPlayerStats();renderMarket();renderHistory();renderRecords();renderHof();renderPlayers();renderSetup();updateCommandBar();renderDashboardFocus()}

$('#saveBtn').addEventListener('click',()=>manualSave());
$('#loadBtn').addEventListener('click',()=>loadLatestSave());
$('#exportBtn').addEventListener('click',()=>{if(!world)return;const blob=new Blob([JSON.stringify(statePayload(),null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='leagueforge_universe_v5.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)});
$('#importBtn').addEventListener('click',()=>$('#importFile').click());
$('#importFile').addEventListener('change',e=>{const f=e.target.files?.[0];if(!f)return;const reader=new FileReader();reader.onload=()=>{try{applySavedPayload(JSON.parse(reader.result),'Partida importada');autosave('import')}catch(err){note('JSON no válido')}};reader.readAsText(f);e.target.value=''});


/* ---------- V5 DYNASTY SYSTEMS ---------- */
let clubProfileId=null;

function makeCoach(base=72){
 const styles=['Equilibrado','Ofensivo','Defensivo','Presión','Cantera'];
 return{name:playerName(),age:ri(62,34),rating:clamp(Math.round(base+rnd(-9,9)),55,92),style:pick(styles)};
}
function ensurePlayerV5(p,t){
 p.season=p.season||{apps:0,goals:0,assists:0};p.career=p.career||{apps:0,goals:0,assists:0,seasons:0};
 p.clubCareer=p.clubCareer||{};
 if(!p.clubCareer[t.id])p.clubCareer[t.id]={apps:p.career.apps||0,goals:p.career.goals||0,assists:p.career.assists||0,seasons:p.career.seasons||0};
 p.transferHistory=p.transferHistory||[];p.createdSeason=p.createdSeason||1;p.retired=!!p.retired;
 return p;
}
function ensureTeamV5(t){
 t.players=t.players||[];t.players.forEach(p=>ensurePlayerV5(p,t));t.coach=t.coach||makeCoach(t.ovr||70);t.crest=t.crest||null;t.budget=Number.isFinite(t.budget)?t.budget:25;return t;
}
function normalizeWorldV5(w){
 if(!w)return w;(w.teams||[]).forEach(ensureTeamV5);(w.retired||[]).forEach(p=>{p.clubCareer=p.clubCareer||{};p.transferHistory=p.transferHistory||[]});
 w.marketConfig=w.marketConfig||{mode:'coherent'};w.marketMemory=w.marketMemory||{recentBuyers:[],offerCount:{},recentSellers:[]};
 w.transferRecords=w.transferRecords||[];w.marketHistory=w.marketHistory||[];w.draftHistory=w.draftHistory||[];
 w.history=w.history||[];w.history.forEach(h=>{h.d1=h.d1||[];h.d2=h.d2||[];h.championId=h.championId||h.d1?.[0]?.id||null;h.lastSecondId=h.lastSecondId||h.d2?.[h.d2.length-1]?.id||null;if(!('cupFinalist' in h))h.cupFinalist=null;if(!('cupFinalistId' in h))h.cupFinalistId=null});
 return w;
}
function statePayload(){if(world)world.rngState=rngState;return{version:'5.0',client:'VM1.1',savedAt:Date.now(),teams,nextTeamId,nextPlayerId,world}}
function applySavedPayload(payload,announce='Partida cargada'){
 const data=payload?.world!==undefined?payload:{world:payload};if(!data.world)throw new Error('El archivo no contiene un universo válido');
 world=normalizeWorldV5(data.world);teams=data.teams||structuredClone(world.teams||teams);teams.forEach(ensureTeamV5);nextTeamId=data.nextTeamId||nextTeamId;nextPlayerId=data.nextPlayerId||nextPlayerId;rngState=world.rngState||17117;recalcIds();renderTeams();renderPlayerTeamSelect();renderAll();switchView('dashboard');autosave('load');if(announce)note(announce)
}
function loadLatestSave(){try{
 const keys=[MANUAL_SAVE_KEY,AUTO_SAVE_KEY,LEGACY_SAVE_KEY,LEGACY_SAVE_KEY2,LEGACY_SAVE_KEY3],payloads=keys.map(k=>{const x=localStorage.getItem(k);if(!x)return null;try{return JSON.parse(x)}catch{return null}}).filter(Boolean);
 if(!payloads.length){note('No hay guardados');return}payloads.sort((a,b)=>(b.savedAt||0)-(a.savedAt||0));applySavedPayload(payloads[0],payloads[0].version==='5.0'?'Partida v5 cargada':'Partida anterior migrada a v5')
 }catch(e){note('No se pudo cargar el guardado')}}
function makePlayer(teamId,pos,base=72,age=null,name=null){
 const a=age??ri(33,18),curve=a<=21?rnd(1,5):a>=31?rnd(-3,1):rnd(-1,3),p={id:nextPlayerId++,teamId,name:name||playerName(),pos,age:a,ovr:clamp(Math.round(base+curve+rnd(-5,5)),45,94),injury:0,season:{apps:0,goals:0,assists:0},career:{apps:0,goals:0,assists:0,seasons:0},clubCareer:{},transferHistory:[],createdSeason:world?.season?.no||1,retired:false};
 p.clubCareer[teamId]={apps:0,goals:0,assists:0,seasons:0};return p;
}
function makeTeam(id,name,ovr,color){
 const t={id,name,ovr,atk:clamp(ovr+Math.round(rnd(-4,5)),45,99),def:clamp(ovr+Math.round(rnd(-4,5)),45,99),active:true,color,budget:Math.round(rnd(18,55)*10)/10,players:[],crest:null,coach:makeCoach(ovr)};
 generateSquad(t,ovr);return t;
}
function coachModifiers(t){
 const c=t.coach||makeCoach(t.ovr),base=(c.rating-70)*.07;let atk=base,def=base,youth=0;
 if(c.style==='Ofensivo'){atk+=2.2;def-=.8}else if(c.style==='Defensivo'){def+=2.2;atk-=.8}else if(c.style==='Presión'){atk+=1.1;def+=.8}else if(c.style==='Cantera'){youth=.16;atk+=.3;def+=.3}
 return{atk,def,youth};
}
function teamStrength(t){
 if(world.config.mode==='random')return{atk:75,def:75,ovr:75,lineup:lineup(t)};
 if(world.config.mode==='equal')return{atk:75,def:75,ovr:75,lineup:lineup(t)};
 const xi=lineup(t),avg=xi.length?xi.reduce((x,p)=>x+p.ovr,0)/xi.length:50,fw=xi.filter(p=>p.pos==='DEL'),md=xi.filter(p=>p.pos==='MED'),df=xi.filter(p=>p.pos==='DEF'||p.pos==='POR'),pa=fw.length?fw.reduce((x,p)=>x+p.ovr,0)/fw.length:avg,pd=df.length?df.reduce((x,p)=>x+p.ovr,0)/df.length:avg,pm=md.length?md.reduce((x,p)=>x+p.ovr,0)/md.length:avg,c=coachModifiers(t);
 return{atk:(pa*.55+pm*.2+t.atk*.25)+c.atk,def:(pd*.6+pm*.15+t.def*.25)+c.def,ovr:avg,lineup:xi};
}
function clubBucket(p,teamId){p.clubCareer=p.clubCareer||{};return p.clubCareer[teamId]??=( {apps:0,goals:0,assists:0,seasons:0} )}
function recordGoal(teamObj,xi,goals){
 const events=[];for(let i=0;i<goals;i++){const scorer=weightedPick(xi,'goal');if(!scorer)continue;scorer.season.goals++;scorer.career.goals++;clubBucket(scorer,teamObj.id).goals++;
 let assist=null,pool=xi.filter(p=>p.id!==scorer.id);if(pool.length&&random()<.82){assist=weightedPick(pool,'assist');assist.season.assists++;assist.career.assists++;clubBucket(assist,teamObj.id).assists++}
 events.push({scorerId:scorer.id,scorer:scorer.name,assistId:assist?.id||null,assist:assist?.name||null})}return events;
}
function simMatch(h,a,cup=false){
 const hs=teamStrength(h),as=teamStrength(a),hd=[d6(),d6()],ad=[d6(),d6()],hr=hd[0]+hd[1],ar=ad[0]+ad[1],mode=world.config.mode,chaos=world.config.chaos;let hp,ap,hdef,adef;
 if(mode==='random'){hp=hr*10+rnd(-22,22)*chaos;ap=ar*10+rnd(-22,22)*chaos;hdef=adef=70}else{hp=hs.atk*.52+hs.ovr*.25+hr*2.15+rnd(-7,7)*chaos+(mode==='equal'?world.config.homeAdv*4:world.config.homeAdv*5);ap=as.atk*.52+as.ovr*.25+ar*2.15+rnd(-7,7)*chaos;hdef=hs.def*.67+hs.ovr*.18;adef=as.def*.67+as.ovr*.18}
 function goals(att,def,roll){let x=mode==='random'?clamp(.5+(att-45)/38,.1,4.7):clamp(1.12+(att-def)/12+(roll-7)*.08,.1,4.7),g=0,ch=5+Math.max(0,Math.round(x));for(let i=0;i<ch;i++)if(random()<clamp(x/ch,.025,.58))g++;if(random()<.045*chaos)g++;return clamp(g,0,8)}
 let hg=goals(hp,adef,hr),ag=goals(ap,hdef,ar),pens=null,winner=null;if(cup&&hg===ag){let ph=0,pa=0;for(let i=0;i<5;i++){if(random()<.74)ph++;if(random()<.74)pa++}while(ph===pa){if(random()<.74)ph++;if(random()<.74)pa++}pens=[ph,pa];winner=ph>pa?h.id:a.id}else winner=hg>ag?h.id:ag>hg?a.id:null;
 hs.lineup.forEach(p=>{p.season.apps++;p.career.apps++;clubBucket(p,h.id).apps++});as.lineup.forEach(p=>{p.season.apps++;p.career.apps++;clubBucket(p,a.id).apps++});
 const hEvents=recordGoal(h,hs.lineup,hg),aEvents=recordGoal(a,as.lineup,ag),newHInjury=injuryCheck(h,hs.lineup),newAInjury=injuryCheck(a,as.lineup);tickInjuries(h,newHInjury?.id||null);tickInjuries(a,newAInjury?.id||null);
 const r={home:h.id,away:a.id,hg,ag,hd,ad,pens,winner,hPower:Math.round(hp),aPower:Math.round(ap),homeEvents:hEvents,awayEvents:aEvents};updateMatchRecords(r);updateRivalry(h,a,hg,ag);world.historicalMatches++;return r;
}
function createWorld(){
 const act=activeTeams().map(t=>structuredClone(t));if(act.length<6){note('Necesitas al menos 6 clubes');return}seedRng(+$('#seedInput').value||17117);
 const top=clamp(+$('#topSize').value||8,4,act.length-2),movement=clamp(+$('#movement').value||2,1,Math.min(4,Math.floor(top/2),act.length-top));act.forEach(t=>{ensureTeamV5(t);if(!t.players?.length)generateSquad(t,t.ovr)});
 const sorted=[...act].sort((a,b)=>b.ovr-a.ovr);world={name:$('#worldName').value.trim()||'Federación LeagueForge',teams:act,config:{mode:$('#mode').value,chaos:+$('#chaos').value,homeAdv:+$('#homeAdv').value,legs:+$('#legs').value,topSize:top,movement},phase:'season',history:[],news:['Se inaugura el nuevo universo LeagueForge.'],retired:[],honours:{},records:{highestPoints:null,mostGoalsTeam:null,biggestWin:null,mostGoalsMatch:null,topScorerSeason:null,topAssistSeason:null},rivalries:{},historicalMatches:0,offers:[],transferLog:[],transferRecords:[],marketHistory:[],draftHistory:[],marketConfig:{mode:'coherent'},marketMemory:{recentBuyers:[],offerCount:{},recentSellers:[]},rngState};
 initSeason(1,sorted.slice(0,top).map(t=>t.id),sorted.slice(top).map(t=>t.id));if(!TESTING){renderAll();switchView('dashboard');autosave('create');note('Mundo creado')};
}

/* Division-specific controls: only the open tab advances. */
function simLeagueRound(){if(!world||world.phase!=='season')return;simDivisionRound(leagueTab,{render:false,save:false});updateLeagueCompletion();autosave('division round');if(!TESTING)renderAll()}
function simLeagueAll(){if(!world||world.phase!=='season')return;let guard=300;while(divisionRound(leagueTab)<divisionSchedule(leagueTab).length&&guard-->0)simDivisionRound(leagueTab,{render:false,save:false});updateLeagueCompletion();autosave('division complete');if(!TESTING)renderAll()}

/* ----- Draft ----- */
function draftOrderFromTables(d1,d2){return[...d2].reverse().map(x=>x.id).concat([...d1].reverse().map(x=>x.id))}
const VM12_DRAFT_WEIGHTS={POR:.11,DEF:.32,MED:.32,DEL:.25};
function vm12DraftPositionCounts(n){
 const raw=POS.map(pos=>({pos,raw:n*VM12_DRAFT_WEIGHTS[pos]})),counts={POR:0,DEF:0,MED:0,DEL:0};let used=0;
 raw.forEach(x=>{counts[x.pos]=Math.floor(x.raw);used+=counts[x.pos]});
 if(n>=6&&counts.POR===0){counts.POR=1;used++}
 const frac=[...raw].sort((a,b)=>(b.raw-Math.floor(b.raw))-(a.raw-Math.floor(a.raw)));
 let i=0;while(used<n){counts[frac[i%frac.length].pos]++;used++;i++}
 // Keep goalkeepers scarce; any excess is redistributed to outfield positions.
 const gkMax=Math.max(1,Math.ceil(n*.14));while(counts.POR>gkMax){counts.POR--;const target=['DEF','MED','DEL'].sort((a,b)=>counts[a]/VM12_DRAFT_WEIGHTS[a]-counts[b]/VM12_DRAFT_WEIGHTS[b])[0];counts[target]++}
 return counts;
}
function vm12DraftClassProfile(){
 const r=random();let label='Normal',mod=0,tone='';
 if(r<.07){label='Generacional';mod=3;tone='strong'}else if(r<.27){label='Fuerte';mod=1;tone='strong'}else if(r>=.82){label='Floja';mod=-2;tone='weak'}
 return{label,mod,tone};
}
function vm12DraftPositionBag(n){const c=vm12DraftPositionCounts(n),bag=[];for(const pos of POS)for(let i=0;i<c[pos];i++)bag.push(pos);return shuffle(bag)}
function vm12DraftResolveRoster(t,drafted){
 const released=[];
 while(vm11PosCount(t,drafted.pos)>VM11_ROSTER[drafted.pos].max){
  const candidates=t.players.filter(p=>p.pos===drafted.pos&&p.id!==drafted.id).sort((a,b)=>a.ovr-b.ovr||b.age-a.age);if(!candidates.length)break;
  const q=candidates[0];released.push({id:q.id,name:q.name,pos:q.pos,ovr:q.ovr,reason:`exceso de ${drafted.pos}`});vm11ReleasePlayer(t,q,`ajuste inmediato tras draft (${drafted.pos})`);
 }
 while(t.players.length>VM11_ROSTER.maxTotal){
  const candidates=t.players.filter(p=>p.id!==drafted.id&&vm11PosCount(t,p.pos)>VM11_ROSTER[p.pos].min).sort((a,b)=>a.ovr-b.ovr||b.age-a.age);if(!candidates.length)break;
  const q=candidates[0];released.push({id:q.id,name:q.name,pos:q.pos,ovr:q.ovr,reason:'plantilla > 25'});vm11ReleasePlayer(t,q,'ajuste inmediato tras draft');
 }
 return released;
}
function vm12DraftSummary(prospects,profile,counts){
 const byPos={};for(const pos of POS){const a=prospects.filter(p=>p.pos===pos);byPos[pos]=a.length?a.reduce((x,p)=>x+p.ovr,0)/a.length:0}
 const deepest=[...POS].sort((a,b)=>byPos[b]-byPos[a])[0],avg=prospects.reduce((x,p)=>x+p.ovr,0)/Math.max(1,prospects.length);
 return{quality:profile.label,tone:profile.tone,avg:Math.round(avg*10)/10,deepest,deepestAvg:Math.round(byPos[deepest]*10)/10,counts:{...counts},topOvr:prospects[0]?.ovr||0};
}
function runDraft(d1,d2){
 const order=draftOrderFromTables(d1,d2),n=order.length,prospects=[],profile=vm12DraftClassProfile(),positions=vm12DraftPositionBag(n),counts=vm12DraftPositionCounts(n);
 let top=83+profile.mod+ri(3,-1),bottom=64+Math.round(profile.mod*.5)+ri(3,-1);if(profile.label==='Generacional')top+=2;top=clamp(top,79,90);bottom=clamp(Math.min(bottom,top-9),60,70);
 for(let i=0;i<n;i++){
  const curve=n<=1?top:top-(top-bottom)*(i/(n-1)),base=Math.round(curve+rnd(-1.7,1.8)),pos=positions[i],p=makePlayer(null,pos,base,17+ri(3));p.ovr=clamp(base,58,90);prospects.push(p)
 }
 prospects.sort((a,b)=>b.ovr-a.ovr||a.age-b.age);const picks=[];
 order.forEach((teamId,i)=>{const t=team(teamId),p=prospects[i];if(p.clubCareer?.null)delete p.clubCareer.null;p.teamId=t.id;p.draftInfo={season:world.season.no,pick:i+1,teamId:t.id,class:profile.label};p.clubCareer[t.id]={apps:0,goals:0,assists:0,seasons:0};t.players.push(p);const released=vm12DraftResolveRoster(t,p);picks.push({pick:i+1,teamId:t.id,teamName:t.name,playerId:p.id,playerName:p.name,pos:p.pos,ovr:p.ovr,released})});
 const summary=vm12DraftSummary(prospects,profile,counts),event={season:world.season.no,picks,summary};world.draftHistory.push(event);world.season.draft=event;world.news.unshift(`🎓 Draft T${world.season.no}: ${picks[0].playerName} (${picks[0].pos}, ${picks[0].ovr}) fue nº1 para ${picks[0].teamName}. Clase ${summary.quality.toLowerCase()}.`);return event;
}
function cupFinalInfo(){
 const finals=[...world.season.cupHistory].reverse().find(x=>x.name==='Final'||x.results?.length===1),r=finals?.results?.[0];if(!r)return{winnerId:world.season.cup.winner,finalistId:null};
 return{winnerId:r.winner,finalistId:r.home===r.winner?r.away:r.home};
}
function seasonPlayerSnapshot(){
 return world.teams.flatMap(t=>t.players.map(p=>({id:p.id,name:p.name,teamId:t.id,teamName:t.name,pos:p.pos,age:p.age,ovr:p.ovr,apps:p.season.apps,goals:p.season.goals,assists:p.season.assists})));
}
function finalizeSeason(){
 const d1=sortedStats('d1'),d2=sortedStats('d2'),m=world.config.movement,champ=d1[0],cup=team(world.season.cup.winner),rel=d1.slice(-m),pro=d2.slice(0,m);if(!champ||!cup)throw new Error('Estado final inválido: falta campeón de Liga o Copa');
 const invincible=champ.l===0,scorer=topSeasonPlayers('goals')[0],assistant=topSeasonPlayers('assists')[0],cf=cupFinalInfo(),finalist=team(cf.finalistId),playerStats=seasonPlayerSnapshot();
 const snapshot={season:world.season.no,champion:champ.name,championId:champ.id,cupWinner:cup.name,cupWinnerId:cup.id,cupFinalist:finalist?.name||null,cupFinalistId:finalist?.id||null,double:champ.id===cup.id,invincible,champPoints:champ.pts,champGF:champ.gf,champGA:champ.ga,lastSecond:d2[d2.length-1]?.name||null,lastSecondId:d2[d2.length-1]?.id||null,relegated:rel.map(x=>x.name),relegatedIds:rel.map(x=>x.id),promoted:pro.map(x=>x.name),promotedIds:pro.map(x=>x.id),topScorer:scorer?{id:scorer.id,name:scorer.name,goals:scorer.season.goals,club:team(scorer.teamId)?.name,clubId:scorer.teamId}:null,topAssist:assistant?{id:assistant.id,name:assistant.name,assists:assistant.season.assists,club:team(assistant.teamId)?.name,clubId:assistant.teamId}:null,d1:d1.map(x=>({...x})),d2:d2.map(x=>({...x})),playerStats};
 world.history.push(snapshot);honour(champ.name).league++;honour(cup.name).cup++;if(snapshot.double)honour(champ.name).doubles++;if(invincible)honour(champ.name).invincible++;rel.forEach(x=>honour(x.name).relegations++);pro.forEach(x=>honour(x.name).promotions++);
 for(const st of d1){if(!world.records.highestPoints||st.pts>world.records.highestPoints.value)world.records.highestPoints={value:st.pts,team:st.name,teamId:st.id,season:world.season.no};if(!world.records.mostGoalsTeam||st.gf>world.records.mostGoalsTeam.value)world.records.mostGoalsTeam={value:st.gf,team:st.name,teamId:st.id,season:world.season.no}}
 if(scorer&&(!world.records.topScorerSeason||scorer.season.goals>world.records.topScorerSeason.value))world.records.topScorerSeason={value:scorer.season.goals,player:scorer.name,playerId:scorer.id,club:team(scorer.teamId)?.name,clubId:scorer.teamId,season:world.season.no};
 if(assistant&&(!world.records.topAssistSeason||assistant.season.assists>world.records.topAssistSeason.value))world.records.topAssistSeason={value:assistant.season.assists,player:assistant.name,playerId:assistant.id,club:team(assistant.teamId)?.name,clubId:assistant.teamId,season:world.season.no};
 world.season.finalized=true;world.news.unshift(`🏆 ${champ.name} conquista la Liga. ${cup.name} gana la Copa.`);
 processAgingAndRetirements();runDraft(d1,d2);openMarket();
}
function processAgingAndRetirements(){
 for(const t of world.teams){const cm=coachModifiers(t);
  for(const p of [...t.players]){p.career.seasons++;clubBucket(p,t.id).seasons++;p.age++;if(p.age<=23)p.ovr=clamp(p.ovr+(random()<(.65+cm.youth)?ri(3):0),40,96);else if(p.age>=31)p.ovr=clamp(p.ovr-ri(3),40,96);
   const retire=p.age>=39||(p.age>=36&&random()<.55)||(p.age>=34&&random()<.20);if(retire){p.retired=true;world.retired.push(structuredClone(p));t.players=t.players.filter(x=>x.id!==p.id);world.news.unshift(`👋 ${p.name} se retira a los ${p.age} años.`)}}
  while(t.players.length<18){const pos=leastCoveredPosition(t),y=makePlayer(t.id,pos,Math.max(58,t.ovr-8),17+ri(3));t.players.push(y);world.news.unshift(`🌱 ${t.name} incorpora al canterano ${y.name}.`)}
  t.budget=Math.round((t.budget+10+rnd(0,12))*10)/10;
 }
}

/* ----- Smart market ----- */
function marketMode(){return world?.marketConfig?.mode||'coherent'}
function setMarketMode(mode){if(!world)return;world.marketConfig=world.marketConfig||{};world.marketConfig.mode=mode;$$('[data-market-mode]').forEach(x=>x.classList.toggle('active',x.dataset.marketMode===mode));autosave('market mode');renderMarket()}
function lastSnapshot(){return world?.history?.[world.history.length-1]||null}
function lastDivisionOf(id){const h=lastSnapshot();if(!h)return world.season.d1ids.includes(id)?'d1':'d2';if(h.d1.some(x=>x.id===id))return'd1';return'd2'}
function wasPromoted(id){return !!lastSnapshot()?.promotedIds?.includes(id)}
function wasRelegated(id){return !!lastSnapshot()?.relegatedIds?.includes(id)}
function positionAverage(t,pos){const a=t.players.filter(p=>p.pos===pos);return a.length?a.reduce((x,p)=>x+p.ovr,0)/a.length:45}
function needPosition(t){return [...POS].sort((a,b)=>positionAverage(t,a)-positionAverage(t,b))[0]}
function buyerAllowed(id){
 const recent=(world.marketMemory?.recentBuyers||[]).slice(-5);if(recent.length>=2&&recent[recent.length-1]===id&&recent[recent.length-2]===id)return false;if(recent.filter(x=>x===id).length>=2)return false;return true;
}
function rememberMarketBuyer(id,sellerId){world.marketMemory=world.marketMemory||{recentBuyers:[],offerCount:{},recentSellers:[]};world.marketMemory.recentBuyers.push(id);world.marketMemory.recentBuyers=world.marketMemory.recentBuyers.slice(-5);world.marketMemory.recentSellers.push(sellerId);world.marketMemory.recentSellers=world.marketMemory.recentSellers.slice(-5);world.marketMemory.offerCount[id]=(world.marketMemory.offerCount[id]||0)+1}
function pendingPlayerIds(){return new Set((world.offers||[]).filter(o=>o.status==='pending').map(o=>o.playerId))}
function chooseBuyer(mode='coherent',forced=null){
 if(forced&&buyerAllowed(forced.id))return forced;let clubs=world.teams.filter(t=>t.budget>1&&buyerAllowed(t.id));if(!clubs.length){world.marketMemory.recentBuyers=[];clubs=world.teams.filter(t=>t.budget>1)}
 const min=Math.min(...clubs.map(t=>world.marketMemory.offerCount[t.id]||0)),fresh=clubs.filter(t=>(world.marketMemory.offerCount[t.id]||0)<=min+1);if(mode==='chaos')return pick(fresh);
 fresh.sort((a,b)=>{const ap=wasPromoted(a.id)?5:0,bp=wasPromoted(b.id)?5:0;return (bp+b.budget/30)-(ap+a.budget/30)});return fresh[Math.min(fresh.length-1,ri(Math.min(4,fresh.length)))];
}
function coherentCandidate(buyer){
 const need=needPosition(buyer),avg=squadAverage(buyer),pending=pendingPlayerIds(),bDiv=lastDivisionOf(buyer.id),target=avg+(wasPromoted(buyer.id)?4:bDiv==='d1'?2:1),pool=[];
 for(const seller of world.teams){if(seller.id===buyer.id)continue;for(const p of seller.players){if(pending.has(p.id)||p.age>=36||saleBlockReason(seller,p))continue;const value=playerValue(p);if(value>buyer.budget*.92)continue;
   const starGap=p.ovr-avg;if(bDiv==='d2'&&starGap>8&&!wasRelegated(seller.id))continue;
   let score=30-Math.abs(p.ovr-target)*2.2+(p.pos===need?12:0)+(p.age<=27?3:0)+(wasRelegated(seller.id)?7:0)+(p.ovr>positionAverage(buyer,p.pos)?6:-4);
   if(lastDivisionOf(seller.id)==='d1'&&bDiv==='d2'&&!wasRelegated(seller.id))score-=7;if(p.ovr>=seller.ovr+5)score-=3;pool.push({seller,p,score,value})}}
 if(!pool.length)return null;pool.sort((a,b)=>b.score-a.score);const top=pool.slice(0,Math.min(10,pool.length)),c=top[ri(top.length)],fee=Math.max(.5,Math.round(Math.min(buyer.budget*.9,c.value*rnd(.9,1.16))*10)/10);return{...c,fee};
}
function chaosCandidate(buyer){
 const pending=pendingPlayerIds(),pool=[];for(const seller of world.teams)if(seller.id!==buyer.id)for(const p of seller.players)if(!pending.has(p.id)&&p.age<36&&!saleBlockReason(seller,p)&&playerValue(p)<=buyer.budget*.95)pool.push({seller,p,value:playerValue(p)});
 if(!pool.length)return null;const c=pick(pool),fee=Math.max(.5,Math.round(Math.min(buyer.budget*.92,c.value*rnd(.62,1.45))*10)/10);return{...c,fee};
}
function makeMarketOffer(mode=marketMode(),forcedBuyer=null){
 const buyer=chooseBuyer(mode,forcedBuyer);if(!buyer)return null;const c=mode==='coherent'?coherentCandidate(buyer):chaosCandidate(buyer);if(!c)return null;
 const offer={id:crypto.randomUUID?crypto.randomUUID():String(random()),playerId:c.p.id,sellerId:c.seller.id,buyerId:buyer.id,fee:c.fee,status:'pending',source:mode};world.offers.push(offer);rememberMarketBuyer(buyer.id,c.seller.id);return offer;
}
function generateOffers(n=8){
 if(!world||world.phase!=='market')return;world.marketConfig=world.marketConfig||{mode:'coherent'};world.marketMemory=world.marketMemory||{recentBuyers:[],offerCount:{},recentSellers:[]};let made=0,tries=n*6;while(made<n&&tries-->0)if(makeMarketOffer())made++;
 autosave('offers');if(!TESTING)renderMarket();
}
function autoMarket(){
 if(!world||world.phase!=='market')return;const mode=marketMode(),before=world.transferRecords.length,clubs=shuffle(world.teams);
 for(const buyer of clubs){if(buyer.budget<1)continue;let offer=makeMarketOffer(mode,buyer);if(!offer)continue;const p=allPlayers().find(x=>x.id===offer.playerId),value=p?playerValue(p):offer.fee,reasonable=mode==='chaos'?random()<.72:offer.fee<=value*1.2;if(reasonable){offerAction(offer.id,true)}else offerAction(offer.id,false)}
 const targetExtra=Math.floor(world.teams.length/3);for(let i=0;i<targetExtra;i++){const o=makeMarketOffer(mode);if(o){const p=allPlayers().find(x=>x.id===o.playerId),v=p?playerValue(p):o.fee;if(mode==='chaos'?random()<.55:o.fee<=v*1.12)offerAction(o.id,true);else offerAction(o.id,false)}}
 const done=world.transferRecords.length-before;if($('#autoMarketLog')){$('#autoMarketLog').style.display='block';$('#autoMarketLog').textContent=`Mercado automático: ${done} operaciones completadas usando modo ${mode==='coherent'?'Coherente':'Caos'}.`}autosave('auto market');if(!TESTING)renderMarket();
}
function transferPlayer(playerId,buyerId,fee){
 const seller=world.teams.find(t=>t.players.some(p=>p.id===playerId)),buyer=team(buyerId);if(!seller||!buyer||seller.id===buyer.id)return false;const p=seller.players.find(x=>x.id===playerId);if(buyer.budget<fee||saleBlockReason(seller,p))return false;
 seller.players=seller.players.filter(x=>x.id!==playerId);buyer.players.push(p);p.transferHistory=p.transferHistory||[];p.transferHistory.push({season:world.season.no,from:seller.id,to:buyer.id,fee});p.teamId=buyer.id;clubBucket(p,buyer.id);buyer.budget=Math.round((buyer.budget-fee)*10)/10;seller.budget=Math.round(clamp(seller.budget+fee,3,160)*10)/10;
 const rec={season:world.season.no,playerId:p.id,playerName:p.name,sellerId:seller.id,sellerName:seller.name,buyerId:buyer.id,buyerName:buyer.name,fee};world.transferRecords.push(rec);world.transferLog.unshift(`${p.name}: ${seller.name} → ${buyer.name} por ${fee.toFixed(1)}M`);autosave('transfer');return true;
}
function openMarket(){world.phase='market';world.offseason={fromD1:[...world.season.d1ids],fromD2:[...world.season.d2ids]};world.offers=[];world.transferLog=[];world.marketMemory={recentBuyers:[],offerCount:{},recentSellers:[]};generateOffers(8);autosave('market open');if(!TESTING)renderAll()}
function startNextSeason(){
 if(!world||world.phase!=='market')return;world.teams.forEach(ensureSquadDepth);
 world.marketHistory.push({afterSeason:world.season.no,mode:marketMode(),transfers:world.transferRecords.filter(x=>x.season===world.season.no).map(x=>({...x}))});
 const m=world.config.movement,d1=sortedFromArchive('d1'),d2=sortedFromArchive('d2'),rel=d1.slice(-m).map(x=>x.id),pro=d2.slice(0,m).map(x=>x.id),newD1=world.offseason.fromD1.filter(id=>!rel.includes(id)).concat(pro),newD2=world.offseason.fromD2.filter(id=>!pro.includes(id)).concat(rel);
 world.phase='season';initSeason(world.season.no+1,newD1,newD2);world.news.unshift(`📅 Comienza la temporada ${world.season.no}.`);autosave('new season');if(!TESTING){renderAll();switchView('dashboard');note('Nueva temporada iniciada')};
}

/* ----- Club profiles ----- */
function clubInitials(t){return t.name.split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase()}
function crestHtml(t,big=false){return`<div class="clubCrest ${big?'big':''}" style="background:${t.color}22;border-color:${t.color}66">${t.crest?`<img src="${t.crest}" alt="Escudo ${esc(t.name)}">`:clubInitials(t)}</div>`}
function clubSeasonRows(t){
 return (world?.history||[]).map(h=>{let row=h.d1?.find(x=>x.id===t.id),div='Primera';if(!row){row=h.d2?.find(x=>x.id===t.id);div='Segunda'}if(!row)return null;const arr=div==='Primera'?h.d1:h.d2,pos=arr.findIndex(x=>x.id===t.id)+1;return{season:h.season,div,pos,...row}}).filter(Boolean);
}
function clubHonours(t){
 const rows=clubSeasonRows(t),h=world?.history||[];return{league:h.filter(x=>(x.championId||x.d1?.[0]?.id)===t.id).length,cup:h.filter(x=>x.cupWinnerId===t.id||(x.cupWinner===t.name&&!x.cupWinnerId)).length,finals:h.filter(x=>x.cupFinalistId===t.id).length,promotions:h.filter(x=>x.promotedIds?.includes(t.id)||(!x.promotedIds&&x.promoted?.includes(t.name))).length,relegations:h.filter(x=>x.relegatedIds?.includes(t.id)||(!x.relegatedIds&&x.relegated?.includes(t.name))).length,best:rows.length?Math.min(...rows.filter(x=>x.div==='Primera').map(x=>x.pos).concat([99])):null}}
function allKnownPlayers(){return[...(world?.teams||[]).flatMap(t=>t.players||[]),...(world?.retired||[])]}
function playerMainClubName(p){
 if(!p)return'—';if(!p.retired&&team(p.teamId))return team(p.teamId).name;const entries=Object.entries(p.clubCareer||{}).sort((a,b)=>(b[1].seasons||0)-(a[1].seasons||0)||(b[1].apps||0)-(a[1].apps||0)),id=+entries[0]?.[0];return team(id)?.name||world?.transferRecords?.find(x=>x.playerId===p.id)?.buyerName||'Club histórico';
}
function clubLegends(t){
 const ps=allKnownPlayers().filter(p=>p.clubCareer?.[t.id]),byG=[...ps].sort((a,b)=>(b.clubCareer[t.id].goals||0)-(a.clubCareer[t.id].goals||0))[0],byA=[...ps].sort((a,b)=>(b.clubCareer[t.id].assists||0)-(a.clubCareer[t.id].assists||0))[0],byS=[...ps].sort((a,b)=>(b.clubCareer[t.id].seasons||0)-(a.clubCareer[t.id].seasons||0)||(b.clubCareer[t.id].apps||0)-(a.clubCareer[t.id].apps||0))[0];return{goals:byG,assists:byA,seasons:byS}
}
function currentClubDivision(t){if(!world)return'—';return world.season.d1ids.includes(t.id)?'Primera':'Segunda'}
function renderClubBrowser(){
 const browser=$('#clubBrowser'),setup=$('#clubSetupEditor');if(!browser||!setup)return;if(!world){browser.classList.remove('active');setup.style.display='block';return}
 setup.style.display='none';browser.classList.add('active');const select=$('#clubProfileSelect'),picker=$('#clubPicker');if(!clubProfileId||!team(clubProfileId))clubProfileId=world.teams[0]?.id;
 select.innerHTML='';picker.innerHTML='';[...world.teams].sort((a,b)=>a.name.localeCompare(b.name)).forEach(t=>{select.insertAdjacentHTML('beforeend',`<option value="${t.id}" ${t.id===clubProfileId?'selected':''}>${esc(t.name)}</option>`);const b=document.createElement('button');b.type='button';b.className='clubTile '+(t.id===clubProfileId?'active':'');b.innerHTML=`${crestHtml(t)}<span style="min-width:0"><b style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(t.name)}</b><span class="muted tiny">${currentClubDivision(t)} · OVR ${Math.round(squadAverage(t))}</span></span>`;b.addEventListener('click',()=>{clubProfileId=t.id;renderClubBrowser()});picker.appendChild(b)});
 renderClubProfile(team(clubProfileId));
}
function renderClubProfile(t){
 const root=$('#clubProfile');if(!root||!t)return;const hon=clubHonours(t),rows=clubSeasonRows(t),leg=clubLegends(t),coach=t.coach||makeCoach(t.ovr),recentTransfers=(world.transferRecords||[]).filter(x=>x.sellerId===t.id||x.buyerId===t.id).slice(-8).reverse();
 root.innerHTML=`<div class="card"><div class="clubProfileHead">${crestHtml(t,true)}<div class="clubIdentity"><h2>${esc(t.name)}</h2><p>${currentClubDivision(t)} · presupuesto ${t.budget.toFixed(1)}M · plantilla ${t.players.length}</p><div class="clubFacts"><span class="clubFact">OVR ${Math.round(squadAverage(t))}</span><span class="clubFact">ATA ${t.atk}</span><span class="clubFact">DEF ${t.def}</span><span class="clubFact">${t.players.filter(p=>p.injury).length} lesionados</span></div><div class="uploadCrest"><button class="btn" id="uploadCrestBtn">🖼️ Elegir escudo</button><button class="btn" id="removeCrestBtn" ${t.crest?'':'disabled'}>Quitar</button><input type="file" id="crestFile" accept="image/*"></div></div><div class="actions"><button class="btn" id="editClubName">✏️ Renombrar</button></div></div>
 <div class="clubStatsGrid"><div class="clubStat"><b>🏆 ${hon.league}</b><span>Ligas</span></div><div class="clubStat"><b>🥇 ${hon.cup}</b><span>Copas</span></div><div class="clubStat"><b>🥈 ${hon.finals}</b><span>Finales Copa</span></div><div class="clubStat"><b>↑ ${hon.promotions}</b><span>Ascensos</span></div><div class="clubStat"><b>↓ ${hon.relegations}</b><span>Descensos</span></div><div class="clubStat"><b>${hon.best&&hon.best<99?'#'+hon.best:'—'}</b><span>Mejor puesto D1</span></div></div></div>
 <div class="clubProfileGrid" style="margin-top:14px"><div class="card"><h3>📈 Historial de Liga</h3><div class="clubHistoryTable tablewrap"><table><thead><tr><th>T</th><th>Div.</th><th>Pos</th><th>Pts</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th></tr></thead><tbody>${rows.length?rows.slice().reverse().map(r=>`<tr><td>${r.season}</td><td>${r.div==='Primera'?'D1':'D2'}</td><td><b>${r.pos}</b></td><td>${r.pts}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${r.gf}</td><td>${r.ga}</td></tr>`).join(''):'<tr><td colspan="9">Sin temporadas cerradas</td></tr>'}</tbody></table></div></div>
 <div class="grid"><div class="card"><h3>🧠 Entrenador</h3><div class="coachCard"><div class="coachAvatar">🧥</div><div><input id="coachName" value="${esc(coach.name)}" style="margin:0"><div class="formrow" style="margin:7px 0 0"><label>Estilo<select id="coachStyle"><option ${coach.style==='Equilibrado'?'selected':''}>Equilibrado</option><option ${coach.style==='Ofensivo'?'selected':''}>Ofensivo</option><option ${coach.style==='Defensivo'?'selected':''}>Defensivo</option><option ${coach.style==='Presión'?'selected':''}>Presión</option><option ${coach.style==='Cantera'?'selected':''}>Cantera</option></select></label><label>Rating<input id="coachRating" type="number" min="50" max="95" value="${coach.rating}"></label></div><div class="coachImpact">Influye en ATA/DEF y, con estilo Cantera, en progresión juvenil.</div></div></div></div>
 <div class="card"><h3>🌟 Leyendas del club</h3><div class="trophyrow"><span>Máximo goleador</span><b>${leg.goals?esc(leg.goals.name)+' · '+leg.goals.clubCareer[t.id].goals:'—'}</b></div><div class="trophyrow"><span>Máximo asistente</span><b>${leg.assists?esc(leg.assists.name)+' · '+leg.assists.clubCareer[t.id].assists:'—'}</b></div><div class="trophyrow"><span>Más temporadas</span><b>${leg.seasons?esc(leg.seasons.name)+' · '+leg.seasons.clubCareer[t.id].seasons:'—'}</b></div></div></div></div>
 <div class="card" style="margin-top:14px"><h3>💸 Últimos movimientos</h3>${recentTransfers.length?recentTransfers.map(x=>`<div class="news">${x.buyerId===t.id?'⬅️':'➡️'} ${esc(x.playerName)} · ${esc(x.sellerName)} → ${esc(x.buyerName)} · ${x.fee.toFixed(1)}M</div>`).join(''):'<div class="muted small">Sin movimientos registrados.</div>'}</div>`;
 $('#uploadCrestBtn').addEventListener('click',()=>$('#crestFile').click());$('#removeCrestBtn').addEventListener('click',()=>{t.crest=null;autosave('crest');renderClubBrowser()});
 $('#crestFile').addEventListener('change',e=>handleCrestFile(e.target.files?.[0],t));$('#editClubName').addEventListener('click',()=>{const n=prompt('Nuevo nombre del club',t.name);if(n?.trim()){const old=t.name;t.name=n.trim();syncClubRename(t,old,t.name);autosave('rename');renderClubBrowser();renderAll()}});
 $('#coachName').addEventListener('change',e=>{t.coach.name=e.target.value.trim()||t.coach.name;e.target.value=t.coach.name;autosave('coach')});$('#coachStyle').addEventListener('change',e=>{t.coach.style=e.target.value;autosave('coach')});$('#coachRating').addEventListener('change',e=>{t.coach.rating=clamp(+e.target.value||70,50,95);e.target.value=t.coach.rating;autosave('coach')});
}
function handleCrestFile(file,t){if(!file)return;if(file.size>2_500_000){note('La imagen es demasiado grande (máx. 2.5 MB)');return}const fr=new FileReader();fr.onload=()=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas'),size=180;c.width=c.height=size;const ctx=c.getContext('2d');ctx.clearRect(0,0,size,size);const scale=Math.min(size/img.width,size/img.height),w=img.width*scale,h=img.height*scale;ctx.drawImage(img,(size-w)/2,(size-h)/2,w,h);t.crest=c.toDataURL('image/webp',.82);autosave('crest');renderClubBrowser()};img.src=fr.result};fr.readAsDataURL(file)}
function renderTeams(){
 const setup=$('#clubSetupEditor');if(world){renderClubBrowser();$('#addTeam').disabled=true;$('#genTeams').disabled=true;return}
 if(setup)setup.style.display='block';$('#clubBrowser')?.classList.remove('active');const r=$('#teamList'),list=teams;r.innerHTML='';$('#addTeam').disabled=false;$('#genTeams').disabled=false;
 list.forEach(t=>{const row=document.createElement('div');row.className='teamrow';row.innerHTML=`<input class="act" type="checkbox" ${t.active?'checked':''}><input class="nm" value="${esc(t.name)}"><input class="ovr" type="number" min="45" max="99" value="${t.ovr}"><input class="atk" type="number" min="45" max="99" value="${t.atk}"><input class="def" type="number" min="45" max="99" value="${t.def}"><button class="btn danger del">✕</button>`;row.querySelector('.act').addEventListener('change',e=>{t.active=e.target.checked;renderSetup();syncDash()});row.querySelector('.nm').addEventListener('change',e=>{t.name=e.target.value.trim()||t.name;e.target.value=t.name;renderPlayerTeamSelect()});['ovr','atk','def'].forEach(k=>row.querySelector('.'+k).addEventListener('change',e=>{t[k]=clamp(+e.target.value||70,45,99);e.target.value=t[k]}));row.querySelector('.del').addEventListener('click',()=>{teams=teams.filter(x=>x.id!==t.id);renderTeams();renderSetup();renderPlayerTeamSelect()});r.appendChild(row)});
 if($('#clubCountLabel'))$('#clubCountLabel').textContent=`${activeTeams().length} clubes activos`;
}

/* ----- Rich history / records ----- */
function palmaresRows(){
 if(!world)return[];return world.teams.map(t=>{const h=clubHonours(t);return{team:t,...h,total:h.league+h.cup}}).sort((a,b)=>b.league-a.league||b.cup-a.cup||b.finals-a.finals||a.team.name.localeCompare(b.team.name));
}
function historyTableHtml(rows){return`<table><thead><tr><th>#</th><th>Club</th><th>Pts</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th></tr></thead><tbody>${rows.map((x,i)=>`<tr><td>${i+1}</td><td>${esc(x.name)}</td><td><b>${x.pts}</b></td><td>${x.w}</td><td>${x.d}</td><td>${x.l}</td><td>${x.gf}</td><td>${x.ga}</td><td>${x.gf-x.ga}</td></tr>`).join('')}</tbody></table>`}
function renderHistory(){
 const r=$('#seasonArchive'),pal=$('#palmaresTable'),hi=$('#historyHighlights');if(!world||!world.history.length){r.innerHTML='<div class="empty">Completa una temporada para empezar a escribir la historia.</div>';pal.innerHTML='<div class="empty">Sin títulos.</div>';hi.innerHTML='<div class="muted small">Todavía no hay hitos.</div>';return}
 const rows=palmaresRows();pal.innerHTML=`<div class="palmaresRow header"><span>Club</span><span>Liga</span><span>Copa</span><span>Finales</span><span>↑</span><span>↓</span></div>${rows.map(x=>`<div class="palmaresRow"><span style="display:flex;align-items:center;gap:7px">${crestHtml(x.team)}<b>${esc(x.team.name)}</b></span><b>${x.league}</b><b>${x.cup}</b><span>${x.finals}</span><span>${x.promotions}</span><span>${x.relegations}</span></div>`).join('')}`;
 const mostLeague=[...rows].sort((a,b)=>b.league-a.league)[0],mostCup=[...rows].sort((a,b)=>b.cup-a.cup)[0],latest=world.history[world.history.length-1];
 hi.innerHTML=`<div class="trophyrow"><span>Rey de la Liga</span><b>${mostLeague?.league?esc(mostLeague.team.name)+' · '+mostLeague.league:'—'}</b></div><div class="trophyrow"><span>Rey de Copa</span><b>${mostCup?.cup?esc(mostCup.team.name)+' · '+mostCup.cup:'—'}</b></div><div class="trophyrow"><span>Último campeón</span><b>${esc(latest.champion)}</b></div><div class="trophyrow"><span>Último de Segunda</span><b>${esc(latest.lastSecond||latest.d2?.[latest.d2.length-1]?.name||'—')}</b></div>`;
 r.innerHTML=[...world.history].reverse().map(h=>`<div class="historySeason"><div class="historySeasonTop"><div class="seasonNumber">T${h.season}</div><div><div class="roundtitle" style="margin:0">🏆 ${esc(h.champion)} ${h.double?'· DOBLETE':''}</div><div class="muted tiny">${h.champPoints} pts · ${h.champGF??h.d1?.[0]?.gf??0} GF · ${h.invincible?'Invicto · ':''}Copa: ${esc(h.cupWinner)}</div></div><div style="text-align:right"><b>Final Copa</b><div class="muted tiny">${esc(h.cupWinner)} vs ${esc(h.cupFinalist||'—')}</div></div></div><div class="historySeasonBody"><div class="histBlock"><span>Máximo goleador</span><b>${h.topScorer?esc(h.topScorer.name)+' · '+h.topScorer.goals+' ('+esc(h.topScorer.club)+')':'—'}</b></div><div class="histBlock"><span>Máximo asistente</span><b>${h.topAssist?esc(h.topAssist.name)+' · '+h.topAssist.assists+' ('+esc(h.topAssist.club)+')':'—'}</b></div><div class="histBlock"><span>Ascensos</span><b>${h.promoted.map(esc).join(', ')}</b></div><div class="histBlock"><span>Descensos</span><b>${h.relegated.map(esc).join(', ')}</b></div><div class="histBlock"><span>Último en Segunda</span><b>${esc(h.lastSecond||h.d2?.[h.d2.length-1]?.name||'—')}</b></div><div class="histBlock"><span>Campeón de Copa</span><b>${esc(h.cupWinner)}</b></div><div class="histBlock"><span>Finalista de Copa</span><b>${esc(h.cupFinalist||'—')}</b></div><div class="histBlock"><span>Campeón Liga</span><b>${esc(h.champion)} · ${h.champPoints} pts</b></div></div><details class="historyTables"><summary>Ver clasificaciones finales completas</summary><div class="historicalTable"><div class="tablewrap"><h3>Primera</h3>${historyTableHtml(h.d1||[])}</div><div class="tablewrap"><h3>Segunda</h3>${historyTableHtml(h.d2||[])}</div></div></details></div>`).join('');
}
function careerCandidates(){return[...allPlayers(),...(world?.retired||[])].sort((a,b)=>(b.career.goals*4+b.career.assists*2+b.career.apps*.15)-(a.career.goals*4+a.career.assists*2+a.career.apps*.15))}
function playerRecordLabel(p){return p?`${esc(p.name)}<span class="recordClub">${esc(playerMainClubName(p))}${p.retired?' · retirado':''}</span>`:'—'}
function renderRecords(){
 if(!world){$('#clubRecords').innerHTML=$('#matchRecords').innerHTML=$('#seasonPlayerRecords').innerHTML=$('#careerRecords').innerHTML='<div class="empty">Sin datos.</div>';return}
 const r=world.records,careers=careerCandidates(),cg=[...careers].sort((a,b)=>b.career.goals-a.career.goals)[0],ca=[...careers].sort((a,b)=>b.career.assists-a.career.assists)[0],apps=[...careers].sort((a,b)=>b.career.apps-a.career.apps)[0];
 $('#clubRecords').innerHTML=`<div class="recordrow"><span>Más puntos</span><b>${r.highestPoints?r.highestPoints.value+' · '+esc(r.highestPoints.team):'—'}</b></div><div class="recordrow"><span>Más GF</span><b>${r.mostGoalsTeam?r.mostGoalsTeam.value+' · '+esc(r.mostGoalsTeam.team):'—'}</b></div>`;
 $('#matchRecords').innerHTML=`<div class="recordrow"><span>Mayor goleada</span><b>${r.biggestWin?esc(r.biggestWin.home)+' '+r.biggestWin.score+' '+esc(r.biggestWin.away):'—'}</b></div><div class="recordrow"><span>Más goles</span><b>${r.mostGoalsMatch?r.mostGoalsMatch.score+' · '+r.mostGoalsMatch.total:'—'}</b></div>`;
 $('#seasonPlayerRecords').innerHTML=`<div class="recordrow"><span>Goles / temporada</span><b>${r.topScorerSeason?`${r.topScorerSeason.value} · ${esc(r.topScorerSeason.player)}<span class="recordClub">${esc(r.topScorerSeason.club||'—')} · T${r.topScorerSeason.season}</span>`:'—'}</b></div><div class="recordrow"><span>Asist. / temporada</span><b>${r.topAssistSeason?`${r.topAssistSeason.value} · ${esc(r.topAssistSeason.player)}<span class="recordClub">${esc(r.topAssistSeason.club||'—')} · T${r.topAssistSeason.season}</span>`:'—'}</b></div>`;
 $('#careerRecords').innerHTML=`<div class="recordrow"><span>Goles carrera</span><b>${cg?cg.career.goals+' · '+playerRecordLabel(cg):'—'}</b></div><div class="recordrow"><span>Asist. carrera</span><b>${ca?ca.career.assists+' · '+playerRecordLabel(ca):'—'}</b></div><div class="recordrow"><span>Partidos carrera</span><b>${apps?apps.career.apps+' · '+playerRecordLabel(apps):'—'}</b></div>`;
}
function renderHof(){
 if(!world){$('#hofList').innerHTML=$('#rivalries').innerHTML='<div class="empty">Sin datos.</div>';return}
 const top=careerCandidates().slice(0,15);$('#hofList').innerHTML=top.map((p,i)=>`<div class="hof"><div class="rank">${i+1}</div><div><b>${esc(p.name)}</b><div class="muted tiny">${esc(playerMainClubName(p))} · ${p.retired?'Retirado':'Activo'} · ${p.pos} · ${p.career.seasons} temporadas</div></div><div style="text-align:right"><b>${p.career.goals}G · ${p.career.assists}A</b><div class="muted tiny">${p.career.apps} partidos</div></div></div>`).join('');
 const riv=Object.values(world.rivalries).sort((a,b)=>b.games-a.games).slice(0,12);$('#rivalries').innerHTML=riv.length?riv.map(x=>{const a=team(x.a),b=team(x.b);return`<div class="trophyrow"><span>${esc(a?.name||'?')} — ${esc(b?.name||'?')}</span><b>${x.games} partidos</b></div>`}).join(''):'<div class="muted small">Aún no hay rivalidades.</div>';
}

/* Market UI overrides */
function renderDraftPanel(){
 const box=$('#draftPanel');if(!box)return;if(!world?.season?.draft){box.style.display='none';return}box.style.display='block';const d=world.season.draft,m=d.summary||{},cls=m.tone==='strong'?'draftClassStrong':m.tone==='weak'?'draftClassWeak':'';box.innerHTML=`<div class="draftHead"><div><b>🎓 Draft T${d.season}</b><div class="muted tiny">Orden inverso: último de Segunda recibe el pick nº1; campeón de Primera, el último.</div></div><span class="badge ${cls}">${m.quality||'Clase'} · ${d.picks.length} picks</span></div><div class="draftMeta"><span class="badge">⭐ Top ${d.picks[0]?.pos||'—'} ${d.picks[0]?.ovr||'—'}</span><span class="badge">📈 Profunda en ${m.deepest||'—'}${m.deepestAvg?' · '+m.deepestAvg:''}</span><span class="badge">🧤 ${m.counts?.POR??d.picks.filter(x=>x.pos==='POR').length} POR</span><span class="badge">Media ${m.avg||'—'}</span></div><div class="draftGrid">${d.picks.map(p=>`<div class="draftPick ${p.pick===1?'draftTop':''}"><span class="pickNo">${p.pick}</span><div><b>${esc(p.playerName)}</b><span>${esc(p.teamName)} · ${p.pos}</span>${p.released?.length?`<small class="draftRelease">↪ Sale ${p.released.map(x=>esc(x.name)+' ('+x.pos+' '+x.ovr+')').join(', ')}</small>`:''}</div><b>${p.ovr}</b></div>`).join('')}</div>`}
function renderMarket(){
 const root=$('#offerList'),log=$('#transferLog');renderDraftPanel();$$('[data-market-mode]').forEach(x=>x.classList.toggle('active',x.dataset.marketMode===marketMode()));
 if(!world||world.phase!=='market'){$('#closeMarket').disabled=true;$('#autoMarket').disabled=true;root.innerHTML='<div class="empty">El mercado se abre cuando terminan Liga y Copa.</div>';log.innerHTML='<div class="muted small">Sin movimientos.</div>';renderMarketSelectors();renderMarketValuation();return}
 $('#closeMarket').disabled=false;$('#autoMarket').disabled=false;const pending=world.offers.filter(o=>o.status==='pending'),accepted=world.offers.filter(o=>o.status==='accepted'),spent=accepted.reduce((x,o)=>x+o.fee,0);$('#marketOfferCount').textContent=pending.length;$('#marketDoneCount').textContent=accepted.length;$('#marketSpend').textContent=spent.toFixed(1)+'M';$('#marketNextSeason').textContent='T'+(world.season.no+1);
 const names=(world.marketMemory?.recentBuyers||[]).map(id=>team(id)?.name).filter(Boolean);$('#marketMemory').textContent=names.length?'Últimos compradores propuestos: '+names.join(' → '):'Todavía no hay memoria de propuestas.';
 root.innerHTML='';if(!pending.length)root.innerHTML='<div class="empty">No hay propuestas pendientes. Genera nuevas o usa el mercado automático.</div>';
 pending.forEach(o=>{const p=allPlayers().find(x=>x.id===o.playerId)||world.retired.find(x=>x.id===o.playerId),seller=team(o.sellerId),buyer=team(o.buyerId);if(!p||!seller||!buyer)return;const value=playerValue(p),ratio=o.fee/value,feeClass=ratio<.88?'feeGood':ratio>1.2?'feeHigh':'',guard=saleBlockReason(seller,p),canPay=buyer.budget>=o.fee&&!guard,el=document.createElement('div');el.className='transfer';el.innerHTML=`<div class="transferPlayer"><span class="playerIcon">${p.pos}</span><div><b>${esc(p.name)}</b><div class="muted tiny">${p.age} años · OVR ${p.ovr} · valor ${value.toFixed(1)}M · ${o.source==='coherent'?'🧠':'🎲'}</div></div></div><div><span class="muted tiny">${esc(seller.name)}</span><div>→ <b>${esc(buyer.name)}</b></div><div class="muted tiny ${buyer.budget>=o.fee?'':'budgetBad'}">Presupuesto: ${buyer.budget.toFixed(1)}M</div>${guard?`<div class="marketGuard">${esc(guard)}</div>`:'<div class="marketSafe">Plantilla protegida</div>'}</div><div class="${feeClass}"><b>${o.fee.toFixed(1)}M</b><div class="muted tiny">${ratio<.88?'Buen precio':ratio>1.2?'Prima alta':'Precio razonable'}</div></div><div class="marketActions"><button class="btn good ac" ${canPay?'':'disabled'}>Aceptar</button><button class="btn danger re">Rechazar</button></div>`;el.querySelector('.ac').addEventListener('click',()=>offerAction(o.id,true));el.querySelector('.re').addEventListener('click',()=>offerAction(o.id,false));root.appendChild(el)});
 log.innerHTML=world.transferLog.length?world.transferLog.map(x=>`<div class="news">✅ ${esc(x)}</div>`).join(''):'<div class="muted small">Aún no se ha completado ningún traspaso.</div>';renderMarketSelectors();renderMarketValuation();
}

/* V5 event wiring */
$('#simLeagueAll').onclick=null;
$('#simLeagueAll').addEventListener('click',simLeagueAll);
$('#autoMarket').addEventListener('click',autoMarket);
$$('[data-market-mode]').forEach(x=>x.addEventListener('click',()=>setMarketMode(x.dataset.marketMode)));
$('#clubProfileSelect').addEventListener('change',e=>{clubProfileId=+e.target.value;renderClubBrowser()});

function pendingDivision(prefer=leagueTab){
 if(!world)return'd1';const done=d=>divisionRound(d)>=divisionSchedule(d).length;
 if(!done(prefer))return prefer;const other=prefer==='d1'?'d2':'d1';return!done(other)?other:prefer;
}
function updateCommandBar(){
 const leagueStep=$('#phaseLeague'),cupStep=$('#phaseCup'),marketStep=$('#phaseMarket'),archiveStep=$('#phaseArchive');[leagueStep,cupStep,marketStep,archiveStep].forEach(x=>x&&x.classList.remove('active','done'));
 let title='Preparar competición',hint='Configura clubes y reglas.',label='Configurar',action=()=>switchView('setup'),pct=0,progressText='Crea un universo para comenzar';
 if(!world){leagueStep?.classList.add('active')}
 else if(world.phase==='market'){leagueStep?.classList.add('done');cupStep?.classList.add('done');marketStep?.classList.add('active');title='Mercado de verano';hint=`Draft completado. Gestiona el mercado antes de la temporada ${world.season.no+1}.`;label='Abrir mercado';action=()=>switchView('market');pct=92;progressText=`Temporada ${world.season.no} cerrada · draft + mercado`}
 else{const lp=leagueProgress(),leagueDone=world.season.leagueFinished,cupDone=world.season.cup.finished;leagueDone?leagueStep?.classList.add('done'):leagueStep?.classList.add('active');if(cupDone)cupStep?.classList.add('done');else if(leagueDone)cupStep?.classList.add('active');
  if(!leagueDone){const d=pendingDivision(),name=d==='d1'?'Primera':'Segunda',round=divisionRound(d)+1;title=`${name} · Jornada ${round}`;hint=`Solo avanzará ${name}. La otra división conservará exactamente su estado.`;label=`Abrir ${name}`;action=()=>{leagueTab=d;switchView('league');$$('[data-div]').forEach(x=>x.classList.toggle('active',x.dataset.div===d));renderLeague()}}
  else if(!cupDone){title=cupRoundName(world.season.cup.currentPairs.length*2);hint='Las dos divisiones terminaron. Falta decidir la Copa.';label='Abrir Copa';action=()=>switchView('cup')}
  pct=Math.round(lp.pct*.75+cupProgress()*.17);progressText=`Primera ${Math.round(world.season.d1Round/Math.max(1,world.season.d1Schedule.length)*100)}% · Segunda ${Math.round(world.season.d2Round/Math.max(1,world.season.d2Schedule.length)*100)}% · Copa ${cupDone?'100%':cupProgress()+'%'}`;
 }
 $('#nextActionTitle').textContent=title;$('#nextActionHint').textContent=hint;$('#nextActionBtn').textContent=label;$('#nextActionBtn').onclick=action;$('#seasonProgressBar').style.width=pct+'%';$('#seasonProgressPct').textContent=pct+'%';$('#seasonProgressText').textContent=progressText;if(world?.history?.length)archiveStep?.classList.add('done');
}
function renderDashboardFocus(){
 const eyebrow=$('#focusEyebrow'),title=$('#focusTitle'),sub=$('#focusSub'),primary=$('#focusPrimary'),secondary=$('#focusSecondary'),progress=$('#focusProgress'),mini=$('#miniStand');if(!eyebrow)return;
 if(!world){eyebrow.textContent='NUEVO UNIVERSO';title.textContent='Construye tu historia';sub.textContent='Crea clubes, elige el motor y comienza una dinastía.';primary.textContent='Configurar competición';primary.onclick=()=>switchView('setup');secondary.textContent='Editar clubes';secondary.onclick=()=>switchView('teams');progress.innerHTML='';mini.innerHTML='<div class="muted small">La clasificación aparecerá cuando empiece la Liga.</div>';return}
 const leader=sortedStats('d1')[0],lp=leagueProgress();
 if(world.phase==='market'){eyebrow.textContent='ENTRE TEMPORADAS';title.textContent='Draft completado · mercado abierto';sub.textContent=`Gestiona propuestas antes de arrancar la temporada ${world.season.no+1}.`;primary.textContent='Gestionar mercado';primary.onclick=()=>switchView('market');secondary.textContent='Ver historia';secondary.onclick=()=>switchView('history')}
 else if(!world.season.leagueFinished){const d=pendingDivision(),name=d==='d1'?'Primera':'Segunda';eyebrow.textContent=`TEMPORADA ${world.season.no}`;title.textContent=`${name}: jornada ${divisionRound(d)+1}`;sub.textContent=`${leader.name} lidera Primera con ${leader.pts} puntos. Puedes avanzar cada división de forma independiente.`;primary.textContent=`Abrir ${name}`;primary.onclick=()=>{leagueTab=d;switchView('league');$$('[data-div]').forEach(x=>x.classList.toggle('active',x.dataset.div===d));renderLeague()};secondary.textContent='Ver clasificación';secondary.onclick=()=>switchView('tables')}
 else if(!world.season.cup.finished){eyebrow.textContent='DECISIÓN DE COPA';title.textContent='Las Ligas terminaron; falta coronar la Copa';sub.textContent=`Campeón de Primera: ${leader.name}.`;primary.textContent='Abrir Copa';primary.onclick=()=>switchView('cup');secondary.textContent='Ver tabla final';secondary.onclick=()=>switchView('tables')}
 progress.innerHTML=`<div class="progressMeta"><span>Progreso total de Liga</span><b>${lp.pct}%</b></div><div class="progress"><span style="width:${lp.pct}%"></span></div>`;mini.innerHTML=sortedStats('d1').slice(0,5).map((x,i)=>`<div class="miniStandRow"><b>${i+1}</b><span><i class="dot" style="display:inline-block;background:${x.color};margin-right:6px"></i>${esc(x.name)}</span><b>${x.pts}</b></div>`).join('');
}
function renderAll(){normalizeWorldV5(world);syncDash();renderLeague();renderCup();renderTables();renderPlayerStats();renderMarket();renderHistory();renderRecords();renderHof();renderPlayers();renderSetup();if($('#teams').classList.contains('active'))renderTeams();updateCommandBar();renderDashboardFocus()}


/* ---------- VM MOBILE / PWA LAYER ---------- */
const VM_DB='leagueforge-vm-db',VM_DB_VERSION=1,VM_STORE='saves';
let vmDbPromise=null;
function vmOpenDB(){if(!('indexedDB'in window))return Promise.reject(new Error('IndexedDB no disponible'));if(vmDbPromise)return vmDbPromise;vmDbPromise=new Promise((resolve,reject)=>{const req=indexedDB.open(VM_DB,VM_DB_VERSION);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(VM_STORE))db.createObjectStore(VM_STORE,{keyPath:'slot'})};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});return vmDbPromise}
async function vmPut(slot,payload,label='Autosave'){const db=await vmOpenDB(),record={slot,payload,savedAt:Date.now(),label};return new Promise((resolve,reject)=>{const tx=db.transaction(VM_STORE,'readwrite');tx.objectStore(VM_STORE).put(record);tx.oncomplete=()=>resolve(record);tx.onerror=()=>reject(tx.error)})}
async function vmGet(slot){const db=await vmOpenDB();return new Promise((resolve,reject)=>{const req=db.transaction(VM_STORE).objectStore(VM_STORE).get(slot);req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error)})}
async function vmAll(){const db=await vmOpenDB();return new Promise((resolve,reject)=>{const req=db.transaction(VM_STORE).objectStore(VM_STORE).getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)})}
async function vmTrimSnapshots(max=8){try{const db=await vmOpenDB(),all=(await vmAll()).filter(x=>x.slot.startsWith('snap-')).sort((a,b)=>b.savedAt-a.savedAt);for(const rec of all.slice(max)){await new Promise((res,rej)=>{const tx=db.transaction(VM_STORE,'readwrite');tx.objectStore(VM_STORE).delete(rec.slot);tx.oncomplete=res;tx.onerror=()=>rej(tx.error)})}}catch{}}
function vmShouldSnapshot(reason){return ['create','market open','new season','manual','import'].includes(reason)}
function autosave(reason=''){if(TESTING||!world)return;const payload=statePayload();try{localStorage.setItem(AUTO_SAVE_KEY,JSON.stringify(payload));setAutosaveStatus('✓')}catch(e){setAutosaveStatus('Error',false)}vmPut('autosave',payload,'Autosave').then(()=>{if(vmShouldSnapshot(reason)){const slot='snap-'+Date.now();return vmPut(slot,payload,reason||'snapshot').then(()=>vmTrimSnapshots())}}).then(vmUpdateStorageInfo).catch(()=>{})}
function manualSave(){if(!world){note('No hay mundo que guardar');return}const payload=statePayload();try{localStorage.setItem(MANUAL_SAVE_KEY,JSON.stringify(payload))}catch{}vmPut('manual',payload,'Guardado manual').then(()=>vmPut('snap-'+Date.now(),payload,'manual')).then(()=>vmTrimSnapshots()).then(()=>{setAutosaveStatus('✓');vmUpdateStorageInfo();note('Partida guardada')}).catch(()=>note('No se pudo guardar'))}
async function loadLatestSave(){try{let candidates=[];try{candidates=await vmAll()}catch{}const webKeys=[MANUAL_SAVE_KEY,AUTO_SAVE_KEY,LEGACY_SAVE_KEY,LEGACY_SAVE_KEY2,LEGACY_SAVE_KEY3];for(const k of webKeys){const raw=localStorage.getItem(k);if(raw)try{const p=JSON.parse(raw);candidates.push({payload:p,savedAt:p.savedAt||0,label:'Guardado navegador'})}catch{}}if(!candidates.length){note('No hay guardados');return}candidates.sort((a,b)=>(b.savedAt||0)-(a.savedAt||0));applySavedPayload(candidates[0].payload,'Partida restaurada');await vmPut('autosave',statePayload(),'Autosave');vmUpdateStorageInfo()}catch(e){note('No se pudo cargar el guardado')}}
async function vmAutoResume(){if(world)return;try{const all=await vmAll();if(!all.length)return;all.sort((a,b)=>b.savedAt-a.savedAt);if(all[0]?.payload?.world){applySavedPayload(all[0].payload,'Partida reanudada');note('Partida reanudada automáticamente')}}catch{}}
async function vmUpdateStorageInfo(){const box=$('#vmStorageInfo');if(!box)return;let text='IndexedDB: ';try{const all=await vmAll();text+=`✓ · ${all.length} guardados`;if(navigator.storage?.estimate){const est=await navigator.storage.estimate();if(est.usage!=null)text+=` · ${(est.usage/1024/1024).toFixed(1)} MB`}if(navigator.storage?.persisted&&await navigator.storage.persisted())text+=' · persistente'}catch{text+='no disponible; usando fallback'}box.textContent=text+' · offline '+(navigator.onLine?'preparado':'activo')}
async function vmRequestPersistent(){try{if(navigator.storage?.persist)await navigator.storage.persist();vmUpdateStorageInfo()}catch{}}

function vmSetActiveTab(view){$$('.vm-tab').forEach(b=>b.classList.toggle('active',b.dataset.vmView===view));if(!['dashboard','league','tables','market'].includes(view)){$$('.vm-tab').forEach(b=>b.classList.remove('active'));$('#vmMoreBtn')?.classList.add('active')}}
function vmGo(view){vmCloseMore();switchView(view);vmSetActiveTab(view);window.scrollTo({top:0,behavior:'instant'})}
$$('[data-vm-view]').forEach(b=>b.addEventListener('click',()=>vmGo(b.dataset.vmView)));
function vmOpenMore(){const x=$('#vmMoreBackdrop');x.classList.add('open');x.setAttribute('aria-hidden','false');$('#vmMoreBtn')?.classList.add('active')}
function vmCloseMore(){const x=$('#vmMoreBackdrop');if(!x)return;x.classList.remove('open');x.setAttribute('aria-hidden','true')}
$('#vmMoreBtn')?.addEventListener('click',vmOpenMore);$('#vmCloseMore')?.addEventListener('click',vmCloseMore);$('#vmMoreBackdrop')?.addEventListener('click',e=>{if(e.target===$('#vmMoreBackdrop'))vmCloseMore()});

function vmRenderMobileStandings(){if(!world)return;for(const div of ['d1','d2']){const body=$('#table'+div.toUpperCase()),table=body?.closest('table'),wrap=table?.parentElement;if(!wrap)continue;let mob=wrap.querySelector('.vm-standings');if(!mob){mob=document.createElement('div');mob.className='vm-standings';wrap.appendChild(mob)}const arr=sortedStats(div),n=arr.length;mob.innerHTML=arr.map((x,i)=>{let cls='';if(world.season.leagueFinished){if(div==='d1'&&i>=n-world.config.movement)cls='down';if(div==='d2'&&i<world.config.movement)cls='up';if(div==='d1'&&i===0)cls+=' champion'}return`<div class="vm-standing-row ${cls}"><span class="pos">${i+1}</span><span class="club"><i class="dot" style="display:inline-block;background:${x.color};margin-right:5px"></i>${esc(x.name)}</span><span class="mini">PJ<br>${x.pj}</span><span class="mini">DG<br>${x.gf-x.ga>=0?'+':''}${x.gf-x.ga}</span><span class="pts">${x.pts}</span></div>`}).join('')}}
const _vmRenderTables=renderTables;renderTables=function(){_vmRenderTables();vmRenderMobileStandings()};
const _vmRenderAll=renderAll;renderAll=function(){_vmRenderAll();vmRenderMobileStandings();vmUpdateStorageInfo();vmSetActiveTab($('.view.active')?.id||'dashboard')};

function vmStandalone(){return window.matchMedia?.('(display-mode: standalone)').matches||navigator.standalone===true}
function vmInstallState(){const card=$('#vmInstallCard');if(!card)return;const hidden=localStorage.getItem('lf-vm-install-hidden')==='1';card.classList.toggle('show',!vmStandalone()&&!hidden)}
$('#vmHideInstall')?.addEventListener('click',()=>{localStorage.setItem('lf-vm-install-hidden','1');vmInstallState()});
window.addEventListener('online',vmUpdateStorageInfo);window.addEventListener('offline',vmUpdateStorageInfo);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&world)autosave('background')});window.addEventListener('pagehide',()=>{if(world)autosave('background')});

async function vmShareBackup(){if(!world){note('No hay partida');return}const blob=new Blob([JSON.stringify(statePayload(),null,2)],{type:'application/json'}),file=new File([blob],`leagueforge-vm-T${world.season?.no||1}.json`,{type:'application/json'});try{if(navigator.canShare?.({files:[file]})){await navigator.share({files:[file],title:'LeagueForge savegame'});return}}catch(e){if(e.name==='AbortError')return}const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=file.name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
// Replace export behavior with iOS-friendly share by cloning button after original handlers were attached.
if($('#exportBtn')){const old=$('#exportBtn'),b=old.cloneNode(true);old.replaceWith(b);b.addEventListener('click',vmShareBackup)}

async function vmRegisterSW(){if('serviceWorker'in navigator){try{await navigator.serviceWorker.register('./sw.js',{scope:'./'});return true}catch{return false}}return false}
async function vmBoot(){vmInstallState();await vmRegisterSW();await vmRequestPersistent();await vmUpdateStorageInfo();await vmAutoResume();vmRenderMobileStandings()}
setTimeout(vmBoot,80);

// Responsive self-test for headless and real-device diagnostics.
async function vmResponsiveTest(){const out=[];const t=(name,ok,detail='')=>out.push({name,ok:!!ok,detail});t('viewport no horizontal overflow',document.documentElement.scrollWidth<=window.innerWidth+2,`${document.documentElement.scrollWidth}/${window.innerWidth}`);const tab=$('.vm-tabbar');t('bottom nav visible',!!tab&&getComputedStyle(tab).position==='fixed');const buttons=[...document.querySelectorAll('.vm-tab,.btn')].filter(x=>x.offsetParent!==null).slice(0,40);t('touch targets >=38px',buttons.every(x=>x.getBoundingClientRect().height>=38));t('desktop sidebar hidden',getComputedStyle(document.querySelector('main>nav')).display==='none');t('more sheet exists',!!$('#vmMoreBackdrop'));try{await vmPut('vm-test',{ok:true},'test');const rec=await vmGet('vm-test');t('IndexedDB read/write',rec?.payload?.ok===true)}catch(e){t('IndexedDB read/write',false,e.message)}t('service worker supported','serviceWorker'in navigator);let sw=false;try{sw=!!(await navigator.serviceWorker.getRegistration('./'))}catch{}t('service worker registered',sw);const node=document.createElement('pre');node.id='VM_RESPONSIVE_TEST';node.textContent=`VM_TEST ${out.filter(x=>x.ok).length}/${out.length} PASS`+(out.every(x=>x.ok)?' ✅':' ❌ '+out.filter(x=>!x.ok).map(x=>x.name+' '+x.detail).join(' | '));document.body.appendChild(node);document.documentElement.dataset.vmTest=JSON.stringify(out);return out}
window.LeagueForgeVM={responsiveTest:vmResponsiveTest,put:vmPut,get:vmGet,all:vmAll,storageInfo:vmUpdateStorageInfo};
if(new URLSearchParams(location.search).get('vmtest')==='1')setTimeout(vmResponsiveTest,1200);


/* ---------- VM 1.1 BALANCE + COMPACT SAVE ---------- */
const VM11_ROSTER={
 minTotal:18,maxTotal:25,
 POR:{min:2,ideal:2,max:3},DEF:{min:5,ideal:6,max:8},MED:{min:5,ideal:6,max:8},DEL:{min:3,ideal:4,max:6}
};
function vm11PosCount(t,pos){return t.players.filter(p=>p.pos===pos&&!p.retired).length}
function vm11SquadValue(t){return t.players.reduce((x,p)=>x+playerValue(p),0)}
function vm11ClubPrestige(t){
 const h=clubHonours(t),rows=clubSeasonRows(t),recent=rows.slice(-3);let score=50+h.league*5+h.cup*3+h.finals*1.2;
 if(currentClubDivision(t)==='Primera')score+=8;
 recent.forEach(r=>{score+=r.div==='Primera'?Math.max(0,10-r.pos*1.2):Math.max(0,4-r.pos*.45)});
 return clamp(score,35,90);
}
function vm11IncomingLimit(t){return wasPromoted(t.id)?3:2}
function vm11OutgoingLimit(t){
 const surplus=Math.max(0,t.players.length-VM11_ROSTER.minTotal);
 if(wasPromoted(t.id))return Math.min(1,Math.max(1,surplus));
 if(wasRelegated(t.id))return Math.min(2,Math.max(1,surplus));
 return Math.min(2,Math.max(1,surplus));
}
function vm11SeasonTransfers(teamId,dir){
 return (world.transferRecords||[]).filter(x=>x.season===world.season.no&&(dir==='in'?x.buyerId===teamId:x.sellerId===teamId)).length;
}
function vm11PendingCount(teamId,dir){
 return (world.offers||[]).filter(o=>o.status==='pending'&&(dir==='in'?o.buyerId===teamId:o.sellerId===teamId)).length;
}
function vm11BuyerCapacity(t,p){
 if(!t||!p)return false;
 if(t.players.length>=VM11_ROSTER.maxTotal)return false;
 if(vm11PosCount(t,p.pos)>=VM11_ROSTER[p.pos].max)return false;
 if(vm11SeasonTransfers(t.id,'in')>=vm11IncomingLimit(t))return false;
 return true;
}
function vm11SellerCapacity(t,p){
 if(!t||!p)return false;
 if(t.players.length<=VM11_ROSTER.minTotal)return false;
 if(vm11PosCount(t,p.pos)-1<VM11_ROSTER[p.pos].min)return false;
 if(vm11SeasonTransfers(t.id,'out')>=vm11OutgoingLimit(t))return false;
 return true;
}
function saleBlockReason(seller,p){
 if(!seller||!p)return'Operación inválida';
 if(!vm11SellerCapacity(seller,p)){
  if(seller.players.length<=VM11_ROSTER.minTotal)return`El club debe conservar al menos ${VM11_ROSTER.minTotal} jugadores`;
  if(vm11PosCount(seller,p.pos)-1<VM11_ROSTER[p.pos].min)return`Debe conservar al menos ${VM11_ROSTER[p.pos].min} ${p.pos}`;
  if(vm11SeasonTransfers(seller.id,'out')>=vm11OutgoingLimit(seller))return'Límite de salidas de este verano alcanzado';
  return'Plantilla protegida';
 }
 return null;
}
function vm11SellerAllowed(id){
 const recent=(world.marketMemory?.recentSellers||[]).filter(x=>x!=null).slice(-5);
 if(recent.length>=2&&recent[recent.length-1]===id&&recent[recent.length-2]===id)return false;
 if(recent.filter(x=>x===id).length>=2)return false;
 return true;
}
function buyerAllowed(id){
 const recent=(world.marketMemory?.recentBuyers||[]).slice(-5),t=team(id);
 if(!t||vm11SeasonTransfers(id,'in')>=vm11IncomingLimit(t))return false;
 if(recent.length>=2&&recent[recent.length-1]===id&&recent[recent.length-2]===id)return false;
 if(recent.filter(x=>x===id).length>=2)return false;
 return true;
}
function rememberMarketBuyer(id,sellerId){
 world.marketMemory=world.marketMemory||{};
 world.marketMemory.recentBuyers=world.marketMemory.recentBuyers||[];
 world.marketMemory.recentSellers=world.marketMemory.recentSellers||[];
 world.marketMemory.offerCount=world.marketMemory.offerCount||{};
 world.marketMemory.sellerOfferCount=world.marketMemory.sellerOfferCount||{};
 world.marketMemory.recentBuyers.push(id);world.marketMemory.recentBuyers=world.marketMemory.recentBuyers.slice(-5);
 if(sellerId!=null){world.marketMemory.recentSellers.push(sellerId);world.marketMemory.recentSellers=world.marketMemory.recentSellers.slice(-5)}
 world.marketMemory.offerCount[id]=(world.marketMemory.offerCount[id]||0)+1;
 if(sellerId!=null)world.marketMemory.sellerOfferCount[sellerId]=(world.marketMemory.sellerOfferCount[sellerId]||0)+1;
}
function vm11NeedScore(t,pos){
 const c=vm11PosCount(t,pos),ideal=VM11_ROSTER[pos].ideal,avg=positionAverage(t,pos);
 return Math.max(0,ideal-c)*12+Math.max(0,squadAverage(t)-avg)*1.5;
}
function needPosition(t){return [...POS].sort((a,b)=>vm11NeedScore(t,b)-vm11NeedScore(t,a))[0]}
function chooseBuyer(mode='coherent',forced=null){
 if(forced&&buyerAllowed(forced.id))return forced;
 let clubs=world.teams.filter(t=>t.budget>1&&buyerAllowed(t.id)&&t.players.length<VM11_ROSTER.maxTotal);
 if(!clubs.length){world.marketMemory.recentBuyers=[];clubs=world.teams.filter(t=>t.budget>1&&vm11SeasonTransfers(t.id,'in')<vm11IncomingLimit(t))}
 if(!clubs.length)return null;
 const min=Math.min(...clubs.map(t=>world.marketMemory.offerCount?.[t.id]||0)),fresh=clubs.filter(t=>(world.marketMemory.offerCount?.[t.id]||0)<=min+1);
 if(mode==='chaos')return pick(fresh);
 fresh.sort((a,b)=>{
  const an=vm11NeedScore(a,needPosition(a)),bn=vm11NeedScore(b,needPosition(b));
  const ap=wasPromoted(a.id)?8:0,bp=wasPromoted(b.id)?8:0;
  return (bp+bn+b.budget/25)-(ap+an+a.budget/25)
 });
 return fresh[Math.min(fresh.length-1,ri(Math.min(5,fresh.length)))];
}
function vm11FreeAgentCandidate(buyer){
 const pool=(world.freeAgents||[]).filter(p=>p.age<36&&vm11BuyerCapacity(buyer,p));
 if(!pool.length)return null;
 const need=needPosition(buyer),avg=squadAverage(buyer),scored=pool.map(p=>({p,score:(p.pos===need?18:0)+(p.ovr>positionAverage(buyer,p.pos)?7:0)-Math.abs(p.ovr-(avg+1))*1.4+(p.age<=27?3:0)})).sort((a,b)=>b.score-a.score);
 const c=scored[ri(Math.min(8,scored.length))],fee=Math.max(.3,Math.round(Math.min(buyer.budget*.25,playerValue(c.p)*.12)*10)/10);
 return{seller:null,p:c.p,value:playerValue(c.p),fee,freeAgent:true,score:c.score};
}
function coherentCandidate(buyer){
 const need=needPosition(buyer),avg=squadAverage(buyer),pending=pendingPlayerIds(),bDiv=lastDivisionOf(buyer.id),prestige=vm11ClubPrestige(buyer),target=avg+(wasPromoted(buyer.id)?3:bDiv==='d1'?2:1),pool=[];
 for(const seller of world.teams){
  if(seller.id===buyer.id||!vm11SellerAllowed(seller.id))continue;
  if(vm11SeasonTransfers(seller.id,'out')+vm11PendingCount(seller.id,'out')>=vm11OutgoingLimit(seller))continue;
  for(const p of seller.players){
   if(pending.has(p.id)||p.age>=36||saleBlockReason(seller,p)||!vm11BuyerCapacity(buyer,p))continue;
   const value=playerValue(p);if(value>buyer.budget*.72)continue;
   const starGap=p.ovr-avg;if(bDiv==='d2'&&starGap>7&&!wasRelegated(seller.id))continue;
   const sellerPrestige=vm11ClubPrestige(seller),appeal=prestige-sellerPrestige;
   let score=30-Math.abs(p.ovr-target)*2.0+(p.pos===need?16:0)+(p.age<=27?3:0)+(wasRelegated(seller.id)?2.5:0)+(p.ovr>positionAverage(buyer,p.pos)?8:-6)+appeal*.18;
   if(wasPromoted(buyer.id))score+=(p.pos===need?7:3);
   if(wasRelegated(seller.id)&&vm11SeasonTransfers(seller.id,'out')>=1)score-=18;
   if(lastDivisionOf(seller.id)==='d1'&&bDiv==='d2'&&!wasRelegated(seller.id))score-=8;
   const elite=buyer.players.filter(x=>x.ovr>=82).length;if(elite>=3&&p.ovr>=82)score-=12+(elite-3)*4;
   pool.push({seller,p,score,value});
  }
 }
 const fa=vm11FreeAgentCandidate(buyer);if(fa)pool.push(fa);
 if(!pool.length)return null;pool.sort((a,b)=>b.score-a.score);const top=pool.slice(0,Math.min(10,pool.length)),c=top[ri(top.length)];
 const fee=c.freeAgent?c.fee:Math.max(.5,Math.round(Math.min(buyer.budget*.72,c.value*rnd(.9,1.14))*10)/10);
 return{...c,fee};
}
function chaosCandidate(buyer){
 const pending=pendingPlayerIds(),pool=[];
 for(const seller of world.teams)if(seller.id!==buyer.id&&vm11SellerAllowed(seller.id)&&vm11SeasonTransfers(seller.id,'out')+vm11PendingCount(seller.id,'out')<vm11OutgoingLimit(seller))
  for(const p of seller.players)if(!pending.has(p.id)&&p.age<36&&!saleBlockReason(seller,p)&&vm11BuyerCapacity(buyer,p)&&playerValue(p)<=buyer.budget*.78)pool.push({seller,p,value:playerValue(p)});
 for(const p of (world.freeAgents||[]))if(!pending.has(p.id)&&vm11BuyerCapacity(buyer,p))pool.push({seller:null,p,value:playerValue(p),freeAgent:true});
 if(!pool.length)return null;const c=pick(pool),fee=c.freeAgent?Math.max(.2,Math.round(c.value*rnd(.05,.18)*10)/10):Math.max(.5,Math.round(Math.min(buyer.budget*.78,c.value*rnd(.62,1.35))*10)/10);return{...c,fee};
}
function makeMarketOffer(mode=marketMode(),forcedBuyer=null){
 const buyer=chooseBuyer(mode,forcedBuyer);if(!buyer)return null;const c=mode==='coherent'?coherentCandidate(buyer):chaosCandidate(buyer);if(!c)return null;
 const sellerId=c.seller?.id??null;
 const offer={id:crypto.randomUUID?crypto.randomUUID():String(random()),playerId:c.p.id,sellerId,buyerId:buyer.id,fee:c.fee,status:'pending',source:c.freeAgent?'freeAgent':mode};
 world.offers.push(offer);rememberMarketBuyer(buyer.id,sellerId);return offer;
}
function vm11ReleasePlayer(t,p,reason='exceso de plantilla'){
 t.players=t.players.filter(x=>x.id!==p.id);p.teamId=null;p.injury=0;p.releaseInfo={season:world.season.no,from:t.id,reason};world.freeAgents=world.freeAgents||[];world.freeAgents.push(p);
 const relief=Math.max(.2,Math.round(playerValue(p)*.05*10)/10);t.budget=Math.round(clamp(t.budget+relief,3,160)*10)/10;
 world.transferLog.unshift(`🆓 ${p.name} sale de ${t.name} como agente libre (${reason}; +${relief.toFixed(1)}M de margen)`);
}
function vm11TrimRoster(t){
 for(const pos of POS){
  let arr=t.players.filter(p=>p.pos===pos).sort((a,b)=>a.ovr-b.ovr||b.age-a.age);
  while(arr.length>VM11_ROSTER[pos].max&&t.players.length>VM11_ROSTER.minTotal){vm11ReleasePlayer(t,arr.shift(),`exceso de ${pos}`);arr=t.players.filter(p=>p.pos===pos).sort((a,b)=>a.ovr-b.ovr)}
 }
 while(t.players.length>VM11_ROSTER.maxTotal){
  const candidates=t.players.filter(p=>vm11PosCount(t,p.pos)>VM11_ROSTER[p.pos].min).sort((a,b)=>a.ovr-b.ovr||b.age-a.age);if(!candidates.length)break;vm11ReleasePlayer(t,candidates[0],'plantilla superior a 25');
 }
}
function vm11SignFreeAgent(t,p,fee=0){
 if(!p||!vm11BuyerCapacity(t,p)||t.budget<fee)return false;
 world.freeAgents=(world.freeAgents||[]).filter(x=>x.id!==p.id);t.players.push(p);p.teamId=t.id;clubBucket(p,t.id);p.transferHistory=p.transferHistory||[];p.transferHistory.push({season:world.season.no,from:null,to:t.id,fee,freeAgent:true});t.budget=Math.round((t.budget-fee)*10)/10;
 world.transferRecords.push({season:world.season.no,playerId:p.id,playerName:p.name,sellerId:null,sellerName:'Agente libre',buyerId:t.id,buyerName:t.name,fee,freeAgent:true});
 world.transferLog.unshift(`${p.name}: agente libre → ${t.name} por ${fee.toFixed(1)}M`);return true;
}
function vm11FillSquad(t){
 vm11TrimRoster(t);
 for(const pos of POS){
  while(vm11PosCount(t,pos)<VM11_ROSTER[pos].min){
   const fa=(world.freeAgents||[]).filter(p=>p.pos===pos&&vm11BuyerCapacity(t,p)).sort((a,b)=>b.ovr-a.ovr)[0];
   if(fa){vm11SignFreeAgent(t,fa,0)}else t.players.push(makePlayer(t.id,pos,Math.max(58,t.ovr-9),17+ri(4)));
  }
 }
 while(t.players.length<VM11_ROSTER.minTotal){
  const pos=[...POS].sort((a,b)=>(vm11PosCount(t,a)/VM11_ROSTER[a].ideal)-(vm11PosCount(t,b)/VM11_ROSTER[b].ideal))[0];
  const fa=(world.freeAgents||[]).filter(p=>p.pos===pos&&vm11BuyerCapacity(t,p)).sort((a,b)=>b.ovr-a.ovr)[0];
  if(fa)vm11SignFreeAgent(t,fa,0);else t.players.push(makePlayer(t.id,pos,Math.max(58,t.ovr-9),17+ri(4)));
 }
}
function transferPlayer(playerId,buyerId,fee){
 const buyer=team(buyerId);if(!buyer)return false;
 const seller=world.teams.find(t=>t.players.some(p=>p.id===playerId));
 if(!seller){const p=(world.freeAgents||[]).find(x=>x.id===playerId);return vm11SignFreeAgent(buyer,p,fee)}
 if(seller.id===buyer.id)return false;const p=seller.players.find(x=>x.id===playerId);
 if(buyer.budget<fee||saleBlockReason(seller,p)||!vm11BuyerCapacity(buyer,p))return false;
 seller.players=seller.players.filter(x=>x.id!==playerId);buyer.players.push(p);p.transferHistory=p.transferHistory||[];p.transferHistory.push({season:world.season.no,from:seller.id,to:buyer.id,fee});p.teamId=buyer.id;clubBucket(p,buyer.id);buyer.budget=Math.round((buyer.budget-fee)*10)/10;seller.budget=Math.round(clamp(seller.budget+fee,3,160)*10)/10;
 const rec={season:world.season.no,playerId:p.id,playerName:p.name,sellerId:seller.id,sellerName:seller.name,buyerId:buyer.id,buyerName:buyer.name,fee};world.transferRecords.push(rec);world.transferLog.unshift(`${p.name}: ${seller.name} → ${buyer.name} por ${fee.toFixed(1)}M`);autosave('transfer');return true;
}
function vm11OperatingCost(t){return Math.round((6+vm11SquadValue(t)*.055+Math.max(0,t.players.length-22)*.6)*10)/10}
function vm11PrizeFor(row,div,total){
 const ratio=total<=1?1:(total-row.pos)/(total-1);
 return div==='d1'?28+ratio*28:14+ratio*18;
}
function vm11AwardFinances(d1,d2,cupWinnerId,cupFinalistId){
 const awards={},calc=(rows,div)=>rows.forEach((r,i)=>{const t=team(r.id),pos=i+1;awards[t.id]={division:div,pos,prize:vm11PrizeFor({pos},div,rows.length),bonus:0,cost:vm11OperatingCost(t)}});
 calc(d1,'d1');calc(d2,'d2');
 const promoted=new Set(d2.slice(0,world.config.movement).map(x=>x.id)),relegated=new Set(d1.slice(-world.config.movement).map(x=>x.id));
 promoted.forEach(id=>awards[id].bonus+=8);relegated.forEach(id=>awards[id].bonus+=6);if(awards[cupWinnerId])awards[cupWinnerId].bonus+=10;if(cupFinalistId&&awards[cupFinalistId])awards[cupFinalistId].bonus+=4;
 for(const t of world.teams){const a=awards[t.id];if(!a)continue;const delta=a.prize+a.bonus-a.cost;t.budget=Math.round(clamp(t.budget+delta,3,160)*10)/10;a.delta=Math.round(delta*10)/10;a.after=t.budget}
 world.financeHistory=world.financeHistory||[];world.financeHistory.push({season:world.season.no,awards});world.season.finance={awards};return awards;
}
function finalizeSeason(){
 const d1=sortedStats('d1'),d2=sortedStats('d2'),m=world.config.movement,champ=d1[0],cup=team(world.season.cup.winner),rel=d1.slice(-m),pro=d2.slice(0,m);if(!champ||!cup)throw new Error('Estado final inválido: falta campeón de Liga o Copa');
 const invincible=champ.l===0,scorer=topSeasonPlayers('goals')[0],assistant=topSeasonPlayers('assists')[0],cf=cupFinalInfo(),finalist=team(cf.finalistId);
 const snapshot={season:world.season.no,champion:champ.name,championId:champ.id,cupWinner:cup.name,cupWinnerId:cup.id,cupFinalist:finalist?.name||null,cupFinalistId:finalist?.id||null,double:champ.id===cup.id,invincible,champPoints:champ.pts,champGF:champ.gf,champGA:champ.ga,lastSecond:d2[d2.length-1]?.name||null,lastSecondId:d2[d2.length-1]?.id||null,relegated:rel.map(x=>x.name),relegatedIds:rel.map(x=>x.id),promoted:pro.map(x=>x.name),promotedIds:pro.map(x=>x.id),topScorer:scorer?{id:scorer.id,name:scorer.name,goals:scorer.season.goals,club:team(scorer.teamId)?.name,clubId:scorer.teamId}:null,topAssist:assistant?{id:assistant.id,name:assistant.name,assists:assistant.season.assists,club:team(assistant.teamId)?.name,clubId:assistant.teamId}:null,d1:d1.map(x=>({...x})),d2:d2.map(x=>({...x}))};
 world.history.push(snapshot);honour(champ.name).league++;honour(cup.name).cup++;if(snapshot.double)honour(champ.name).doubles++;if(invincible)honour(champ.name).invincible++;rel.forEach(x=>honour(x.name).relegations++);pro.forEach(x=>honour(x.name).promotions++);
 for(const st of d1){if(!world.records.highestPoints||st.pts>world.records.highestPoints.value)world.records.highestPoints={value:st.pts,team:st.name,teamId:st.id,season:world.season.no};if(!world.records.mostGoalsTeam||st.gf>world.records.mostGoalsTeam.value)world.records.mostGoalsTeam={value:st.gf,team:st.name,teamId:st.id,season:world.season.no}}
 if(scorer&&(!world.records.topScorerSeason||scorer.season.goals>world.records.topScorerSeason.value))world.records.topScorerSeason={value:scorer.season.goals,player:scorer.name,playerId:scorer.id,club:team(scorer.teamId)?.name,clubId:scorer.teamId,season:world.season.no};
 if(assistant&&(!world.records.topAssistSeason||assistant.season.assists>world.records.topAssistSeason.value))world.records.topAssistSeason={value:assistant.season.assists,player:assistant.name,playerId:assistant.id,club:team(assistant.teamId)?.name,clubId:assistant.teamId,season:world.season.no};
 vm11AwardFinances(d1,d2,cup.id,finalist?.id||null);world.season.finalized=true;world.news.unshift(`🏆 ${champ.name} conquista la Liga. ${cup.name} gana la Copa.`);processAgingAndRetirements();runDraft(d1,d2);openMarket();
}
function processAgingAndRetirements(){
 for(const t of world.teams){const cm=coachModifiers(t);for(const p of [...t.players]){p.career.seasons++;clubBucket(p,t.id).seasons++;p.age++;if(p.age<=23)p.ovr=clamp(p.ovr+(random()<(.65+cm.youth)?ri(3):0),40,96);else if(p.age>=31)p.ovr=clamp(p.ovr-ri(3),40,96);const retire=p.age>=39||(p.age>=36&&random()<.55)||(p.age>=34&&random()<.20);if(retire){p.retired=true;world.retired.push(structuredClone(p));t.players=t.players.filter(x=>x.id!==p.id);world.news.unshift(`👋 ${p.name} se retira a los ${p.age} años.`)}}while(t.players.length<VM11_ROSTER.minTotal){const pos=leastCoveredPosition(t),y=makePlayer(t.id,pos,Math.max(58,t.ovr-8),17+ri(3));t.players.push(y);world.news.unshift(`🌱 ${t.name} incorpora al canterano ${y.name}.`)}}}
function openMarket(){
 world.phase='market';world.freeAgents=world.freeAgents||[];world.offseason={fromD1:[...world.season.d1ids],fromD2:[...world.season.d2ids]};world.offers=[];world.transferLog=[];world.marketMemory={recentBuyers:[],offerCount:{},recentSellers:[],sellerOfferCount:{}};world.teams.forEach(vm11TrimRoster);generateOffers(8);autosave('market open');if(!TESTING)renderAll()
}
function startNextSeason(){
 if(!world||world.phase!=='market')return;world.teams.forEach(vm11FillSquad);world.marketHistory.push({afterSeason:world.season.no,mode:marketMode(),count:world.transferRecords.filter(x=>x.season===world.season.no).length,spend:Math.round(world.transferRecords.filter(x=>x.season===world.season.no).reduce((a,x)=>a+x.fee,0)*10)/10});
 const m=world.config.movement,d1=sortedFromArchive('d1'),d2=sortedFromArchive('d2'),rel=d1.slice(-m).map(x=>x.id),pro=d2.slice(0,m).map(x=>x.id),newD1=world.offseason.fromD1.filter(id=>!rel.includes(id)).concat(pro),newD2=world.offseason.fromD2.filter(id=>!pro.includes(id)).concat(rel);world.phase='season';initSeason(world.season.no+1,newD1,newD2);world.news.unshift(`📅 Comienza la temporada ${world.season.no}.`);autosave('new season');if(!TESTING){renderAll();switchView('dashboard');note('Nueva temporada iniciada')};
}
function autoMarket(){
 if(!world||world.phase!=='market')return;const mode=marketMode(),before=world.transferRecords.length,clubs=shuffle(world.teams);
 for(const buyer of clubs){if(buyer.budget<1||vm11SeasonTransfers(buyer.id,'in')>=vm11IncomingLimit(buyer))continue;let offer=makeMarketOffer(mode,buyer);if(!offer)continue;const p=allPlayers().find(x=>x.id===offer.playerId)||(world.freeAgents||[]).find(x=>x.id===offer.playerId),value=p?playerValue(p):offer.fee,reasonable=offer.source==='freeAgent'||(mode==='chaos'?random()<.68:offer.fee<=value*1.18);if(reasonable)offerAction(offer.id,true);else offerAction(offer.id,false)}
 const targetExtra=Math.floor(world.teams.length/4);for(let i=0;i<targetExtra;i++){const o=makeMarketOffer(mode);if(o){const p=allPlayers().find(x=>x.id===o.playerId)||(world.freeAgents||[]).find(x=>x.id===o.playerId),v=p?playerValue(p):o.fee;if(o.source==='freeAgent'||(mode==='chaos'?random()<.5:o.fee<=v*1.1))offerAction(o.id,true);else offerAction(o.id,false)}}
 const done=world.transferRecords.length-before;if($('#autoMarketLog')){$('#autoMarketLog').style.display='block';$('#autoMarketLog').textContent=`Mercado automático: ${done} operaciones completadas. Entradas máx. por club: 2 (3 si asciende); salidas máx.: 2.`}autosave('auto market');if(!TESTING)renderMarket();
}
function vm11CompactWorld(w){
 const x=structuredClone(w);x.news=(x.news||[]).slice(0,40);(x.history||[]).forEach(h=>{delete h.playerStats});(x.marketHistory||[]).forEach(h=>{if(h.transfers){h.count=h.transfers.length;h.spend=Math.round(h.transfers.reduce((a,z)=>a+(z.fee||0),0)*10)/10;delete h.transfers}});
 for(const t of (x.teams||[]))for(const p of (t.players||[])){if(p.transferHistory?.length>8)p.transferHistory=p.transferHistory.slice(-8)}
 for(const p of (x.retired||[])){if(p.transferHistory?.length>8)p.transferHistory=p.transferHistory.slice(-8)}
 if(x.freeAgents?.length>80)x.freeAgents=x.freeAgents.sort((a,b)=>b.ovr-a.ovr).slice(0,80);return x;
}
function statePayload(){if(world)world.rngState=rngState;return{version:'5.2',client:'VM1.2',savedAt:Date.now(),nextTeamId,nextPlayerId,world:world?vm11CompactWorld(world):null,setup:world?null:{teams:structuredClone(teams)}}}
function normalizeWorldV5(w){
 if(!w)return w;(w.teams||[]).forEach(ensureTeamV5);(w.retired||[]).forEach(p=>{p.clubCareer=p.clubCareer||{};p.transferHistory=p.transferHistory||[]});
 if(w.economyVersion!=='VM1.1'){for(const t of (w.teams||[]))t.budget=Math.round(Math.min(Number.isFinite(t.budget)?t.budget:25,150)*10)/10;w.economyVersion='VM1.1'}
 w.marketConfig=w.marketConfig||{mode:'coherent'};w.marketMemory=w.marketMemory||{recentBuyers:[],offerCount:{},recentSellers:[],sellerOfferCount:{}};w.marketMemory.sellerOfferCount=w.marketMemory.sellerOfferCount||{};w.transferRecords=w.transferRecords||[];w.marketHistory=w.marketHistory||[];w.draftHistory=w.draftHistory||[];w.freeAgents=w.freeAgents||[];w.financeHistory=w.financeHistory||[];w.history=w.history||[];w.history.forEach(h=>{h.d1=h.d1||[];h.d2=h.d2||[];delete h.playerStats;h.championId=h.championId||h.d1?.[0]?.id||null;h.lastSecondId=h.lastSecondId||h.d2?.[h.d2.length-1]?.id||null;if(!('cupFinalist' in h))h.cupFinalist=null;if(!('cupFinalistId' in h))h.cupFinalistId=null});return w;
}
function applySavedPayload(payload,announce='Partida cargada'){
 const data=payload?.world!==undefined?payload:{world:payload};if(!data.world)throw new Error('El archivo no contiene un universo válido');world=normalizeWorldV5(data.world);teams=data.setup?.teams||data.teams||structuredClone(world.teams||teams);teams.forEach(ensureTeamV5);nextTeamId=data.nextTeamId||nextTeamId;nextPlayerId=data.nextPlayerId||nextPlayerId;rngState=world.rngState||17117;recalcIds();renderTeams();renderPlayerTeamSelect();renderAll();switchView('dashboard');autosave('load');if(announce)note(announce)
}
async function vm11Encode(payload){
 const json=JSON.stringify(payload),rawBytes=new TextEncoder().encode(json);
 if('CompressionStream'in window){try{const cs=new CompressionStream('gzip'),stream=new Blob([rawBytes]).stream().pipeThrough(cs),buf=await new Response(stream).arrayBuffer();return{format:'gzip-json',data:buf,bytes:buf.byteLength,rawBytes:rawBytes.byteLength}}catch{}}
 return{format:'json',data:json,bytes:rawBytes.byteLength,rawBytes:rawBytes.byteLength}
}
async function vm11DecodeRecord(rec){
 if(!rec)return null;if(rec.payload)return rec;if(rec.format==='json')return{...rec,payload:JSON.parse(rec.data)};if(rec.format==='gzip-json'){const ds=new DecompressionStream('gzip'),stream=new Blob([rec.data]).stream().pipeThrough(ds),text=await new Response(stream).text();return{...rec,payload:JSON.parse(text)}}return rec;
}
async function vmPut(slot,payload,label='Autosave'){
 const db=await vmOpenDB(),enc=await vm11Encode(payload),record={slot,format:enc.format,data:enc.data,bytes:enc.bytes,rawBytes:enc.rawBytes,savedAt:Date.now(),label};return new Promise((resolve,reject)=>{const tx=db.transaction(VM_STORE,'readwrite');tx.objectStore(VM_STORE).put(record);tx.oncomplete=()=>resolve({...record,payload});tx.onerror=()=>reject(tx.error)})
}
async function vmGet(slot){const db=await vmOpenDB();return new Promise((resolve,reject)=>{const req=db.transaction(VM_STORE).objectStore(VM_STORE).get(slot);req.onsuccess=async()=>resolve(await vm11DecodeRecord(req.result||null));req.onerror=()=>reject(req.error)})}
async function vmAll(){const db=await vmOpenDB();return new Promise((resolve,reject)=>{const req=db.transaction(VM_STORE).objectStore(VM_STORE).getAll();req.onsuccess=async()=>{const out=[];for(const r of(req.result||[]))out.push(await vm11DecodeRecord(r));resolve(out)};req.onerror=()=>reject(req.error)})}
async function vm11Delete(slot){const db=await vmOpenDB();return new Promise((resolve,reject)=>{const tx=db.transaction(VM_STORE,'readwrite');tx.objectStore(VM_STORE).delete(slot);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function vmTrimSnapshots(max=2){try{const all=(await vmAll()).filter(x=>x.slot.startsWith('snap-')).sort((a,b)=>b.savedAt-a.savedAt);for(const rec of all.slice(max))await vm11Delete(rec.slot)}catch{}}
function vmShouldSnapshot(reason){return['create','new season','manual','import'].includes(reason)}
function autosave(reason=''){
 if(TESTING||!world)return;const payload=statePayload();setAutosaveStatus('…');vmPut('autosave',payload,'Autosave').then(async()=>{if(vmShouldSnapshot(reason)){await vmPut('snap-'+Date.now(),payload,reason||'checkpoint');await vmTrimSnapshots(2)}try{const json=JSON.stringify(payload);if(json.length<4_000_000)localStorage.setItem(AUTO_SAVE_KEY,json);else localStorage.removeItem(AUTO_SAVE_KEY)}catch{}setAutosaveStatus('✓');return vmUpdateStorageInfo()}).catch(()=>setAutosaveStatus('Error',false))
}
function manualSave(){
 if(!world){note('No hay mundo que guardar');return}const payload=statePayload();vmPut('manual',payload,'Guardado manual').then(()=>vmPut('snap-'+Date.now(),payload,'manual')).then(()=>vmTrimSnapshots(2)).then(()=>{try{const json=JSON.stringify(payload);if(json.length<4_000_000)localStorage.setItem(MANUAL_SAVE_KEY,json);else localStorage.removeItem(MANUAL_SAVE_KEY)}catch{}setAutosaveStatus('✓');vmUpdateStorageInfo();note('Partida guardada')}).catch(()=>note('No se pudo guardar'))
}
async function vm11CompactExistingStorage(){
 try{
  const all=await vmAll();if(!all.length)return;const latest=[...all].sort((a,b)=>b.savedAt-a.savedAt)[0];
  if(latest?.payload?.world){const compact={version:'5.2',client:'VM1.2',savedAt:latest.payload.savedAt||Date.now(),nextTeamId:latest.payload.nextTeamId||nextTeamId,nextPlayerId:latest.payload.nextPlayerId||nextPlayerId,world:vm11CompactWorld(normalizeWorldV5(latest.payload.world)),setup:null};await vmPut('autosave',compact,'Autosave migrado')}
  const manual=all.find(x=>x.slot==='manual');if(manual?.payload?.world){const compact={version:'5.2',client:'VM1.2',savedAt:manual.payload.savedAt||Date.now(),nextTeamId:manual.payload.nextTeamId||nextTeamId,nextPlayerId:manual.payload.nextPlayerId||nextPlayerId,world:vm11CompactWorld(normalizeWorldV5(manual.payload.world)),setup:null};await vmPut('manual',compact,'Manual migrado')}
  const snaps=all.filter(x=>x.slot.startsWith('snap-')).sort((a,b)=>b.savedAt-a.savedAt);for(const rec of snaps.slice(0,2)){if(rec.payload?.world)await vmPut(rec.slot,{version:'5.2',client:'VM1.2',savedAt:rec.payload.savedAt||rec.savedAt||Date.now(),nextTeamId:rec.payload.nextTeamId||nextTeamId,nextPlayerId:rec.payload.nextPlayerId||nextPlayerId,world:vm11CompactWorld(normalizeWorldV5(rec.payload.world)),setup:null},rec.label)}for(const rec of snaps.slice(2))await vm11Delete(rec.slot);
  for(const key of [AUTO_SAVE_KEY,MANUAL_SAVE_KEY,LEGACY_SAVE_KEY,LEGACY_SAVE_KEY2]){try{const raw=localStorage.getItem(key);if(raw&&raw.length>3_500_000)localStorage.removeItem(key)}catch{}}
 }catch{}
}
async function vmUpdateStorageInfo(){
 const box=$('#vmStorageInfo');if(!box)return;let text='Save VM: ';try{const all=await vmAll(),bytes=all.reduce((a,x)=>a+(x.bytes||JSON.stringify(x.payload||{}).length),0),raw=all.reduce((a,x)=>a+(x.rawBytes||0),0);text+=`✓ ${all.length} slots · ${(bytes/1024/1024).toFixed(1)} MB`;if(raw>bytes*1.2)text+=` (compactado ${(raw/1024/1024).toFixed(1)}→${(bytes/1024/1024).toFixed(1)} MB)`;if(navigator.storage?.estimate){const est=await navigator.storage.estimate();if(est.usage!=null)text+=` · sitio ${(est.usage/1024/1024).toFixed(1)} MB`}if(navigator.storage?.persisted&&await navigator.storage.persisted())text+=' · persistente'}catch{text+='fallback navegador'}box.textContent=text+' · '+(navigator.onLine?'online':'offline')
}
async function vmAutoResume(){if(world)return;try{const all=await vmAll();if(!all.length)return;all.sort((a,b)=>b.savedAt-a.savedAt);if(all[0]?.payload?.world){applySavedPayload(all[0].payload,'Partida reanudada');await vm11CompactExistingStorage();note('Partida reanudada · save optimizado')}}catch{}}
async function vmBoot(){vmInstallState();await vmRegisterSW();await vmRequestPersistent();await vm11CompactExistingStorage();await vmUpdateStorageInfo();await vmAutoResume();vmRenderMobileStandings()}
const vm11BaseRenderMarket=renderMarket;
renderMarket=function(){
 vm11BaseRenderMarket();if(!world)return;
 const root=$('#offerList'),freeOffers=(world.offers||[]).filter(o=>o.status==='pending'&&o.sellerId==null);
 for(const o of freeOffers){const p=(world.freeAgents||[]).find(x=>x.id===o.playerId),buyer=team(o.buyerId);if(!p||!buyer)continue;const value=playerValue(p),canPay=buyer.budget>=o.fee&&vm11BuyerCapacity(buyer,p),el=document.createElement('div');el.className='transfer';el.innerHTML=`<div class="transferPlayer"><span class="playerIcon">${p.pos}</span><div><b>${esc(p.name)}</b><div class="muted tiny">${p.age} años · OVR ${p.ovr} · valor ${value.toFixed(1)}M · 🆓</div></div></div><div><span class="muted tiny">Agente libre</span><div>→ <b>${esc(buyer.name)}</b></div><div class="muted tiny ${canPay?'':'budgetBad'}">Presupuesto: ${buyer.budget.toFixed(1)}M</div></div><div class="feeGood"><b>${o.fee.toFixed(1)}M</b><div class="muted tiny">Prima de fichaje</div></div><div class="marketActions"><button class="btn good ac" ${canPay?'':'disabled'}>Aceptar</button><button class="btn danger re">Rechazar</button></div>`;el.querySelector('.ac').addEventListener('click',()=>offerAction(o.id,true));el.querySelector('.re').addEventListener('click',()=>offerAction(o.id,false));root.appendChild(el)}
 const b=$('#marketBalanceSummary');if(b){const incoming=world.teams.reduce((a,t)=>a+vm11SeasonTransfers(t.id,'in'),0),outgoing=world.teams.reduce((a,t)=>a+vm11SeasonTransfers(t.id,'out'),0);b.textContent=`Plantillas: 18–25 jugadores · POR 2–3 · DEF 5–8 · MED 5–8 · DEL 3–6 · ${world.freeAgents?.length||0} agentes libres · ${incoming} entradas / ${outgoing} salidas cerradas.`}
}
const vm11BaseRenderClubProfile=renderClubProfile;
renderClubProfile=function(t){
 vm11BaseRenderClubProfile(t);if(!t)return;const rows=clubSeasonRows(t),d1=rows.filter(x=>x.div==='Primera'),d2=rows.filter(x=>x.div==='Segunda'),pts=rows.reduce((a,x)=>a+x.pts,0),gf=rows.reduce((a,x)=>a+x.gf,0),box=$('#clubProfile .clubStatsGrid');if(box)box.insertAdjacentHTML('beforeend',`<div class="clubStat"><b>${d1.length}</b><span>Temp. Primera</span></div><div class="clubStat"><b>${d2.length}</b><span>Temp. Segunda</span></div><div class="clubStat"><b>${pts}</b><span>Puntos históricos</span></div><div class="clubStat"><b>${gf}</b><span>GF históricos</span></div>`);const finance=world.financeHistory?.find(x=>x.season===world.history?.[world.history.length-1]?.season)?.awards?.[t.id],identity=$('#clubProfile .clubIdentity');if(finance&&identity)identity.insertAdjacentHTML('beforeend',`<div class="vm-budget-note">Último balance anual: premio ${(finance.prize+finance.bonus).toFixed(1)}M − mantenimiento ${finance.cost.toFixed(1)}M = <b>${finance.delta>=0?'+':''}${finance.delta.toFixed(1)}M</b></div>`)
}
if($('#autoMarket')){const old=$('#autoMarket'),b=old.cloneNode(true);old.replaceWith(b);b.addEventListener('click',autoMarket)}
if($('#closeMarket')){const old=$('#closeMarket'),b=old.cloneNode(true);old.replaceWith(b);b.addEventListener('click',startNextSeason)}
function vm11BalanceSelfTest(){
 const out=[],t=(name,fn)=>{try{fn();out.push({name,ok:true})}catch(e){out.push({name,ok:false,error:e.message})}};const save=world?structuredClone(world):null,tm=structuredClone(teams),nid=nextPlayerId,nt=nextTeamId,rs=rngState,testing=TESTING;TESTING=true;
 try{
  resetTestWorld('ratings',12,6);finishSeasonTest();
  t('relegated max outgoing <=2',()=>{const id=world.history[0].relegatedIds[0],seller=team(id);assert(vm11OutgoingLimit(seller)<=2,'limit')});
  t('seller diversity no triple',()=>{world.offers=[];world.marketMemory={recentBuyers:[],offerCount:{},recentSellers:[],sellerOfferCount:{}};generateOffers(25);const a=world.offers.map(x=>x.sellerId).filter(x=>x!=null);for(let i=2;i<a.length;i++)assert(!(a[i]===a[i-1]&&a[i]===a[i-2]),'triple seller')});
  t('seller max 2 in rolling 5',()=>{const a=world.offers.map(x=>x.sellerId).filter(x=>x!=null);for(let i=0;i<a.length;i++){const w=a.slice(Math.max(0,i-4),i+1);assert(w.filter(x=>x===a[i]).length<=2,'seller repeat')}});
  t('buyer positional max',()=>{const b=world.teams[0];while(vm11PosCount(b,'POR')<3)b.players.push(makePlayer(b.id,'POR',65,20));const p=world.teams[1].players.find(x=>x.pos==='POR');b.budget=999;assert(!vm11BuyerCapacity(b,p),'keeper cap')});
  t('roster trimming -> free agents',()=>{const a=world.teams[0],before=(world.freeAgents||[]).length;while(vm11PosCount(a,'POR')<5)a.players.push(makePlayer(a.id,'POR',60,28));vm11TrimRoster(a);assert(vm11PosCount(a,'POR')<=3,'cap');assert(world.freeAgents.length>before,'free agents')});
  t('finance top prize > bottom',()=>{const h=world.history[0],top=vm11PrizeFor({pos:1},'d1',h.d1.length),bottom=vm11PrizeFor({pos:h.d1.length},'d1',h.d1.length);assert(top>bottom,'prize')});
  t('compact drops playerStats',()=>{world.history[0].playerStats=[{x:1}];const c=vm11CompactWorld(world);assert(!('playerStats'in c.history[0]),'playerStats')});
  t('payload avoids duplicate teams',()=>{const q=statePayload();assert(!q.teams&&q.world,'duplicate teams')});
  t('market close coherent roster floors',()=>{world.teams.forEach(vm11FillSquad);for(const a of world.teams){assert(a.players.length>=18&&a.players.length<=25,'size');for(const pos of POS)assert(vm11PosCount(a,pos)>=VM11_ROSTER[pos].min&&vm11PosCount(a,pos)<=VM11_ROSTER[pos].max,pos)}});
 }finally{world=save;teams=tm;nextPlayerId=nid;nextTeamId=nt;rngState=rs;TESTING=testing;if(!TESTING)renderAll()}return out;
}
window.LeagueForgeVM.balanceTest=vm11BalanceSelfTest;

/* ---------- VM 1.2 DRAFT TESTS ---------- */
function vm12DraftSelfTest(){
 const out=[],t=(name,fn)=>{try{fn();out.push({name,ok:true})}catch(e){out.push({name,ok:false,error:e.message})}};const save=world?structuredClone(world):null,tm=structuredClone(teams),nid=nextPlayerId,nt=nextTeamId,rs=rngState,testing=TESTING;TESTING=true;
 try{
  t('draft position quota keeps GK scarce',()=>{seedRng(11);const c=vm12DraftPositionCounts(16);assert(c.POR>=1&&c.POR<=3,'GK count');assert(Object.values(c).reduce((a,b)=>a+b,0)===16,'count total')});
  t('draft nº1 position is not structurally fixed',()=>{const tops=[];for(let k=0;k<40;k++){resetTestWorld('ratings',16,8);seedRng(9000+k*97);finishSeasonTest();tops.push(world.season.draft.picks[0].pos)}assert(new Set(tops).size>=3,'top position variety');assert(tops.filter(x=>x==='POR').length<=8,'too many GK #1')});
  t('draft class stores identity metadata',()=>{resetTestWorld();finishSeasonTest();const d=world.season.draft;assert(d.summary?.quality&&d.summary?.deepest&&d.summary?.counts,'summary')});
  t('draft pick quality remains descending',()=>{resetTestWorld();finishSeasonTest();const p=world.season.draft.picks;assert(p.every((x,i)=>i===0||p[i-1].ovr>=x.ovr),'order')});
  t('fourth keeper immediately replaces weaker existing keeper',()=>{resetTestWorld();const d1=sortedStats('d1'),d2=sortedStats('d2'),target=team(d2[d2.length-1].id);while(vm11PosCount(target,'POR')<3)target.players.push(makePlayer(target.id,'POR',62,24));target.players.filter(x=>x.pos==='POR').forEach((p,i)=>p.ovr=60+i);const beforeIds=new Set(target.players.filter(x=>x.pos==='POR').map(x=>x.id));const drafted=makePlayer(null,'POR',82,18);drafted.teamId=target.id;target.players.push(drafted);world.freeAgents=world.freeAgents||[];const released=vm12DraftResolveRoster(target,drafted);assert(vm11PosCount(target,'POR')===3,'keeper cap');assert(target.players.some(x=>x.id===drafted.id),'drafted lost');assert(released.length===1,'release');assert(!beforeIds.has(drafted.id),'sanity');assert(world.freeAgents.some(x=>x.id===released[0].id),'not free agent')});
  t('drafted player is protected even if lowest OVR',()=>{resetTestWorld();const target=world.teams[0];while(vm11PosCount(target,'POR')<3)target.players.push(makePlayer(target.id,'POR',80,24));target.players.filter(x=>x.pos==='POR').forEach(p=>p.ovr=80);const drafted=makePlayer(null,'POR',55,18);drafted.teamId=target.id;target.players.push(drafted);world.freeAgents=world.freeAgents||[];vm12DraftResolveRoster(target,drafted);assert(target.players.some(x=>x.id===drafted.id),'drafted should stay');assert(vm11PosCount(target,'POR')===3,'cap')});
  t('draft immediate roster never exceeds positional caps',()=>{resetTestWorld('ratings',16,8);finishSeasonTest();for(const club of world.teams)for(const pos of POS)assert(vm11PosCount(club,pos)<=VM11_ROSTER[pos].max,club.name+' '+pos)});
  t('draft history preserves released-player note',()=>{resetTestWorld('ratings',16,8);const targetId=world.season.d2ids[world.season.d2ids.length-1],target=team(targetId);while(vm11PosCount(target,'POR')<3)target.players.push(makePlayer(target.id,'POR',60,25));const d1=sortedStats('d1'),d2=sortedStats('d2');seedRng(2);const event=runDraft(d1,d2);assert(event.picks.every(p=>Array.isArray(p.released)),'released arrays')});
 }finally{world=save;teams=tm;nextPlayerId=nid;nextTeamId=nt;rngState=rs;TESTING=testing;if(!TESTING)renderAll()}return out;
}
window.LeagueForgeVM.draftTest=vm12DraftSelfTest;

/* ---------- TEST SUITE ---------- */
function assert(cond,msg){if(!cond)throw new Error(msg)}
function resetTestWorld(mode='ratings',teamCount=12,top=6){
 world=null;seedRng(123456);buildInitialTeams(teamCount);teams.forEach(t=>t.active=true);
 $('#mode').value=mode;$('#topSize').value=top;$('#movement').value=2;$('#legs').value=2;$('#seedInput').value=123456;createWorld();
}
function finishSeasonTest(){
 for(const div of ['d1','d2']){let g=200;while(divisionRound(div)<divisionSchedule(div).length&&g-->0)simDivisionRound(div,{render:false,save:false})}
 updateLeagueCompletion();assert(world.season.leagueFinished,'league not finished');
 let g=30;while(!world.season.cup.finished&&g-->0)simCupRound();assert(world.season.cup.finished&&world.season.cup.winner!=null,'cup not finished');
 checkSeasonComplete();assert(world.phase==='market','market not opened');
}
function runTests(){
 const snapshot={teams:structuredClone(teams),nextTeamId,nextPlayerId,world:world?structuredClone(world):null,rngState,leagueTab,form:{mode:$('#mode').value,topSize:$('#topSize').value,movement:$('#movement').value,legs:$('#legs').value,seed:$('#seedInput').value}};
 TESTING=true;const results=[];const test=(name,fn)=>{try{fn();results.push({name,ok:true})}catch(e){results.push({name,ok:false,error:e?.message||String(e)})}};
 try{
  test('Genera clubes con 18 jugadores y entrenador',()=>{seedRng(1);buildInitialTeams(16);assert(teams.length===16,'clubs');assert(teams.every(t=>t.players.length===18),'squads');assert(teams.every(t=>t.coach?.name&&t.coach.rating),'coaches')});
  test('Pool ampliado reduce duplicados',()=>{seedRng(99);const names=new Set();for(let i=0;i<120;i++)names.add(playerName());assert(names.size>100,'too many duplicate names')});
  test('Nombres de jugador editables',()=>{const p=teams[0].players[0];p.name='Nombre Prueba';assert(p.name==='Nombre Prueba','rename')});
  test('Calendario par todos contra todos',()=>{const x=schedule(teams.slice(0,8),1);assert(x.length===7&&x.flat().length===28,'schedule')});
  test('Calendario impar usa descanso',()=>{const x=schedule(teams.slice(0,7),1);assert(x.length===7&&x.flat().length===21,'odd')});
  test('Ida y vuelta duplica partidos',()=>{assert(schedule(teams.slice(0,6),2).flat().length===schedule(teams.slice(0,6),1).flat().length*2,'legs')});
  test('Modo valoraciones crea mundo',()=>{resetTestWorld('ratings');assert(world.config.mode==='ratings','mode')});
  test('Modo igualados fija fuerza',()=>{resetTestWorld('equal');const x=teamStrength(world.teams[0]);assert(x.atk===75&&x.def===75,'equal')});
  test('Modo azar anula ratings',()=>{resetTestWorld('random');const x=teamStrength(world.teams[0]);assert(x.atk===75&&x.ovr===75,'random')});
  test('Entrenador influye en modo valoraciones',()=>{resetTestWorld('ratings');const t=world.teams[0];t.coach={name:'A',age:45,rating:90,style:'Ofensivo'};const hi=teamStrength(t).atk;t.coach={name:'B',age:45,rating:55,style:'Defensivo'};const lo=teamStrength(t).atk;assert(hi>lo,'coach impact')});
  test('XI contiene 11 jugadores',()=>{resetTestWorld();assert(lineup(world.teams[0]).length===11,'xi')});
  test('Lesiones sacan jugador del XI',()=>{resetTestWorld();const t=world.teams[0],q=lineup(t)[0];q.injury=3;assert(!lineup(t).some(x=>x.id===q.id),'injury')});
  test('Partido produce marcador válido',()=>{resetTestWorld();const r=simMatch(world.teams[0],world.teams[1]);assert(r.hg>=0&&r.ag>=0&&r.hg<=8&&r.ag<=8,'score')});
  test('Goles van a jugador y clubCareer',()=>{resetTestWorld();const a=world.teams[0],b=world.teams[1],before=a.players.reduce((x,p)=>x+(p.clubCareer[a.id]?.goals||0),0),r=simMatch(a,b),after=a.players.reduce((x,p)=>x+(p.clubCareer[a.id]?.goals||0),0);assert(after-before===r.hg,'club goals')});
  test('Asistencias no superan goles',()=>{resetTestWorld();const a=world.teams[0],b=world.teams[1],g0=a.players.reduce((x,p)=>x+p.career.goals,0),a0=a.players.reduce((x,p)=>x+p.career.assists,0);simMatch(a,b);assert(a.players.reduce((x,p)=>x+p.career.assists,0)-a0<=a.players.reduce((x,p)=>x+p.career.goals,0)-g0,'assists')});
  test('Copa con 12 crea byes válidos',()=>{resetTestWorld();const pairs=world.season.cup.currentPairs;assert(pairs.length===8,'pairs');assert(pairs.filter(x=>(x.home==null)!=(x.away==null)).length===4,'byes');assert(!pairs.some(x=>x.home==null&&x.away==null),'empty')});
  test('Copa termina con ganador',()=>{resetTestWorld();let g=20;while(!world.season.cup.finished&&g--)simCupRound();assert(team(world.season.cup.winner),'winner')});
  test('Empate Copa produce penaltis',()=>{resetTestWorld();seedRng(8);let found=false;for(let i=0;i<80;i++){const r=simMatch(world.teams[0],world.teams[1],true);if(r.hg===r.ag){assert(r.pens&&r.pens[0]!==r.pens[1],'pens');found=true;break}}assert(found,'draw')});
  test('Simular jornada afecta solo pestaña Primera',()=>{resetTestWorld();leagueTab='d1';simLeagueRound();assert(Object.values(world.season.d1Stats).every(x=>x.pj===1),'d1');assert(Object.values(world.season.d2Stats).every(x=>x.pj===0),'d2 changed')});
  test('Simular jornada afecta solo pestaña Segunda',()=>{resetTestWorld();leagueTab='d2';simLeagueRound();assert(Object.values(world.season.d2Stats).every(x=>x.pj===1),'d2');assert(Object.values(world.season.d1Stats).every(x=>x.pj===0),'d1 changed')});
  test('Completar división no completa la otra',()=>{resetTestWorld();leagueTab='d1';simLeagueAll();assert(world.season.d1Round===world.season.d1Schedule.length,'d1');assert(world.season.d2Round===0,'d2');assert(!world.season.leagueFinished,'whole league')});
  test('Liga termina al completar ambas divisiones',()=>{resetTestWorld();leagueTab='d1';simLeagueAll();leagueTab='d2';simLeagueAll();assert(world.season.leagueFinished,'league')});
  test('Simulación granular juega solo un partido',()=>{resetTestWorld();const before=Object.values(world.season.d1Stats).reduce((x,y)=>x+y.pj,0);simLeagueMatch('d1',0,{render:false,save:false});assert(Object.values(world.season.d1Stats).reduce((x,y)=>x+y.pj,0)-before===2,'one');assert(world.season.d1Round===0,'round')});
  test('Jornada parcial no duplica resultados',()=>{resetTestWorld();simLeagueMatch('d1',0,{render:false,save:false});const first=world.season.d1Schedule[0][0].result;simDivisionRound('d1');assert(world.season.d1Schedule[0][0].result===first&&world.season.d1Round===1,'duplicate')});
  test('Finalizar temporada abre mercado',()=>{resetTestWorld();finishSeasonTest();assert(world.phase==='market','market')});
  test('Historial guarda tablas completas',()=>{resetTestWorld();finishSeasonTest();const h=world.history[0];assert(h.d1.length===6&&h.d2.length===6,'tables');assert(h.championId&&h.lastSecondId,'ids')});
  test('Historial guarda finalista de Copa',()=>{resetTestWorld();finishSeasonTest();assert('cupFinalist' in world.history[0],'finalist field')});
  test('Ascensos y descensos mantienen tamaños',()=>{resetTestWorld();finishSeasonTest();const a=world.season.d1ids.length,b=world.season.d2ids.length;startNextSeason();assert(world.season.d1ids.length===a&&world.season.d2ids.length===b,'sizes')});
  test('Draft genera un pick por club',()=>{resetTestWorld();finishSeasonTest();assert(world.season.draft.picks.length===world.teams.length,'draft count')});
  test('Draft pick nº1 va al último de Segunda',()=>{resetTestWorld();finishSeasonTest();const h=world.history[0],pick=world.season.draft.picks[0];assert(pick.teamId===h.d2[h.d2.length-1].id,'draft order')});
  test('Draft está ordenado de mejor a peor',()=>{resetTestWorld();finishSeasonTest();const p=world.season.draft.picks;assert(p.every((x,i)=>i===0||p[i-1].ovr>=x.ovr),'draft ovr')});
  test('Draft deja jugadores transferibles cuando el comprador tiene hueco',()=>{resetTestWorld();finishSeasonTest();const pk=world.season.draft.picks[0],seller=team(pk.teamId),pl=seller.players.find(x=>x.id===pk.playerId),buyer=world.teams.find(x=>x.id!==seller.id&&vm11BuyerCapacity(x,pl));assert(pl&&buyer,'eligible buyer');buyer.budget=999;assert(transferPlayer(pl.id,buyer.id,1),'draft transfer')});
  test('Estadísticas de temporada se reinician',()=>{resetTestWorld();simLeagueMatch('d1',0,{render:false,save:false});finishSeasonTest();startNextSeason();assert(allPlayers().every(p=>p.season.apps===0&&p.season.goals===0&&p.season.assists===0),'reset')});
  test('Carrera y clubCareer persisten',()=>{resetTestWorld();const t=world.teams[0];simMatch(t,world.teams[1]);assert(t.players.some(p=>p.career.apps>0&&p.clubCareer[t.id].apps>0),'career')});
  test('Envejecimiento incrementa edad',()=>{resetTestWorld();const q=world.teams[0].players[0],age=q.age;finishSeasonTest();assert(q.age===age+1,'age')});
  test('Retirada archiva y cantera rellena',()=>{resetTestWorld();const t=world.teams[0],q=t.players[0];q.age=39;const id=q.id;finishSeasonTest();assert(world.retired.some(x=>x.id===id),'retired');assert(t.players.length>=19,'replacement plus draft')});
  test('Mercado bloquea plantilla corta',()=>{resetTestWorld();finishSeasonTest();const seller=world.teams[0],buyer=world.teams[1];seller.players=seller.players.slice(0,16);buyer.budget=999;assert(!transferPlayer(seller.players[0].id,buyer.id,1),'guard')});
  test('Mercado protege último portero',()=>{resetTestWorld();finishSeasonTest();const seller=world.teams[0],buyer=world.teams[1],gks=seller.players.filter(p=>p.pos==='POR');seller.players=seller.players.filter(p=>p.pos!=='POR'||p.id===gks[0].id);while(seller.players.length<17)seller.players.push(makePlayer(seller.id,'MED',65,19));buyer.budget=999;assert(!transferPlayer(gks[0].id,buyer.id,1),'gk')});
  test('Traspaso registra historial de jugador y mundo',()=>{resetTestWorld();finishSeasonTest();const seller=world.teams[0],buyer=world.teams[1],q=seller.players.find(p=>!saleBlockReason(seller,p));buyer.budget=999;assert(transferPlayer(q.id,buyer.id,1),'transfer');assert(q.transferHistory.length===1&&world.transferRecords.length===1,'history')});
  test('Mercado coherente genera ofertas coherentes',()=>{resetTestWorld();finishSeasonTest();world.offers=[];setMarketMode('coherent');generateOffers(8);assert(world.offers.length>0&&world.offers.every(o=>o.source==='coherent'),'coherent')});
  test('Mercado caos genera ofertas caos',()=>{resetTestWorld();finishSeasonTest();world.offers=[];setMarketMode('chaos');generateOffers(8);assert(world.offers.length>0&&world.offers.every(o=>o.source==='chaos'),'chaos')});
  test('Diversidad evita 3 compradores seguidos',()=>{resetTestWorld();finishSeasonTest();world.offers=[];world.marketMemory={recentBuyers:[],offerCount:{},recentSellers:[]};setMarketMode('chaos');generateOffers(24);const ids=world.offers.map(o=>o.buyerId);for(let i=2;i<ids.length;i++)assert(!(ids[i]===ids[i-1]&&ids[i]===ids[i-2]),'triple buyer')});
  test('Diversidad limita comprador a 2 de últimas 5',()=>{resetTestWorld();finishSeasonTest();world.offers=[];world.marketMemory={recentBuyers:[],offerCount:{},recentSellers:[]};generateOffers(20);const ids=world.offers.map(o=>o.buyerId);for(let i=0;i<ids.length;i++){const w=ids.slice(Math.max(0,i-4),i+1);const c=w.filter(x=>x===ids[i]).length;assert(c<=2,'buyer repeated') }});
  test('Mercado automático completa operaciones',()=>{resetTestWorld();finishSeasonTest();world.teams.forEach(t=>t.budget=100);const before=world.transferRecords.length;autoMarket();assert(world.transferRecords.length>before,'auto deals')});
  test('Descendido aumenta atractivo vendedor coherente',()=>{resetTestWorld();finishSeasonTest();const rel=world.history[0].relegatedIds[0];assert(wasRelegated(rel),'relegated context')});
  test('Ascendido detectado para refuerzo',()=>{resetTestWorld();finishSeasonTest();const pro=world.history[0].promotedIds[0];assert(wasPromoted(pro),'promoted context')});
  test('Club profile reconstruye posiciones históricas',()=>{resetTestWorld();finishSeasonTest();const t=world.teams[0];assert(clubSeasonRows(t).length===1,'club history')});
  test('Palmarés deriva títulos por club',()=>{resetTestWorld();finishSeasonTest();const champ=team(world.history[0].championId),h=clubHonours(champ);assert(h.league===1,'honours')});
  test('Leyendas de club usan clubCareer',()=>{resetTestWorld();const a=world.teams[0];simMatch(a,world.teams[1]);const l=clubLegends(a);assert(l.seasons||l.goals||l.assists,'legends')});
  test('Récord de partido se actualiza',()=>{resetTestWorld();simMatch(world.teams[0],world.teams[1]);assert(world.records.biggestWin&&world.records.mostGoalsMatch,'records')});
  test('Rivalidades acumulan encuentros',()=>{resetTestWorld();simMatch(world.teams[0],world.teams[1]);assert(Object.keys(world.rivalries).length===1,'rivalry')});
  test('Hall of Fame tiene candidatos y club',()=>{resetTestWorld();simMatch(world.teams[0],world.teams[1]);const q=careerCandidates()[0];assert(q&&playerMainClubName(q),'hof')});
  test('Payload es v5.1 compacto',()=>{resetTestWorld();const p=statePayload();assert(p.version==='5.2'&&p.client==='VM1.2'&&!p.teams,'payload')});
  test('Migración añade coach y marketConfig',()=>{resetTestWorld();delete world.teams[0].coach;delete world.marketConfig;normalizeWorldV5(world);assert(world.teams[0].coach&&world.marketConfig.mode,'migration')});
  test('UI selector plantillas contiene clubes',()=>{resetTestWorld();renderPlayerTeamSelect();assert($('#playerTeamSelect').options.length===world.teams.length,'selector')});
  test('UI cambia entre vistas',()=>{switchView('players');assert($('#players').classList.contains('active'),'view');switchView('dashboard')});
  test('Copa granular resuelve un cruce',()=>{resetTestWorld();resolveCupByes();const i=world.season.cup.currentPairs.findIndex(p=>p.winner==null&&p.home!=null&&p.away!=null),before=world.historicalMatches;simCupMatch(i,{render:false,save:false});assert(world.historicalMatches===before+1,'cup')});
  test('Stress 4 temporadas Valoraciones + mercado',()=>{resetTestWorld('ratings',12,6);for(let i=0;i<4;i++){finishSeasonTest();world.teams.forEach(t=>t.budget=100);autoMarket();startNextSeason()}assert(world.season.no===5&&world.history.length===4,'stress ratings')});
  test('Stress 3 temporadas Igualados',()=>{resetTestWorld('equal',10,6);for(let i=0;i<3;i++){finishSeasonTest();startNextSeason()}assert(world.season.no===4,'stress equal')});
  test('Stress 3 temporadas Azar total',()=>{resetTestWorld('random',10,6);for(let i=0;i<3;i++){finishSeasonTest();startNextSeason()}assert(world.season.no===4,'stress chaos')});
 } finally {
  TESTING=false;teams=snapshot.teams;nextTeamId=snapshot.nextTeamId;nextPlayerId=snapshot.nextPlayerId;world=snapshot.world;rngState=snapshot.rngState;leagueTab=snapshot.leagueTab;
  $('#mode').value=snapshot.form.mode;$('#topSize').value=snapshot.form.topSize;$('#movement').value=snapshot.form.movement;$('#legs').value=snapshot.form.legs;$('#seedInput').value=snapshot.form.seed;renderTeams();renderPlayerTeamSelect();renderAll();switchView('dashboard');
 }
 const passed=results.filter(x=>x.ok).length,banner=$('#testBanner');banner.style.display='block';banner.id='TEST_RESULT';banner.textContent=`TEST_RESULT ${passed}/${results.length} PASS`+(passed===results.length?' ✅':' ❌ '+results.filter(x=>!x.ok).map(x=>x.name+': '+x.error).join(' | '));document.title=`LeagueForge v5 Tests ${passed}/${results.length}`;return results;
}
window.LeagueForge={runTests,createWorld,simLeagueRound,simLeagueAll,simLeagueMatch,simCupRound,simCupMatch,startNextSeason,generateOffers,autoMarket,setLeagueTab(v){leagueTab=v},get world(){return world}};
$('#runTestsBtn').addEventListener('click',()=>{
  const core=runTests(),extra=vm11BalanceSelfTest(),draft=vm12DraftSelfTest(),results=[...core,...extra,...draft];
  const passed=results.filter(x=>x.ok).length;
  note(`Tests VM 1.2: ${passed}/${results.length} PASS`);
  const banner=$('#testBanner');banner.style.display='block';banner.textContent=`TEST_RESULT ${passed}/${results.length} PASS`+(passed===results.length?' ✅':' ❌ '+results.filter(x=>!x.ok).map(x=>x.name+': '+x.error).join(' | '));
});
renderTeams();renderPlayerTeamSelect();renderSetup();renderAll();setAutosaveStatus(localStorage.getItem(AUTO_SAVE_KEY)||localStorage.getItem(LEGACY_SAVE_KEY)||localStorage.getItem(LEGACY_SAVE_KEY2)||localStorage.getItem(LEGACY_SAVE_KEY3)?'disponible':'—');
if(new URLSearchParams(location.search).get('test')==='1')setTimeout(runTests,50);
})();
