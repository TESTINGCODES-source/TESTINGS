(function(_0x2c9e2a,_0x5a9d0b){const _0x3d1e9c=function(_0x3c9f4a){while(--_0x3c9f4a){_0x2c9e2a['push'](_0x2c9e2a['shift']());}};_0x3d1e9c(++_0x5a9d0b);}(equationNames,0x1c3));

/* Obfuscated Equivalency Calculator Script */
const _0x4f72=['hidden','classList','add','remove','querySelector','.error-message','createElement','div','className','error-message','appendChild','textContent','Please\x20enter\x20a\x20value\x20between\x20','parentElement','forEach','invalid-input','.invalid-input','.empty-brackets','empty-brackets','includes','[]','()','{}','dataset','containsEmptyBrackets','true','input,\x20select','value','trim','Empty\x20brackets\x20are\x20not\x20allowed','input','text','toLowerCase','tagName'];

/* Obfuscated equation names */
const _0xeq = equationNames;

/* Obfuscated score data */
const _0xsd = ScoreData;

/* Obfuscated equations */
const _0xeqs = Equations;

/* DOM Elements - obfuscated references */
const _0xeqss = document.getElementById('equation-selection-section');
const _0xeqs_sel = document.getElementById('equation-selection');
const _0xeq_cards = document.getElementById('equation-cards');
const _0xinp_sec = document.getElementById('input-section');
const _0xdyn_inp = document.getElementById('dynamic-inputs');
const _0xback_btn = document.getElementById('back-button');
const _0xcalc_btn = document.getElementById('calculate-button');
const _0xres_sec = document.getElementById('results-section');
const _0xres_disp = document.getElementById('results-display');
const _0xrecalc_btn = document.getElementById('recalculate-button');
const _0xmain_menu_btn = document.getElementById('main-menu-button');

/* Ensure DOM references - obfuscated */
const _0xedr = function(){if(!_0xinp_sec||!_0xdyn_inp||!_0xback_btn||!_0xcalc_btn){console.error('Missing required DOM elements');return false;}return true;};

/* Global variables - obfuscated */
let _0xsel_eq_idx = -1;

/* Detect iframe - obfuscated */
const _0xdif = function(){try{return window.self!==window.top;}catch(_0xe){return true;}};

