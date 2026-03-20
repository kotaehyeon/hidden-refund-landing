# 콘텐츠 페이지 설계 문서

**날짜:** 2026-03-20
**연관 프로젝트:** 숨은 환급금 찾기 랜딩 페이지 (hide.real-true.net)

---

## 1. 개요

랜딩 페이지(index.html)의 각 버튼을 클릭하면 이동하는 8개의 개별 콘텐츠 페이지.
각 페이지는 해당 지원금/환급금에 대한 안내 글을 제공한다.
기존 style.css를 그대로 공유하며, 별도 HTML 파일로 생성한다.

---

## 2. 페이지 목록 및 index.html 링크 매핑

| 파일명 | 주제 | index.html 연결 위치 |
|--------|------|----------------------|
| `implant.html` | 임플란트 지원 | 지원유형 버튼 1 (🦷 임플란트 지원) |
| `loan.html` | 정부 대출 | 지원유형 버튼 2 (🏦 정부 대출) |
| `cancer.html` | 암보험 환급 | 지원유형 버튼 3 (🎗️ 암보험 환급) |
| `unemployment.html` | 실업급여 | 지원유형 버튼 4 (💰 실업급여) |
| `elderly.html` | 어르신 대상 안내 | 대상별 버튼 1 (👴 65세이상 대상자) |
| `employee.html` | 직장인 대상 안내 | 대상별 버튼 2 (👔 직장인 대상자) |
| `selfemployed.html` | 자영업자 대상 안내 | 대상별 버튼 3 (🏪 사업자 대상자) |
| `nojob.html` | 무직자 대상 안내 | 대상별 버튼 4 (📋 무직자 대상자) |

---

## 3. 공통 레이아웃 구조

### 3-1. 헤더
- `← 메인으로` 링크 (href="index.html")
- CSS: `.content-header` (신규) — 배경 `#006BF3`, 흰색 텍스트, padding 12px 16px

### 3-2. 페이지 타이틀 섹션
- CSS: `.content-hero` (신규) — 배경 `#006BF3`, 흰색, padding 20px 16px 24px
- 구성: `.content-hero__label` (소형 라벨) + `.content-hero__title` (이모지+주제명) + `.content-hero__desc` (한줄 설명)

### 3-3. 핵심 정보 카드 2×2
- CSS: 기존 `.section.section--gray` + `.card-grid` + `.card` 재사용
- `.card-grid`와 `.card`는 style.css에 정의된 클래스로, index.html에서는 현재 btn-list로 교체됐지만 style.css에 여전히 존재하므로 콘텐츠 페이지에서 그대로 사용 가능
- 카드 4개: 지원대상 / 지원금액 / 신청방법 / 혜택
- 4번째 카드: `style="background:#FFEB3B"` 인라인으로 노란 강조

### 3-4. 상세 글 섹션
- CSS: `.content-body` (신규) — 배경 흰색, padding 16px
- 구성: `<h2 class="content-body__h2">` + `<p class="content-body__p">` + `<ul class="content-body__list">` 반복
- 각 페이지별 3개 소제목으로 구성

### 3-5. CTA 버튼
- CSS: `.content-cta` (신규) — 파란 버튼, padding 16px
- 텍스트: "지금 신청하기 →"
- href: 현재는 `href="#"` 플레이스홀더. 각 파일에 `<!-- TODO: replace with actual gov URL -->` 주석 삽입

### 3-6. 푸터
- 기존 `.footer` 클래스 재사용, 동일 면책 문구

---

## 4. 신규 CSS 클래스 목록 (style.css에 추가)

