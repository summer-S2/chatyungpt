// 질문과 답변 상수 객체
export const chatData: { [key: string]: { question: string; answer: string } } =
  {
    skill: {
      question: "기술 스택 알려줘",
      answer: `
      <p>주로 사용하는 기본적인 기술부터 도구와 라이브러리까지 포함된 기술 스택입니다.</p>
      <h3>1. 프로그래밍 언어 및 기본 기술</h3> 
      <ul class="answer-ul"> 
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
      </ul> 
      <h3>2. 프레임워크</h3> 
      <ul class="answer-ul"> 
        <li>React</li>
        <li>Next.js (조금...)</li>
      </ul> 
      <h3>3. 스타일링 관련 도구</h3> 
      <ul class="answer-ul"> 
        <li>Tailwind CSS</li>
        <li>Styled-components</li>
        <li>스타일 프레임워크: MUI, antd</li>
        <li>CSS 전처리기: Sass</li>
      </ul> 
      <h3>4. 상태관리</h3> 
      <ul class="answer-ul"> 
        <li>Recoil</li>
        <li>Context API</li>
      </ul> 
      <h3>5. 빌드 및 번들러 도구</h3> 
      <ul class="answer-ul"> 
        <li>Vite(최근)</li>
        <li>Webpack(이전)</li>
        <li>ESLint</li>
        <li>Prettier</li>
      </ul> 
      <h3>6. API 연동</h3> 
      <ul class="answer-ul"> 
        <li>Axios</li>
        <li>tanstack query</li>
      </ul> 
      <h3>7. 버전 관리 및 협업 도구</h3> 
      <ul class="answer-ul"> 
        <li>Git</li>
        <li>GitHub / GitLab</li>
      </ul> 
      <h3>8. 기타 도구</h3> 
      <ul class="answer-ul"> 
        <li>Figma</li>
        <li>Chrome DevTools</li>
      </ul> 
      `,
    },
    career: {
      question: "경력 알려줘",
      answer: `
        <p class="accent">솔루션 업체 (2023년 6월 ~ 현재, 재직 기간 1년 5개월)</p>
        <ul class="answer-ul"> 
          <li>회사 내에서 유일한 프론트엔드 개발자로, 모든 프론트엔드 관련 업무를 혼자서 담당.</li>
          <li>React와 TypeScript를 주로 사용하여, 실시간 데이터 처리 및 백오피스 시스템의 개발과 유지보수.</li>
          <li>회사의 하드웨어 팀, 사업 팀과 협업하여, 주기적인 회의를 통해 실시간 관제 페이지와 관리자용 백오피스를 개선.</li>
          <li>사용자 요구사항을 기반으로 UI/UX를 지속적으로 개선하고, 성능 최적화와 실시간 데이터 처리에 중점을 둔 작업을 수행.</li>
          <li>지자체와 협력하여 솔루션을 지속적으로 유지보수하며, 지자체 요구사항을 반영한 기능 개발과 시스템 최적화 업무를 담당.</li>
          <li>대기업 협력사로 플랫폼 구축 및 유지보수 경험.</li>
        </ul> 
        `,
    },
    project: {
      question: "참여 프로젝트",
      answer: `
        <h3>1. 실시간 관제 페이지 및 백오피스 시스템 개발</h3> 
        <ul class="answer-ul"> 
          <li>프로젝트 개요: 농기계 안전을 위해, 회사에서 개발한 하드웨어가 수집한 데이터를 실시간으로 관제 페이지에 시각화하여 관리자들이 위험 상황을 즉시 파악할 수 있는 시스템.</li>
          <li>개발 환경: React, TypeScript, Vite, npm, Styled-components, MUI</li>
          <li>기여한 역할:
            <ul class="answer-ul">
              <li>실시간 데이터 처리 성능 최적화 및 시스템 효율성 개선.</li>
              <li>지자체 요구사항에 따른 기능 구현 및 개선 작업.</li>
              <li>하드웨어 관리 및 설치 관련 관리자용 백오피스 시스템 개발 참여.</li>
              <li>실시간 관제 페이지의 UI/UX 개선.</li>
            </ul>
          </li>
        </ul> 
        <h3>2. 현대오토에버 내비게이션 품질 관리 플랫폼 구축</h3> 
        <ul class="answer-ul"> 
          <li>프로젝트 개요: 현대오토에버와 협력하여 내비게이션 품질 관리 플랫폼을 구축, 실시간으로 도로 주행 영상을 표시하고, 주행 경로와 이슈를 모니터링하는 시스템 개발.</li>
          <li>개발 환경: React, TypeScript, Vite, npm, Tailwind CSS, antd</li>
          <li>기여한 역할:
            <ul class="answer-ul">
              <li>실시간 주행 데이터를 시각화하여 주행 경로와 영상을 화면에 표출.</li>
              <li>서버와의 연동을 통해, 웹에서 Jira에 등록된 이슈를 확인할 수 있고, 사용자가 Jira로 이동하여 이슈 세부 정보를 볼 수 있도록 구현. 또한, Jira에서 다시 웹으로 이동해 주행 중 발생한 이슈와 관련된 데이터를 실시간으로 확인할 수 있는 기능을 제공.</li>
              <li>UI/UX 개선을 통해 사용자가 데이터를 더 쉽게 파악하고 관리할 수 있도록 사용자 경험 향상.</li>
            </ul>
          </li>
        </ul> 
        `,
    },
    code: {
      question: "코드 샘플 보여줘",
      answer: `
        <p>회사에서 작업한 코드 샘플은 보안상의 이유로 공개할 수 없지만, 개인 프로젝트는 아래의 깃허브에서 확인하실 수 있습니다.</p>
        <ul class="answer-ul">
          <li>개발자 깃허브 주소: <a class='link' href='https://github.com/summer-S2'>https://github.com/summer-S2</a></li>
        </ul>
        <p>작업물 중 배포된 프로젝트는 이전 대화 목록의 '취업 전 작업물'에서 확인 가능합니다.</p>
        <p>개발자는 지속적으로 부족한 부분을 학습하고, 이를 깃허브에 꾸준히 코드로 업로드하고 있습니다.☺️</p>

        `,
    },
    contect: {
      question: "개발자랑 연락하는 방법 좀 알려줘.",
      answer: `
      <p>개발자에게 연락할 수 있는 방법은 아래와 같습니다.</p>
      <h3>1. 이메일: 아래 이메일 주소로 메시지를 보내시면 개발자와 소통하실 수 있습니다. 이메일 문의의 경우, 답변 시간이 다소 지연될 수 있습니다.</h3>
      <ul class="answer-ul">
        <li>개발자 이메일 주소: <a class='link' href='mailto:yo_onzy@naver.com'>yo_onzy@naver.com</a></li>
      </ul>
      <h3>2. 전화 혹은 문자: 보다 신속한 답변이 필요하신 경우, 아래 연락처로 연락 주시면 됩니다.</h3>
      <ul class="answer-ul">
        <li>개발자 전화번호: <a class='link'  href='tel:010-9913-0451'>010-9913-0451</a></li>
      </ul>
      <p>이러한 방법을 통해 개발자와 연락을 취할 수 있습니다.</p>`,
    },
    before: {
      question: `취업전에 작업했던 포트폴리오 볼 수 있어?`,
      answer: `
      <p>물론입니다! 개발자는 취업 전 개인 홈페이지 1개와 개인 프로젝트 2개를 배포하였습니다. 추가로 진행한 개인 프로젝트들은 배포되지 않았지만, <a target="_blank" class='link' href='https://github.com/summer-S2'>깃허브</a>에서 코드를 확인할 수 있습니다. 아래는 배포된 사이트들입니다.</p> 
      <h3>1. 개발자 개인 홈페이지 (<a target="_blank" class='link' href='https://yunjihome.netlify.app'>https://yunjihome.netlify.app</a>)</h3> 
      <ul class="answer-ul"> 
        <li>개발자가 처음으로 제작한 개인 홈페이지입니다. 바닐라 자바스크립트로 구현된 단순한 페이지로, 스킬 소개, 프로젝트 설명, 그리고 연락처 정보를 포함하고 있습니다.</li> 
      </ul> 
      <h3>2. 유튜브 클론 프로젝트 - 윤튜브 (<a target="_blank" class='link' href='https://yuntube.netlify.app/'>https://yuntube.netlify.app</a>)</h3> 
      <ul class="answer-ul"> 
        <li li>리액트로 제작된 프로젝트로, 처음 오픈 API를 활용한 작업물입니다.</li> 
      </ul> 
      <h3>3. 가구 판매 사이트 (<a target="_blank" class='link' href='https://forestoffurniture.netlify.app/'>https://forestoffurniture.netlify.app</a>)</h3> 
      <ul class="answer-ul"> 
        <li>Firebase의 소셜 로그인과 실시간 데이터베이스 기능을 적용했으며, 클라우드에 이미지를 저장하고 관리하는 기능을 포함한 프로젝트입니다.</li> 
      </ul>
      <p>이 프로젝트들은 개발자가 취업 전에 제작한 것이므로 일부 미숙한 부분이 있을 수 있으며, 현재 사용 중인 기술과 차이가 있을 수 있습니다. 참고용으로 확인 부탁드립니다.</p>
    `,
    },
    explanation: {
      question: `입력창에 타이핑이 왜 안돼?`,
      answer: `
      <p>이 프로젝트는 실제 대화를 위한 사이트가 아니고, ChatGPT의 스타일을 모방한 포트폴리오입니다. </p>
      <p>정해진 질문에 대한 대답을 보여주는 형식으로 구현되어 있고, 입력창은 UI를 위한 요소일 뿐 실제로 타이핑을 하거나 대화가 가능하도록 되어 있지는 않습니다. 🥹</p>
      `,
    },
  };
