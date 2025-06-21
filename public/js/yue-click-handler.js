// 为Yue添加点击跳转功能的JavaScript代码
// 只影响Yue的头像，不修改其他人的代码或模板

document.addEventListener('DOMContentLoaded', function() {
  // 检查是否在Team页面
  if (window.location.pathname === '/people/' || window.location.pathname === '/people') {
    
    // 等待页面完全加载后再执行
    setTimeout(function() {
      // 查找所有的people-person容器
      const peoplePersons = document.querySelectorAll('.people-person');
      
      peoplePersons.forEach(function(person) {
        // 查找姓名元素
        const nameElement = person.querySelector('h2');
        
        // 检查是否是Yue
        if (nameElement && nameElement.textContent.trim() === 'Yue') {
          console.log('找到Yue的头像，正在添加点击功能...');
          
          // 为整个person容器添加点击功能
          person.style.cursor = 'pointer';
          person.style.transition = 'all 0.3s ease';
          
          // 添加悬停效果
          person.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
            this.style.opacity = '0.9';
          });
          
          person.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            this.style.opacity = '1';
          });
          
          // 添加点击事件 - 整个容器
          person.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('点击了Yue的头像，正在跳转...');
            window.location.href = '/people/yue/';
          });
          
          // 为头像图片单独添加点击事件（双重保险）
          const avatar = person.querySelector('.avatar, img');
          if (avatar) {
            avatar.style.cursor = 'pointer';
            avatar.addEventListener('click', function(e) {
              e.preventDefault();
              e.stopPropagation();
              console.log('点击了Yue的头像图片，正在跳转...');
              window.location.href = '/people/yue/';
            });
          }
          
          // 为姓名标题添加点击事件
          if (nameElement) {
            nameElement.style.cursor = 'pointer';
            nameElement.addEventListener('click', function(e) {
              e.preventDefault();
              e.stopPropagation();
              console.log('点击了Yue的姓名，正在跳转...');
              window.location.href = '/people/yue/';
            });
          }
          
          // 为职位标题添加点击事件
          const roleElement = person.querySelector('h3');
          if (roleElement) {
            roleElement.style.cursor = 'pointer';
            roleElement.addEventListener('click', function(e) {
              e.preventDefault();
              e.stopPropagation();
              console.log('点击了Yue的职位，正在跳转...');
              window.location.href = '/people/yue/';
            });
          }
          
          console.log('Yue的点击功能已成功添加！');
        }
      });
    }, 500); // 延迟500ms确保页面完全加载
  }
});

// 备用方案：如果上面的方法不工作，使用更通用的选择器
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    // 查找包含"Yue"文本的所有h2元素
    const allH2 = document.querySelectorAll('h2');
    allH2.forEach(function(h2) {
      if (h2.textContent.trim() === 'Yue') {
        // 找到父容器
        let container = h2.closest('.people-person') || h2.closest('.col-12') || h2.parentElement.parentElement;
        
        if (container && !container.hasAttribute('data-yue-click-added')) {
          container.setAttribute('data-yue-click-added', 'true');
          container.style.cursor = 'pointer';
          
          container.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('备用方案：点击了Yue，正在跳转...');
            window.location.href = '/people/yue/';
          });
          
          console.log('备用方案：Yue的点击功能已添加！');
        }
      }
    });
  }, 1000);
});
