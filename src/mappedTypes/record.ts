export namespace Record {

    let dictionary: Record<string | number, TrackStates> = {};

    interface TrackStates {
        current: string;
        next: string;
    }

    const item: Record<keyof TrackStates, string> = {
        current: 'js02js9',
        next: '8nlksjsk',
    };

    // Numbers are coerced to String
    dictionary[0] = item;

    interface PageInfo {
        title: string;
    }

    type Page = 'home' | 'about' | 'contact';

    const x: Record<Page, PageInfo> = {
        about: { title: 'about' },
        contact: { title: 'contact' },
        home: { title: 'home' },
    }
}