/* Apply iframe styles - obfuscated */
const _0xais = function(){if(_0xdif()){document.body.classList.add('in-iframe');const _0xmeta=document.createElement('meta');_0xmeta.name='viewport';_0xmeta.content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';document.head.appendChild(_0xmeta);}};

/* Create equation cards - obfuscated */
const _0xcec = function(){_0xeq_cards.innerHTML='';const _0xnum_eq=_0xeqs.length;for(let _0xi=0;_0xi<_0xnum_eq;_0xi++){const _0xcard=document.createElement('div');_0xcard.className='equation-card';_0xcard.dataset.index=_0xi;_0xcard.textContent=_0xeq[_0xi];_0xcard.addEventListener('click',()=>_0xseq(_0xi));_0xeq_cards.appendChild(_0xcard);}};

/* Select equation - obfuscated */
const _0xseq = function(_0xidx){_0xsel_eq_idx=_0xidx;document.querySelectorAll('.equation-card').forEach(_0xc=>{_0xc.classList.remove('selected');});const _0xsel_card=document.querySelector(`.equation-card[data-index="${_0xidx}"]`);if(_0xsel_card){_0xsel_card.classList.add('selected');}_0xeqs_sel.classList.add('hidden');document.getElementById('main-conversion-tables').classList.add('hidden');_0xinp_sec.classList.remove('hidden');_0xgif(_0xidx);};

/* Generate input fields - obfuscated */
const _0xgif = function(_0xeq_idx){_0xdyn_inp.innerHTML='';const _0xfunc_str=_0xeqs[_0xeq_idx].toString();const _0xparams=_0xfunc_str.substring(_0xfunc_str.indexOf('(')+1,_0xfunc_str.indexOf(')')).split(',').map(_0xp=>_0xp.trim());const _0xap_params=_0xparams.filter(_0xp=>_0xp.startsWith('AP'));const _0xact_params=_0xparams.filter(_0xp=>_0xp.startsWith('ACT'));const _0xsubj_params=_0xparams.filter(_0xp=>_0xp.startsWith('Subject'));const _0xgrade_params=_0xparams.filter(_0xp=>_0xp.includes('GPA'));if(_0xap_params.length>0){_0xdyn_inp.appendChild(_0xcig('AP Scores',_0xap_params,'AP'));}if(_0xact_params.length>0){_0xdyn_inp.appendChild(_0xcig('ACT Scores',_0xact_params,'ACT'));}if(_0xsubj_params.length>0){_0xdyn_inp.appendChild(_0xcig('Subject Scores',_0xsubj_params,'Subject'));}if(_0xgrade_params.length>0){_0xdyn_inp.appendChild(_0xcig('School Grades',_0xgrade_params,'Grade'));}};

/* Create input group - obfuscated */
const _0xcig = function(_0xtitle,_0xparams,_0xtype){const _0xgroup=document.createElement('div');_0xgroup.className='input-group';const _0xh3=document.createElement('h3');_0xh3.textContent=_0xtitle;_0xgroup.appendChild(_0xh3);let _0xrow=document.createElement('div');_0xrow.className='form-row';_0xparams.forEach((_0xparam,_0xidx)=>{_0xrow.appendChild(_0xcif(_0xparam,_0xtype));if((_0xidx+1)%3===0||_0xidx===_0xparams.length-1){_0xgroup.appendChild(_0xrow);if(_0xidx!==_0xparams.length-1){_0xrow=document.createElement('div');_0xrow.className='form-row';}}});return _0xgroup;};

/* Create input field - obfuscated */
const _0xcif = function(_0xparam,_0xtype){const _0xfield=document.createElement('div');_0xfield.className='form-field';const _0xlabel=document.createElement('label');_0xlabel.setAttribute('for',_0xparam);let _0xlabel_text=_0xparam;if(_0xtype==='AP'){const _0xap_num=_0xparam.replace('AP','');_0xlabel_text=`AP Score ${_0xap_num}`;}else if(_0xtype==='ACT'){const _0xact_num=_0xparam.replace('ACT','');_0xlabel_text=`ACT Score ${_0xact_num}`;}else if(_0xtype==='Subject'){const _0xsubj_num=_0xparam.replace('Subject','');_0xlabel_text=`Subject ${_0xsubj_num} (ACT/EST/SAT1/Arabic/MOE)`;}else if(_0xtype==='Grade'){if(_0xparam.includes('10')){_0xlabel_text='Grade 10';}else if(_0xparam.includes('11')){_0xlabel_text='Grade 11';}else if(_0xparam.includes('12')){_0xlabel_text='Grade 12';}}
_0xlabel.textContent=_0xlabel_text;_0xfield.appendChild(_0xlabel);if(_0xtype==='AP'){const _0xselect=document.createElement('select');_0xselect.id=_0xparam;_0xselect.name=_0xparam;_0xselect.className='form-select';for(let _0xi=1;_0xi<=5;_0xi++){const _0xoption=document.createElement('option');_0xoption.value=_0xsd.AP[_0xi];_0xoption.textContent=_0xi;_0xselect.appendChild(_0xoption);}_0xselect.value=_0xsd.AP[1];_0xfield.appendChild(_0xselect);}else if(_0xtype==='ACT'){const _0xselect=document.createElement('select');_0xselect.id=_0xparam;_0xselect.name=_0xparam;_0xselect.className='form-select';for(let _0xi=1;_0xi<=36;_0xi++){const _0xoption=document.createElement('option');_0xoption.value=_0xi;_0xoption.textContent=_0xi;_0xselect.appendChild(_0xoption);}_0xselect.value='1';_0xfield.appendChild(_0xselect);}else if(_0xtype==='Subject'){const _0xsubj_container=document.createElement('div');_0xsubj_container.className='subject-container';const _0xtype_label=document.createElement('label');_0xtype_label.textContent='Test Type:';_0xtype_label.className='sub-label';_0xsubj_container.appendChild(_0xtype_label);const _0xtype_select=document.createElement('select');_0xtype_select.id=`${_0xparam}Type`;_0xtype_select.className='subject-type form-select';_0xtype_select.style.marginBottom='15px';const _0xtypes=['ACT','EST','SAT1','Arabic','MOE'];_0xtypes.forEach(_0xtype=>{const _0xoption=document.createElement('option');_0xoption.value=_0xtype;_0xoption.textContent=_0xtype;_0xtype_select.appendChild(_0xoption);});const _0xscore_label=document.createElement('label');_0xscore_label.textContent='Score:';_0xscore_label.className='sub-label';const _0xscore_container=document.createElement('div');_0xscore_container.id=`${_0xparam}ScoreContainer`;_0xusi(_0xparam,'ACT',_0xscore_container);_0xtype_select.addEventListener('change',(_0xe)=>{_0xusi(_0xparam,_0xe.target.value,_0xscore_container);});_0xsubj_container.appendChild(_0xtype_select);_0xsubj_container.appendChild(_0xscore_label);_0xsubj_container.appendChild(_0xscore_container);_0xfield.appendChild(_0xsubj_container);}else if(_0xtype==='Grade'){const _0xinput=document.createElement('input');_0xinput.type='number';_0xinput.id=_0xparam;_0xinput.name=_0xparam;_0xinput.className='form-input';_0xinput.min=50;_0xinput.max=100;_0xinput.step=0.1;_0xinput.value=50;_0xfield.appendChild(_0xinput);}return _0xfield;};

/* Update score input - obfuscated */
const _0xusi = function(_0xparam,_0xtype,_0xcontainer){_0xcontainer.innerHTML='';if(_0xtype==='ACT'){const _0xselect=document.createElement('select');_0xselect.id=_0xparam;_0xselect.name=_0xparam;_0xselect.className='form-select';for(let _0xi=1;_0xi<=36;_0xi++){const _0xoption=document.createElement('option');_0xoption.value=_0xsd.ACT[_0xi];_0xoption.textContent=_0xi;_0xselect.appendChild(_0xoption);}_0xselect.value=_0xsd.ACT[1];_0xcontainer.appendChild(_0xselect);}else if(_0xtype==='EST'){const _0xselect=document.createElement('select');_0xselect.id=_0xparam;_0xselect.name=_0xparam;_0xselect.className='form-select';for(let _0xi=200;_0xi<=800;_0xi+=10){const _0xoption=document.createElement('option');_0xoption.value=_0xsd.EST[_0xi];_0xoption.textContent=_0xi;_0xselect.appendChild(_0xoption);}_0xselect.value=_0xsd.EST[200];_0xcontainer.appendChild(_0xselect);}else if(_0xtype==='SAT1'){const _0xselect=document.createElement('select');_0xselect.id=_0xparam;_0xselect.name=_0xparam;_0xselect.className='form-select';for(let _0xi=400;_0xi<=1600;_0xi+=10){const _0xoption=document.createElement('option');_0xoption.value=_0xsd.SAT1[_0xi];_0xoption.textContent=_0xi;_0xselect.appendChild(_0xoption);}_0xselect.value=_0xsd.SAT1[400];_0xcontainer.appendChild(_0xselect);}else if(_0xtype==='Arabic'||_0xtype==='MOE'){const _0xinput=document.createElement('input');_0xinput.type='number';_0xinput.id=_0xparam;_0xinput.name=_0xparam;_0xinput.className='form-input';_0xinput.min=40;_0xinput.max=100;_0xinput.step=1;_0xinput.value=40;_0xcontainer.appendChild(_0xinput);}};

/* Handle calculate - obfuscated */
const _0xhc = function(){if(_0xvai()){const _0xresults=_0xcr();_0xdr(_0xresults);_0xinp_sec.classList.add('hidden');_0xres_sec.classList.remove('hidden');}};

/* Validate all inputs - obfuscated */
const _0xvai = function(){document.querySelectorAll(_0x4f72[0x10]).forEach(_0xel=>{_0xel[_0x4f72[0x1]][_0x4f72[0x2]](_0x4f72[0xf]);});document.querySelectorAll(_0x4f72[0x11]).forEach(_0xel=>{_0xel[_0x4f72[0x1]][_0x4f72[0x2]](_0x4f72[0x12]);});let _0xall_valid=true;const _0xnum_inputs=document.querySelectorAll('input[type="number"]');_0xnum_inputs[_0x4f72[0xe]](input=>{const _0xvalue=parseFloat(input.value);const _0xmin=parseFloat(input.min);const _0xmax=parseFloat(input.max);if(isNaN(_0xvalue)||_0xvalue<_0xmin||_0xvalue>_0xmax){input[_0x4f72[0x1]][_0x4f72[0x2]](_0x4f72[0xf]);_0xall_valid=false;let _0xerr_msg=input[_0x4f72[0xd]][_0x4f72[0x4]](_0x4f72[0x5]);if(!_0xerr_msg){_0xerr_msg=document[_0x4f72[0x6]](_0x4f72[0x7]);_0xerr_msg[_0x4f72[0x8]]=_0x4f72[0x9];input[_0x4f72[0xd]][_0x4f72[0xa]](_0xerr_msg);}_0xerr_msg[_0x4f72[0xb]]=_0x4f72[0xc]+_0xmin+' and '+_0xmax;}else{const _0xerr_msg=input[_0x4f72[0xd]][_0x4f72[0x4]](_0x4f72[0x5]);if(_0xerr_msg){_0xerr_msg.remove();}}});const _0xinput_fields=document.querySelectorAll(_0x4f72[0x1a]);_0xinput_fields[_0x4f72[0xe]](field=>{const _0xvalue=field[_0x4f72[0x1b]][_0x4f72[0x1c]]();if(_0xvalue[_0x4f72[0x13]](_0x4f72[0x14])||_0xvalue[_0x4f72[0x13]](_0x4f72[0x15])||_0xvalue[_0x4f72[0x13]](_0x4f72[0x16])){field[_0x4f72[0x1]][_0x4f72[0x2]](_0x4f72[0xf]);_0xall_valid=false;let _0xerr_msg=field[_0x4f72[0xd]][_0x4f72[0x4]](_0x4f72[0x5]);if(!_0xerr_msg){_0xerr_msg=document[_0x4f72[0x6]](_0x4f72[0x7]);_0xerr_msg[_0x4f72[0x8]]=_0x4f72[0x9];field[_0x4f72[0xd]][_0x4f72[0xa]](_0xerr_msg);}_0xerr_msg[_0x4f72[0xb]]=_0x4f72[0x1d];_0xheb(field);}});return _0xall_valid;};

/* Highlight empty brackets - obfuscated */
const _0xheb = function(field){if(field[_0x4f72[0x22]][_0x4f72[0x21]]()==='input'&&field.type===_0x4f72[0x20]){const _0xvalue=field[_0x4f72[0x1b]];const _0xbracket_patterns=['\\[\\]','\\(\\)','\\{\\}'];const _0xtemp_div=document[_0x4f72[0x6]](_0x4f72[0x7]);let _0xformatted_content=_0xvalue;_0xbracket_patterns.forEach(pattern=>{const _0xregex=new RegExp(pattern,'g');_0xformatted_content=_0xformatted_content.replace(_0xregex,match=>`<span class="empty-brackets">${match}</span>`);});_0xtemp_div.innerHTML=_0xformatted_content;field[_0x4f72[0x17]][_0x4f72[0x18]]=_0x4f72[0x19];}};

/* Calculate results - obfuscated */
const _0xcr = function(){const _0xfunc_str=_0xeqs[_0xsel_eq_idx].toString();const _0xparams=_0xfunc_str.substring(_0xfunc_str.indexOf('(')+1,_0xfunc_str.indexOf(')')).split(',').map(_0xp=>_0xp.trim());const _0xvalues=_0xparams.map(_0xparam=>{const _0xel=document.getElementById(_0xparam);if(_0xel){return parseFloat(_0xel.value);}return 0;});const _0xresult=_0xeqs[_0xsel_eq_idx](..._0xvalues);return{equation:_0xeq[_0xsel_eq_idx],parameters:_0xparams,values:_0xvalues,result:_0xresult};};

/* Display results - obfuscated */
const _0xdr = function(_0xresults){_0xres_disp.innerHTML='';const _0xresult_card=document.createElement('div');_0xresult_card.className='result-card';const _0xequation_name=document.createElement('h3');_0xequation_name.textContent=`Equation: ${_0xresults.equation}`;_0xresult_card.appendChild(_0xequation_name);const _0xscore_display=document.createElement('div');_0xscore_display.className='score-display';const _0xscore=document.createElement('span');_0xscore.className='score';_0xscore.textContent=_0xresults.result.toFixed(2)+'%';_0xscore_display.appendChild(_0xscore);_0xresult_card.appendChild(_0xscore_display);const _0xdetails=document.createElement('div');_0xdetails.className='result-details';const _0xdetails_title=document.createElement('h4');_0xdetails_title.textContent='Calculation Details:';_0xdetails.appendChild(_0xdetails_title);const _0xdetails_list=document.createElement('ul');_0xresults.parameters.forEach((_0xparam,_0xindex)=>{const _0xli=document.createElement('li');_0xli.textContent=`${_0xparam}: ${_0xresults.values[_0xindex]}`;_0xdetails_list.appendChild(_0xli);});_0xdetails.appendChild(_0xdetails_list);_0xresult_card.appendChild(_0xdetails);_0xres_disp.appendChild(_0xresult_card);};

/* Go back to equations - obfuscated */
const _0xgbte = function(){console.log('Going back to equation selection');document.getElementById('input-section').classList.add('hidden');document.getElementById('equation-selection').classList.remove('hidden');document.getElementById('main-conversion-tables').classList.remove('hidden');_0xsel_eq_idx=-1;document.querySelectorAll('.equation-card').forEach(card=>{card.classList.remove('selected');});setTimeout(()=>{try{window.scrollTo({top:0,behavior:'smooth'});}catch(e){window.scrollTo(0,0);}document.body.scrollTop=0;document.documentElement.scrollTop=0;},100);};

/* Go to main menu - obfuscated */
const _0xgtmm = function(){_0xres_sec.classList.add('hidden');_0xeqss.classList.remove('hidden');_0xsel_eq_idx=-1;document.querySelectorAll('.equation-card').forEach(card=>{card.classList.remove('selected');});setTimeout(()=>{try{window.scrollTo({top:0,behavior:'smooth'});}catch(e){window.scrollTo(0,0);}document.body.scrollTop=0;document.documentElement.scrollTop=0;},100);};

/* Go back to inputs - obfuscated */
const _0xgbti = function(){_0xres_sec.classList.add('hidden');_0xinp_sec.classList.remove('hidden');setTimeout(()=>{try{window.scrollTo({top:0,behavior:'smooth'});}catch(e){window.scrollTo(0,0);}document.body.scrollTop=0;document.documentElement.scrollTop=0;},100);};

/* Initialize the application - obfuscated */
document.addEventListener('DOMContentLoaded',()=>{if(!_0xedr()){console.error('Some DOM elements are missing. Check the HTML structure.');return;}_0xais();_0xcec();_0xback_btn.addEventListener('click',_0xgbte);_0xcalc_btn.addEventListener('click',_0xhc);_0xrecalc_btn.addEventListener('click',_0xgbti);_0xmain_menu_btn.addEventListener('click',_0xgtmm);console.log('Calculator initialized successfully');});
