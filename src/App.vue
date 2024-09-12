<template>
	<div class="home_page">
		<div class="home_page_one">
			<header>
				<div class="header_left">
					<img class="logo" src="@/assets/img/holyBibleLight/logo.png" alt="" />
					Holy Bible Light
				</div>
				<div class="header_right">
					<div
						class="common_protocol cursor"
						@click="handleOpen('//sskjoy.github.io/bible-library/classify/hoyBibleLght/privacy1.html')"
					>
						Privacy
					</div>
					<div class="common_line"></div>
					<div
						class="common_protocol cursor"
						@click="handleOpen('//sskjoy.github.io/bible-library/classify/hoyBibleLghtterms1.html')"
					>
						Terms
					</div>
				</div>
			</header>
			<div class="content">
				<img class="top_icon" src="@/assets/img/holyBibleLight/HolyBibleLight.png" alt="" />
				<div class="content-desc">
					Your Journey, Guided by Faith
				</div>
				<img
					class="google_play"
					src="@/assets/img/holyBibleLight/google_play.png"
					alt=""
				/>
			</div>
            <div class="home_page_one-foot">
                <div class="item">
                    <p class='head'>Quiz</p>
                    <p class='desc'>
                        Test your Bible knowledge and grow your faith with fun, engaging quizzes.
                    </p>
                </div>
                <div class="item">
                    <p class='head'>Bible</p>
                    <p class='desc'>
                        Discover God's truth daily with Bible reading experience.
                    </p>
                </div>
                <div class="item">
                    <p class='head'>Daily Devotion</p>
                    <p class='desc'>
                        Start your day with inspiring devotions that deepen your connection with God.
                    </p>
                </div>
            </div>
		</div>
        <!-- walking-->
         <div class="home_page_three">
            <img class="left" src="@/assets/img/holyBibleLight/pageThree-left.png" alt="">
            <div class="desc">
                <div>
                    <p>Walking with God</p>
                    <p>Faith, Guidance, and His Presence Every Day</p>
                </div>
                <p class="text"> Whether you're seeking spiritual encouragement, deeper understanding of Scripture, or ways to enhance your prayer life, this app offers the guidance and resources you need.</p>
                <!-- <img class="img1" src="@/assets/img/holyBibleLight/pageThree-rigDesc.png" alt=""> -->
                <img class="gg" src="@/assets/img/holyBibleLight/pageThree-rigGG.png" alt="">
            </div>
         </div>
		<div class="home_page_bottom">
            <img class="logo" src="@/assets/img/holyBibleLight/bottom0.png">
            <img class="name" src="@/assets/img/holyBibleLight/bottom1.png">
            <img class="desc" src="@/assets/img/holyBibleLight/bottom2.png">
		</div>
        <!-- 底部 -->
		<div class="home_bottom">
			<div class="content">
				<div class="bottom_right">
					<div
						class="common_protocol cursor"
						@click="handleOpen('//sskjoy.github.io/bible-library/classify/hoyBibleLghtprivacy1.html')"
					>
						Privacy
					</div>
					<div class="common_line"></div>
					<div
						class="common_protocol cursor"
						@click="handleOpen('//sskjoy.github.io/bible-library/classify/hoyBibleLghtterms1.html')"
					>
						Terms
					</div>
				</div>
				<div class="bottom_left">
                    <div class="rig">
                        <p>
                            <span>Contact us</span>
                            <img src="@/assets/img/holyBibleLight/email.png">
                        </p>
                        <a href="mailto:joyssk2708@gmail.com">joyssk2708@gmail.com</a>
                    </div>
                    <img class="logo" src="@/assets/img/holyBibleLight/logo.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const list = [{
    head: 'Quiz'
}]
function handleOpen(path: string) {
	window.open(path);
}
</script>

