import App from './src/App'

export default App;

// JSX 에서는 여러 개의 요소를 표현할 경우, 반드시 하나의 부모로 감싸야 함

//if 연산자
/**
     {(() => {
          if (name === 'Kay') return 'My name is '+(name);
          else if (name === 'Ahreum') return 'HAHAHA My name is '+(name);
          else return 'Nothing';
        })()}
   
 */

//삼항 연산자
//My name is {name === "Ahreum" ? 'Ahreum Kim' : 'Nothing'}

//AND OR 연산자 : 특정 컴포넌트의 렌더링 여부를 결정함
/** AND : 연산자 앞 조건 참일때
 *   OR : 연산자 앞 조건 거짓일때
 * {name === 'Ahreum' && (
          <Text style={styles.text}>My name is Ahreum!</Text>
        )}
        {name !== 'Ahreum' && (
          <Text style={styles.text}>My name is not Ahreum!</Text>
        )}
*/

//null 과 undefined : null은 허용되나 undefined 는 허용되지 않음 (오류발생)