```css
.content-header { background: #006BF3; padding: 12px 16px; }
.content-header__back { color: white; font-size: 13px; text-decoration: none; }
.content-hero { background: #006BF3; color: white; padding: 20px 16px 24px; }
.content-hero__label { font-size: 11px; opacity: 0.75; margin-bottom: 6px; }
.content-hero__title { font-size: 24px; font-weight: 900; margin-bottom: 8px; }
.content-hero__desc { font-size: 13px; opacity: 0.85; }
.content-body { background: white; padding: 16px; }
.content-body__h2 { font-size: 15px; font-weight: 700; margin-bottom: 10px; color: #111; }
.content-body__p { font-size: 13px; color: #444; line-height: 1.7; margin-bottom: 14px; }
.content-body__list { font-size: 13px; color: #444; line-height: 1.9; margin-bottom: 14px; padding-left: 4px; list-style: none; }
.content-cta { padding: 16px; background: #f8f9fa; }
.content-cta__btn { display: block; background: #006BF3; color: white; text-align: center; padding: 14px; border-radius: 8px; font-weight: 700; font-size: 14px; }
```

---

## 5. 페이지별 전체 콘텐츠 정의

### implant.html — 임플란트 지원
**카드:**
- 지원 대상: 만 65세 이상
- 지원 금액: 최대 43.5만원
- 신청 방법: 치과 방문 신청
- 혜택(노란): 본인부담 30%

**글 구성:**
1. 임플란트 건강보험 적용이란? — 2014년부터 만 65세 이상 건강보험 적용 안내
2. 신청 자격 조건 — 만 65세 이상 / 부분 무치악 / 평생 2개 지원
3. 신청 방법 — 건강보험 적용 치과 방문, 담당 의사에게 요청, 자동 적용

---

### loan.html — 정부 대출
**카드:**
- 지원 대상: 저신용·저소득자
- 대출 한도: 최대 1,000만원
- 신청 방법: 서민금융진흥원
- 혜택(노란): 연 2~4% 저금리

**글 구성:**
1. 정부 저금리 대출이란? — 시중은행 이용이 어려운 분들을 위한 정책금융 안내
2. 신청 자격 조건 — 연소득 3,500만원 이하 / 신용점수 하위 20% / 무직자 포함
3. 신청 방법 — 서민금융진흥원 방문 또는 온라인 신청, 필요 서류 안내

---

### cancer.html — 암보험 환급
**카드:**
- 지원 대상: 암보험 가입자
- 환급 금액: 평균 50~200만원
- 신청 방법: 보험사 직접 청구
- 혜택(노란): 3년치 소급 가능

**글 구성:**
1. 암보험 환급금이란? — 과납된 보험료 또는 미청구 보험금 환급 안내
2. 환급 받을 수 있는 경우 — 암 진단 후 미청구 / 보험료 이중 납입 / 약관 변경 미적용
3. 신청 방법 — 보험사 고객센터 연락 또는 방문, 진단서·영수증 지참

---

### unemployment.html — 실업급여
**카드:**
- 지원 대상: 비자발적 퇴직자
- 지급 금액: 이전 급여의 60%
- 신청 방법: 고용센터 방문
- 혜택(노란): 최대 9개월 수급

**글 구성:**
1. 실업급여란? — 고용보험 가입자가 실직 시 받는 소득 보전 급여 안내
2. 수급 자격 조건 — 비자발적 퇴직 / 고용보험 180일 이상 가입 / 적극적 구직 활동
3. 신청 방법 — 퇴직 후 12개월 이내 / 거주지 고용센터 방문 / 구직신청 필수

---

### elderly.html — 어르신 대상
**카드:**
- 지원 대상: 만 65세 이상
- 주요 혜택: 의료비·생활비 지원
- 신청처: 주민센터·치과
- 혜택(노란): 다양한 복지 혜택

**글 구성:**
1. 어르신을 위한 정부 지원이란? — 노인복지법 기반 다양한 지원 제도 안내
2. 주요 지원 항목 — 임플란트·틀니 / 기초연금 / 노인장기요양보험 / 독거노인 지원
3. 신청 방법 — 주민센터 복지 담당 창구 또는 복지로(bokjiro.go.kr) 온라인 신청

