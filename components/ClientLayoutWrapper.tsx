'use client';
import { useEffect } from 'react';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. ブラウザの自動復元機能を無効化
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // 2. ページロード直後に強制的に最上段へ移動
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // 3. ブラウザがスクロール位置を戻そうとする動きを「逆転」させる
    window.onload = scrollToTop;
    scrollToTop(); // 即時実行

    // 4. 数ミリ秒後に再度実行（レンダリングの遅延に対応）
    const timer = setTimeout(scrollToTop, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
}