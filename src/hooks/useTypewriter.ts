import { useState, useEffect } from 'react';

export function useTypewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeedState(isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        timer = setTimeout(handleType, typingSpeedState);
      }
    };

    timer = setTimeout(handleType, typingSpeedState);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, delayBetweenWords, typingSpeedState]);

  return text;
}
