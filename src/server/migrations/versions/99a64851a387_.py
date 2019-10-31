"""empty message

Revision ID: 99a64851a387
Revises: 
Create Date: 2018-11-03 09:26:10.531227

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '99a64851a387'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('json_data', sa.Text(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=True),
    sa.Column('phone_number', sa.String(length=50), nullable=True),
    sa.Column('photo_url', sa.String(length=2013), nullable=True),
    sa.Column('email', sa.String(length=200), nullable=True),
    sa.Column('firebase_uid', sa.String(length=100), nullable=True),
    sa.Column('admin', sa.Boolean(), server_default=sa.text('false'), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('project',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('json_data', sa.Text(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=True),
    sa.Column('owner', sa.Integer(), nullable=True),
    sa.Column('issue_counter', sa.Integer(), server_default='0', nullable=False),
    sa.ForeignKeyConstraint(['owner'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('issue',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('json_data', sa.Text(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('project', sa.Integer(), nullable=True),
    sa.Column('count', sa.Integer(), server_default='1', nullable=False),
    sa.Column('title', sa.String(length=500), nullable=True),
    sa.Column('state', sa.String(length=50), server_default='open', nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('created_by', sa.Integer(), nullable=True),
    sa.Column('closed_at', sa.DateTime(), nullable=True),
    sa.Column('closed_by', sa.Integer(), nullable=True),
    sa.Column('discussion_locked', sa.Boolean(), server_default=sa.text('false'), nullable=False),
    sa.ForeignKeyConstraint(['closed_by'], ['user.id'], ),
    sa.ForeignKeyConstraint(['created_by'], ['user.id'], ),
    sa.ForeignKeyConstraint(['project'], ['project.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('project', 'count', name='project_count')
    )
    op.create_table('comment',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('json_data', sa.Text(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('content', sa.Text(), nullable=True),
    sa.Column('issue', sa.Integer(), nullable=False),
    sa.Column('count', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('created_by', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['created_by'], ['user.id'], ),
    sa.ForeignKeyConstraint(['issue'], ['issue.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('issue', 'count', name='issue_count')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comment')
    op.drop_table('issue')
    op.drop_table('project')
    op.drop_table('user')
    # ### end Alembic commands ###