import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { G0verConnection } from './query/G0verQuery';
import { ProjectConnection } from './query/ProjectQuery';

import UpdateG0verMutation from './mutation/UpdateG0verMutation';
import AddProjectMutation from './mutation/AddProjectMutation';
import UpdateProjectIdMutation from './mutation/UpdateProjectIdMutation';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    g0ver: G0verConnection,
    project: ProjectConnection,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateG0ver: UpdateG0verMutation,
    addProject: AddProjectMutation,
    updateProjectId: UpdateProjectIdMutation,
  },
});

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
