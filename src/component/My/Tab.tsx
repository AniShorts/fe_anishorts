import React from 'react'
import className from "classnames/bind";
import styles from "../.././pages/My/MyPage.module.scss"
import ReactPlayer from "react-player";

const cx = className.bind(styles);
type props = {
    clickTab: number;
    info: string;
}

const Tab = (props: props) => {
    return (
        <>
            {props.clickTab === 0 ?
                <div className={cx('video-container')}>
                    <ReactPlayer
                        className={cx('react-player')}
                        url={'https://www.youtube.com/watch?v=Tqsz8nwsGU4'}    // 플레이어 url
                        width='12rem'         // 플레이어 크기 (가로)
                        height='30rem'        // 플레이어 크기 (세로)
                        playing={true}        // 자동 재생 on
                        muted={false}          // 자동 재생 on
                        controls={false}       // 플레이어 컨트롤 노출 여부
                        light={true}         // 플레이어 모드
                        pip={false}            // pip 모드 설정 여부
                        poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                    />
                    <ReactPlayer
                    className={cx('react-player')}
                    url={'https://www.youtube.com/watch?v=Tqsz8nwsGU4'}    // 플레이어 url
                    width='12rem'         // 플레이어 크기 (가로)
                    height='30rem'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={false}          // 자동 재생 on
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    light={true}         // 플레이어 모드
                    pip={false}            // pip 모드 설정 여부
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                    />
                    <ReactPlayer
                    className={cx('react-player')}
                    url={'https://www.youtube.com/watch?v=Tqsz8nwsGU4'}    // 플레이어 url
                    width='12rem'         // 플레이어 크기 (가로)
                    height='30rem'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={false}          // 자동 재생 on
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    light={true}         // 플레이어 모드
                    pip={false}            // pip 모드 설정 여부
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                    />
                    <ReactPlayer
                        className={cx('react-player')}
                        url={'https://www.youtube.com/watch?v=Tqsz8nwsGU4'}    // 플레이어 url
                        width='12rem'         // 플레이어 크기 (가로)
                        height='30rem'        // 플레이어 크기 (세로)
                        playing={true}        // 자동 재생 on
                        muted={false}          // 자동 재생 on
                        controls={false}       // 플레이어 컨트롤 노출 여부
                        light={true}         // 플레이어 모드
                        pip={false}            // pip 모드 설정 여부
                        poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                    />
                    <ReactPlayer
                    className={cx('react-player')}
                    url={'https://www.youtube.com/watch?v=Tqsz8nwsGU4'}    // 플레이어 url
                    width='12rem'         // 플레이어 크기 (가로)
                    height='30rem'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={false}          // 자동 재생 on
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    light={true}         // 플레이어 모드
                    pip={false}            // pip 모드 설정 여부
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                    />
                    <ReactPlayer
                    className={cx('react-player')}
                    url={'https://www.youtube.com/watch?v=Tqsz8nwsGU4'}    // 플레이어 url
                    width='12rem'         // 플레이어 크기 (가로)
                    height='30rem'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={false}          // 자동 재생 on
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    light={true}         // 플레이어 모드
                    pip={false}            // pip 모드 설정 여부
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                    />

                </div> : null
            }

            {props.clickTab === 1 ? "11" : null}

            {props.clickTab === 2 ? "22" : null}
        </>
    )
}

export default Tab