<template>
  <div id="app">
    <header class="am-topbar am-topbar-inverse admin-header">
        <div class="am-topbar-brand">
            <strong>超竞网站后台系统</strong><!-- <small>超竞网站后台系统</small>  -->
        </div>
        <div class="am-collapse am-topbar-collapse" id="topbar-collapse">
		    <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
		      <li class="am-dropdown" data-am-dropdown="">
		        <a class="am-dropdown-toggle" data-am-dropdown-toggle="" href="javascript:;">
		          <span class="am-icon-users"></span> 管理员 <span class="am-icon-caret-down"></span>
		        </a>
		        <ul class="am-dropdown-content">
		          <!-- <li><a href="#"><span class="am-icon-user"></span> 资料</a></li>
		          <li><a href="#"><span class="am-icon-cog"></span> 设置</a></li> -->
		          <li><a href="javascript:;" @click="logout"><span class="am-icon-power-off"></span> 退出</a></li>
		        </ul>
		      </li>
		    </ul>
		</div>
    </header>
    <div class="am-cf admin-main">
        <!-- sidebar start -->
        <div class="admin-sidebar">
            <div class="am-offcanvas-bar admin-offcanvas-bar">
                <!--左边的菜单树-->
                <ul id="menuTree" class="am-list admin-sidebar-list">
                	<li>
                		<router-link to="/"><span class="am-icon-home"></span> 首页</router-link>
                	</li>
                	<li class="admin-parent">
			          <a class="am-cf" data-am-collapse="{target: '#news'}">
			          	<i class="am-icon-newspaper-o"></i> 新闻管理 <span class="am-icon-angle-right am-fr am-margin-right"></span>
			          </a>
			          <ul class="am-list am-collapse admin-sidebar-sub am-in" id="news">
			            <li>
			            	<router-link :to="{path:'/news',query:{p:1}}" class="am-cf"><i class="am-icon-list-ul"></i> 新闻列表</router-link>
			            </li>
			          </ul>
			        </li>
			        <li class="admin-parent">
			          <a class="am-cf" data-am-collapse="{target: '#banner'}">
			          	<i class="am-icon-picture-o"></i> 广告图管理 <span class="am-icon-angle-right am-fr am-margin-right"></span>
			          </a>
			          <ul class="am-list am-collapse admin-sidebar-sub am-in" id="banner">
			            <li>
			            	<router-link to="/banner" class="am-cf"><i class="am-icon-list-ul"></i> 广告图列表</router-link>
			            </li>
			          </ul>
			        </li>
                </ul>

                <div class="am-panel am-panel-default admin-sidebar-panel">
                    <div class="am-panel-bd">
                        <p><span class="am-icon-bookmark"></span> 公告</p>
                        <p>超竞网站后台系统</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- sidebar end -->

        <!-- content start -->
        <main id="admin-content" class="admin-content">
            <!-- 主要内容 -->
            <div class="admin-content-body">
                <!-- <div class="am-cf am-padding am-padding-bottom-0">
                    <div class="am-fl am-cf"><strong id="header-title" class="am-text-primary am-text-lg"></strong></div>
                </div>
                <hr> -->
                <!-- <div id="content-con"></div> -->
                <router-view></router-view>
            </div>
            <!-- 页尾 -->
            <!-- <footer class="admin-content-footer">
                <hr>
                <p class="am-padding-left">迷雾科技-社区监管系统</p>
            </footer> -->
        </main>
        <!-- content end -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods: {
  	logout() {
  		window.localStorage.setItem('token', '');
  		this.$router.push('/login');
  	}
  }
}
</script>

<style>
/*@import './css/index.css';*/
#app {
	height: 100%;
}
</style>
