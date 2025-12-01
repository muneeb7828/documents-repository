// terminal

// command prompt ye terminal hota he aur iska use karke pura computer chala sakhte he bagher mouse ka use kare 
// aur isme bohot saari chezein hoti he jiska use karke computer me changes kar sakte he


// UI (user interface)
// UI vo hota he jo kisi ke through ham chizon ko chala rahe he jese cpu me khuch cheez he aur vo hame chalani to vo ham kese chalayenge screen ke through to screen ui he

// aur 2 types ke UI hote he GUI(Graphicap user interface) and CLI(cammond line interface)


// GUi(Graphicap user interface)

// GUI vo hota he jo screen pe graphical cheezein dikhti he usi ko GUI bolte he 


// gui ke bhi to types hote he menu driver ui and touch gui 

// menu driven ui ke andar kuch limitaions hote he jese ye bas jo menu me dikh raha he vo hi chala sakte he 

// touch gui touch phones ko bolte he



// CLI(cammond line interface)

// CLI 
// CLI ye compand prompt hota he phele kya hota jab computer shuru shuru me bane the to gui to hota nahi tha to pura commpands likhke chalana padta tha to usi ko CLI bolte he

// command
// command usko bolte he jo agar aapko ko kuch computer se karwana he to ham commands likhenge to hi chalega aur agar commands galat hui to nahi chalega




// local 
// local matlab jis system me kaam rahe he vo local he


// remote
// remote usko bolte jo net se lete hain agar github website se le rahe he to vo remote he




// GIT and GITHUB

// aur git ham isliye use karte he kyuki agar ham chate he ki jo hamne file banai he usko baad me ham kuch kare to us file ko kuch nahi ho 
// vo vesa hi rahe jab tak naya wala save na kare
// aur git checkpoints ki tarah hota he matlab ki jo naya kiya vo save na ho purana wala hi rahe usi ko checkpoints bolte he

// aur git ka ek terminal hota he gibash jiska use karke ham git aur github chalate he 

// Git software hota he aur github service hota he yani isko online dikhata he

// folder directory repository ye sab same hote he

// git hub me folder ko repository bolte he



// Terminologies in git 

// version control system= ye chechpoints banata he aur check karta he files ko


// commit 
// commit matlab jab file staging area me chali jati magar usee use nahi kar sakte jab tak usko commit na kare 
// commit karne ke baad hi repo me aati he aur uske baad hi usko dekh sakte he


// write add commit matlab likho add karo fir use commit kardo

// how git works

// sabse phele git init kiya fir working directory choose kari
// fir ham usko add kiya git add se fir git add karne se vo staging area me chala jata he
// fir ham usko commit karte he aur commit karne se checkpoint lag jata he
// aur fir usko git hub pe push kar dete he

// working directory
// staging area 
// commit 
// 


// commonds in git 

// git status 

// pwd (present working directory)

// cd (change directory)

// ls (list)

// ls -la (list and folders)

// git init (git initialization)
// git init karne se jis bhi directory me hai usme .git naam ka repository ban jati he jisse fir ham usko track kar sakte he


// git config (git configure) 
// configure matlab change karna

// git config --global 
//  --global iski madad se git config system me files rakta he aur isse details add kar sakte he

// git config --list  
// isse pura git config dekh sakte he


// git add 
// isse file ko add karke usko stage pe daal dete he git add file1.html file2.html isse ye dono file add ho jayengi aur stage pe chale jayengi


// git add . 
// isme jo dot hota he uska matlab hota he saari 
// isse saari files ek baar me add kar sakte he

// git add --A 
// isse bhi saari files ek baar me add ho jati he

// git rm --cached filename  to unstage
// rm ka matlab remove

// rm 
// rm khali ye likhne se sab jagah se hat jati he file 


// touch index.html
// touch is commond se blank file ban jati he


// clear
// clear isse pura git clear ho jata he


// rm -rf .git
// rm -rf .git isse jis folder me bhi git track kar raha tha vaha se hat jata he aur fir wapas se init karna padta he
// aur isse kya hota he ki wapas kisi commit pe jana he to uspe nahi ja sakte 

// git diff
// git diff ye batata he changes last commit me aur working directory me aur agar working directory ko stage pe daal diya to ye changes batata he stage area me aur working directory me


