// 班级花名册数据 - 这里需要替换为实际的班级学生名单
const students = [
    "白林涵", "陈昊妍", "董萌萌", "李云", "吕君蕊", "王梦月",
    "武启航", "孙子凌", "孙若冰", "张静", "张艳可","邹谦慧",
    "张志恒", "姜子超", "王朝闻", "赵家豪", "周政涟","王文昌",
    "李茂川", "郭超", "许源赫", "薛景文", "张俊飞","卫学振",
	"王运旺", "范昱涵", "侯宪坤", "高一涵", "黄博", "鞠忠宏",
	"林佳祺", "李永乐", "秦金龙", "秦士淞", "索京奥","孙家豪",
	"王俊豪", "王祉盛", "许广洋", "徐浩文", "赵宝华","张丁文",
	"张云翔", "孙义凯"
];

// 获取DOM元素
const displayArea = document.getElementById('displayArea');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const studentRoster = document.getElementById('studentRoster');

// 初始化变量
let timer = null;
let currentIndex = 0;
let isRunning = false;

// 初始化花名册
function initRoster() {
    studentRoster.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;
        studentRoster.appendChild(li);
    });
}

// 随机选择学生
function selectRandomStudent() {
    // 清除之前选中的学生
    const selectedItems = document.querySelectorAll('.selected');
    selectedItems.forEach(item => {
        item.classList.remove('selected');
    });
    
    // 随机选择一个学生
    currentIndex = Math.floor(Math.random() * students.length);
    const selectedStudent = students[currentIndex];
    displayArea.textContent = selectedStudent;
    
    // 在花名册中高亮显示
    const allStudents = studentRoster.querySelectorAll('li');
    allStudents[currentIndex].classList.add('selected');
    
    // 滚动到可见区域
    allStudents[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}

// 开始随机点名
function startRandomSelection() {
    if (isRunning) return;
    
    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    // 每100毫秒更换一个随机学生
    timer = setInterval(selectRandomStudent, 100);
}

// 停止随机点名
function stopRandomSelection() {
    if (!isRunning) return;
    
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// 事件监听
startBtn.addEventListener('click', startRandomSelection);
stopBtn.addEventListener('click', stopRandomSelection);

// 初始化
initRoster();