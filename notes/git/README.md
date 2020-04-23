# การใช้งาน Git ฉบับรีบร้อน

![](https://cdn-images-1.medium.com/max/1000/1*BCZkmZR1_YzDZy22Vn4uUw.png)


Git เป็น **V**ersion **C**ontrol **S**ystem แบบ distributed (หมายความว่าไม่มีศูนย์กลาง) และแบบ non-linear history (หมายความว่ามีประวัติการเปลี่ยนแปลงแบบไม่ใช่เส้นตรง) ดังนั้นทำให้คอนเซปต์ของ Git นั้นต่างจาก VCS รุ่นก่อนหน้าหลายอย่าง

ต่อไปจะอธิบายย่อๆ เรื่องคำสั่ง Git โดยอิงกับการทำงานใน [GitHub](https://github.com/) เป็นสำคัญ

## Configurations
ก่อนจะเริ่มใช้งาน Git ได้นั้น จำเป็นต้องตั้งค่าการใช้งานเบื้องต้นก่อน

__EXAMPLES__

	$ git config --global user.name "Junlapong L."
	$ git config --global user.email "junlapong@gmail.com"
	$ git config --global --list

## Clone

สมมุติว่ามี repository แห่งนีงใน GitHub เช่น https://github.com/uername/project

เวลาเราจะใช้โค้ดใน repository นี้ เรา `clone`

	git clone https://github.com/uername/project

### Clone vs Checkout

ให้สังเกตุว่า การ `clone` ต่างจาก `checkout` ใน VCS แบบ linear history เช่น SVN ตรงที่ ใน SVN repository มีที่เดียวเป็นศูนย์กลาง สิ่งที่ `checkout` เป็นเพียงแค่ working directory ส่วนตัวของเรา

แต่ใน Git การ `clone` เราได้ทั้งตัว repository และ working directory   อันนี้ทำให้เราได้ history graph มาเป็นของเราเอง เราเรียก repository ที่ต้นทางว่า origin repository (หรือ remote repository หากอยุ่ต่าง network จากเรา เช่น GitHub เป็นต้น) ส่วน repository ที่เรา clone มามักเรียกว่า local repository

และจะบอกว่า Git เองก็มี `checkout` ซี่งแท้แล้วก็เหมือนกับ SVN เพียงแต่ว่า Git `checkout` ทำได้จาก local repository มายัง working directory เท่านั้น  ไม่สามารถทำได้จาก origin repository



## Add & Commit

หากเราเปลี่ยนแปลงหลายไฟล์ใน repo ที่ `clone` มา จะมีแต่ไฟล์ที่ใน __Index__ เท่านั้นที่สามารถบันทีกลง history เราใช้คำสั่ง `add` ในการเพิ่งไฟล์ลงไปใน __Index__ ของ Git

จากนั้นเราก็ต้องสั่ง `commit` Git ก็จะไปมองหาทุกสิ่งใน __Index__ แล้วบันทีกการเปลี่ยนแปลง  

ใน Git เราสามารถ `add` อย่างอื่นนอกจากไฟล์ลง __Index__ ได้เช่น บรรทัดบางบรรทัดในไฟล์ (หรือ `hunk`)

อนี่ง การที่เรา `commit` ให้รู้ว่า เรา `commit` ไปยัง repository ที่เรา `clone` มาเท่านั้น และไม่มีผลไปถีง origin repository ดังนั้น…

	git status
	git add /path/to/file/or/directory
	git add .
	
	git status
	git commit -m "commit message"
	git commit -am "commit message"

## Log

ดู history ของ commit log, id

	git log
	git log --oneline --graph --decorate --all

ถ้าขี้เกียจพิมพ์ยาวๆ เราสามารถใช้ Git alias ย่อได้ โดยจะเอาการแสดง log ข้างบน มาสร้างเป็นคำสั่ง git hist

	git config --global alias.hist "log --oneline --graph --decorate --all"

ทดสอบดู

	$ git hist
	* 6dd2383 (HEAD -> master) My first commit


## Push

หลังจากเราทำงานไปได้พักนีง เราควรจะส่ง history ใหม่ๆ จาก clone repo ของเรากลับไปยัง origin ที่ GitHub  นี่คือตอนที่เราใช้ `push`

`push` จะลอก history ของเรากลับไปยัง origin repo 

	git push
	git push origin branch
	git push -u origin master

## Fetch, Pull & Merge

แต่ว่าในการทำงานเป็นทีม ที่ origin repo อาจจะมีการเปลียนแปลงระหว่างที่เรายังไม่ได้ `push` เราควรจะ `fetch` สิ่งที่ clone repo เราไม่มีลงมาเสียก่อน  

`fetch` จะดีงสิ่งใหม่ๆจาก origin มาที่ clone repository แต่ว่าจะไม่แตะต้อง working directory นี่เป็นสิ่งดีเพราะว่า เราจะได้ใช้จังหวะนี้ ดูว่ามี conflict อะไรเกิดขี้นหรือเปล่าในสิ่งที่เรายังไม่ได้ `commit` ไปใน clone repository เราจะได้ resolve conflict ได้ก่อน

\*** สำหรับผู้ที่ชอบความตื่นเต้น  สามารถใช้ `pull` ซี่งจะดึงสิ่งใหม่ๆจาก origin ลงมา `merge` ทั้งบน clone repository และ working directory โดยทันที หากมี conflict จากการ `merge` ใน working directory เราต้อง resolve conflict นั้นๆ ก่อนจะ `commit` ได้ต่อไป

นั่นคือ `pull` แท้จริงคือ `fetch` ต่อเนื่องด้วย `merge` ในท่าเดียวนั่นเอง 

	git fetch
	git merge
	git pull

## Reset

ทุกคนย่อมมีพลาดพลั้ง เราสามารถย้อน working directory ของเราไป ณ `commit` หนี่งใดใน history ของ local repository ได้ ด้วยการ `reset`  แต่ละ `commit` ใน Git จะมี id เป็นเลข hash ยาวๆเช่น 

	29a4c0d0549897bf2dabc90a4f7664de31d4df43`

แต่เราสามารถเรียกย่อๆ ได้ด้วยเลข 7 ตัวแรก

    29a4c0d

เวลาเรา reset ก็แค่บอก Git ว่าเราจะ reset ไปยัง commit id  ใด  และเรายังสามารถกำหนดได้ด้วยว่า จะมี path หรือ file ไหนถูก reset บ้าง

	git reset
	git reset --hard

## Branch

![](https://cdn-images-1.medium.com/max/800/1*GExzPlsrAFRbT1GaY8Az5w.png)

เป็นเรื่องปกติที่ stable app จะต้องมีการแก้บั๊กหลัง roll out  และในเวลาเดียวกัน เราก็อาจจะต้องเพิ่ม features ใหม่ๆที่อาจจะทำให้ app ไม่ stable สิ่งที่นิยมทำใน VCS คือการแยก branch ใหม่เพื่อให้เราเริ่มโค้ด features ใหม่ได้ ส่วน app ที่ stable ก็จะอยู่ใน master branch เพื่อให้งานดำเนินต่อไปได้โดยไม่ต้องรอแก้บั๊กใน master ให้เสร็จก่อน ใน Git เราใช้คำสั่ง `branch` เพื่อแตก branch ใหม่ออกมา 

Branch ใหม่ที่แยกออกมาก็จะมี history เป็นของมันเอง เราสามารถ checkout และ commit สิ่งใหม่ๆใน branch นี้ได้ นั่นคือ ก็เหมือนใน local repository หนี่งๆ เราสามารถมี sub repository ย่อยๆ นั่นเอง เพียงแต่เราเรียก sub repository พวกนี้ว่า branch

พอถีงเวลาที่เราเสร็จการแก้ master branch แล้ว เราสามารถใช้คำสั่ง `merge` เพื่อรวมงานของ master และ new features branch เข้าด้วยกัน ไม่ต่างจากการ `merge` remote และ local repository ข้างต้น

	git branch
	* master
	
	git branch new_branch_name
	git checkout new_branch_name

เราสามารถสั่ง `git checkout -b branch_name` เพื่อสร้าง branch ใหม่ พร้อมเปลี่ยนไปใช้งานได้เลย

ถ้าต้องการรวม branch new_branch_name เข้าไปใน master ให้สลับกลับมาอยู่ master ก่อน จากนั้นใช้คำสั่ง git merge branch_name

	$ git checkout master
	Switched to branch 'master'
	
	$ git merge branch_name
	$ git log

เมื่อไม่ต้องการ branch นั้นๆ แล้ว สามารถลบทิ้งได้ โดยใช้คำสั่ง `git branch -d branch_name`

	$ git branch -d branch_name
	Deleted branch branch_name (was f44d780).

และสั่งลบ remote branch ดังนี้

	$ git push origin -d branch_name
	To github.com:junlapong/project.git
	 - [deleted]         branch_name

## Stash

เวลา `pull` หรือ `fetch` เรามักจะต้อง `merge` เรามีการเปลี่ยนแปลงใหม่ๆใน working directory ของเรา ซี่งบางทีเราก็ไม่อยากจะ `merge` ณ จุดนั้น เพราะจริงๆเรารู้ว่าเรา `commit` หลังจากสิ่งที่ `pull` หรือ `fetch` ก็ได้ไม่มีปัญหา 

ใน Git เราสามารถทำดังนั้นได้ด้วยการ `stash` สิ่งที่เราจะ commit เพื่อซ่อนไม่ให้ `pull` หรือ `fetch` เห็นและจะบังคับเรา `merge` พอเรา `pull` หรือ `fetch` เสร็จแล้ว เราสามารถดีงสิ่งที่ซ่อนไว้ใน `stash` กลับมา เพื่อการ `commit` อย่างราบรื่นต่อไป

__EXAMPLES__
	
	$ git pull
	...
	file foobar not up to date, cannot merge.
	
	$ git stash
	$ git pull
	$ git stash pop

## Rebase

เปลี่ยนไปอยู่ที่ branch_name

	git checkout branch_name

โกยจาก branch_name ไปใส่ยัง branch master

	git rebase master


## Fork

Fork ไม่ใช่เรื่องของ Git โดยตรง แต่เป็นเรื่อง software development 

การ fork คือการเอางาน open source มาต่อยอดของเราเอง โดยที่ไม่ได้ขี้นตรงกับแผนงานหลักของ open source  นั้นๆ  ใน GitHub เรา fork ได้โดยง่าย โดยปุ่มบนเวป GitHub เอง (ซี่งจริงๆ ก็ตงจะใช้ `clone` ภายใน) แต่ GitHub เพิ่มความสามารถในการจัดการโปรเจคที่เรา fork มามากมายด้วย เช่นวันหนี่งเราเกิดอยากจะ `push` สิ่งที่เราทำบางสิ่งกลับไปที่โปรเจค GitHub ก็มีวิธีให้ทำได้โดยง่ายเป็นระเบียบและมีบันทีกเรียบร้อย

## Git SVN Bridge

Origin repository ของ cloned repository ไม่จำเป็นต้องเป็น Git repository    origin จริงๆอาจจะเป็น SVN repository ก็ได้  Git มี Git SVN Bridge เพื่อให้เราใช้ความสามารถของ Git ในการทำงานกับ repo ที่เป็น SVN ได้

### Checkout Git Sub Directory

Get the github URL and replace `/tree/master` with `'/trunk'`

__EXAMPLES__

	From: https://github.com/Kong/docker-kong/tree/master/compose
	  To: https://github.com/Kong/docker-kong/trunk/compose
	
	$ svn ls https://github.com/Kong/docker-kong/trunk/compose
	
	### with svn log ###
	$ svn checkout https://github.com/Kong/docker-kong/trunk/compose
	
	### without svn log ###
	$ svn export https://github.com/Kong/docker-kong/trunk/compose


## References

- [norsez/การใช้ Git ฉบับรีบร้อน.md](https://gist.github.com/norsez/3016877)
- [Git: เริ่มต้นใช้งาน Git
](https://medium.com/open-source-technology/git-%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99-git-e8f873a4fdc)  	** มีวิธีเชื่อมต่อ Github ด้วย SSH **
- [ว่าด้วยเรื่องของ git rebase และ git pull rebase](https://medium.com/@goangle/git-rebase-%E0%B9%81%E0%B8%A5%E0%B8%B0-git-pull-rebase-%E0%B8%97%E0%B8%B3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B9%80%E0%B8%84%E0%B8%A2%E0%B8%8A%E0%B8%B4%E0%B8%99-b08787c44246)
- [มาเรียนรู้ Git แบบง่ายๆกันเถอะ](https://blog.nextzy.me/%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89-git-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-427398e62f82) *** ยาววว
- [Git คืออะไร … Git is your friend](https://medium.com/@pakin/git-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-git-is-your-friend-c609c5f8efea)
- [🌳🚀 CS Visualized: Useful Git Commands](https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1)


## short cut

### pull/push remote branch

	git pull <remote> <branch name>
	git push <remote> <branch name>

ex.
	
	git pulll origin master
	git pulll origin dev
	
	git push -u origin master
	git push origin dev

### branch

create new branch, copy from current branch and switch to new branch
	
	git checkout -b <branch_name>

delete branch

	git branch -d dev

delete a remote branch
	
	git push <remote_name> --delete <branch_name>
	git push origin -d dev

list branch

	git branch -a

switch branch

	git checkout dev

### Sync your Git Fork to the Original Repo

https://digitaldrummerj.me/git-syncing-fork-with-original-repo/

	$ git remote add upstream https://github.com/<uername>/<original-repository>.git
	$ git fetch upstream
	$ git checkout master
	$ git merge upstream/master
	$ git push

### Working with submodules

https://github.blog/2016-02-01-working-with-submodules/

	git submodule add https://github.com/<username>/repo submodule

### Joining a project using submodules

	git clone --recursive <project url>

### Clone Single Branch

	git clone --single-branch --branch <branch_name> https://github.com/<uername>/<repository>.git


### Checkout Remote Branch

ref: https://stackoverflow.com/questions/1783405/how-do-i-check-out-a-remote-git-branch

	git checkout -b branch_name <remote_name>/branch_name

or the shorthand

	git checkout -t <remote_name>/<branch_name>


### Remove local untracked files from the current Git branch

ref: https://koukia.ca/how-to-remove-local-untracked-files-from-the-current-git-branch-571c6ce9b6b1

Well, the short answer as per the Git Documents is git clean
If you want to see which files will be deleted you can use the -n option before you run the actual command:

	git clean -n

Then when you are comfortable (because it will delete the files for real!) use the -f option:

	git clean -f

Here are some more options for you to delete directories, files, ignored and non-ignored files

- To remove directories, run git clean -f -d or git clean -fd
- To remove ignored files, run git clean -f -X or git clean -fX
- To remove ignored and non-ignored files, run git clean -f -x or git clean -fx

Note the case difference on the X for the two latter commands.


### Reset local repository branch to be just like remote repository HEAD

	git fetch origin
	git reset --hard origin/master
