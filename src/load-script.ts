/**
 * Created by ronze on 1/22/2017.
 */
export function loadScript(src: string) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}