<style lang="less" scoped>
.cursor {
	cursor: pointer;
}
.home_page{
    background-image: linear-gradient(179deg, #00000000 3%, #000000 42%);
}

.home_page_one {
	width: 100%;
	padding-bottom: 20px;
	background: url('@/assets/img/HolyBibleLight/home_page_top_bg.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center;
    position: relative;
	header {
		max-width: 1300px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 22px;
        height: 48px;
		.header_left {
            display: flex;
            gap: 24px;
            align-items: center;
            font-family: Roboto-Bold;
            font-weight: 700;
            font-size: 24px;
            color: #FFFFFF;
            letter-spacing: 0;
			.logo {
				width: 48px;
			}
		}
		.header_right {
			display: flex;
			align-items: center;
            font-weight: 600;
            font-size: 18px;
			color: #ffffff;
            gap: 40px
		}
	}
	.content {
		max-width: 833.5px;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.top_icon {
            padding-top: 351px;
			width: 644px;
		}
		&-desc {
            line-height: 57px;
            font-family: Roboto-Regular;
            font-weight: 400;
            font-size: 48px;
            color: #FFFFFF;
            letter-spacing: 0;
            margin: 40px auto 60px
		}
		.google_play {
			width: 186.24px;
			height: 54.38px;
			margin-top: 33px;
		}
	}
    &-foot{
        max-width: 1300px;
        margin: 246px auto 90px;
        display: flex;
        gap: 20px;
        position: relative;
        .item{
            width: 448px;
            height: 180px;
            padding: 32px 112px 32px 32px;
            display: flex;
            flex-direction: column;
            align-items: self-start;
            justify-content: center;
            &:nth-child(1){
                background: url(@/assets/img/holyBibleLight/item1.png) no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(2){
                background: url(@/assets/img/holyBibleLight/item2.png) no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(3){
                background: url(@/assets/img/holyBibleLight/item3.png) no-repeat;
                background-size: 100% 100%;
            }
            .head{
                height: 55px;
                width: 100%;
                font-family: SourceHanSansSCVF-Heavy;
                font-weight: 900;
                font-size: 38px;
                color: #000000;
            }
            .desc{
                font-family: SourceHanSansSCVF-Regular;
                font-weight: 400;
                font-size: 20px;
                color: #575757;
                line-height: 26px;
            }
        }
    }
}
.home_page_three{
    height: 450px;
    max-width: 1384px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 50px;
    .left{
        width: 600px;
    }
    .desc{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        color: #FFFFFF;
        gap: 24px;
        p{
            font-family: SourceHanSansSCVF-Heavy;
            font-weight: 900;
            font-size: 27.47px;
            line-height: 36.15px;
            &:nth-child(3){
                font-weight: 400;
                font-size: 14.46px;
                color: rgba(255,255,255,0.6);
                line-height: 23.14px;
            }
        }
        .text{
            width: 540px;
            opacity: 0.6;
            font-family: SourceHanSansSCVF-Regular;
            font-weight: 400;
            font-size: 20px;
            color: #FFFFFF;
            line-height: 32px;
        }
        .gg{
            width: 187px;
        }
    }
}
.home_page_bottom {
	height: 420px;
	width: 100%;
    max-width: 1384px;
    margin: 65px auto 66px;
	background: url('@/assets/img/holyBibleLight/bottomBg.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    gap: 24px;
    .logo{
        width: 136px;
        height: 136px;
    }
    .name{
        // width: 387px;
        height: 50px;
    }
    .desc{
        height: 28px;
    }
}
.home_bottom {
	height: 60px;
    color: #fff;
    padding-bottom: 30px;
	.content {
		max-width: 1384px;
		height: 100%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.bottom_left {
			display: flex;
			align-items: center;
			font-weight: 600;
			font-size: 24px;
			.logo {
				width: 48px;
				height: 48px;
				margin-left: 16px;
			}
            .rig{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
                p{
                    display: flex;
                    align-items: center;
                    gap: 5px
                }
                img{
                    width: 20px;
                }
            }
            a{
                font-size: 16px;
                color: #FFFFFF;
                letter-spacing: 0;
                text-decoration: none;
            }
		}
		.bottom_right {
			display: flex;
			align-items: center;
			font-weight: 600;
			font-size: 16px;
			.common_line {
				width: 1px;
				height: 10px;
				background: #000;
				margin: 0 30px;
			}
		}
	}
}
</style>
