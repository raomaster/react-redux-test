import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Caja de comentarios(CommentBox)', () => {
    it('Tiene un text area', () => {
        const component = renderComponent(CommentBox);
        expect(component.find('textarea')).to.exist();
    });
    it('Tiene un boton', () => {
        const component = renderComponent(CommentBox);
        expect(component.find('button')).to.exist();
    });
});