---

### employee.html — 직장인 대상
**카드:**
- 지원 대상: 4대보험 가입 직장인
- 주요 혜택: 실업급여·퇴직금
- 신청처: 고용센터·국민연금
- 혜택(노란): 소득 보전·노후 준비

**글 구성:**
1. 직장인이 받을 수 있는 지원이란? — 고용보험·국민연금 기반 다양한 혜택 안내
2. 주요 지원 항목 — 실업급여 / 출산휴가급여 / 육아휴직급여 / 직업훈련비용
3. 신청 방법 — 고용보험 홈페이지(ei.go.kr) 또는 고용센터 방문 신청

---

### selfemployed.html — 자영업자 대상
**카드:**
- 지원 대상: 사업자등록증 보유자
- 주요 혜택: 소상공인 지원금
- 신청처: 소상공인시장진흥공단
- 혜택(노란): 최대 200만원

**글 구성:**
1. 소상공인 지원이란? — 경영 어려움을 겪는 소상공인을 위한 정부 지원 안내
2. 주요 지원 항목 — 경영안정자금 / 고용보험 특례 / 폐업 지원금 / 재기 지원
3. 신청 방법 — 소상공인시장진흥공단(semas.or.kr) 온라인 신청 또는 지역 센터 방문

---

### nojob.html — 무직자 대상
**카드:**
- 지원 대상: 구직 활동 중인 미취업자
- 주요 혜택: 구직촉진수당
- 신청처: 고용센터
- 혜택(노란): 월 50만원 × 6개월

**글 구성:**
1. 무직자를 위한 지원이란? — 취업 준비 중인 분들을 위한 소득 지원 제도 안내
2. 국민취업지원제도란? — 구직촉진수당 + 취업 지원 서비스 통합 제공
3. 신청 방법 — 고용센터 방문 또는 워크넷(work.go.kr) 온라인 신청

---

## 6. 페이지별 SEO 메타 정보

각 HTML 파일에 고유한 `<title>`과 `<meta name="description">` 포함 필수.

| 파일 | title | description |
|------|-------|-------------|
| implant.html | 임플란트 지원금 신청 방법 | 숨은 환급금 찾기 | 만 65세 이상 임플란트 건강보험 지원 최대 43.5만원, 신청 방법 안내 |
| loan.html | 정부 저금리 대출 신청 안내 | 숨은 환급금 찾기 | 저신용·저소득자를 위한 정부 대출 최대 1,000만원, 연 2~4% 저금리 |
| cancer.html | 암보험 환급금 찾는 방법 | 숨은 환급금 찾기 | 암보험 미청구 환급금 평균 50~200만원, 3년치 소급 신청 가능 |
| unemployment.html | 실업급여 수급 방법 완벽 정리 | 숨은 환급금 찾기 | 비자발적 퇴직자 실업급여 최대 9개월, 이전 급여 60% 지급 |
| elderly.html | 65세이상 정부 지원 총정리 | 숨은 환급금 찾기 | 어르신을 위한 임플란트·기초연금·요양보험 등 정부 지원 안내 |
| employee.html | 직장인 정부 지원 혜택 총정리 | 숨은 환급금 찾기 | 직장인이 받을 수 있는 실업급여·육아휴직·직업훈련비 지원 안내 |
| selfemployed.html | 소상공인 지원금 신청 안내 | 숨은 환급금 찾기 | 자영업자·소상공인 경영안정자금·폐업지원 등 정부 지원 안내 |
| nojob.html | 무직자 정부 지원 총정리 | 숨은 환급금 찾기 | 구직촉진수당 월 50만원×6개월, 국민취업지원제도 신청 방법 |

## 7. 범위 외

- 실제 정부 신청 페이지 연동
- 로그인/회원가입
- 검색 기능
- 애드센스 광고 삽입 (별도 작업)
