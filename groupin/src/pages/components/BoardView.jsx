import React from 'react';
import './BoardCss.css';

const BoardView = () => {
    return (
        <div>
                <div class="board_wrap">
        <div class="board_title">
            <strong>공지사항</strong>
            <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
        </div>
        <div class="board_view_wrap">
            <div class="board_view">
                <div class="title">
                    글 제목이 들어갑니다.
                </div>
                <div class="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>1</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>김이름</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2021.1.16</dd>
                    </dl>
                    <dl>
                        <dt>조회</dt>
                        <dd>33</dd>
                    </dl>
                </div>
                <div class="cont">
                    글 내용이 들어갑니다<br></br>
                    글 내용이 들어갑니다<br></br>
                    글 내용이 들어갑니다<br></br>
                    글 내용이 들어갑니다<br></br>
                    글 내용이 들어갑니다<br></br>
                    글 내용이 들어갑니다<br></br>
                    글 내용이 들어갑니다<br></br>
                    글 내용이 들어갑니다
                </div>
            </div>
            <div class="bt_wrap">
                <a href="BoardView.jsx" class="on">목록</a>
                <a href="BoardList.jsx">수정</a>
            </div>
        </div>
    </div>
        </div>
    );
};

export default BoardView;