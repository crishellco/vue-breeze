// Table.stories.js

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Table',
};

export const Default = () => ({
  data() {
    return {
      mountains: [
        { name: 'Monte Falco', height: 1658, place: 'Parco Foreste Casentinesi' },
        { name: 'Monte Falterona', height: 1654, place: 'Parco Foreste Casentinesi' },
        { name: 'Poggio Scali', height: 1520, place: 'Parco Foreste Casentinesi' },
        { name: 'Pratomagno', height: 1592, place: 'Parco Foreste Casentinesi' },
        { name: 'Monte Amiata', height: 1738, place: 'Siena' },
      ],
    };
  },
  template: `
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Place</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{name, height, place} in mountains">
          <td>{{ name }}</td>
          <td>{{ height }}</td>
          <td>{{ place }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
});