// mv
// mv isse rename hojata he file ka matlab ek file se move hoke dusri file me ajati he



// .gitignore
// gitignore isse kya hota he ki agar aap chate ho ki kuch files ya folder chupana he ke vo track nahi ho to iska use karenge
// aur agar ham chate he ki same naam ki jitni bhi file he vo sab ignore ho jay to *.text likhenge 
// aur agar ham chate he folder ignore ho jay to folder/ likhenge to iske andar jo bhi likha hoga vo sab ignore ho jayga 

// aur jaha bhi - likha he usko flag bolte he

// aur author me jo name hota he vo hota he ki kisne file banai he
// aur commit me jo name likha hota he vo hota he kisne commit kiya he


// git checkout -- filename
// agar working directory me kuch change kiya he aur stage nahi kiya to iska use karenge to last commit me pohuch jayga

// git checkout -f
// ye saari files ko working directory se ya stage se last commit me pocha deta he


// git restore --staged file1.txt
// isse unstage kar sakte file ko stage se

// git restore --staged .
// isse saari files unstage ho jati he


// git restore
// git restore isse working directory se jo staging area me add thi vo wapas working directory me chali jati he

// git merge --abort
// This command is made specifically for canceling an ongoing merge.
// It: Restores everything (staged + unstaged) to the exact pre-merge state. Removes the MERGING state from Git.Cleans up all temporary merge data safely. Use this when a merge is in progress.

// git reset --hard HEAD
// if You want to nuke everything and go 100% clean
// Full reset (be careful, this deletes all changes)

// alias
// alias iska use karke kisi bhi command ko short kar sakte he

// git config --global alias.st status
// git config --global alias.ci commit
// git config --global alias.unstage 'restore --stage --'




// commit area:-

// agar git.commit kare to vim editor open ho jata he jo git ka default editor hota he
// to fir apan ko i press karna padta he fir commit ka message likhna padta he fir esc button dabana padta he aur fir colon dabana padta he 
// aur fir uske baad wq likhte he fir commit add hota he

// agar aap chate hoke itna sab kuch nahi karna pade to git commit -m ye commond use karo


// git commit -m "first commit"
// is command se file stage se commit hoke repo me chale jaygi
// -m matlab messege aur message hamesha "" iske andar likhenge

// git commit -a -m "second commit"
// isse directly working directory se commit kar sakte he







// git log commonds:-



// git log
// log se ham dekh sakte he kya commit hua aur kab commit hua
// aur kisne commit kiya 


// git log --oneline
// isse bohot short me ajata he

// git log --pretty=oneline 
// isse bhi bohot short me ajata he

// git log --pretty=short
// ye bhi --oneline ki tarah hota he bas isme toda aur ache se ajata he

// git log --pretty=full
// isse full information ajati he

// git log -p
// isse diff dekh sakte he saare commits ka

// git log -p -number
// isse diff dekh sakte he jitne bhi numbers he un sab ka

// git log --stat
// isse bhi bohot saari information ajati he

// git log --pretty=format:"%h--%an"
// isse khali commit aur author ajayga
// h=hash an=author

// git reflog
// git reflog isse commit ki history ajati jese kab checkout hua kab merge hua etc 

// git reset --hard <commit-hash>
// isse koi se bhi commit pe ja sakte he bas isme commit id mention karni padti he

// git reset --hard HEAD@{}
// isme jo bhi number daalo vo utni commits piche kar deta he



// branch:-

// master branch
// master matlab main branch

// branch ye by defauld master hoti aur iska use isliye karte he agar ham khuch website banai 
// aur ham usme kuch change karna chate to ham usi branch ko new branch banake usme shift karke usme change kar sakte he 
// jisse kya hoga ke agar kuch kharab ho gaya to master branch me khuch nahi hoga aur sahi he to new branch ko master branch me shift kar sakte he


// git checkout -b newbranchname
// is command ka use karke ham new branch add kar sakte he aur saathi switch bhi ho jata he
// -b matlab new branch 


// git checkout branchname
// isse branch switch ho jati he agar he to

// git branch -M main
// isse main branch ka name change ho jata he

// git branch 
// git branch isse saari branch dikh jati he


// git spash
// isse agar checkout nahi ho raha he to dusri branch me iska use karne se ho jata he


// git merge branchname 
// agar new branch me kuch change kiya he aur aap chate ho ki vo merge hojay main branch me to ye command likhenge main branch me
// to vo merge ho jaygi aur agar kuch main branch me kuch change kiya he usko switch karne ke baad aur new branch me bhi kiya he to conflict ho jaygi to fir un dono me select karna hoga fir hi merge kar sakte he
// aur fir uske baad add karenge aur commit karenge to vo merge ho jaygi


// git rebase master
// agar aap chate ho ki jab master ko merge kare conflict merge ka option nahi aay to iska use karenge
// kyuki iska use karne se commit ki history change ho jati he
// aur ye directly merge ho jata he


// git branch -d branchname
// isse jo bhi branch add kari he vo delete ho jati he agar vo merge kardi to
// nahi to -D capital me likhna hoga usse jesi bhi hogi delete ho jaygi

// git push origin --delete master
// is command se github pe branch delete ho jati he


// git branch -v
// isse har branch ka last commit dikhta he


// git branch --merge
// isse saari merge branch dikhti he

// git branch --no-merge
// isse jo merge nahi hui vo dikhti he


// git push origin newbranch
// isse new branch add ho jaygi git hub pe lekin jab push kare to usi branch pe switch ho gitbash pe nahi to dikkat ho jaygi

// git push -d origin newbranch
// isse branch delete ho jaygi git hub pe

// git push origin newbranch:newbranch1
// isse branch select kar sakte he git hub pe

// git pull origin main
// ye command update kar deta he folder ko

// git push origin newbranch --force
// isse agar kuch error araha ho push nahi ho rahi ho to is command se hojaygi

// git clone -b branch-name --single-branch https://github.com/muneeb3778/Updated-Sundukpay.git
// isse particularly single branch clone kar sakte he

// git log --oneline --graph --decorate --all
// this is for when we want to check all commits 

// This is for when we want to go back to privios commit but before apply to this first add new branch and then run this
// git reset --hard e22e97c


// Git hub:-

// push
// push matlab bhejna

// pull
// pull matlab fetch karna


// SHH key (secure shell)
// SHH key iska use isliye karte he ye ek key generate karta he system me to vo key copy karke github me daalte he fir key sahi ho to push kar sakte he nahi to nahi kar sakte
// SHH key ye security ke liye hota he aur ye password se bhi zada secure hota he


// passprase
// passprase agar isme kuch likhte he to ye har commit ke saath likhna padta he agar shuru me empty chod do to nahi likhna padta


// aur shh me kuch commands bhi hote he jis ke bagair ham git repository ko git hub pe push nahi kar sakte
 

// git remote -v
// isse url ajata he push karne ka aur pull karne ka




// open source in git hub:-

// open source matlab free
// open source ke andar bohot saari chezein hoti he jese issues ,pull request etc
// isme kya hota he ki ek website dali hui he git hub pe aur aapne dekha ki kuch issue he us website ke andar to aap unki repository me add kar sakte ho issue ko aur pull sakte he 
// lekin isme directly push nahi kar sakte kyuki access nahi he us website ka to hame unki website fork karke apni repository me daalna hoga fir usko pull karke push kar sakte he apni repository me
// aur fir unki repository me jake pull request me add kar sakte he us repository ko to uske baad agar vo chahe to merge kar sakta he us pull request ko 
// aur pull karke jab bhi branches banay to uska name us issue ki tarah ho aur fir push karke pull request me add kare


// aur hamesha jab bhi pull kare to apni main branch se hi kare

// aur pull karne ke baad kuch changes kare to uske liye agal branch me kare aur fir usko push kare



// github conflits

// How Git decides when to show a conflict
// Git only raises a conflict when:
// The same file was edited in both branches in the same lines, or
// The same section of a file was changed differently.
// If: You added different lines in different parts of the file, or
// One branch edited a file while the other branch didn’t,
// then Git can automatically merge without conflict — it merges those safely.


// this is for preventing auto conflict while pulling and merging branch
// git pull --no-commit --no-ff origin abdullah
// git merge --no-commit --no-ff origin/abdullah


// github desktop

// github actions and ci cd pipeline


// if git shows up to date after run this command git pull origin branchname and commit history is same so
// Git merges commits, not files.
// If both branches have the same last commit hash → Git believes everything is already merged.
// Even if you edit files locally, until you git commit and git push, Git doesn’t see those changes.




